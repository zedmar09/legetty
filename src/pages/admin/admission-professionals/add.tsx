import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CloseIcon from '@components/Icons/CloseIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import { admissionProfessionalSchema } from '@core/validation/admissionProfessional';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Professional } from '@typings/model/admissionProfessional';
import handleInviteError from '@utils/errorToast';
import { formatPhone } from '@utils/formatter';
import { Form, FormikProvider, useFormik } from 'formik';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const initialValues = {
  name: '',
  phone: '',
  email: '',
};

const AddAdmissionProfessionalPage: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { admissionProfessionalId = '' } = router.query;

  const isEdit = !!admissionProfessionalId;

  const { data: admissionProfessional } = useQuery(
    [AdminsKeys.AdmissionProfessionals, admissionProfessionalId],
    () => API.admissionProfessional.fetchAdmissionProfessional(admissionProfessionalId as string),
    { enabled: isEdit }
  );

  const {
    isLoading: updatingAdmissionProfessional,
    mutate: updateAdmissionProfessional,
    error: updateProfessionalError,
  } = useMutation(API.admissionProfessional.updateAdmissionProfessional, {
    onSuccess(admissionProfessional) {
      queryClient.setQueryData<Professional[]>(
        [[AdminsKeys.AdmissionProfessionals]],
        (admissionProfessionals = []) => {
          return admissionProfessionals.map((a) => {
            if (a.id === admissionProfessional.id) {
              return admissionProfessional;
            }
            return a;
          });
        }
      );
      showToast(`${admissionProfessional.name} updated successfully!`);
      router.back();
    },
    onError() {
      showToast(
        `Unable to update Admission Professional ${admissionProfessional?.name}, please try again!`
      );
    },
  });

  const {
    isLoading,
    mutate: inviteAdmissionProfessional,
    error: inviteProfessionalError,
  } = useMutation(API.admissionProfessional.createAdmissionProfessional, {
    onSuccess(admissionProfessional) {
      queryClient.setQueryData<Professional[]>(
        [AdminsKeys.AdmissionProfessionals],
        (admissionProfessionals = []) => {
          return [...admissionProfessionals, admissionProfessional];
        }
      );
      showToast(`${admissionProfessional.name} invited successfully!`);
      router.push('/admin/admission-professionals');
    },
    onError(inviteProfessionalError) {
      handleInviteError({ error: inviteProfessionalError, name: formik?.values?.name });
    },
  });

  const formik = useFormik({
    initialValues:
      isEdit && admissionProfessional
        ? {
            name: admissionProfessional?.name,
            phone: admissionProfessional?.phone,
            email: admissionProfessional?.email,
          }
        : initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: admissionProfessionalSchema,
    onSubmit(values: { name: string; phone: string; email: string }) {
      if (isEdit) {
        updateAdmissionProfessional({
          admissionProfessionalId: admissionProfessional?.id as string,
          updates: values,
        });
      } else {
        inviteAdmissionProfessional(values);
      }
    },
  });

  return (
    <div className="pt-8 sm:pt-28 max-w-xl sm:w-[36rem] bg-white sm:bg-transparent h-screen absolute sm:block top-0 right-0 left-0 bottom-0 z-[99999999] mx-auto px-8">
      <Head>
        <title>Add Admission Professional</title>
      </Head>
      <Link href="/admin/admission-professionals">
        <CloseIcon />
      </Link>

      <div className="mt-4">
        <div className="text-center sm:text-left">
          <Typography variation="title0" bold>
            Add Admission Professional
          </Typography>
        </div>

        <FormikProvider value={formik}>
          <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <FormikTextInput
              name="name"
              label="Name"
              className="mt-8"
              placeholder="Provide Team Member's Name"
            />

            <FormikTextInput
              name="phone"
              className="mt-6"
              label="Phone Number"
              formatter={formatPhone}
              placeholder="Provide Team Member's Phone Number"
            />

            <FormikTextInput
              name="email"
              label="E-Mail"
              className="mt-6"
              placeholder="Provide Team Member's E-Mail"
            />

            <ErrorMessage error={inviteProfessionalError || updateProfessionalError} />

            <Button
              full
              type="submit"
              className="mt-10"
              loading={isLoading || updatingAdmissionProfessional}>
              {isEdit ? 'Update' : 'Save'}
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default AddAdmissionProfessionalPage;
