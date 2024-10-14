import Button from '@components/Button/Button';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import FormikTextInput from '@components/Formik/FormikTextInput/FormikTextInput';
import CloseIcon from '@components/Icons/CloseIcon';
import Typography from '@components/Typography/Typography';
import { showToast } from '@core/config/toast';
import API from '@core/services';
import { agentSchema } from '@core/validation/agent';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AdminsKeys } from '@typings/api/admin';
import { Agent } from '@typings/model/agent';
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

const AddAgentPage: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { agentId = '' } = router.query;

  const isEdit = !!agentId;

  const { data: agent } = useQuery(
    [AdminsKeys.Agent, agentId],
    () => API.agent.fetchAgent(agentId as string),
    { enabled: isEdit }
  );

  const {
    isLoading: updatingAgent,
    mutate: updateAgent,
    error: updateAgentError,
  } = useMutation(API.agent.updateAgent, {
    onSuccess(agent) {
      queryClient.setQueryData<Agent[]>([AdminsKeys.Agent], (agents = []) => {
        return agents.map((a) => {
          if (a.id === agent.id) {
            return agent;
          }
          return a;
        });
      });
      showToast(`${agent.name} updated successfully!`);
      router.back();
    },
    onError() {
      showToast(`Unable to update agent ${agent?.name}, please try again!`);
    },
  });

  const {
    isLoading,
    mutate: inviteAgent,
    error: inviteAgentError,
  } = useMutation(API.agent.createAgent, {
    onSuccess(agent) {
      queryClient.setQueryData<Agent[]>([AdminsKeys.Agent], (agents = []) => {
        return [...agents, agent];
      });
      showToast(`${agent.name} invited successfully!`);
      router.push('/admin/agents');
    },
    onError(inviteAgentError) {
      handleInviteError({ error: inviteAgentError, name: formik?.values?.name });
    },
  });

  const formik = useFormik({
    initialValues: isEdit
      ? {
          name: agent?.name,
          phone: agent?.phone,
          email: agent?.email,
        }
      : initialValues,
    enableReinitialize: true,
    validateOnMount: true,
    validationSchema: agentSchema,
    onSubmit(values) {
      if (isEdit) {
        updateAgent({ agentId: agent?.id as string, updates: values });
      } else {
        inviteAgent(values);
      }
    },
  });

  return (
    <div className="pt-8 sm:pt-28 max-w-xl sm:w-[36rem] bg-white sm:bg-transparent h-screen absolute sm:block top-0 right-0 left-0 bottom-0 z-[99999999] mx-auto px-8">
      <Head>
        <title>Add Agent</title>
      </Head>
      <Link href="/admin/agents">
        <CloseIcon />
      </Link>
      <div className="mt-4 relative">
        <div className="text-center sm:text-left">
          <Typography variation="title0" bold>
            Add Agents
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

            <ErrorMessage error={inviteAgentError || updateAgentError} />

            <Button full type="submit" className="mt-10" loading={isLoading || updatingAgent}>
              {isEdit ? 'Update' : 'Save'}
            </Button>
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
};

export default AddAgentPage;
