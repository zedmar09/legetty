import { string } from 'yup';

export const nameSchema = string()
  .required('Name is required')
  .min(1, 'Name is too small')
  .max(100, 'Name is to large')
  .trim();

export const emailSchema = string().email('Invalid email').required('Email is required');

export const phoneSchema = string()
  .required('Phone is required')
  .matches(/^(?:\+1|1)?[ -]?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})$/, 'Invalid phone number');
