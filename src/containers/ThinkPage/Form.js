import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import { object, number, boolean, string } from 'yup';

import Slider from '../../components/Slider';
import Border from '../../components/Border';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Checkbox from '../../components/Checkbox';
import BackgroundImage from '../../components/BackgroundImage';

import ButtonSvg from './ButtonSvg';

import Q from './Q.svg';
import flowerdecoration from './flowerdecoration.svg';

const validationSchema = object({
  helpful: number(),
  wantEmail: boolean(),
  email: string().email('E-mail格式有問題喔').when('wantEmail', (wantEmail, schema) => wantEmail
    ? schema.required('E-mail為必填欄位')
    : schema),
});

// Injected Form
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  scene,
}) => {
  // 表單內容
  return (
    <Box is="form" onSubmit={handleSubmit} position="relative">
      <Flex align="left">
        <Box w="3.75em">
          <BackgroundImage src={Q} />
        </Box>
        <Box pl="1.25em" pb="1em">
          <Text.h2 color="cyan">{scene.title}</Text.h2>
          <Box fontWeight={600}>{scene.sub}</Box>
        </Box>
      </Flex>
      <Border borderBottom="2px solid" borderColor="cyan" />
      <Box py="1em">
        <Text my="0.5em">
          這條線索來自綠色和平研究報告和我們查詢的無數論文資料以及《歐洲的心臟》與《能源大騙局》。
        </Text>
        <Text my="0.5em">
          你覺得我們挑出的這條線索，對你想像能源轉型有幫助嗎？
        </Text>
      </Box>
      <Slider
        name="helpful"
        px="25%"
        pb="1.5em"
        minLabel="沒幫助"
        maxLabel="有幫助"
        value={values.helpful}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Border borderBottom="2px solid" borderColor="lightGray" />
      <Flex py="1.5em">
        <Box w={1 / 2}>
          <Checkbox
            name="wantEmail"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <Text fontWeight="bold">我願意收到能源轉型計畫相關信息</Text>
          </Checkbox>
        </Box>
        {values.wantEmail && (
          <Box w={1 / 2}>
            <Input
              name="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              label="E-mail:"
            />
          </Box>
        )}
      </Flex>
      <ButtonSvg
        w="15em"
        mx="auto"
        disabled={isSubmitting || !touched.helpful}
        type="submit"
      />
      <Box position="absolute" right="0" bottom="0" w="25%" transform="translateY(25%)">
        <BackgroundImage src={flowerdecoration} ratio={107 / 206.227} />
      </Box>
    </Box>
  );
};

InnerForm.propTypes = {
  values: PropTypes.object,
  touched: PropTypes.object,
  errors: PropTypes.object,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool,
  cta: PropTypes.string,
  mobile: PropTypes.bool,
  formSubmitted: PropTypes.bool,
};

const MyForm = withFormik({
  validationSchema,
  initialValues: {
    email: '',
    helpful: 50,
  },
  handleSubmit: (values, {
    setSubmitting,
    props,
  }) => {
    console.log(values);
    setSubmitting(true);
  },
})(InnerForm);

export default MyForm;
