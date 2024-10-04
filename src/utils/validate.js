import * as yup from 'yup';

export const validateContact = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    first_name: yup.string().trim().required('First Name is missing'),
    last_name: yup.string().trim().required('Last Name is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
      .required('Phone number is missing'),
    message: yup.string().trim().required('What is your request?'),
  });
  return validationSchema;
};

export const validateRequestQuote = () => {
  const phoneRegExp = /^[\d|\+|\(]+[\)|\d|\s|-]*[\d]$/;
  const validationSchema = yup.object({
    name: yup.string().trim().required('Name is missing'),
    email: yup.string().email('Invalid email').required('Email is missing'),
    phone: yup
    .string()
    .matches(phoneRegExp, 'Invalid phone number. Follow the sample: +11255678765')
    .required('Phone number is missing'),
    company: yup.string().trim().required('Your firm name?'),
    address: yup.string().trim().required('Your location?'),
    city: yup.string().trim().required('What city do you reside in?'),
    country: yup.string().trim().required('In which country do you reside in?'),
    product_description: yup.string().trim().required('Describe the product you are requesting for'),
    quantity: yup.string().trim().required('Describe the product quantity'),
    delivery_date: yup.string().trim().required('When do you need it delievered?'),
  });
  return validationSchema;
};
