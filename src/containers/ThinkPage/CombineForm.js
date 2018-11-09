import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import { object, number, boolean, string } from 'yup';

import Slider from '../../components/Slider';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Border from '../../components/Border';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';

import ButtonSvg from './ButtonSvg';

const validationSchema = object({
  helpful: number().required(),
  wantEmail: boolean(),
  email: string().email('E-mail格式有問題喔').when('wantEmail', (wantEmail, schema) => wantEmail
    ? schema.required('E-mail為必填欄位')
    : schema),
});

// Injected Form
const InnerForm = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  noEmail,
}) => {
  // 表單內容
  return (
    <Box is="form" onSubmit={handleSubmit} position="relative">
      <Box py="1em" textAlign="left">
        <Text my="0.5em">
          這條線索來自綠色和平的研究報告和我們查詢的無數論文資料以及《歐洲的心臟》與《能源大騙局》兩本著作。
        </Text>
        <Text my="0.5em">
          你覺得我們挑出的這條線索，對你想像<strong>「能源轉型」</strong>有幫助嗎？
        </Text>
      </Box>
      <Flex
        my="1.5em"
        justify="center"
      >
        <Box flex={[1, null, 'none']} w={[null, null, '80%', '50%']}>
          <Slider
            name="helpful"
            minLabel="沒幫助"
            maxLabel="有幫助"
            value={values.helpful}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Box>
      </Flex>
      <Border borderBottom="2px solid" borderColor="lightGray" />
      <Flex py="1.5em" flexDirection={['column', null, 'row']}>
        {!noEmail && (
        <Box w={[1, null, 1 / 2]} my="0.5em">
          <Checkbox
            name="wantEmail"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <Text fontWeight="bold">我願意收到能源轉型計畫相關信息</Text>
          </Checkbox>
        </Box>
        )}
        {values.wantEmail && (
          <Box w={1 / 2} my="0.5em">
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
        disabled={isSubmitting}
        type="submit"
      />
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

const CombineForm = withFormik({
  validationSchema,
  initialValues: {
    helpful: 50,
  },
  handleSubmit: (values, {
    setSubmitting,
    setStatus,
    props,
  }) => {
    setSubmitting(true);
    props.onSubmit(values.helpful, values.email)
      .then(() => setSubmitting(false))
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  },
})(InnerForm);

export default CombineForm;
