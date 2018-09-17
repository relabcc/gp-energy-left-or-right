import React from 'react';
import PropTypes from 'prop-types';

import { withFormik } from 'formik';
import { object, number } from 'yup';

import Slider from '../../components/Slider';
import Box from '../../components/Box';
import Flex from '../../components/Flex';
import Text from '../../components/Text';
import Button from '../../components/Button';

const validationSchema = object({
  helpful: number().required(),
});

// Injected Form
const InnerForm = ({
  values,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  submitted,
}) => {
  // 表單內容
  return (
    <Box is="form" onSubmit={handleSubmit} position="relative">
      <Box py="1em">
        <Text my="0.5em">
          這條線索來自綠色和平的研究報告和我們查詢的無數論文資料以及《歐洲的心臟》與《能源大騙局》兩本著作。
        </Text>
        <Text my="0.5em">
          你覺得我們挑出的這條線索，對你想像<strong>「能源轉型」</strong>有幫助嗎？
        </Text>
      </Box>
      {!submitted && (
        <Flex my="1.5em" justify="center">
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
          <Box ml="2em" w="6em">
            <Button type="submit" disabled={isSubmitting}>送出</Button>
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

const ScoreSurvey = withFormik({
  validationSchema,
  initialValues: {
    helpful: 50,
  },
  handleSubmit: (values, {
    setSubmitting,
    setStatus,
    props,
  }) => {
    console.log(values);
    setSubmitting(true);
    props.onSubmit(values.helpful)
      .then(() => setSubmitting(false))
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  },
})(InnerForm);

export default ScoreSurvey;
