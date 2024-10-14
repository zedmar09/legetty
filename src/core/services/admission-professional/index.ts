import * as authServices from './auth';
import * as familyServices from './family';

const admissionProfessional = {
  family: familyServices,
  auth: authServices,
};

export default admissionProfessional;
