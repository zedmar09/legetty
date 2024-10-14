import admin from './admin';
import admissionProfessional from './admission-professional';
import * as admissionProfessionalServices from './admissionProfessional';
import * as agentServices from './agent';
import * as authServices from './auth';
import family from './family';
import agent from './financial-agent';

const API = {
  auth: authServices,
  agent: agentServices,
  admissionProfessional: admissionProfessionalServices,
  family,
  admin,
  ap: admissionProfessional,
  fa: agent,
};

export default API;
