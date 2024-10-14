import apiInstance from '@core/lib/axios';
import { auth } from '@core/lib/firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const AUTH_ROUTE = '/auth';
const SIGNUP_ROUTE = `${AUTH_ROUTE}/signup`;

interface LoginParams {
  email: string;
  password: string;
}

export const login = async (params: LoginParams) => {
  const { email, password } = params;
  return signInWithEmailAndPassword(auth, email, password);
};

interface AgentSignUpParams {
  invitationId: string;
  password: string;
}

export const agentSignUp = async (params: AgentSignUpParams) => {
  return apiInstance.post(`/agents/signup`, params);
};

interface AdmissionProfessionalSignUpParams {
  invitationId: string;
  password: string;
}

export const admissionProfessionalSignUp = async (params: AdmissionProfessionalSignUpParams) => {
  return apiInstance.post(`/admission-professionals/signup`, params);
};

interface FinancialAgentSignUpParams {
  email: string;
  password: string;
}

export const financialAgentSignup = (params: FinancialAgentSignUpParams) => {
  return apiInstance.post<{ email: string }>(`${SIGNUP_ROUTE}/financial-agent`, params);
};

interface ResetPasswordProps {
  email: string;
}

export const resetPassword = (params: ResetPasswordProps) => {
  const { email } = params;
  return sendPasswordResetEmail(auth, email);
};
