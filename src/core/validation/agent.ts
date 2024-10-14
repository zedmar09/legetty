import * as Yup from 'yup';

export const agentSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .required('Phone is required')
    .matches(/^(?:\+1|1)?[ -]?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/, 'Invalid phone number'),
});
