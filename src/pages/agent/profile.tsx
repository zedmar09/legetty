import Button from '@components/Button/Button';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CloseIcon from '@components/Icons/CloseIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { fetchAgentProfile } from '@core/redux/reducers/agentSlice';
import { useAppDispatch, useAppSelector } from '@core/redux/store';
import API from '@core/services';
import { nameSchema, phoneSchema } from '@core/validation/common';
import { useMutation } from '@tanstack/react-query';
import { formatPhone } from '@utils/formatter';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { object } from 'yup';

enum fields {
  name = 'name',
  phone = 'phone',
  email = 'email',
}

const Profile: NextPage = () => {
  const dispatch = useAppDispatch();
  const agent = useAppSelector((state) => state.agent.agent);

  const { isLoading, mutate: updateProfile } = useMutation(API.fa.auth.updateAgentProfile, {
    onSuccess() {
      showToast(`Successfully! Updated profile`);
      dispatch(fetchAgentProfile());
    },
    onError() {
      showToast('Unable to update profile, please try again!');
    },
  });

  const initialValues = {
    [fields.name]: agent?.name || '',
    [fields.phone]: agent?.phone || '',
    [fields.email]: agent?.email || '',
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: object().shape({
      [fields.name]: nameSchema,
      [fields.phone]: phoneSchema,
    }),
    onSubmit(values) {
      const value = {
        name: values.name,
        phone: '+1' + values.phone.replace(/\D/g, ''),
      };
      updateProfile(value);
    },
  });

  return (
    <div className="py-28 max-w-xl mx-auto px-8">
      <Head>
        <title>User Area</title>
      </Head>
      <Link href="/agent/dashboard">
        <CloseIcon />
      </Link>

      <div className="mt-4">
        <Typography variation="title0" bold>
          User Area
        </Typography>
        <div className="mt-6 flex space-x-6">
          <div className="h-[104px] w-[104px] rounded-full bg-[#74CF6C] text-white text-5xl grid place-items-center">
            LA
          </div>
          <div className="mt-2 space-y-1">
            <Typography variation="title2" className="font-bold capitalize">
              {agent?.name}
            </Typography>
            <Typography variation="title3">Financial Agent</Typography>
          </div>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <FormikTextInput name="name" label="Name" className="mt-8" placeholder="Enter Name" />

            <FormikTextInput
              name="phone"
              className="mt-6"
              label="Phone Number"
              formatter={formatPhone}
              placeholder="Enter Phone Number"
            />

            <FormikTextInput
              name="email"
              label="E-Mail"
              className="mt-6"
              placeholder="Enter E-Mail"
              disabled
              inputClassName="!bg-gray-100"
            />

            <Button full type="submit" className="mt-10" loading={isLoading}>
              Save
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Profile;
