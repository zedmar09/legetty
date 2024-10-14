import Button from '@components/Button/Button';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CameraIcon from '@components/Icons/CameraIcon';
import CloseIcon from '@components/Icons/CloseIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import { setAuthName } from '@core/redux/reducers/authSlice';
import { useAppDispatch } from '@core/redux/store';
import { emailSchema, nameSchema } from '@core/validation/common';
import { getAuth, updateEmail, updateProfile } from 'firebase/auth';
import { Form, FormikProvider, useFormik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { object } from 'yup';
type Props = {};

enum fields {
  name = 'name',
  email = 'email',
}

const Profile = (props: Props) => {
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    [fields.name]: auth?.currentUser?.displayName || '',
    // phone: auth?.currentUser?.phoneNumber || '',
    [fields.email]: auth?.currentUser?.email || '',
  };

  const dispatch = useAppDispatch();

  const updateProfileDetails = async (user: any) => {
    setIsLoading(true);
    if (auth.currentUser) {
      await updateEmail(auth?.currentUser, user?.email);
      await updateProfile(auth?.currentUser, {
        displayName: user?.name,
      });
    }
    dispatch(setAuthName(user?.name));
    showToast('Profile updated successfully!');
    setIsLoading(false);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: object().shape({
      [fields.name]: nameSchema,
      [fields.email]: emailSchema,
    }),
    onSubmit(values) {
      updateProfileDetails(values);
    },
  });

  return (
    <div className="pt-28 max-w-xl mx-auto px-8">
      <Head>
        <title>Admin Profile</title>
      </Head>
      <Link href="/admin/dashboard">
        <CloseIcon />
      </Link>

      <div className="mt-4">
        <Typography variation="title0" bold>
          User Area
        </Typography>
        <div className="flex space-x-6 items-center mt-6">
          <Image
            width={104}
            height={104}
            alt="User"
            className="rounded-full"
            src={'/landing/shark-person.png'}
          />
          <div className="capitalize">
            <Typography variation="title2" bold>
              {auth?.currentUser?.displayName}
            </Typography>
            <p className="text-dark">Super Administrator</p>
            <div className="flex space-x-2">
              <CameraIcon />
              <p className="text-mainBlue">Upload Profile Picture</p>
            </div>
          </div>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <FormikTextInput
              name="name"
              label="Name"
              className="mt-8"
              placeholder="Provide Team Member's Name"
            />

            {/* <FormikTextInput
              name="phone"
              className="mt-6"
              label="Phone Number"
              formatter={formatPhone}
              placeholder="Provide Team Member's Phone Number"
            /> */}

            <FormikTextInput
              name="email"
              label="E-Mail"
              className="mt-6"
              inputClassName="cursor-not-allowed"
              placeholder="Provide Team Member's E-Mail"
              disabled
            />

            <Button full type="submit" className="mt-10" loading={isLoading}>
              Update
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default Profile;
