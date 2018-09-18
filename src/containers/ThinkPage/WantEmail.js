import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withFormik } from 'formik';
import { object, boolean, string } from 'yup';

import Border from '../../components/Border';
import Flex from '../../components/Flex';
import Box from '../../components/Box';
import Input from '../../components/Input';
import Button from '../../components/Button';

const validationSchema = object({
  wantEmail: boolean(),
  email: string().email('E-mail格式有問題喔').when('wantEmail', (wantEmail, schema) => wantEmail
    ? schema.required('E-mail為必填欄位')
    : schema),
});

const HiddenLabel = styled.label`
  position: relative;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }
`;

// Injected Form
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  onNo,
}) => {
  // 表單內容
  return (
    <Box is="form" onSubmit={handleSubmit}>
      {/* <Border borderBottom="2px solid" borderColor="lightGray" /> */}
      {values.wantEmail ? (
        <Box py="1em">
          <Input
            name="email"
            values={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            label="請輸入您的E-mail:"
            my="1em"
          />
          <Button type="submit" disabled={isSubmitting}>確定送出</Button>
        </Box>
      ) : (
        <Flex mx="-1em" py="1em">
          <Box mx="1em">
            <Button type="button">
              <HiddenLabel>
                是
                <input type="checkbox" name="wantEmail" onChange={handleChange} />
              </HiddenLabel>
            </Button>
          </Box>
          <Box mx="1em">
            <Button type="button" onClick={onNo}>否</Button>
          </Box>
        </Flex>
      )}
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
    setSubmitting(true);
    props.onSubmit(values.email)
      .then(() => setSubmitting(false))
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  },
})(InnerForm);

export default WantEmail;
