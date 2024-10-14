import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CloseIcon from '@components/Icons/CloseIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import { admissionProfessionalInviteFamilySchema } from '@core/validation/admissionProfessional';
import { useMutation } from '@tanstack/react-query';
import { formatPhone } from '@utils/formatter';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const initialValues = {
  parent1Name: '',
  phone: '',
  email: '',
};

const InviteFamily: NextPage = () => {
  const router = useRouter();

  const {
    isLoading: loading,
    mutate,
    error,
  } = useMutation(API.ap.family.inviteFamily, {
    onSuccess: () => {
      showToast('Successfully Invited Family');
      router.push('/admission-professional/dashboard');
    },
    onError: () => {
      showToast('Unable to invite family, Please try again');
    },
  });
  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: admissionProfessionalInviteFamilySchema,
    onSubmit(values) {
      mutate(values);
    },
  });

  return (
    <div className="py-28 max-w-xl mx-auto px-8">
      <Head>
        <title>Invite Family</title>
      </Head>
      <Link href="/admission-professional/dashboard">
        <CloseIcon />
      </Link>

      <div className="mt-4">
        <Typography variation="title0" bold>
          Invite Family
        </Typography>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <FormikTextInput
              name="parent1Name"
              label="Parent 1"
              className="mt-8"
              placeholder="Name of Parent 1"
            />

            <FormikTextInput
              name="phone"
              className="mt-6"
              label="Phone Number"
              formatter={formatPhone}
              placeholder="Phone Number of Parent 1"
            />

            <FormikTextInput
              name="email"
              label="E-Mail"
              className="mt-6"
              placeholder="E-Mail of Parent 1"
            />

            <ErrorMessage error={error} />

            <Button full type="submit" className="mt-10" loading={loading}>
              Save
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default InviteFamily;
