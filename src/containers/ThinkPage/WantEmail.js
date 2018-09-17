import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import { object, boolean, string } from 'yup';

import Border from '../../components/Border';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Text from '../../components/Text';
import Checkbox from '../../components/Checkbox';
import BackgroundImage from '../../components/BackgroundImage';

import ButtonSvg from './ButtonSvg';

import flowerdecoration from './flowerdecoration.svg';

const validationSchema = object({
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
}) => {
  // 表單內容
  return (
    <Box is="form" onSubmit={handleSubmit} position="relative">
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
        disabled={isSubmitting}
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

const WantEmail = withFormik({
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

export default WantEmail;
