export const contactValues = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: '',
  };
  return initialValues;
};

export const requestQuoteValues = (product) => {
  const initialValues = {
    product:product,
    name: '',
    phone: '',
    email: '',
    company: '',
    address: '',
    city: '',
    country: '',
    product_description: '',
    quantity: '',
    delivery_date: '',
  };
  return initialValues;
};