import { FilingStatus, MaritalStatus } from '@typings/model/family';

export const familyOptions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
  {
    label: '8',
    value: '8',
  },
  {
    label: '9',
    value: '9',
  },
  {
    label: '10',
    value: '10',
  },
];

export const familyInCollegeOptions = [
  {
    label: '0',
    value: '0',
  },
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
];

export const martialStatusOptions = [
  { label: 'Married', value: MaritalStatus.Married },
  { label: 'Single', value: MaritalStatus.Single },
  { label: 'Divorced', value: MaritalStatus.Divorced },
];

export const filingStatusOptions = [
  { label: 'Married Filing Jointly', value: FilingStatus.Jointly },
  { label: 'Married Filing Separately', value: FilingStatus.Separately },
  { label: 'Head Of Household', value: FilingStatus.Head },
];

export const standardDeductionMapping = {
  [FilingStatus.Jointly]: 25100,
  [FilingStatus.Separately]: 12550,
  [FilingStatus.Head]: 18800,
};

export const ageOptions = [
  ...Array.from({ length: 50 }).map((age, index) => ({
    label: index.toString(),
    value: index.toString(),
  })),
  {
    label: '50+',
    value: '50+',
  },
];

export const graduationYearOptions = [
  {
    label: `2020`,
    value: `2020`,
  },
  ...Array.from({ length: 20 }).map((age, index) => ({
    label: (2020 + index + 1).toString(),
    value: (2020 + index + 1).toString(),
  })),
];

export const overallStudentTypeOptions = [
  { label: 'Below Average', value: 'Below Average' },
  { label: 'Average', value: 'Average' },
  { label: 'Good', value: 'Good' },
  { label: 'Excellent', value: 'Excellent' },
  { label: 'Exceptional', value: 'Exceptional' },
];

export const yesNoOptions = [
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
];

export const admissionOptions = [
  {
    label: 'Target',
    value: 'Target',
  },
  {
    label: 'Reach',
    value: 'Reach',
  },
  {
    label: 'Safety',
    value: 'Safety',
  },
];

export const durationOptions = [
  {
    label: '2 Years',
    value: '2 Years',
  },
  {
    label: '3 Years',
    value: '3 Years',
  },
  {
    label: '4 Years',
    value: '4 Years',
  },
];

export const tuitionOptions = [
  {
    label: '$30,000 - $40,000',
    value: '$30,000 - $40,000',
  },
  {
    label: '$40,000 - $50,000',
    value: '$40,000 - $50,000',
  },
  {
    label: '$50,000 - $60,000',
    value: '$50,000 - $60,000',
  },
  {
    label: '$60,000 - $70,000',
    value: '$60,000 - $70,000',
  },
  {
    label: '$70,000 - $80,000',
    value: '$70,000 - $80,000',
  },
  {
    label: '$80,000+',
    value: '$80,000+',
  },
];

export const financialAidContributionOptions = [
  {
    label: '$30,000 - $40,000',
    value: '$30,000 - $40,000',
  },
  {
    label: '$40,000 - $50,000',
    value: '$40,000 - $50,000',
  },
  {
    label: '$50,000 - $60,000',
    value: '$50,000 - $60,000',
  },
  {
    label: '$60,000 - $70,000',
    value: '$60,000 - $70,000',
  },
  {
    label: '$70,000 - $80,000',
    value: '$70,000 - $80,000',
  },
  {
    label: '$80,000+',
    value: '$80,000+',
  },
];

export const acceptanceRateOptions = [
  {
    label: 'Most Selective (0-10%)',
    value: '0-10',
  },
  {
    label: 'Very Selective (11-25%)',
    value: '11-25',
  },
  {
    label: 'Selective (26-50%)',
    value: '26-50',
  },
  {
    label: 'Less Selective (51-90%)',
    value: '51-90',
  },
  {
    label: 'Not Selective (90-100%)',
    value: '90-100',
  },
];

export const collegeLevelOptions = [
  // {
  //   label: 'two-year college with graduate programs',
  //   value: '2GRAD',
  // },
  {
    label: 'Two year college',
    value: '2YEAR',
  },
  {
    label: 'Four year college',
    value: '4YEAR',
  },
  // {
  //   label: 'five-year college [awards five-year baccalaureate in a professional field]',
  //   value: '5YEAR'
  // },
  // {
  //   label: 'Comprehensive higher education institution',
  //   value: 'COMP',
  // },
  // {
  //   label: 'system [administers state-controlled institutions, public community colleges, independent institutio systems, or proprietary school systems; does not, as a rule, award degrees]',
  //   value: "SYS"
  // },
  // {
  //   label: 'Upper level higher education institution with graduate programs',
  //   value: 'UPWG',
  // },
  // {
  //   label: 'Upper level higher education institution without graduate programs',
  //   value: 'UPWOG',
  // },
  {
    label: 'University',
    value: 'UNIV',
  },
];

export const collegeTypeOption = [
  {
    label: 'Private',
    value: 'private',
  },
  {
    label: 'Public',
    value: 'public',
  },
];

export const collegeSizeOptions = [
  {
    label: 'Less than 3,000 students',
    value: '0-3000',
  },
  {
    label: '3000-8,999 students',
    value: '3000-8999',
  },
  {
    label: '9000-14,999 students',
    value: '9000-14999',
  },
  {
    label: 'More than 15,000 student',
    value: '15000-1000000',
  },
];

export const majorOptions = [
  {
    label: 'Agriculture, General',
    value: '01.0000',
  },
  {
    label: 'Agricultural Business and Management, General',
    value: '01.0101',
  },
  {
    label: 'Agribusiness/Agricultural Business Operations',
    value: '01.0102',
  },
  {
    label: 'Agricultural Economics',
    value: '01.0103',
  },
  {
    label: 'Farm/Farm and Ranch Management',
    value: '01.0104',
  },
  {
    label: 'Agricultural/Farm Supplies Retailing and Wholesaling',
    value: '01.0105',
  },
  {
    label: 'Agricultural Business Technology/Technician',
    value: '01.0106',
  },
  {
    label: 'Agricultural Business and Management, Other',
    value: '01.0199',
  },
  {
    label: 'Agricultural Mechanization, General',
    value: '01.0201',
  },
  {
    label: 'Agricultural Power Machinery Operation',
    value: '01.0204',
  },
  {
    label: 'Agricultural Mechanics and Equipment/Machine Technology/Technician',
    value: '01.0205',
  },
  {
    label: 'Irrigation Management Technology/Technician',
    value: '01.0207',
  },
  {
    label: 'Agricultural Mechanization, Other',
    value: '01.0299',
  },
  {
    label: 'Agricultural Production Operations, General',
    value: '01.0301',
  },
  {
    label: 'Animal/Livestock Husbandry and Production',
    value: '01.0302',
  },
  {
    label: 'Aquaculture',
    value: '01.0303',
  },
  {
    label: 'Crop Production',
    value: '01.0304',
  },
  {
    label: 'Dairy Husbandry and Production',
    value: '01.0306',
  },
  {
    label: 'Horse Husbandry/Equine Science and Management',
    value: '01.0307',
  },
  {
    label: 'Agroecology and Sustainable Agriculture',
    value: '01.0308',
  },
  {
    label: 'Viticulture and Enology',
    value: '01.0309',
  },
  {
    label: 'Apiculture',
    value: '01.0310',
  },
  {
    label: 'Agricultural Production Operations, Other',
    value: '01.0399',
  },
  {
    label: 'Agricultural and Food Products Processing',
    value: '01.0401',
  },
  {
    label: 'Dog/Pet/Animal Grooming',
    value: '01.0504',
  },
  {
    label: 'Animal Training',
    value: '01.0505',
  },
  {
    label: 'Equestrian/Equine Studies',
    value: '01.0507',
  },
  {
    label: 'Taxidermy/Taxidermist',
    value: '01.0508',
  },
  {
    label: 'Farrier Science',
    value: '01.0509',
  },
  {
    label: 'Agricultural and Domestic Animal Services, Other',
    value: '01.0599',
  },
  {
    label: 'Applied Horticulture/Horticulture Operations, General',
    value: '01.0601',
  },
  {
    label: 'Ornamental Horticulture',
    value: '01.0603',
  },
  {
    label: 'Greenhouse Operations and Management',
    value: '01.0604',
  },
  {
    label: 'Landscaping and Groundskeeping',
    value: '01.0605',
  },
  {
    label: 'Plant Nursery Operations and Management',
    value: '01.0606',
  },
  {
    label: 'Turf and Turfgrass Management',
    value: '01.0607',
  },
  {
    label: 'Floriculture/Floristry Operations and Management',
    value: '01.0608',
  },
  {
    label: 'Public Horticulture',
    value: '01.0609',
  },
  {
    label: 'Urban and Community Horticulture',
    value: '01.0610',
  },
  {
    label: 'Applied Horticulture/Horticultural Business Services, Other',
    value: '01.0699',
  },
  {
    label: 'International Agriculture',
    value: '01.0701',
  },
  {
    label: 'Agricultural and Extension Education Services',
    value: '01.0801',
  },
  {
    label: 'Agricultural Communication/Journalism',
    value: '01.0802',
  },
  {
    label: 'Agricultural Public Services, Other',
    value: '01.0899',
  },
  {
    label: 'Animal Sciences, General',
    value: '01.0901',
  },
  {
    label: 'Agricultural Animal Breeding',
    value: '01.0902',
  },
  {
    label: 'Animal Health',
    value: '01.0903',
  },
  {
    label: 'Animal Nutrition',
    value: '01.0904',
  },
  {
    label: 'Dairy Science',
    value: '01.0905',
  },
  {
    label: 'Livestock Management',
    value: '01.0906',
  },
  {
    label: 'Poultry Science',
    value: '01.0907',
  },
  {
    label: 'Animal Sciences, Other',
    value: '01.0999',
  },
  {
    label: 'Food Science',
    value: '01.1001',
  },
  {
    label: 'Food Technology and Processing',
    value: '01.1002',
  },
  {
    label: 'Brewing Science',
    value: '01.1003',
  },
  {
    label: 'Viticulture and Enology',
    value: '01.1004',
  },
  {
    label: 'Zymology/Fermentation Science',
    value: '01.1005',
  },
  {
    label: 'Food Science and Technology, Other',
    value: '01.1099',
  },
  {
    label: 'Plant Sciences, General',
    value: '01.1101',
  },
  {
    label: 'Agronomy and Crop Science',
    value: '01.1102',
  },
  {
    label: 'Horticultural Science',
    value: '01.1103',
  },
  {
    label: 'Agricultural and Horticultural Plant Breeding',
    value: '01.1104',
  },
  {
    label: 'Plant Protection and Integrated Pest Management',
    value: '01.1105',
  },
  {
    label: 'Range Science and Management',
    value: '01.1106',
  },
  {
    label: 'Plant Sciences, Other',
    value: '01.1199',
  },
  {
    label: 'Soil Science and Agronomy, General',
    value: '01.1201',
  },
  {
    label: 'Soil Chemistry and Physics',
    value: '01.1202',
  },
  {
    label: 'Soil Microbiology',
    value: '01.1203',
  },
  {
    label: 'Soil Sciences, Other',
    value: '01.1299',
  },
  {
    label: 'Pre-Veterinary Studies',
    value: '01.1302',
  },
  {
    label: 'Agriculture/Veterinary Preparatory Programs, Other',
    value: '01.1399',
  },
  {
    label: 'Veterinary Sciences/Veterinary Clinical Sciences, General',
    value: '01.8101',
  },
  {
    label: 'Veterinary Microbiology and Immunobiology',
    value: '01.8107',
  },
  {
    label: 'Veterinary Administrative Services, General',
    value: '01.8201',
  },
  {
    label: 'Veterinary Office Management/Administration',
    value: '01.8202',
  },
  {
    label: 'Veterinary Reception/Receptionist',
    value: '01.8203',
  },
  {
    label: 'Veterinary Administrative/Executive Assistant and Veterinary Secretary',
    value: '01.8204',
  },
  {
    label: 'Veterinary Administrative Services, Other',
    value: '01.8299',
  },
  {
    label: 'Veterinary/Animal Health Technology/Technician and Veterinary Assistant',
    value: '01.8301',
  },
  {
    label: 'Veterinary/Animal Health Technologies/Technicians, Other',
    value: '01.8399',
  },
  {
    label: 'Agricultural/Animal/Plant/Veterinary Science and Related Fields, Other',
    value: '01.9999',
  },
  {
    label: 'Natural Resources/Conservation, General',
    value: '03.0101',
  },
  {
    label: 'Environmental Studies',
    value: '03.0103',
  },
  {
    label: 'Environmental Science',
    value: '03.0104',
  },
  {
    label: 'Natural Resources Conservation and Research, Other',
    value: '03.0199',
  },
  {
    label: 'Environmental/Natural Resources Management and Policy, General',
    value: '03.0201',
  },
  {
    label: 'Environmental/Natural Resource Economics',
    value: '03.0204',
  },
  {
    label: 'Water, Wetlands, and Marine Resources Management',
    value: '03.0205',
  },
  {
    label: 'Land Use Planning and Management/Development',
    value: '03.0206',
  },
  {
    label: 'Environmental/Natural Resource Recreation and Tourism',
    value: '03.0207',
  },
  {
    label: 'Environmental/Natural Resources Law Enforcement and Protective Services',
    value: '03.0208',
  },
  {
    label: 'Energy and Environmental Policy',
    value: '03.0209',
  },
  {
    label: 'Bioenergy',
    value: '03.0210',
  },
  {
    label: 'Environmental/Natural Resources Management and Policy, Other',
    value: '03.0299',
  },
  {
    label: 'Fishing and Fisheries Sciences and Management',
    value: '03.0301',
  },
  {
    label: 'Forestry, General',
    value: '03.0501',
  },
  {
    label: 'Forest Sciences and Biology',
    value: '03.0502',
  },
  {
    label: 'Forest Management/Forest Resources Management',
    value: '03.0506',
  },
  {
    label: 'Urban Forestry',
    value: '03.0508',
  },
  {
    label: 'Wood Science and Wood Products/Pulp and Paper Technology/Technician',
    value: '03.0509',
  },
  {
    label: 'Forest Resources Production and Management',
    value: '03.0510',
  },
  {
    label: 'Forest Technology/Technician',
    value: '03.0511',
  },
  {
    label: 'Forestry, Other',
    value: '03.0599',
  },
  {
    label: 'Wildlife, Fish and Wildlands Science and Management',
    value: '03.0601',
  },
  {
    label: 'Natural Resources and Conservation, Other',
    value: '03.9999',
  },
  {
    label: 'Pre-Architecture Studies',
    value: '04.0200',
  },
  {
    label: 'Architecture',
    value: '04.0201',
  },
  {
    label: 'Architectural Design',
    value: '04.0202',
  },
  {
    label: 'Architecture, Other',
    value: '04.0299',
  },
  {
    label: 'City/Urban, Community, and Regional Planning',
    value: '04.0301',
  },
  {
    label: 'Environmental Design/Architecture',
    value: '04.0401',
  },
  {
    label: 'Healthcare Environment Design/Architecture',
    value: '04.0402',
  },
  {
    label: 'Sustainable Design/Architecture',
    value: '04.0403',
  },
  {
    label: 'Environmental Design, Other',
    value: '04.0499',
  },
  {
    label: 'Interior Architecture',
    value: '04.0501',
  },
  {
    label: 'Landscape Architecture',
    value: '04.0601',
  },
  {
    label: 'Architectural History and Criticism, General',
    value: '04.0801',
  },
  {
    label: 'Architectural Conservation',
    value: '04.0802',
  },
  {
    label: 'Architectural Studies',
    value: '04.0803',
  },
  {
    label: 'Architectural History, Criticism, and Conservation, Other',
    value: '04.0899',
  },
  {
    label: 'Architectural Technology/Technician',
    value: '04.0901',
  },
  {
    label: 'Architectural and Building Sciences/Technology',
    value: '04.0902',
  },
  {
    label: 'Architectural Sciences and Technology, Other',
    value: '04.0999',
  },
  {
    label: 'Real Estate Development',
    value: '04.1001',
  },
  {
    label: 'Architecture and Related Services, Other',
    value: '04.9999',
  },
  {
    label: 'African Studies',
    value: '05.0101',
  },
  {
    label: 'American/United States Studies/Civilization',
    value: '05.0102',
  },
  {
    label: 'Asian Studies/Civilization',
    value: '05.0103',
  },
  {
    label: 'East Asian Studies',
    value: '05.0104',
  },
  {
    label: 'Russian, Central European, East European and Eurasian Studies',
    value: '05.0105',
  },
  {
    label: 'European Studies/Civilization',
    value: '05.0106',
  },
  {
    label: 'Latin American Studies',
    value: '05.0107',
  },
  {
    label: 'Near and Middle Eastern Studies',
    value: '05.0108',
  },
  {
    label: 'Pacific Area/Pacific Rim Studies',
    value: '05.0109',
  },
  {
    label: 'Russian Studies',
    value: '05.0110',
  },
  {
    label: 'Scandinavian Studies',
    value: '05.0111',
  },
  {
    label: 'South Asian Studies',
    value: '05.0112',
  },
  {
    label: 'Southeast Asian Studies',
    value: '05.0113',
  },
  {
    label: 'Western European Studies',
    value: '05.0114',
  },
  {
    label: 'Canadian Studies',
    value: '05.0115',
  },
  {
    label: 'Balkans Studies',
    value: '05.0116',
  },
  {
    label: 'Baltic Studies',
    value: '05.0117',
  },
  {
    label: 'Slavic Studies',
    value: '05.0118',
  },
  {
    label: 'Caribbean Studies',
    value: '05.0119',
  },
  {
    label: 'Ural-Altaic and Central Asian Studies',
    value: '05.0120',
  },
  {
    label: 'Commonwealth Studies',
    value: '05.0121',
  },
  {
    label: 'Regional Studies (US, Canadian, Foreign)',
    value: '05.0122',
  },
  {
    label: 'Chinese Studies',
    value: '05.0123',
  },
  {
    label: 'French Studies',
    value: '05.0124',
  },
  {
    label: 'German Studies',
    value: '05.0125',
  },
  {
    label: 'Italian Studies',
    value: '05.0126',
  },
  {
    label: 'Japanese Studies',
    value: '05.0127',
  },
  {
    label: 'Korean Studies',
    value: '05.0128',
  },
  {
    label: 'Polish Studies',
    value: '05.0129',
  },
  {
    label: 'Spanish and Iberian Studies',
    value: '05.0130',
  },
  {
    label: 'Tibetan Studies',
    value: '05.0131',
  },
  {
    label: 'Ukraine Studies',
    value: '05.0132',
  },
  {
    label: 'Irish Studies',
    value: '05.0133',
  },
  {
    label: 'Latin American and Caribbean Studies',
    value: '05.0134',
  },
  {
    label: 'Appalachian Studies',
    value: '05.0135',
  },
  {
    label: 'Arctic Studies',
    value: '05.0136',
  },
  {
    label: 'Area Studies, Other',
    value: '05.0199',
  },
  {
    label: 'Ethnic Studies',
    value: '05.0200',
  },
  {
    label: 'African-American/Black Studies',
    value: '05.0201',
  },
  {
    label: 'American Indian/Native American Studies',
    value: '05.0202',
  },
  {
    label: 'Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies',
    value: '05.0203',
  },
  {
    label: 'Asian-American Studies',
    value: '05.0206',
  },
  {
    label: "Women's Studies",
    value: '05.0207',
  },
  {
    label: 'Gay/Lesbian Studies',
    value: '05.0208',
  },
  {
    label: 'Folklore Studies',
    value: '05.0209',
  },
  {
    label: 'Disability Studies',
    value: '05.0210',
  },
  {
    label: 'Deaf Studies',
    value: '05.0211',
  },
  {
    label: 'Comparative Group Studies',
    value: '05.0212',
  },
  {
    label: 'Ethnic, Cultural Minority, Gender, and Group Studies, Other',
    value: '05.0299',
  },
  {
    label: 'Area, Ethnic, Cultural, Gender, and Group Studies, Other',
    value: '05.9999',
  },
  {
    label: 'Communication, General',
    value: '09.0100',
  },
  {
    label: 'Speech Communication and Rhetoric',
    value: '09.0101',
  },
  {
    label: 'Mass Communication/Media Studies',
    value: '09.0102',
  },
  {
    label: 'Communication and Media Studies, Other',
    value: '09.0199',
  },
  {
    label: 'Journalism',
    value: '09.0401',
  },
  {
    label: 'Broadcast Journalism',
    value: '09.0402',
  },
  {
    label: 'Photojournalism',
    value: '09.0404',
  },
  {
    label: 'Business and Economic Journalism',
    value: '09.0405',
  },
  {
    label: 'Cultural Journalism',
    value: '09.0406',
  },
  {
    label: 'Science/Health/Environmental Journalism',
    value: '09.0407',
  },
  {
    label: 'Journalism, Other',
    value: '09.0499',
  },
  {
    label: 'Radio and Television',
    value: '09.0701',
  },
  {
    label: 'Digital Communication and Media/Multimedia',
    value: '09.0702',
  },
  {
    label: 'Radio, Television, and Digital Communication, Other',
    value: '09.0799',
  },
  {
    label: 'Public Relations, Advertising, and Applied Communication',
    value: '09.0900',
  },
  {
    label: 'Organizational Communication, General',
    value: '09.0901',
  },
  {
    label: 'Public Relations/Image Management',
    value: '09.0902',
  },
  {
    label: 'Advertising',
    value: '09.0903',
  },
  {
    label: 'Political Communication',
    value: '09.0904',
  },
  {
    label: 'Health Communication',
    value: '09.0905',
  },
  {
    label: 'Sports Communication',
    value: '09.0906',
  },
  {
    label: 'International and Intercultural Communication',
    value: '09.0907',
  },
  {
    label: 'Technical and Scientific Communication',
    value: '09.0908',
  },
  {
    label: 'Communication Management and Strategic Communications',
    value: '09.0909',
  },
  {
    label: 'Public Relations, Advertising, and Applied Communication, Other',
    value: '09.0999',
  },
  {
    label: 'Publishing',
    value: '09.1001',
  },
  {
    label: 'Communication, Journalism, and Related Programs, Other',
    value: '09.9999',
  },
  {
    label: 'Communications Technology/Technician',
    value: '10.0105',
  },
  {
    label: 'Photographic and Film/Video Technology/Technician',
    value: '10.0201',
  },
  {
    label: 'Radio and Television Broadcasting Technology/Technician',
    value: '10.0202',
  },
  {
    label: 'Recording Arts Technology/Technician',
    value: '10.0203',
  },
  {
    label: 'Voice Writing Technology/Technician',
    value: '10.0204',
  },
  {
    label: 'Audiovisual Communications Technologies/Technicians, Other',
    value: '10.0299',
  },
  {
    label: 'Graphic Communications, General',
    value: '10.0301',
  },
  {
    label: 'Printing Management',
    value: '10.0302',
  },
  {
    label: 'Prepress/Desktop Publishing and Digital Imaging Design',
    value: '10.0303',
  },
  {
    label: 'Animation, Interactive Technology, Video Graphics, and Special Effects',
    value: '10.0304',
  },
  {
    label: 'Graphic and Printing Equipment Operator, General Production',
    value: '10.0305',
  },
  {
    label: 'Platemaker/Imager',
    value: '10.0306',
  },
  {
    label: 'Printing Press Operator',
    value: '10.0307',
  },
  {
    label: 'Computer Typography and Composition Equipment Operator',
    value: '10.0308',
  },
  {
    label: 'Graphic Communications, Other',
    value: '10.0399',
  },
  {
    label: 'Communications Technologies/Technicians and Support Services, Other',
    value: '10.9999',
  },
  {
    label: 'Computer and Information Sciences, General',
    value: '11.0101',
  },
  {
    label: 'Artificial Intelligence',
    value: '11.0102',
  },
  {
    label: 'Information Technology',
    value: '11.0103',
  },
  {
    label: 'Informatics',
    value: '11.0104',
  },
  {
    label: 'Human-Centered Technology Design',
    value: '11.0105',
  },
  {
    label: 'Computer and Information Sciences,  Other',
    value: '11.0199',
  },
  {
    label: 'Computer Programming/Programmer, General',
    value: '11.0201',
  },
  {
    label: 'Computer Programming, Specific Applications',
    value: '11.0202',
  },
  {
    label: 'Computer Programming, Vendor/Product Certification',
    value: '11.0203',
  },
  {
    label: 'Computer Game Programming',
    value: '11.0204',
  },
  {
    label: 'Computer Programming, Specific Platforms',
    value: '11.0205',
  },
  {
    label: 'Computer Programming, Other',
    value: '11.0299',
  },
  {
    label: 'Data Processing and Data Processing Technology/Technician',
    value: '11.0301',
  },
  {
    label: 'Information Science/Studies',
    value: '11.0401',
  },
  {
    label: 'Computer Systems Analysis/Analyst',
    value: '11.0501',
  },
  {
    label: 'Data Entry/Microcomputer Applications, General',
    value: '11.0601',
  },
  {
    label: 'Word Processing',
    value: '11.0602',
  },
  {
    label: 'Data Entry/Microcomputer Applications, Other',
    value: '11.0699',
  },
  {
    label: 'Computer Science',
    value: '11.0701',
  },
  {
    label: 'Web Page, Digital/Multimedia and Information Resources Design',
    value: '11.0801',
  },
  {
    label: 'Data Modeling/Warehousing and Database Administration',
    value: '11.0802',
  },
  {
    label: 'Computer Graphics',
    value: '11.0803',
  },
  {
    label: 'Modeling, Virtual Environments and Simulation',
    value: '11.0804',
  },
  {
    label: 'Computer Software and Media Applications, Other',
    value: '11.0899',
  },
  {
    label: 'Computer Systems Networking and Telecommunications',
    value: '11.0901',
  },
  {
    label: 'Cloud Computing',
    value: '11.0902',
  },
  {
    label: 'Computer Systems Networking and Telecommunications, Other',
    value: '11.0999',
  },
  {
    label: 'Network and System Administration/Administrator',
    value: '11.1001',
  },
  {
    label: 'System, Networking, and LAN/WAN Management/Manager',
    value: '11.1002',
  },
  {
    label: 'Computer and Information Systems Security/Auditing/Information Assurance',
    value: '11.1003',
  },
  {
    label: 'Web/Multimedia Management and Webmaster',
    value: '11.1004',
  },
  {
    label: 'Information Technology Project Management',
    value: '11.1005',
  },
  {
    label: 'Computer Support Specialist',
    value: '11.1006',
  },
  {
    label: 'Computer/Information Technology Services Administration and Management, Other',
    value: '11.1099',
  },
  {
    label: 'Computer and Information Sciences and Support Services, Other',
    value: '11.9999',
  },
  {
    label: 'Funeral Service and Mortuary Science, General',
    value: '12.0301',
  },
  {
    label: 'Funeral Direction/Service',
    value: '12.0302',
  },
  {
    label: 'Mortuary Science and Embalming/Embalmer',
    value: '12.0303',
  },
  {
    label: 'Funeral Service and Mortuary Science, Other',
    value: '12.0399',
  },
  {
    label: 'Cosmetology/Cosmetologist, General',
    value: '12.0401',
  },
  {
    label: 'Barbering/Barber',
    value: '12.0402',
  },
  {
    label: 'Electrolysis/Electrology and Electrolysis Technician',
    value: '12.0404',
  },
  {
    label: 'Make-Up Artist/Specialist',
    value: '12.0406',
  },
  {
    label: 'Hair Styling/Stylist and Hair Design',
    value: '12.0407',
  },
  {
    label: 'Facial Treatment Specialist/Facialist',
    value: '12.0408',
  },
  {
    label: 'Aesthetician/Esthetician and Skin Care Specialist',
    value: '12.0409',
  },
  {
    label: 'Nail Technician/Specialist and Manicurist',
    value: '12.041',
  },
  {
    label: 'Permanent Cosmetics/Makeup and Tattooing',
    value: '12.0411',
  },
  {
    label: 'Salon/Beauty Salon Management/Manager',
    value: '12.0412',
  },
  {
    label: 'Cosmetology, Barber/Styling, and Nail Instructor',
    value: '12.0413',
  },
  {
    label: 'Master Aesthetician/Esthetician',
    value: '12.0414',
  },
  {
    label: 'Cosmetology and Related Personal Grooming Arts, Other',
    value: '12.0499',
  },
  {
    label: 'Cooking and Related Culinary Arts, General',
    value: '12.05',
  },
  {
    label: 'Baking and Pastry Arts/Baker/Pastry Chef',
    value: '12.0501',
  },
  {
    label: 'Bartending/Bartender',
    value: '12.0502',
  },
  {
    label: 'Culinary Arts/Chef Training',
    value: '12.0503',
  },
  {
    label: 'Restaurant, Culinary, and Catering Management/Manager',
    value: '12.0504',
  },
  {
    label: 'Food Preparation/Professional Cooking/Kitchen Assistant',
    value: '12.0505',
  },
  {
    label: 'Meat Cutting/Meat Cutter',
    value: '12.0506',
  },
  {
    label: 'Food Service, Waiter/Waitress, and Dining Room Management/Manager',
    value: '12.0507',
  },
  {
    label: 'Institutional Food Workers',
    value: '12.0508',
  },
  {
    label: 'Culinary Science/Culinology',
    value: '12.0509',
  },
  {
    label: 'Wine Steward/Sommelier',
    value: '12.051',
  },
  {
    label: 'Culinary Arts and Related Services, Other',
    value: '12.0599',
  },
  {
    label: 'Casino Operations and Services, General',
    value: '12.0601',
  },
  {
    label: 'Casino Dealing',
    value: '12.0602',
  },
  {
    label: 'Casino Operations and Services, Other',
    value: '12.0699',
  },
  {
    label: 'Culinary, Entertainment, and Personal Services, Other',
    value: '12.9999',
  },
  {
    label: 'Education, General',
    value: '13.0101',
  },
  {
    label: 'Bilingual and Multilingual Education',
    value: '13.0201',
  },
  {
    label: 'Multicultural Education',
    value: '13.0202',
  },
  {
    label: 'Indian/Native American Education',
    value: '13.0203',
  },
  {
    label: 'Bilingual, Multilingual, and Multicultural Education, Other',
    value: '13.0299',
  },
  {
    label: 'Curriculum and Instruction',
    value: '13.0301',
  },
  {
    label: 'Educational Leadership and Administration, General',
    value: '13.0401',
  },
  {
    label: 'Administration of Special Education',
    value: '13.0402',
  },
  {
    label: 'Adult and Continuing Education Administration',
    value: '13.0403',
  },
  {
    label: 'Educational, Instructional, and Curriculum Supervision',
    value: '13.0404',
  },
  {
    label: 'Higher Education/Higher Education Administration',
    value: '13.0406',
  },
  {
    label: 'Community College Administration',
    value: '13.0407',
  },
  {
    label: 'Elementary and Middle School Administration/Principalship',
    value: '13.0408',
  },
  {
    label: 'Secondary School Administration/Principalship',
    value: '13.0409',
  },
  {
    label: 'Urban Education and Leadership',
    value: '13.041',
  },
  {
    label: 'Superintendency and Educational System Administration',
    value: '13.0411',
  },
  {
    label: 'International School Administration/Leadership',
    value: '13.0412',
  },
  {
    label: 'Education Entrepreneurship',
    value: '13.0413',
  },
  {
    label: 'Early Childhood Program Administration',
    value: '13.0414',
  },
  {
    label: 'Educational Administration and Supervision, Other',
    value: '13.0499',
  },
  {
    label: 'Educational/Instructional Technology',
    value: '13.0501',
  },
  {
    label: 'Educational Evaluation and Research',
    value: '13.0601',
  },
  {
    label: 'Educational Statistics and Research Methods',
    value: '13.0603',
  },
  {
    label: 'Educational Assessment, Testing, and Measurement',
    value: '13.0604',
  },
  {
    label: 'Learning Sciences',
    value: '13.0607',
  },
  {
    label: 'Institutional Research',
    value: '13.0608',
  },
  {
    label: 'Educational Assessment, Evaluation, and Research, Other',
    value: '13.0699',
  },
  {
    label: 'International and Comparative Education',
    value: '13.0701',
  },
  {
    label: 'Social and Philosophical Foundations of Education',
    value: '13.0901',
  },
  {
    label: 'Special Education and Teaching, General',
    value: '13.1001',
  },
  {
    label: 'Education/Teaching of Individuals with Hearing Impairments Including Deafness',
    value: '13.1003',
  },
  {
    label: 'Education/Teaching of the Gifted and Talented',
    value: '13.1004',
  },
  {
    label: 'Education/Teaching of Individuals with Emotional Disturbances',
    value: '13.1005',
  },
  {
    label: 'Education/Teaching of Individuals with Intellectual Disabilities',
    value: '13.1006',
  },
  {
    label: 'Education/Teaching of Individuals with Multiple Disabilities',
    value: '13.1007',
  },
  {
    label:
      'Education/Teaching of Individuals with Orthopedic and Other Physical Health Impairments',
    value: '13.1008',
  },
  {
    label: 'Education/Teaching of Individuals with Vision Impairments Including Blindness',
    value: '13.1009',
  },
  {
    label: 'Education/Teaching of Individuals with Specific Learning Disabilities',
    value: '13.1011',
  },
  {
    label: 'Education/Teaching of Individuals with Speech or Language Impairments',
    value: '13.1012',
  },
  {
    label: 'Education/Teaching of Individuals with Autism',
    value: '13.1013',
  },
  {
    label: 'Education/Teaching of Individuals Who are Developmentally Delayed',
    value: '13.1014',
  },
  {
    label: 'Education/Teaching of Individuals in Early Childhood Special Education Programs',
    value: '13.1015',
  },
  {
    label: 'Education/Teaching of Individuals with Traumatic Brain Injuries',
    value: '13.1016',
  },
  {
    label: 'Education/Teaching of Individuals in Elementary Special Education Programs',
    value: '13.1017',
  },
  {
    label:
      'Education/Teaching of Individuals in Junior High/Middle School Special Education Programs',
    value: '13.1018',
  },
  {
    label: 'Education/Teaching of Individuals in Secondary Special Education Programs',
    value: '13.1019',
  },
  {
    label: 'Special Education and Teaching, Other',
    value: '13.1099',
  },
  {
    label: 'Counselor Education/School Counseling and Guidance Services',
    value: '13.1101',
  },
  {
    label: 'College Student Counseling and Personnel Services',
    value: '13.1102',
  },
  {
    label: 'Student Counseling and Personnel Services, Other',
    value: '13.1199',
  },
  {
    label: 'Adult and Continuing Education and Teaching',
    value: '13.1201',
  },
  {
    label: 'Elementary Education and Teaching',
    value: '13.1202',
  },
  {
    label: 'Junior High/Intermediate/Middle School Education and Teaching',
    value: '13.1203',
  },
  {
    label: 'Secondary Education and Teaching',
    value: '13.1205',
  },
  {
    label: 'Teacher Education, Multiple Levels',
    value: '13.1206',
  },
  {
    label: 'Montessori Teacher Education',
    value: '13.1207',
  },
  {
    label: 'Waldorf/Steiner Teacher Education',
    value: '13.1208',
  },
  {
    label: 'Kindergarten/Preschool Education and Teaching',
    value: '13.1209',
  },
  {
    label: 'Early Childhood Education and Teaching',
    value: '13.121',
  },
  {
    label: 'Online Educator/Online Teaching',
    value: '13.1211',
  },
  {
    label: 'International Teaching and Learning',
    value: '13.1212',
  },
  {
    label: 'Science, Technology, Engineering, and Mathematics (STEM) Educational Methods',
    value: '13.1213',
  },
  {
    label: 'College/Postsecondary/University Teaching',
    value: '13.1214',
  },
  {
    label: 'Teacher Education and Professional Development, Specific Levels and Methods, Other',
    value: '13.1299',
  },
  {
    label: 'Agricultural Teacher Education',
    value: '13.1301',
  },
  {
    label: 'Art Teacher Education',
    value: '13.1302',
  },
  {
    label: 'Business and Innovation/Entrepreneurship Teacher Education',
    value: '13.1303',
  },
  {
    label: 'Driver and Safety Teacher Education',
    value: '13.1304',
  },
  {
    label: 'English/Language Arts Teacher Education',
    value: '13.1305',
  },
  {
    label: 'Foreign Language Teacher  Education',
    value: '13.1306',
  },
  {
    label: 'Health Teacher Education',
    value: '13.1307',
  },
  {
    label: 'Family and Consumer Sciences/Home Economics Teacher Education',
    value: '13.1308',
  },
  {
    label: 'Technology Teacher Education/Industrial Arts Teacher Education',
    value: '13.1309',
  },
  {
    label: 'Sales and Marketing Operations/Marketing and Distribution   Teacher Education',
    value: '13.131',
  },
  {
    label: 'Mathematics Teacher Education',
    value: '13.1311',
  },
  {
    label: 'Music Teacher Education',
    value: '13.1312',
  },
  {
    label: 'Physical Education Teaching and Coaching',
    value: '13.1314',
  },
  {
    label: 'Reading Teacher Education',
    value: '13.1315',
  },
  {
    label: 'Science Teacher Education/General Science Teacher Education',
    value: '13.1316',
  },
  {
    label: 'Social Science Teacher Education',
    value: '13.1317',
  },
  {
    label: 'Social Studies Teacher Education',
    value: '13.1318',
  },
  {
    label: 'Technical Teacher Education',
    value: '13.1319',
  },
  {
    label: 'Trade and Industrial Teacher Education',
    value: '13.132',
  },
  {
    label: 'Computer Teacher Education',
    value: '13.1321',
  },
  {
    label: 'Biology Teacher Education',
    value: '13.1322',
  },
  {
    label: 'Chemistry Teacher Education',
    value: '13.1323',
  },
  {
    label: 'Drama and Dance Teacher Education',
    value: '13.1324',
  },
  {
    label: 'French Language Teacher Education',
    value: '13.1325',
  },
  {
    label: 'German Language Teacher Education',
    value: '13.1326',
  },
  {
    label: 'Health Occupations Teacher Education',
    value: '13.1327',
  },
  {
    label: 'History Teacher Education',
    value: '13.1328',
  },
  {
    label: 'Physics Teacher Education',
    value: '13.1329',
  },
  {
    label: 'Spanish Language Teacher Education',
    value: '13.133',
  },
  {
    label: 'Speech Teacher Education',
    value: '13.1331',
  },
  {
    label: 'Geography Teacher Education',
    value: '13.1332',
  },
  {
    label: 'Latin Teacher Education',
    value: '13.1333',
  },
  {
    label: 'School Librarian/School Library Media Specialist',
    value: '13.1334',
  },
  {
    label: 'Psychology Teacher Education',
    value: '13.1335',
  },
  {
    label: 'Earth Science Teacher Education',
    value: '13.1337',
  },
  {
    label: 'Environmental Education',
    value: '13.1338',
  },
  {
    label: 'Communication Arts and Literature Teacher Education',
    value: '13.1339',
  },
  {
    label: 'Teacher Education and Professional Development, Specific Subject Areas, Other',
    value: '13.1399',
  },
  {
    label: 'Teaching English as a Second or Foreign Language/ESL Language Instructor',
    value: '13.1401',
  },
  {
    label: 'Teaching French as a Second or Foreign Language',
    value: '13.1402',
  },
  {
    label: 'Teaching English or French as a Second or Foreign Language, Other',
    value: '13.1499',
  },
  {
    label: 'Teacher Assistant/Aide',
    value: '13.1501',
  },
  {
    label: 'Adult Literacy Tutor/Instructor',
    value: '13.1502',
  },
  {
    label: 'Teaching Assistants/Aides, Other',
    value: '13.1599',
  },
  {
    label: 'Education, Other',
    value: '13.9999',
  },
  {
    label: 'Engineering, General',
    value: '14.0101',
  },
  {
    label: 'Pre-Engineering',
    value: '14.0102',
  },
  {
    label: 'Applied Engineering',
    value: '14.0103',
  },
  {
    label: 'Aerospace, Aeronautical, and Astronautical/Space Engineering, General',
    value: '14.0201',
  },
  {
    label: 'Astronautical Engineering',
    value: '14.0202',
  },
  {
    label: 'Aerospace, Aeronautical, and Astronautical/Space Engineering, Other',
    value: '14.0299',
  },
  {
    label: 'Agricultural Engineering',
    value: '14.0301',
  },
  {
    label: 'Architectural Engineering',
    value: '14.0401',
  },
  {
    label: 'Bioengineering and Biomedical Engineering',
    value: '14.0501',
  },
  {
    label: 'Ceramic Sciences and Engineering',
    value: '14.0601',
  },
  {
    label: 'Chemical Engineering',
    value: '14.0701',
  },
  {
    label: 'Chemical and Biomolecular Engineering',
    value: '14.0702',
  },
  {
    label: 'Chemical Engineering, Other',
    value: '14.0799',
  },
  {
    label: 'Civil Engineering, General',
    value: '14.0801',
  },
  {
    label: 'Geotechnical and Geoenvironmental Engineering',
    value: '14.0802',
  },
  {
    label: 'Structural Engineering',
    value: '14.0803',
  },
  {
    label: 'Transportation and Highway Engineering',
    value: '14.0804',
  },
  {
    label: 'Water Resources Engineering',
    value: '14.0805',
  },
  {
    label: 'Civil Engineering, Other',
    value: '14.0899',
  },
  {
    label: 'Computer Engineering, General',
    value: '14.0901',
  },
  {
    label: 'Computer Hardware Engineering',
    value: '14.0902',
  },
  {
    label: 'Computer Software Engineering',
    value: '14.0903',
  },
  {
    label: 'Computer Engineering, Other',
    value: '14.0999',
  },
  {
    label: 'Electrical and Electronics Engineering',
    value: '14.1001',
  },
  {
    label: 'Laser and Optical Engineering',
    value: '14.1003',
  },
  {
    label: 'Telecommunications Engineering',
    value: '14.1004',
  },
  {
    label: 'Electrical, Electronics, and Communications Engineering, Other',
    value: '14.1099',
  },
  {
    label: 'Engineering Mechanics',
    value: '14.1101',
  },
  {
    label: 'Engineering Physics/Applied Physics',
    value: '14.1201',
  },
  {
    label: 'Engineering Science',
    value: '14.1301',
  },
  {
    label: 'Environmental/Environmental Health Engineering',
    value: '14.1401',
  },
  {
    label: 'Materials Engineering',
    value: '14.1801',
  },
  {
    label: 'Mechanical Engineering',
    value: '14.1901',
  },
  {
    label: 'Metallurgical Engineering',
    value: '14.2001',
  },
  {
    label: 'Mining and Mineral Engineering',
    value: '14.2101',
  },
  {
    label: 'Naval Architecture and Marine Engineering',
    value: '14.2201',
  },
  {
    label: 'Nuclear Engineering',
    value: '14.2301',
  },
  {
    label: 'Ocean Engineering',
    value: '14.2401',
  },
  {
    label: 'Petroleum Engineering',
    value: '14.2501',
  },
  {
    label: 'Systems Engineering',
    value: '14.2701',
  },
  {
    label: 'Textile Sciences and Engineering',
    value: '14.2801',
  },
  {
    label: 'Polymer/Plastics Engineering',
    value: '14.3201',
  },
  {
    label: 'Construction Engineering',
    value: '14.3301',
  },
  {
    label: 'Forest Engineering',
    value: '14.3401',
  },
  {
    label: 'Industrial Engineering',
    value: '14.3501',
  },
  {
    label: 'Manufacturing Engineering',
    value: '14.3601',
  },
  {
    label: 'Operations Research',
    value: '14.3701',
  },
  {
    label: 'Surveying Engineering',
    value: '14.3801',
  },
  {
    label: 'Geological/Geophysical Engineering',
    value: '14.3901',
  },
  {
    label: 'Paper Science and Engineering',
    value: '14.4001',
  },
  {
    label: 'Electromechanical Engineering',
    value: '14.4101',
  },
  {
    label: 'Mechatronics, Robotics, and Automation Engineering',
    value: '14.4201',
  },
  {
    label: 'Biochemical Engineering',
    value: '14.4301',
  },
  {
    label: 'Engineering Chemistry',
    value: '14.4401',
  },
  {
    label: 'Biological/Biosystems Engineering',
    value: '14.4501',
  },
  {
    label: 'Electrical and Computer Engineering',
    value: '14.4701',
  },
  {
    label: 'Energy Systems Engineering, General',
    value: '14.4801',
  },
  {
    label: 'Power Plant Engineering',
    value: '14.4802',
  },
  {
    label: 'Energy Systems Engineering, Other',
    value: '14.4899',
  },
  {
    label: 'Engineering, Other',
    value: '14.9999',
  },
  {
    label: 'Engineering Technologies/Technicians, General',
    value: '15',
  },
  {
    label: 'Applied Engineering Technologies/Technicians',
    value: '15.0001',
  },
  {
    label: 'Architectural Engineering Technologies/Technicians',
    value: '15.0101',
  },
  {
    label: 'Civil Engineering Technologies/Technicians',
    value: '15.0201',
  },
  {
    label: 'Electrical, Electronic, and Communications Engineering Technology/Technician',
    value: '15.0303',
  },
  {
    label: 'Laser and Optical Technology/Technician',
    value: '15.0304',
  },
  {
    label: 'Telecommunications Technology/Technician',
    value: '15.0305',
  },
  {
    label: 'Integrated Circuit Design Technology/Technician',
    value: '15.0306',
  },
  {
    label: 'Audio Engineering Technology/Technician',
    value: '15.0307',
  },
  {
    label: 'Electrical/Electronic Engineering Technologies/Technicians, Other',
    value: '15.0399',
  },
  {
    label: 'Biomedical Technology/Technician',
    value: '15.0401',
  },
  {
    label: 'Electromechanical/Electromechanical Engineering Technology/Technician',
    value: '15.0403',
  },
  {
    label: 'Instrumentation Technology/Technician',
    value: '15.0404',
  },
  {
    label: 'Robotics Technology/Technician',
    value: '15.0405',
  },
  {
    label: 'Automation Engineer Technology/Technician',
    value: '15.0406',
  },
  {
    label: 'Mechatronics, Robotics, and Automation Engineering Technology/Technician',
    value: '15.0407',
  },
  {
    label: 'Electromechanical Technologies/Technicians, Other',
    value: '15.0499',
  },
  {
    label:
      'Heating, Ventilation, Air Conditioning and Refrigeration Engineering Technology/Technician',
    value: '15.0501',
  },
  {
    label: 'Energy Management and Systems Technology/Technician',
    value: '15.0503',
  },
  {
    label: 'Solar Energy Technology/Technician',
    value: '15.0505',
  },
  {
    label: 'Water Quality and Wastewater Treatment Management and Recycling Technology/Technician',
    value: '15.0506',
  },
  {
    label: 'Environmental/Environmental Engineering Technology/Technician',
    value: '15.0507',
  },
  {
    label: 'Hazardous Materials Management and Waste Technology/Technician',
    value: '15.0508',
  },
  {
    label: 'Environmental Control Technologies/Technicians, Other',
    value: '15.0599',
  },
  {
    label: 'Plastics and Polymer Engineering Technology/Technician',
    value: '15.0607',
  },
  {
    label: 'Metallurgical Technology/Technician',
    value: '15.0611',
  },
  {
    label: 'Industrial Technology/Technician',
    value: '15.0612',
  },
  {
    label: 'Manufacturing Engineering Technology/Technician',
    value: '15.0613',
  },
  {
    label: 'Welding Engineering Technology/Technician',
    value: '15.0614',
  },
  {
    label: 'Chemical Engineering Technology/Technician',
    value: '15.0615',
  },
  {
    label: 'Semiconductor Manufacturing Technology/Technician',
    value: '15.0616',
  },
  {
    label: 'Composite Materials Technology/Technician',
    value: '15.0617',
  },
  {
    label: 'Industrial Production Technologies/Technicians, Other',
    value: '15.0699',
  },
  {
    label: 'Occupational Safety and Health Technology/Technician',
    value: '15.0701',
  },
  {
    label: 'Quality Control Technology/Technician',
    value: '15.0702',
  },
  {
    label: 'Industrial Safety Technology/Technician',
    value: '15.0703',
  },
  {
    label: 'Hazardous Materials Information Systems Technology/Technician',
    value: '15.0704',
  },
  {
    label: 'Process Safety Technology/Technician',
    value: '15.0705',
  },
  {
    label: 'Quality Control and Safety Technologies/Technicians, Other',
    value: '15.0799',
  },
  {
    label: 'Aeronautical/Aerospace Engineering Technology/Technician',
    value: '15.0801',
  },
  {
    label: 'Automotive Engineering Technology/Technician',
    value: '15.0803',
  },
  {
    label: 'Mechanical/Mechanical Engineering Technology/Technician',
    value: '15.0805',
  },
  {
    label: 'Marine Engineering Technology/Technician',
    value: '15.0806',
  },
  {
    label: 'Motorsports Engineering Technology/Technician',
    value: '15.0807',
  },
  {
    label: 'Mechanical Engineering Related Technologies/Technicians, Other',
    value: '15.0899',
  },
  {
    label: 'Mining Technology/Technician',
    value: '15.0901',
  },
  {
    label: 'Petroleum Technology/Technician',
    value: '15.0903',
  },
  {
    label: 'Mining and Petroleum Technologies/Technicians, Other',
    value: '15.0999',
  },
  {
    label: 'Construction Engineering Technology/Technician',
    value: '15.1001',
  },
  {
    label: 'Surveying Technology/Surveying',
    value: '15.1102',
  },
  {
    label: 'Hydraulics and Fluid Power Technology/Technician',
    value: '15.1103',
  },
  {
    label: 'Engineering-Related Technologies/Technicians, Other',
    value: '15.1199',
  },
  {
    label: 'Computer Engineering Technology/Technician',
    value: '15.1201',
  },
  {
    label: 'Computer/Computer Systems Technology/Technician',
    value: '15.1202',
  },
  {
    label: 'Computer Hardware Technology/Technician',
    value: '15.1203',
  },
  {
    label: 'Computer Software Technology/Technician',
    value: '15.1204',
  },
  {
    label: 'Computer Engineering Technologies/Technicians, Other',
    value: '15.1299',
  },
  {
    label: 'Drafting and Design Technology/Technician, General',
    value: '15.1301',
  },
  {
    label: 'CAD/CADD Drafting and/or Design Technology/Technician',
    value: '15.1302',
  },
  {
    label: 'Architectural Drafting and Architectural CAD/CADD',
    value: '15.1303',
  },
  {
    label: 'Civil Drafting and Civil Engineering CAD/CADD',
    value: '15.1304',
  },
  {
    label: 'Electrical/Electronics Drafting and Electrical/Electronics CAD/CADD',
    value: '15.1305',
  },
  {
    label: 'Mechanical Drafting and Mechanical Drafting CAD/CADD',
    value: '15.1306',
  },
  {
    label: '3-D Modeling and Design Technology/Technician',
    value: '15.1307',
  },
  {
    label: 'Drafting/Design Engineering Technologies/Technicians, Other',
    value: '15.1399',
  },
  {
    label: 'Nuclear Engineering Technology/Technician',
    value: '15.1401',
  },
  {
    label: 'Engineering/Industrial Management',
    value: '15.1501',
  },
  {
    label: 'Engineering Design',
    value: '15.1502',
  },
  {
    label: 'Packaging Science',
    value: '15.1503',
  },
  {
    label: 'Engineering-Related Fields, Other',
    value: '15.1599',
  },
  {
    label: 'Nanotechnology',
    value: '15.1601',
  },
  {
    label: 'Energy Systems Technology/Technician',
    value: '15.1701',
  },
  {
    label: 'Power Plant Technology/Technician',
    value: '15.1702',
  },
  {
    label: 'Solar Energy Technology/Technician',
    value: '15.1703',
  },
  {
    label: 'Wind Energy Technology/Technician',
    value: '15.1704',
  },
  {
    label: 'Hydroelectric Energy Technology/Technician',
    value: '15.1705',
  },
  {
    label: 'Geothermal Energy Technology/Technician',
    value: '15.1706',
  },
  {
    label: 'Energy Systems Technologies/Technicians, Other',
    value: '15.1799',
  },
  {
    label: 'Engineering/Engineering-Related Technologies/Technicians, Other',
    value: '15.9999',
  },
  {
    label: 'Foreign Languages and Literatures, General',
    value: '16.0101',
  },
  {
    label: 'Linguistics',
    value: '16.0102',
  },
  {
    label: 'Language Interpretation and Translation',
    value: '16.0103',
  },
  {
    label: 'Comparative Literature',
    value: '16.0104',
  },
  {
    label: 'Applied Linguistics',
    value: '16.0105',
  },
  {
    label: 'Linguistic, Comparative, and Related Language Studies and Services, Other',
    value: '16.0199',
  },
  {
    label: 'African Languages, Literatures, and Linguistics',
    value: '16.0201',
  },
  {
    label: 'East Asian Languages, Literatures, and Linguistics, General',
    value: '16.03',
  },
  {
    label: 'Chinese Language and Literature',
    value: '16.0301',
  },
  {
    label: 'Japanese Language and Literature',
    value: '16.0302',
  },
  {
    label: 'Korean Language and Literature',
    value: '16.0303',
  },
  {
    label: 'Tibetan Language and Literature',
    value: '16.0304',
  },
  {
    label: 'East Asian Languages, Literatures, and Linguistics, Other',
    value: '16.0399',
  },
  {
    label: 'Slavic Languages, Literatures, and Linguistics, General',
    value: '16.04',
  },
  {
    label: 'Baltic Languages, Literatures, and Linguistics',
    value: '16.0401',
  },
  {
    label: 'Russian Language and Literature',
    value: '16.0402',
  },
  {
    label: 'Albanian Language and Literature',
    value: '16.0404',
  },
  {
    label: 'Bulgarian Language and Literature',
    value: '16.0405',
  },
  {
    label: 'Czech Language and Literature',
    value: '16.0406',
  },
  {
    label: 'Polish Language and Literature',
    value: '16.0407',
  },
  {
    label: 'Bosnian, Serbian, and Croatian Languages and Literatures',
    value: '16.0408',
  },
  {
    label: 'Slovak Language and Literature',
    value: '16.0409',
  },
  {
    label: 'Ukrainian Language and Literature',
    value: '16.041',
  },
  {
    label: 'Slavic, Baltic, and Albanian Languages, Literatures, and Linguistics, Other',
    value: '16.0499',
  },
  {
    label: 'Germanic Languages, Literatures, and Linguistics, General',
    value: '16.05',
  },
  {
    label: 'German Language and Literature',
    value: '16.0501',
  },
  {
    label: 'Scandinavian Languages, Literatures, and Linguistics',
    value: '16.0502',
  },
  {
    label: 'Danish Language and Literature',
    value: '16.0503',
  },
  {
    label: 'Dutch/Flemish Language and Literature',
    value: '16.0504',
  },
  {
    label: 'Norwegian Language and Literature',
    value: '16.0505',
  },
  {
    label: 'Swedish Language and Literature',
    value: '16.0506',
  },
  {
    label: 'Germanic Languages, Literatures, and Linguistics, Other',
    value: '16.0599',
  },
  {
    label: 'Modern Greek Language and Literature',
    value: '16.0601',
  },
  {
    label: 'South Asian Languages, Literatures, and Linguistics, General',
    value: '16.07',
  },
  {
    label: 'Hindi Language and Literature',
    value: '16.0701',
  },
  {
    label: 'Sanskrit and Classical Indian Languages, Literatures, and Linguistics',
    value: '16.0702',
  },
  {
    label: 'Bengali Language and Literature',
    value: '16.0704',
  },
  {
    label: 'Punjabi Language and Literature',
    value: '16.0705',
  },
  {
    label: 'Tamil Language and Literature',
    value: '16.0706',
  },
  {
    label: 'Urdu Language and Literature',
    value: '16.0707',
  },
  {
    label: 'South Asian Languages, Literatures, and Linguistics, Other',
    value: '16.0799',
  },
  {
    label: 'Iranian Languages, Literatures, and Linguistics',
    value: '16.0801',
  },
  {
    label: 'Romance Languages, Literatures, and Linguistics, General',
    value: '16.09',
  },
  {
    label: 'French Language and Literature',
    value: '16.0901',
  },
  {
    label: 'Italian Language and Literature',
    value: '16.0902',
  },
  {
    label: 'Portuguese Language and Literature',
    value: '16.0904',
  },
  {
    label: 'Spanish Language and Literature',
    value: '16.0905',
  },
  {
    label: 'Romanian Language and Literature',
    value: '16.0906',
  },
  {
    label: 'Catalan Language and Literature',
    value: '16.0907',
  },
  {
    label: 'Hispanic and Latin American Languages, Literatures, and Linguistics, General',
    value: '16.0908',
  },
  {
    label: 'Romance Languages, Literatures, and Linguistics, Other',
    value: '16.0999',
  },
  {
    label: 'American Indian/Native American Languages, Literatures, and Linguistics',
    value: '16.1001',
  },
  {
    label: 'Middle/Near Eastern and Semitic Languages, Literatures, and Linguistics, General',
    value: '16.11',
  },
  {
    label: 'Arabic Language and Literature',
    value: '16.1101',
  },
  {
    label: 'Hebrew Language and Literature',
    value: '16.1102',
  },
  {
    label: 'Ancient Near Eastern and Biblical Languages, Literatures, and Linguistics',
    value: '16.1103',
  },
  {
    label: 'Middle/Near Eastern and Semitic Languages, Literatures, and Linguistics, Other',
    value: '16.1199',
  },
  {
    label: 'Classics and Classical Languages, Literatures, and Linguistics, General',
    value: '16.12',
  },
  {
    label: 'Ancient/Classical Greek Language and Literature',
    value: '16.1202',
  },
  {
    label: 'Latin Language and Literature',
    value: '16.1203',
  },
  {
    label: 'Classics and Classical Languages, Literatures, and Linguistics, Other',
    value: '16.1299',
  },
  {
    label: 'Celtic Languages, Literatures, and Linguistics',
    value: '16.1301',
  },
  {
    label: 'Southeast Asian Languages, Literatures, and Linguistics, General',
    value: '16.14',
  },
  {
    label: 'Australian/Oceanic/Pacific Languages, Literatures, and Linguistics',
    value: '16.1401',
  },
  {
    label: 'Indonesian/Malay Languages and Literatures',
    value: '16.1402',
  },
  {
    label: 'Burmese Language and Literature',
    value: '16.1403',
  },
  {
    label: 'Filipino/Tagalog Language and Literature',
    value: '16.1404',
  },
  {
    label: 'Khmer/Cambodian Language and Literature',
    value: '16.1405',
  },
  {
    label: 'Lao Language and Literature',
    value: '16.1406',
  },
  {
    label: 'Thai Language and Literature',
    value: '16.1407',
  },
  {
    label: 'Vietnamese Language and Literature',
    value: '16.1408',
  },
  {
    label: 'Hawaiian Language and Literature',
    value: '16.1409',
  },
  {
    label:
      'Southeast Asian and Australasian/Pacific Languages, Literatures, and Linguistics, Other',
    value: '16.1499',
  },
  {
    label: 'Turkish Language and Literature',
    value: '16.1501',
  },
  {
    label: 'Uralic Languages, Literatures, and Linguistics',
    value: '16.1502',
  },
  {
    label: 'Hungarian/Magyar Language and Literature',
    value: '16.1503',
  },
  {
    label: 'Mongolian Language and Literature',
    value: '16.1504',
  },
  {
    label:
      'Turkic, Uralic-Altaic, Caucasian, and Central Asian Languages, Literatures, and Linguistics, Other',
    value: '16.1599',
  },
  {
    label: 'American Sign Language (ASL)',
    value: '16.1601',
  },
  {
    label: 'Linguistics of ASL and Other Sign Languages',
    value: '16.1602',
  },
  {
    label: 'Sign Language Interpretation and Translation',
    value: '16.1603',
  },
  {
    label: 'American Sign Language, Other',
    value: '16.1699',
  },
  {
    label: 'English as a Second Language',
    value: '16.1701',
  },
  {
    label: 'Armenian Language and Literature',
    value: '16.1801',
  },
  {
    label: 'Modern Languages',
    value: '16.9991',
  },
  {
    label: 'Foreign Languages, Literatures, and Linguistics, Other',
    value: '16.9999',
  },
  {
    label: 'Work and Family Studies',
    value: '19',
  },
  {
    label: 'Family and Consumer Sciences/Human Sciences, General',
    value: '19.0101',
  },
  {
    label: 'Business Family and Consumer Sciences/Human Sciences',
    value: '19.0201',
  },
  {
    label: 'Family and Consumer Sciences/Human Sciences Communication',
    value: '19.0202',
  },
  {
    label: 'Consumer Merchandising/Retailing Management',
    value: '19.0203',
  },
  {
    label: 'Family and Consumer Sciences/Human Sciences Business Services, Other',
    value: '19.0299',
  },
  {
    label: 'Family Resource Management Studies, General',
    value: '19.0401',
  },
  {
    label: 'Consumer Economics',
    value: '19.0402',
  },
  {
    label: 'Consumer Services and Advocacy',
    value: '19.0403',
  },
  {
    label: 'Family and Consumer Economics and Related Services, Other',
    value: '19.0499',
  },
  {
    label: 'Foods, Nutrition, and Wellness Studies, General',
    value: '19.0501',
  },
  {
    label: 'Human Nutrition',
    value: '19.0504',
  },
  {
    label: 'Foodservice Systems Administration/Management',
    value: '19.0505',
  },
  {
    label: 'Foods, Nutrition, and Related Services, Other',
    value: '19.0599',
  },
  {
    label: 'Housing and Human Environments, General',
    value: '19.0601',
  },
  {
    label: 'Facilities Planning and Management',
    value: '19.0604',
  },
  {
    label: 'Home Furnishings and Equipment Installers',
    value: '19.0605',
  },
  {
    label: 'Housing and Human Environments, Other',
    value: '19.0699',
  },
  {
    label: 'Human Development and Family Studies, General',
    value: '19.0701',
  },
  {
    label: 'Adult Development and Aging',
    value: '19.0702',
  },
  {
    label: 'Family Systems',
    value: '19.0704',
  },
  {
    label: 'Child Development',
    value: '19.0706',
  },
  {
    label: 'Family and Community Services',
    value: '19.0707',
  },
  {
    label: 'Child Care and Support Services Management',
    value: '19.0708',
  },
  {
    label: 'Child Care Provider/Assistant',
    value: '19.0709',
  },
  {
    label: 'Developmental Services Worker',
    value: '19.071',
  },
  {
    label: 'Early Childhood and Family Studies',
    value: '19.0711',
  },
  {
    label: 'Parent Education Services',
    value: '19.0712',
  },
  {
    label: 'Human Development, Family Studies, and Related Services, Other',
    value: '19.0799',
  },
  {
    label: 'Apparel and Textiles, General',
    value: '19.0901',
  },
  {
    label: 'Apparel and Textile Manufacture',
    value: '19.0902',
  },
  {
    label: 'Textile Science',
    value: '19.0904',
  },
  {
    label: 'Apparel and Textile Marketing Management',
    value: '19.0905',
  },
  {
    label: 'Fashion and Fabric Consultant',
    value: '19.0906',
  },
  {
    label: 'Apparel and Textiles, Other',
    value: '19.0999',
  },
  {
    label: 'Work and Family Studies',
    value: '19.1001',
  },
  {
    label: 'Family and Consumer Sciences/Human Sciences, Other',
    value: '19.9999',
  },
  {
    label: 'Legal Studies',
    value: '22',
  },
  {
    label: 'Pre-Law Studies',
    value: '22.0001',
  },
  {
    label: 'Non-Professional Legal Studies, Other',
    value: '22.0099',
  },
  {
    label: 'Law',
    value: '22.0101',
  },
  {
    label: 'Advanced Legal Research/Studies, General',
    value: '22.0201',
  },
  {
    label: 'Programs for Foreign Lawyers',
    value: '22.0202',
  },
  {
    label: 'American/US Law/Legal Studies/Jurisprudence',
    value: '22.0203',
  },
  {
    label: 'Energy, Environment, and Natural Resources Law',
    value: '22.0207',
  },
  {
    label: 'International Law and Legal Studies',
    value: '22.0209',
  },
  {
    label: 'Patent Law',
    value: '22.0213',
  },
  {
    label: 'Agriculture Law',
    value: '22.0214',
  },
  {
    label: 'Arts and Entertainment Law',
    value: '22.0215',
  },
  {
    label: 'Compliance Law',
    value: '22.0216',
  },
  {
    label: 'Criminal Law and Procedure',
    value: '22.0217',
  },
  {
    label: 'Entrepreneurship Law',
    value: '22.0218',
  },
  {
    label: 'Family/Child/Elder Law',
    value: '22.0219',
  },
  {
    label: 'Human Resources Law',
    value: '22.022',
  },
  {
    label: 'Insurance Law',
    value: '22.0221',
  },
  {
    label: 'Real Estate and Land Development Law',
    value: '22.0222',
  },
  {
    label: 'Transportation Law',
    value: '22.0223',
  },
  {
    label: 'Tribal/Indigenous Law',
    value: '22.0224',
  },
  {
    label: 'Legal Research and Advanced Professional Studies, Other',
    value: '22.0299',
  },
  {
    label: 'Legal Administrative Assistant/Secretary',
    value: '22.0301',
  },
  {
    label: 'Legal Assistant/Paralegal',
    value: '22.0302',
  },
  {
    label: 'Court Reporting and Captioning/Court Reporter',
    value: '22.0303',
  },
  {
    label: 'Court Interpreter',
    value: '22.0304',
  },
  {
    label: 'Scopist',
    value: '22.0305',
  },
  {
    label: 'Legal Support Services, Other',
    value: '22.0399',
  },
  {
    label: 'Legal Professions and Studies, Other',
    value: '22.9999',
  },
  {
    label: 'English Language and Literature, General',
    value: '23.0101',
  },
  {
    label: 'Writing, General',
    value: '23.1301',
  },
  {
    label: 'Creative Writing',
    value: '23.1302',
  },
  {
    label: 'Professional, Technical, Business, and Scientific Writing',
    value: '23.1303',
  },
  {
    label: 'Rhetoric and Composition',
    value: '23.1304',
  },
  {
    label: 'Rhetoric and Composition/Writing Studies, Other',
    value: '23.1399',
  },
  {
    label: 'General Literature',
    value: '23.1401',
  },
  {
    label: 'American Literature (United States)',
    value: '23.1402',
  },
  {
    label: 'American Literature (Canadian)',
    value: '23.1403',
  },
  {
    label: 'English Literature (British and Commonwealth)',
    value: '23.1404',
  },
  {
    label: "Children's and Adolescent Literature",
    value: '23.1405',
  },
  {
    label: 'Literature, Other',
    value: '23.1499',
  },
  {
    label: 'English Language and Literature/Letters, Other',
    value: '23.9999',
  },
  {
    label: 'Liberal Arts and Sciences/Liberal Studies',
    value: '24.0101',
  },
  {
    label: 'General Studies',
    value: '24.0102',
  },
  {
    label: 'Humanities/Humanistic Studies',
    value: '24.0103',
  },
  {
    label: 'Liberal Arts and Sciences, General Studies and Humanities, Other',
    value: '24.0199',
  },
  {
    label: 'Library and Information Science',
    value: '25.0101',
  },
  {
    label: 'Children and Youth Library Services',
    value: '25.0102',
  },
  {
    label: 'Archives/Archival Administration',
    value: '25.0103',
  },
  {
    label: 'Library Science and Administration, Other',
    value: '25.0199',
  },
  {
    label: 'Library and Archives Assisting',
    value: '25.0301',
  },
  {
    label: 'Library Science, Other',
    value: '25.9999',
  },
  {
    label: 'Biology/Biological Sciences, General',
    value: '26.0101',
  },
  {
    label: 'Biomedical Sciences, General',
    value: '26.0102',
  },
  {
    label: 'Biochemistry',
    value: '26.0202',
  },
  {
    label: 'Biophysics',
    value: '26.0203',
  },
  {
    label: 'Molecular Biology',
    value: '26.0204',
  },
  {
    label: 'Molecular Biochemistry',
    value: '26.0205',
  },
  {
    label: 'Molecular Biophysics',
    value: '26.0206',
  },
  {
    label: 'Structural Biology',
    value: '26.0207',
  },
  {
    label: 'Photobiology',
    value: '26.0208',
  },
  {
    label: 'Radiation Biology/Radiobiology',
    value: '26.0209',
  },
  {
    label: 'Biochemistry and Molecular Biology',
    value: '26.021',
  },
  {
    label: 'Biochemistry, Biophysics and Molecular Biology, Other',
    value: '26.0299',
  },
  {
    label: 'Botany/Plant Biology',
    value: '26.0301',
  },
  {
    label: 'Plant Pathology/Phytopathology',
    value: '26.0305',
  },
  {
    label: 'Plant Physiology',
    value: '26.0307',
  },
  {
    label: 'Plant Molecular Biology',
    value: '26.0308',
  },
  {
    label: 'Botany/Plant Biology, Other',
    value: '26.0399',
  },
  {
    label: 'Cell/Cellular Biology and Histology',
    value: '26.0401',
  },
  {
    label: 'Anatomy',
    value: '26.0403',
  },
  {
    label: 'Developmental Biology and Embryology',
    value: '26.0404',
  },
  {
    label: 'Cell/Cellular and Molecular Biology',
    value: '26.0406',
  },
  {
    label: 'Cell Biology and Anatomy',
    value: '26.0407',
  },
  {
    label: 'Cell/Cellular Biology and Anatomical Sciences, Other',
    value: '26.0499',
  },
  {
    label: 'Microbiology, General',
    value: '26.0502',
  },
  {
    label: 'Medical Microbiology and Bacteriology',
    value: '26.0503',
  },
  {
    label: 'Virology',
    value: '26.0504',
  },
  {
    label: 'Parasitology',
    value: '26.0505',
  },
  {
    label: 'Mycology',
    value: '26.0506',
  },
  {
    label: 'Immunology',
    value: '26.0507',
  },
  {
    label: 'Microbiology and Immunology',
    value: '26.0508',
  },
  {
    label: 'Infectious Disease and Global Health',
    value: '26.0509',
  },
  {
    label: 'Microbiological Sciences and Immunology, Other',
    value: '26.0599',
  },
  {
    label: 'Zoology/Animal Biology',
    value: '26.0701',
  },
  {
    label: 'Entomology',
    value: '26.0702',
  },
  {
    label: 'Animal Physiology',
    value: '26.0707',
  },
  {
    label: 'Animal Behavior and Ethology',
    value: '26.0708',
  },
  {
    label: 'Wildlife Biology',
    value: '26.0709',
  },
  {
    label: 'Zoology/Animal Biology, Other',
    value: '26.0799',
  },
  {
    label: 'Genetics, General',
    value: '26.0801',
  },
  {
    label: 'Molecular Genetics',
    value: '26.0802',
  },
  {
    label: 'Microbial and Eukaryotic Genetics',
    value: '26.0803',
  },
  {
    label: 'Animal Genetics',
    value: '26.0804',
  },
  {
    label: 'Plant Genetics',
    value: '26.0805',
  },
  {
    label: 'Human/Medical Genetics',
    value: '26.0806',
  },
  {
    label: 'Genome Sciences/Genomics',
    value: '26.0807',
  },
  {
    label: 'Genetics, Other',
    value: '26.0899',
  },
  {
    label: 'Physiology, General',
    value: '26.0901',
  },
  {
    label: 'Molecular Physiology',
    value: '26.0902',
  },
  {
    label: 'Cell Physiology',
    value: '26.0903',
  },
  {
    label: 'Endocrinology',
    value: '26.0904',
  },
  {
    label: 'Reproductive Biology',
    value: '26.0905',
  },
  {
    label: 'Cardiovascular Science',
    value: '26.0907',
  },
  {
    label: 'Exercise Physiology and Kinesiology',
    value: '26.0908',
  },
  {
    label: 'Vision Science/Physiological Optics',
    value: '26.0909',
  },
  {
    label: 'Pathology/Experimental Pathology',
    value: '26.091',
  },
  {
    label: 'Oncology and Cancer Biology',
    value: '26.0911',
  },
  {
    label: 'Aerospace Physiology and Medicine',
    value: '26.0912',
  },
  {
    label: 'Biomechanics',
    value: '26.0913',
  },
  {
    label: 'Physiology, Pathology, and Related Sciences, Other',
    value: '26.0999',
  },
  {
    label: 'Pharmacology',
    value: '26.1001',
  },
  {
    label: 'Molecular Pharmacology',
    value: '26.1002',
  },
  {
    label: 'Neuropharmacology',
    value: '26.1003',
  },
  {
    label: 'Toxicology',
    value: '26.1004',
  },
  {
    label: 'Molecular Toxicology',
    value: '26.1005',
  },
  {
    label: 'Environmental Toxicology',
    value: '26.1006',
  },
  {
    label: 'Pharmacology and Toxicology',
    value: '26.1007',
  },
  {
    label: 'Pharmacology and Toxicology, Other',
    value: '26.1099',
  },
  {
    label: 'Biometry/Biometrics',
    value: '26.1101',
  },
  {
    label: 'Biostatistics',
    value: '26.1102',
  },
  {
    label: 'Bioinformatics',
    value: '26.1103',
  },
  {
    label: 'Computational Biology',
    value: '26.1104',
  },
  {
    label: 'Biomathematics, Bioinformatics, and Computational Biology, Other',
    value: '26.1199',
  },
  {
    label: 'Biotechnology',
    value: '26.1201',
  },
  {
    label: 'Ecology',
    value: '26.1301',
  },
  {
    label: 'Marine Biology and Biological Oceanography',
    value: '26.1302',
  },
  {
    label: 'Evolutionary Biology',
    value: '26.1303',
  },
  {
    label: 'Aquatic Biology/Limnology',
    value: '26.1304',
  },
  {
    label: 'Environmental Biology',
    value: '26.1305',
  },
  {
    label: 'Population Biology',
    value: '26.1306',
  },
  {
    label: 'Conservation Biology',
    value: '26.1307',
  },
  {
    label: 'Systematic Biology/Biological Systematics',
    value: '26.1308',
  },
  {
    label: 'Epidemiology',
    value: '26.1309',
  },
  {
    label: 'Ecology and Evolutionary Biology',
    value: '26.131',
  },
  {
    label: 'Epidemiology and Biostatistics',
    value: '26.1311',
  },
  {
    label: 'Ecology, Evolution, Systematics and Population Biology, Other',
    value: '26.1399',
  },
  {
    label: 'Molecular Medicine',
    value: '26.1401',
  },
  {
    label: 'Neuroscience',
    value: '26.1501',
  },
  {
    label: 'Neuroanatomy',
    value: '26.1502',
  },
  {
    label: 'Neurobiology and Anatomy',
    value: '26.1503',
  },
  {
    label: 'Neurobiology and Behavior',
    value: '26.1504',
  },
  {
    label: 'Neurobiology and Neurosciences, Other',
    value: '26.1599',
  },
  {
    label: 'Biological and Biomedical Sciences, Other',
    value: '26.9999',
  },
  {
    label: 'Mathematics, General',
    value: '27.0101',
  },
  {
    label: 'Algebra and Number Theory',
    value: '27.0102',
  },
  {
    label: 'Analysis and Functional Analysis',
    value: '27.0103',
  },
  {
    label: 'Geometry/Geometric Analysis',
    value: '27.0104',
  },
  {
    label: 'Topology and Foundations',
    value: '27.0105',
  },
  {
    label: 'Mathematics, Other',
    value: '27.0199',
  },
  {
    label: 'Applied Mathematics, General',
    value: '27.0301',
  },
  {
    label: 'Computational Mathematics',
    value: '27.0303',
  },
  {
    label: 'Computational and Applied Mathematics',
    value: '27.0304',
  },
  {
    label: 'Financial Mathematics',
    value: '27.0305',
  },
  {
    label: 'Mathematical Biology',
    value: '27.0306',
  },
  {
    label: 'Applied Mathematics, Other',
    value: '27.0399',
  },
  {
    label: 'Statistics, General',
    value: '27.0501',
  },
  {
    label: 'Mathematical Statistics and Probability',
    value: '27.0502',
  },
  {
    label: 'Mathematics and Statistics',
    value: '27.0503',
  },
  {
    label: 'Statistics, Other',
    value: '27.0599',
  },
  {
    label: 'Applied Statistics, General',
    value: '27.0601',
  },
  {
    label: 'Mathematics and Statistics, Other',
    value: '27.9999',
  },
  {
    label: 'Air Force JROTC/ROTC',
    value: '28.0101',
  },
  {
    label: 'Air Force ROTC, Air Science and Operations, Other',
    value: '28.0199',
  },
  {
    label: 'Army JROTC/ROTC',
    value: '28.0301',
  },
  {
    label: 'Army ROTC, Military Science and Operations, Other',
    value: '28.0399',
  },
  {
    label: 'Navy/Marine Corps JROTC/ROTC',
    value: '28.0401',
  },
  {
    label: 'Navy/Marine Corps ROTC, Naval Science and Operations, Other',
    value: '28.0499',
  },
  {
    label: 'Air Science/Airpower Studies',
    value: '28.0501',
  },
  {
    label: 'Air and Space Operational Art and Science',
    value: '28.0502',
  },
  {
    label: 'Military Operational Art and Science/Studies',
    value: '28.0503',
  },
  {
    label: 'Advanced Military and Operational Studies',
    value: '28.0504',
  },
  {
    label: 'Naval Science and Operational Studies',
    value: '28.0505',
  },
  {
    label: 'Special, Irregular and Counterterrorist Operations',
    value: '28.0506',
  },
  {
    label: 'Military Science and Operational Studies, Other',
    value: '28.0599',
  },
  {
    label: 'Strategic Studies, General',
    value: '28.0601',
  },
  {
    label: 'Military and Strategic Leadership',
    value: '28.0602',
  },
  {
    label: 'Military and International Operational Law',
    value: '28.0603',
  },
  {
    label: 'Joint Operations Planning and Strategy',
    value: '28.0604',
  },
  {
    label: 'Weapons of Mass Destruction',
    value: '28.0605',
  },
  {
    label: 'National Security Policy and Strategy, Other',
    value: '28.0699',
  },
  {
    label: 'National Resource Strategy and Policy',
    value: '28.0701',
  },
  {
    label: 'Industry Studies',
    value: '28.0702',
  },
  {
    label: 'Military Installation Management',
    value: '28.0703',
  },
  {
    label: 'Military Economics and Management, Other',
    value: '28.0799',
  },
  {
    label: 'Military Science, Leadership and Operational Art, Other',
    value: '28.9999',
  },
  {
    label: 'Intelligence, General',
    value: '29.0201',
  },
  {
    label: 'Strategic Intelligence',
    value: '29.0202',
  },
  {
    label: 'Signal/Geospatial Intelligence',
    value: '29.0203',
  },
  {
    label: 'Command and Control (C3, C4I) Systems and Operations',
    value: '29.0204',
  },
  {
    label: 'Information Operations/Joint Information Operations',
    value: '29.0205',
  },
  {
    label: 'Information/Psychological Warfare and Military Media Relations',
    value: '29.0206',
  },
  {
    label: 'Cyber/Electronic Operations and Warfare',
    value: '29.0207',
  },
  {
    label: 'Intelligence, Command Control and Information Operations, Other',
    value: '29.0299',
  },
  {
    label: 'Combat Systems Engineering',
    value: '29.0301',
  },
  {
    label: 'Directed Energy Systems',
    value: '29.0302',
  },
  {
    label: 'Engineering Acoustics',
    value: '29.0303',
  },
  {
    label: 'Low-Observables and Stealth Technology',
    value: '29.0304',
  },
  {
    label: 'Space Systems Operations',
    value: '29.0305',
  },
  {
    label: 'Operational Oceanography',
    value: '29.0306',
  },
  {
    label: 'Undersea Warfare',
    value: '29.0307',
  },
  {
    label: 'Military Applied Sciences, Other',
    value: '29.0399',
  },
  {
    label: 'Aerospace Ground Equipment Technology',
    value: '29.0401',
  },
  {
    label: 'Air and Space Operations Technology',
    value: '29.0402',
  },
  {
    label: 'Aircraft Armament Systems Technology',
    value: '29.0403',
  },
  {
    label: 'Explosive Ordinance/Bomb Disposal',
    value: '29.0404',
  },
  {
    label: 'Joint Command/Task Force (C3, C4I) Systems',
    value: '29.0405',
  },
  {
    label: 'Military Information Systems Technology',
    value: '29.0406',
  },
  {
    label: 'Missile and Space Systems Technology',
    value: '29.0407',
  },
  {
    label: 'Munitions Systems/Ordinance Technology',
    value: '29.0408',
  },
  {
    label: 'Radar Communications and Systems Technology',
    value: '29.0409',
  },
  {
    label: 'Military Systems and Maintenance Technology, Other',
    value: '29.0499',
  },
  {
    label: 'Military Technology and Applied Sciences Management',
    value: '29.0601',
  },
  {
    label: 'Military Technologies and Applied Sciences, Other',
    value: '29.9999',
  },
  {
    label: 'Multi-/Interdisciplinary Studies, General',
    value: '30',
  },
  {
    label: 'Comprehensive Transition and Postsecondary (CTP) Program',
    value: '30.0001',
  },
  {
    label: 'Biological and Physical Sciences',
    value: '30.0101',
  },
  {
    label: 'Peace Studies and Conflict Resolution',
    value: '30.0501',
  },
  {
    label: 'Systems Science and Theory',
    value: '30.0601',
  },
  {
    label: 'Mathematics and Computer Science',
    value: '30.0801',
  },
  {
    label: 'Biopsychology',
    value: '30.1001',
  },
  {
    label: 'Gerontology',
    value: '30.1101',
  },
  {
    label: 'Historic Preservation and Conservation, General',
    value: '30.1201',
  },
  {
    label: 'Cultural Resource Management and Policy Analysis',
    value: '30.1202',
  },
  {
    label: 'Historic Preservation and Conservation, Other',
    value: '30.1299',
  },
  {
    label: 'Medieval and Renaissance Studies',
    value: '30.1301',
  },
  {
    label: 'Museology/Museum Studies',
    value: '30.1401',
  },
  {
    label: 'Science, Technology and Society',
    value: '30.1501',
  },
  {
    label: 'Accounting and Computer Science',
    value: '30.1601',
  },
  {
    label: 'Behavioral Sciences',
    value: '30.1701',
  },
  {
    label: 'Natural Sciences',
    value: '30.1801',
  },
  {
    label: 'Nutrition Sciences',
    value: '30.1901',
  },
  {
    label: 'International/Globalization Studies',
    value: '30.2001',
  },
  {
    label: 'Holocaust and Related Studies',
    value: '30.2101',
  },
  {
    label: 'Ancient Studies/Civilization',
    value: '30.2201',
  },
  {
    label: 'Classical, Ancient Mediterranean, and Near Eastern Studies and Archaeology',
    value: '30.2202',
  },
  {
    label: 'Classical and Ancient Studies, Other',
    value: '30.2299',
  },
  {
    label: 'Intercultural/Multicultural and Diversity Studies',
    value: '30.2301',
  },
  {
    label: 'Cognitive Science, General',
    value: '30.2501',
  },
  {
    label: 'Contemplative Studies/Inquiry',
    value: '30.2502',
  },
  {
    label: 'Cognitive Science, Other',
    value: '30.2599',
  },
  {
    label: 'Cultural Studies/Critical Theory and Analysis',
    value: '30.2601',
  },
  {
    label: 'Human Biology',
    value: '30.2701',
  },
  {
    label: 'Dispute Resolution',
    value: '30.2801',
  },
  {
    label: 'Maritime Studies',
    value: '30.2901',
  },
  {
    label: 'Computational Science',
    value: '30.3001',
  },
  {
    label: 'Human Computer Interaction',
    value: '30.3101',
  },
  {
    label: 'Marine Sciences',
    value: '30.3201',
  },
  {
    label: 'Sustainability Studies',
    value: '30.3301',
  },
  {
    label: 'Anthrozoology',
    value: '30.3401',
  },
  {
    label: 'Climate Science',
    value: '30.3501',
  },
  {
    label: 'Cultural Studies and Comparative Literature',
    value: '30.3601',
  },
  {
    label: 'Design for Human Health',
    value: '30.3701',
  },
  {
    label: 'Earth Systems Science',
    value: '30.3801',
  },
  {
    label: 'Economics and Computer Science',
    value: '30.3901',
  },
  {
    label: 'Economics and Foreign Language/Literature',
    value: '30.4001',
  },
  {
    label: 'Environmental Geosciences',
    value: '30.4101',
  },
  {
    label: 'Geoarcheaology',
    value: '30.4201',
  },
  {
    label: 'Geobiology',
    value: '30.4301',
  },
  {
    label: 'Geography and Environmental Studies',
    value: '30.4401',
  },
  {
    label: 'History and Language/Literature',
    value: '30.4501',
  },
  {
    label: 'History and Political Science',
    value: '30.4601',
  },
  {
    label: 'Linguistics and Anthropology',
    value: '30.4701',
  },
  {
    label: 'Linguistics and Computer Science',
    value: '30.4801',
  },
  {
    label: 'Mathematical Economics',
    value: '30.4901',
  },
  {
    label: 'Mathematics and Atmospheric/Oceanic Science',
    value: '30.5001',
  },
  {
    label: 'Philosophy, Politics, and Economics',
    value: '30.5101',
  },
  {
    label: 'Digital Humanities and Textual Studies, General',
    value: '30.5201',
  },
  {
    label: 'Digital Humanities',
    value: '30.5202',
  },
  {
    label: 'Textual Studies',
    value: '30.5203',
  },
  {
    label: 'Digital Humanities and Textual Studies, Other',
    value: '30.5299',
  },
  {
    label: 'Thanatology',
    value: '30.5301',
  },
  {
    label: 'Data Science, General',
    value: '30.7001',
  },
  {
    label: 'Data Science, Other',
    value: '30.7099',
  },
  {
    label: 'Data Analytics, General',
    value: '30.7101',
  },
  {
    label: 'Business Analytics',
    value: '30.7102',
  },
  {
    label: 'Data Visualization',
    value: '30.7103',
  },
  {
    label: 'Financial Analytics',
    value: '30.7104',
  },
  {
    label: 'Data Analytics, Other',
    value: '30.7199',
  },
  {
    label: 'Multi-/Interdisciplinary Studies, Other',
    value: '30.9999',
  },
  {
    label: 'Parks, Recreation, and Leisure Studies',
    value: '31.0101',
  },
  {
    label: 'Parks, Recreation, and Leisure Facilities Management, General',
    value: '31.0301',
  },
  {
    label: 'Golf Course Operation and Grounds Management',
    value: '31.0302',
  },
  {
    label: 'Parks, Recreation, and Leisure Facilities Management, Other',
    value: '31.0399',
  },
  {
    label: 'Sports, Kinesiology, and Physical Education/Fitness, General',
    value: '31.0501',
  },
  {
    label: 'Sport and Fitness Administration/Management',
    value: '31.0504',
  },
  {
    label: 'Exercise Science and Kinesiology',
    value: '31.0505',
  },
  {
    label: 'Physical Fitness Technician',
    value: '31.0507',
  },
  {
    label: 'Sports Studies',
    value: '31.0508',
  },
  {
    label: 'Sports, Kinesiology, and Physical Education/Fitness, Other',
    value: '31.0599',
  },
  {
    label: 'Outdoor Education',
    value: '31.0601',
  },
  {
    label: 'Parks, Recreation, Leisure, Fitness, and Kinesiology, Other',
    value: '31.9999',
  },
  {
    label: 'Philosophy and Religious Studies, General',
    value: '38.0001',
  },
  {
    label: 'Philosophy',
    value: '38.0101',
  },
  {
    label: 'Logic',
    value: '38.0102',
  },
  {
    label: 'Ethics',
    value: '38.0103',
  },
  {
    label: 'Applied and Professional Ethics',
    value: '38.0104',
  },
  {
    label: 'Philosophy, Other',
    value: '38.0199',
  },
  {
    label: 'Religion/Religious Studies',
    value: '38.0201',
  },
  {
    label: 'Buddhist Studies',
    value: '38.0202',
  },
  {
    label: 'Christian Studies',
    value: '38.0203',
  },
  {
    label: 'Hindu Studies',
    value: '38.0204',
  },
  {
    label: 'Islamic Studies',
    value: '38.0205',
  },
  {
    label: 'Jewish/Judaic Studies',
    value: '38.0206',
  },
  {
    label: 'Talmudic Studies',
    value: '38.0207',
  },
  {
    label: 'Catholic Studies',
    value: '38.0208',
  },
  {
    label: 'Mormon Studies',
    value: '38.0209',
  },
  {
    label: 'Religion/Religious Studies, Other',
    value: '38.0299',
  },
  {
    label: 'Philosophy and Religious Studies, Other',
    value: '38.9999',
  },
  {
    label: 'Bible/Biblical Studies',
    value: '39.0201',
  },
  {
    label: 'Missions/Missionary Studies',
    value: '39.0301',
  },
  {
    label: 'Church Planting',
    value: '39.0302',
  },
  {
    label: 'Missions/Missionary Studies and Missiology, Other',
    value: '39.0399',
  },
  {
    label: 'Religious Education',
    value: '39.0401',
  },
  {
    label: 'Religious/Sacred Music',
    value: '39.0501',
  },
  {
    label: 'Worship Ministry',
    value: '39.0502',
  },
  {
    label: 'Religious Music and Worship, Other',
    value: '39.0599',
  },
  {
    label: 'Theology/Theological Studies',
    value: '39.0601',
  },
  {
    label: 'Divinity/Ministry',
    value: '39.0602',
  },
  {
    label: 'Pre-Theology/Pre-Ministerial Studies',
    value: '39.0604',
  },
  {
    label: 'Rabbinical Studies',
    value: '39.0605',
  },
  {
    label: 'Talmudic Studies',
    value: '39.0606',
  },
  {
    label: 'Theological and Ministerial Studies, Other',
    value: '39.0699',
  },
  {
    label: 'Pastoral Studies/Counseling',
    value: '39.0701',
  },
  {
    label: 'Youth Ministry',
    value: '39.0702',
  },
  {
    label: 'Urban Ministry',
    value: '39.0703',
  },
  {
    label: "Women's Ministry",
    value: '39.0704',
  },
  {
    label: 'Lay Ministry',
    value: '39.0705',
  },
  {
    label: 'Chaplain/Chaplaincy Studies',
    value: '39.0706',
  },
  {
    label: 'Pastoral Counseling and Specialized Ministries, Other',
    value: '39.0799',
  },
  {
    label: 'Religious Institution Administration and Management',
    value: '39.0801',
  },
  {
    label: 'Religious/Canon Law',
    value: '39.0802',
  },
  {
    label: 'Religious Institution Administration and Law, Other',
    value: '39.0899',
  },
  {
    label: 'Theology and Religious Vocations, Other',
    value: '39.9999',
  },
  {
    label: 'Physical Sciences, General',
    value: '40.0101',
  },
  {
    label: 'Astronomy',
    value: '40.0201',
  },
  {
    label: 'Astrophysics',
    value: '40.0202',
  },
  {
    label: 'Planetary Astronomy and Science',
    value: '40.0203',
  },
  {
    label: 'Astronomy and Astrophysics, Other',
    value: '40.0299',
  },
  {
    label: 'Atmospheric Sciences and Meteorology, General',
    value: '40.0401',
  },
  {
    label: 'Atmospheric Chemistry and Climatology',
    value: '40.0402',
  },
  {
    label: 'Atmospheric Physics and Dynamics',
    value: '40.0403',
  },
  {
    label: 'Meteorology',
    value: '40.0404',
  },
  {
    label: 'Atmospheric Sciences and Meteorology, Other',
    value: '40.0499',
  },
  {
    label: 'Chemistry, General',
    value: '40.0501',
  },
  {
    label: 'Analytical Chemistry',
    value: '40.0502',
  },
  {
    label: 'Inorganic Chemistry',
    value: '40.0503',
  },
  {
    label: 'Organic Chemistry',
    value: '40.0504',
  },
  {
    label: 'Physical Chemistry',
    value: '40.0506',
  },
  {
    label: 'Polymer Chemistry',
    value: '40.0507',
  },
  {
    label: 'Chemical Physics',
    value: '40.0508',
  },
  {
    label: 'Environmental Chemistry',
    value: '40.0509',
  },
  {
    label: 'Forensic Chemistry',
    value: '40.051',
  },
  {
    label: 'Theoretical Chemistry',
    value: '40.0511',
  },
  {
    label: 'Cheminformatics/Chemistry Informatics',
    value: '40.0512',
  },
  {
    label: 'Chemistry, Other',
    value: '40.0599',
  },
  {
    label: 'Geology/Earth Science, General',
    value: '40.0601',
  },
  {
    label: 'Geochemistry',
    value: '40.0602',
  },
  {
    label: 'Geophysics and Seismology',
    value: '40.0603',
  },
  {
    label: 'Paleontology',
    value: '40.0604',
  },
  {
    label: 'Hydrology and Water Resources Science',
    value: '40.0605',
  },
  {
    label: 'Geochemistry and Petrology',
    value: '40.0606',
  },
  {
    label: 'Oceanography, Chemical and Physical',
    value: '40.0607',
  },
  {
    label: 'Geological and Earth Sciences/Geosciences, Other',
    value: '40.0699',
  },
  {
    label: 'Physics, General',
    value: '40.0801',
  },
  {
    label: 'Atomic/Molecular Physics',
    value: '40.0802',
  },
  {
    label: 'Elementary Particle Physics',
    value: '40.0804',
  },
  {
    label: 'Plasma and High-Temperature Physics',
    value: '40.0805',
  },
  {
    label: 'Nuclear Physics',
    value: '40.0806',
  },
  {
    label: 'Optics/Optical Sciences',
    value: '40.0807',
  },
  {
    label: 'Condensed Matter and Materials Physics',
    value: '40.0808',
  },
  {
    label: 'Acoustics',
    value: '40.0809',
  },
  {
    label: 'Theoretical and Mathematical Physics',
    value: '40.081',
  },
  {
    label: 'Physics, Other',
    value: '40.0899',
  },
  {
    label: 'Materials Science',
    value: '40.1001',
  },
  {
    label: 'Materials Chemistry',
    value: '40.1002',
  },
  {
    label: 'Materials Sciences, Other',
    value: '40.1099',
  },
  {
    label: 'Physics and Astronomy',
    value: '40.1101',
  },
  {
    label: 'Physical Sciences, Other',
    value: '40.9999',
  },
  {
    label: 'Science Technologies/Technicians, General',
    value: '41',
  },
  {
    label: 'Biology/Biotechnology Technology/Technician',
    value: '41.0101',
  },
  {
    label: 'Industrial Radiologic Technology/Technician',
    value: '41.0204',
  },
  {
    label: 'Nuclear/Nuclear Power Technology/Technician',
    value: '41.0205',
  },
  {
    label: 'Nuclear and Industrial Radiologic Technologies/Technicians, Other',
    value: '41.0299',
  },
  {
    label: 'Chemical Technology/Technician',
    value: '41.0301',
  },
  {
    label: 'Chemical Process Technology',
    value: '41.0303',
  },
  {
    label: 'Physical Science Technologies/Technicians, Other',
    value: '41.0399',
  },
  {
    label: 'Science Technologies/Technicians, Other',
    value: '41.9999',
  },
  {
    label: 'Psychology, General',
    value: '42.0101',
  },
  {
    label: 'Cognitive Psychology and Psycholinguistics',
    value: '42.2701',
  },
  {
    label: 'Comparative Psychology',
    value: '42.2702',
  },
  {
    label: 'Developmental and Child Psychology',
    value: '42.2703',
  },
  {
    label: 'Experimental Psychology',
    value: '42.2704',
  },
  {
    label: 'Personality Psychology',
    value: '42.2705',
  },
  {
    label: 'Behavioral Neuroscience',
    value: '42.2706',
  },
  {
    label: 'Social Psychology',
    value: '42.2707',
  },
  {
    label: 'Psychometrics and Quantitative Psychology',
    value: '42.2708',
  },
  {
    label: 'Psychopharmacology',
    value: '42.2709',
  },
  {
    label: 'Developmental and Adolescent Psychology',
    value: '42.271',
  },
  {
    label: 'Research and Experimental Psychology, Other',
    value: '42.2799',
  },
  {
    label: 'Clinical Psychology',
    value: '42.2801',
  },
  {
    label: 'Community Psychology',
    value: '42.2802',
  },
  {
    label: 'Counseling Psychology',
    value: '42.2803',
  },
  {
    label: 'Industrial and Organizational Psychology',
    value: '42.2804',
  },
  {
    label: 'School Psychology',
    value: '42.2805',
  },
  {
    label: 'Educational Psychology',
    value: '42.2806',
  },
  {
    label: 'Clinical Child Psychology',
    value: '42.2807',
  },
  {
    label: 'Environmental Psychology',
    value: '42.2808',
  },
  {
    label: 'Geropsychology',
    value: '42.2809',
  },
  {
    label: 'Health/Medical Psychology',
    value: '42.281',
  },
  {
    label: 'Family Psychology',
    value: '42.2811',
  },
  {
    label: 'Forensic Psychology',
    value: '42.2812',
  },
  {
    label: 'Applied Psychology',
    value: '42.2813',
  },
  {
    label: 'Applied Behavior Analysis',
    value: '42.2814',
  },
  {
    label: 'Performance and Sport Psychology',
    value: '42.2815',
  },
  {
    label: 'Somatic Psychology',
    value: '42.2816',
  },
  {
    label: 'Transpersonal/Spiritual Psychology',
    value: '42.2817',
  },
  {
    label: 'Clinical, Counseling and Applied Psychology, Other',
    value: '42.2899',
  },
  {
    label: 'Psychology, Other',
    value: '42.9999',
  },
  {
    label: 'Criminal Justice and Corrections, General',
    value: '43.01',
  },
  {
    label: 'Corrections',
    value: '43.0102',
  },
  {
    label: 'Criminal Justice/Law Enforcement Administration',
    value: '43.0103',
  },
  {
    label: 'Criminal Justice/Safety Studies',
    value: '43.0104',
  },
  {
    label: 'Forensic Science and Technology',
    value: '43.0106',
  },
  {
    label: 'Criminal Justice/Police Science',
    value: '43.0107',
  },
  {
    label: 'Security and Loss Prevention Services',
    value: '43.0109',
  },
  {
    label: 'Juvenile Corrections',
    value: '43.011',
  },
  {
    label: 'Criminalistics and Criminal Science',
    value: '43.0111',
  },
  {
    label: 'Securities Services Administration/Management',
    value: '43.0112',
  },
  {
    label: 'Corrections Administration',
    value: '43.0113',
  },
  {
    label: 'Law Enforcement Investigation and Interviewing',
    value: '43.0114',
  },
  {
    label: 'Law Enforcement Record-Keeping and Evidence Management',
    value: '43.0115',
  },
  {
    label: 'Cyber/Computer Forensics and Counterterrorism',
    value: '43.0116',
  },
  {
    label: 'Financial Forensics and Fraud Investigation',
    value: '43.0117',
  },
  {
    label: 'Law Enforcement Intelligence Analysis',
    value: '43.0118',
  },
  {
    label: 'Critical Incident Response/Special Police Operations',
    value: '43.0119',
  },
  {
    label: 'Protective Services Operations',
    value: '43.012',
  },
  {
    label: 'Suspension and Debarment Investigation',
    value: '43.0121',
  },
  {
    label: 'Maritime Law Enforcement',
    value: '43.0122',
  },
  {
    label: 'Cultural/Archaelogical Resources Protection',
    value: '43.0123',
  },
  {
    label: 'Corrections and Criminal Justice, Other',
    value: '43.0199',
  },
  {
    label: 'Fire Prevention and Safety Technology/Technician',
    value: '43.0201',
  },
  {
    label: 'Fire Services Administration',
    value: '43.0202',
  },
  {
    label: 'Fire Science/Fire-fighting',
    value: '43.0203',
  },
  {
    label: 'Fire Systems Technology',
    value: '43.0204',
  },
  {
    label: 'Fire/Arson Investigation and Prevention',
    value: '43.0205',
  },
  {
    label: 'Wildland/Forest Firefighting and Investigation',
    value: '43.0206',
  },
  {
    label: 'Fire Protection, Other',
    value: '43.0299',
  },
  {
    label: 'Homeland Security',
    value: '43.0301',
  },
  {
    label: 'Crisis/Emergency/Disaster Management',
    value: '43.0302',
  },
  {
    label: 'Critical Infrastructure Protection',
    value: '43.0303',
  },
  {
    label: 'Terrorism and Counterterrorism Operations',
    value: '43.0304',
  },
  {
    label: 'Homeland Security, Other',
    value: '43.0399',
  },
  {
    label: 'Security Science and Technology, General',
    value: '43.0401',
  },
  {
    label: 'Criminalistics and Criminal Science',
    value: '43.0402',
  },
  {
    label: 'Cyber/Computer Forensics and Counterterrorism',
    value: '43.0403',
  },
  {
    label: 'Cybersecurity Defense Strategy/Policy',
    value: '43.0404',
  },
  {
    label: 'Financial Forensics and Fraud Investigation',
    value: '43.0405',
  },
  {
    label: 'Forensic Science and Technology',
    value: '43.0406',
  },
  {
    label: 'Geospatial Intelligence',
    value: '43.0407',
  },
  {
    label: 'Law Enforcement Intelligence Analysis',
    value: '43.0408',
  },
  {
    label: 'Security Science and Technology, Other',
    value: '43.0499',
  },
  {
    label:
      'Homeland Security, Law Enforcement, Firefighting and Related Protective Services, Other',
    value: '43.9999',
  },
  {
    label: 'Human Services, General',
    value: '44',
  },
  {
    label: 'Community Organization and Advocacy',
    value: '44.0201',
  },
  {
    label: 'Public Administration',
    value: '44.0401',
  },
  {
    label: 'Public Works Management',
    value: '44.0402',
  },
  {
    label: 'Transportation and Infrastructure Planning/Studies',
    value: '44.0403',
  },
  {
    label: 'Public Administration, Other',
    value: '44.0499',
  },
  {
    label: 'Public Policy Analysis, General',
    value: '44.0501',
  },
  {
    label: 'Education Policy Analysis',
    value: '44.0502',
  },
  {
    label: 'Health Policy Analysis',
    value: '44.0503',
  },
  {
    label: 'International Policy Analysis',
    value: '44.0504',
  },
  {
    label: 'Public Policy Analysis, Other',
    value: '44.0599',
  },
  {
    label: 'Social Work',
    value: '44.0701',
  },
  {
    label: 'Youth Services/Administration',
    value: '44.0702',
  },
  {
    label: 'Forensic Social Work',
    value: '44.0703',
  },
  {
    label: 'Social Work, Other',
    value: '44.0799',
  },
  {
    label: 'Public Administration and Social Service Professions, Other',
    value: '44.9999',
  },
  {
    label: 'Social Sciences, General',
    value: '45.0101',
  },
  {
    label: 'Research Methodology and Quantitative Methods',
    value: '45.0102',
  },
  {
    label: 'Survey Research/Methodology',
    value: '45.0103',
  },
  {
    label: 'Social Sciences, Other',
    value: '45.0199',
  },
  {
    label: 'Anthropology, General',
    value: '45.0201',
  },
  {
    label: 'Physical and Biological Anthropology',
    value: '45.0202',
  },
  {
    label: 'Medical Anthropology',
    value: '45.0203',
  },
  {
    label: 'Cultural Anthropology',
    value: '45.0204',
  },
  {
    label: 'Forensic Anthropology',
    value: '45.0205',
  },
  {
    label: 'Anthropology, Other',
    value: '45.0299',
  },
  {
    label: 'Archeology',
    value: '45.0301',
  },
  {
    label: 'Criminology',
    value: '45.0401',
  },
  {
    label: 'Demography and Population Studies',
    value: '45.0501',
  },
  {
    label: 'Applied Demography',
    value: '45.0502',
  },
  {
    label: 'Demography, Other',
    value: '45.0599',
  },
  {
    label: 'Economics, General',
    value: '45.0601',
  },
  {
    label: 'Applied Economics',
    value: '45.0602',
  },
  {
    label: 'Econometrics and Quantitative Economics',
    value: '45.0603',
  },
  {
    label: 'Development Economics and International Development',
    value: '45.0604',
  },
  {
    label: 'International Economics',
    value: '45.0605',
  },
  {
    label: 'Economics, Other',
    value: '45.0699',
  },
  {
    label: 'Geography',
    value: '45.0701',
  },
  {
    label: 'Geographic Information Science and Cartography',
    value: '45.0702',
  },
  {
    label: 'Geography, Other',
    value: '45.0799',
  },
  {
    label: 'International Relations and Affairs',
    value: '45.0901',
  },
  {
    label: 'National Security Policy Studies',
    value: '45.0902',
  },
  {
    label: 'International Relations and National Security Studies, Other',
    value: '45.0999',
  },
  {
    label: 'Political Science and Government, General',
    value: '45.1001',
  },
  {
    label: 'American Government and Politics (United States)',
    value: '45.1002',
  },
  {
    label: 'Canadian Government and Politics',
    value: '45.1003',
  },
  {
    label: 'Political Economy',
    value: '45.1004',
  },
  {
    label: 'Political Science and Government, Other',
    value: '45.1099',
  },
  {
    label: 'Sociology, General',
    value: '45.1101',
  },
  {
    label: 'Applied/Public Sociology',
    value: '45.1102',
  },
  {
    label: 'Rural Sociology',
    value: '45.1103',
  },
  {
    label: 'Sociology, Other',
    value: '45.1199',
  },
  {
    label: 'Urban Studies/Affairs',
    value: '45.1201',
  },
  {
    label: 'Sociology and Anthropology',
    value: '45.1301',
  },
  {
    label: 'Rural Sociology',
    value: '45.1401',
  },
  {
    label: 'Geography and Anthropology',
    value: '45.1501',
  },
  {
    label: 'Social Sciences, Other',
    value: '45.9999',
  },
  {
    label: 'Construction Trades, General',
    value: '46',
  },
  {
    label: 'Mason/Masonry',
    value: '46.0101',
  },
  {
    label: 'Carpentry/Carpenter',
    value: '46.0201',
  },
  {
    label: 'Electrical and Power Transmission Installation/Installer, General',
    value: '46.0301',
  },
  {
    label: 'Electrician',
    value: '46.0302',
  },
  {
    label: 'Lineworker',
    value: '46.0303',
  },
  {
    label: 'Electrical and Power Transmission Installers, Other',
    value: '46.0399',
  },
  {
    label: 'Building/Property Maintenance',
    value: '46.0401',
  },
  {
    label: 'Concrete Finishing/Concrete Finisher',
    value: '46.0402',
  },
  {
    label: 'Building/Home/Construction Inspection/Inspector',
    value: '46.0403',
  },
  {
    label: 'Drywall Installation/Drywaller',
    value: '46.0404',
  },
  {
    label: 'Glazier',
    value: '46.0406',
  },
  {
    label: 'Painting/Painter and Wall Coverer',
    value: '46.0408',
  },
  {
    label: 'Roofer',
    value: '46.041',
  },
  {
    label: 'Metal Building Assembly/Assembler',
    value: '46.0411',
  },
  {
    label: 'Building/Construction Site Management/Manager',
    value: '46.0412',
  },
  {
    label: 'Carpet, Floor, and Tile Worker',
    value: '46.0413',
  },
  {
    label: 'Insulator',
    value: '46.0414',
  },
  {
    label: 'Building Construction Technology/Technician',
    value: '46.0415',
  },
  {
    label: 'Building/Construction Finishing, Management, and Inspection, Other',
    value: '46.0499',
  },
  {
    label: 'Pipefitting/Pipefitter and Sprinkler Fitter',
    value: '46.0502',
  },
  {
    label: 'Plumbing Technology/Plumber',
    value: '46.0503',
  },
  {
    label: 'Well Drilling/Driller',
    value: '46.0504',
  },
  {
    label: 'Blasting/Blaster',
    value: '46.0505',
  },
  {
    label: 'Plumbing and Related Water Supply Services, Other',
    value: '46.0599',
  },
  {
    label: 'Construction Trades, Other',
    value: '46.9999',
  },
  {
    label: 'Mechanics and Repairers, General',
    value: '47',
  },
  {
    label:
      'Electrical/Electronics Equipment Installation and Repair Technology/Technician, General',
    value: '47.0101',
  },
  {
    label: 'Business Machine Repair',
    value: '47.0102',
  },
  {
    label: 'Communications Systems Installation and Repair Technology/Technician',
    value: '47.0103',
  },
  {
    label: 'Computer Installation and Repair Technology/Technician',
    value: '47.0104',
  },
  {
    label: 'Industrial Electronics Technology/Technician',
    value: '47.0105',
  },
  {
    label: 'Appliance Installation and Repair Technology/Technician',
    value: '47.0106',
  },
  {
    label: 'Security System Installation, Repair, and Inspection Technology/Technician',
    value: '47.011',
  },
  {
    label: 'Electrical/Electronics Maintenance and Repair Technologies/Technicians, Other',
    value: '47.0199',
  },
  {
    label:
      'Heating, Air Conditioning, Ventilation and Refrigeration Maintenance Technology/Technician',
    value: '47.0201',
  },
  {
    label: 'Heavy Equipment Maintenance Technology/Technician',
    value: '47.0302',
  },
  {
    label: 'Industrial Mechanics and Maintenance Technology/Technician',
    value: '47.0303',
  },
  {
    label: 'Heavy/Industrial Equipment Maintenance Technologies/Technicians, Other',
    value: '47.0399',
  },
  {
    label: 'Gunsmithing/Gunsmith',
    value: '47.0402',
  },
  {
    label: 'Locksmithing and Safe Repair',
    value: '47.0403',
  },
  {
    label: 'Musical Instrument Fabrication and Repair',
    value: '47.0404',
  },
  {
    label: 'Watchmaking and Jewelrymaking',
    value: '47.0408',
  },
  {
    label: 'Parts and Warehousing Operations and Maintenance Technology/Technician',
    value: '47.0409',
  },
  {
    label: 'Precision Systems Maintenance and Repair Technologies/Technicians, Other',
    value: '47.0499',
  },
  {
    label: 'Vehicle Maintenance and Repair Technology/Technician, General',
    value: '47.06',
  },
  {
    label: 'Autobody/Collision and Repair Technology/Technician',
    value: '47.0603',
  },
  {
    label: 'Automobile/Automotive Mechanics Technology/Technician',
    value: '47.0604',
  },
  {
    label: 'Diesel Mechanics Technology/Technician',
    value: '47.0605',
  },
  {
    label: 'Small Engine Mechanics and Repair Technology/Technician',
    value: '47.0606',
  },
  {
    label: 'Airframe Mechanics and Aircraft Maintenance Technology/Technician',
    value: '47.0607',
  },
  {
    label: 'Aircraft Powerplant Technology/Technician',
    value: '47.0608',
  },
  {
    label: 'Avionics Maintenance Technology/Technician',
    value: '47.0609',
  },
  {
    label: 'Bicycle Mechanics and Repair Technology/Technician',
    value: '47.061',
  },
  {
    label: 'Motorcycle Maintenance and Repair Technology/Technician',
    value: '47.0611',
  },
  {
    label: 'Vehicle Emissions Inspection and Maintenance Technology/Technician',
    value: '47.0612',
  },
  {
    label: 'Medium/Heavy Vehicle and Truck Technology/Technician',
    value: '47.0613',
  },
  {
    label: 'Alternative Fuel Vehicle Technology/Technician',
    value: '47.0614',
  },
  {
    label: 'Engine Machinist',
    value: '47.0615',
  },
  {
    label: 'Marine Maintenance/Fitter and Ship Repair Technology/Technician',
    value: '47.0616',
  },
  {
    label: 'High Performance and Custom Engine Technician/Mechanic',
    value: '47.0617',
  },
  {
    label: 'Recreation Vehicle (RV) Service Technician',
    value: '47.0618',
  },
  {
    label: 'Vehicle Maintenance and Repair Technologies/Technicians, Other',
    value: '47.0699',
  },
  {
    label: 'Energy Systems Installation and Repair Technology/Technician',
    value: '47.0701',
  },
  {
    label: 'Solar Energy System Installation and Repair Technology/Technician',
    value: '47.0703',
  },
  {
    label: 'Wind Energy System Installation and Repair Technology/Technician',
    value: '47.0704',
  },
  {
    label: 'Hydroelectric Energy System Installation and Repair Technology/Technician',
    value: '47.0705',
  },
  {
    label: 'Geothermal Energy System Installation and Repair Technology/Technician',
    value: '47.0706',
  },
  {
    label: 'Energy Systems Maintenance and Repair Technologies/Technicians, Other',
    value: '47.0799',
  },
  {
    label: 'Mechanic and Repair Technologies/Technicians, Other',
    value: '47.9999',
  },
  {
    label: 'Precision Production Trades, General',
    value: '48',
  },
  {
    label: 'Upholstery/Upholsterer',
    value: '48.0303',
  },
  {
    label: 'Shoe, Boot and Leather Repair',
    value: '48.0304',
  },
  {
    label: 'Leatherworking and Upholstery, Other',
    value: '48.0399',
  },
  {
    label: 'Machine Tool Technology/Machinist',
    value: '48.0501',
  },
  {
    label: 'Machine Shop Technology/Assistant',
    value: '48.0503',
  },
  {
    label: 'Sheet Metal Technology/Sheetworking',
    value: '48.0506',
  },
  {
    label: 'Tool and Die Technology/Technician',
    value: '48.0507',
  },
  {
    label: 'Welding Technology/Welder',
    value: '48.0508',
  },
  {
    label: 'Ironworking/Ironworker',
    value: '48.0509',
  },
  {
    label: 'Computer Numerically Controlled (CNC) Machinist Technology/CNC Machinist',
    value: '48.051',
  },
  {
    label: 'Metal Fabricator',
    value: '48.0511',
  },
  {
    label: 'Precision Metal Working, Other',
    value: '48.0599',
  },
  {
    label: 'Woodworking, General',
    value: '48.0701',
  },
  {
    label: 'Furniture Design and Manufacturing',
    value: '48.0702',
  },
  {
    label: 'Cabinetmaking and Millwork',
    value: '48.0703',
  },
  {
    label: 'Wooden Boatbuilding Technology/Technician',
    value: '48.0704',
  },
  {
    label: 'Woodworking, Other',
    value: '48.0799',
  },
  {
    label: 'Boilermaking/Boilermaker',
    value: '48.0801',
  },
  {
    label: 'Precision Production, Other',
    value: '48.9999',
  },
  {
    label: 'Aeronautics/Aviation/Aerospace Science and Technology, General',
    value: '49.0101',
  },
  {
    label: 'Airline/Commercial/Professional Pilot and Flight Crew',
    value: '49.0102',
  },
  {
    label: 'Aviation/Airway Management and Operations',
    value: '49.0104',
  },
  {
    label: 'Air Traffic Controller',
    value: '49.0105',
  },
  {
    label: 'Airline Flight Attendant',
    value: '49.0106',
  },
  {
    label: 'Flight Instructor',
    value: '49.0108',
  },
  {
    label: 'Air Transportation, Other',
    value: '49.0199',
  },
  {
    label: 'Construction/Heavy Equipment/Earthmoving Equipment Operation',
    value: '49.0202',
  },
  {
    label: 'Truck and Bus Driver/Commercial Vehicle Operator and Instructor',
    value: '49.0205',
  },
  {
    label: 'Mobil Crane Operator/Operation',
    value: '49.0206',
  },
  {
    label: 'Flagging and Traffic Control',
    value: '49.0207',
  },
  {
    label: 'Railroad and Railway Transportation',
    value: '49.0208',
  },
  {
    label: 'Forklift Operation/Operator',
    value: '49.0209',
  },
  {
    label: 'Ground Transportation, Other',
    value: '49.0299',
  },
  {
    label: 'Commercial Fishing',
    value: '49.0303',
  },
  {
    label: 'Diver, Professional and Instructor',
    value: '49.0304',
  },
  {
    label: 'Marine Science/Merchant Marine Officer',
    value: '49.0309',
  },
  {
    label: 'Marine Transportation, Other',
    value: '49.0399',
  },
  {
    label: 'Transportation and Materials Moving, Other',
    value: '49.9999',
  },
  {
    label: 'Visual and Performing Arts, General',
    value: '50.0101',
  },
  {
    label: 'Digital Arts',
    value: '50.0102',
  },
  {
    label: 'Crafts/Craft Design, Folk Art and Artisanry',
    value: '50.0201',
  },
  {
    label: 'Dance, General',
    value: '50.0301',
  },
  {
    label: 'Ballet',
    value: '50.0302',
  },
  {
    label: 'Dance, Other',
    value: '50.0399',
  },
  {
    label: 'Design and Visual Communications, General',
    value: '50.0401',
  },
  {
    label: 'Commercial and Advertising Art',
    value: '50.0402',
  },
  {
    label: 'Industrial and Product Design',
    value: '50.0404',
  },
  {
    label: 'Commercial Photography',
    value: '50.0406',
  },
  {
    label: 'Fashion/Apparel Design',
    value: '50.0407',
  },
  {
    label: 'Interior Design',
    value: '50.0408',
  },
  {
    label: 'Graphic Design',
    value: '50.0409',
  },
  {
    label: 'Illustration',
    value: '50.041',
  },
  {
    label: 'Game and Interactive Media Design',
    value: '50.0411',
  },
  {
    label: 'Design and Applied Arts, Other',
    value: '50.0499',
  },
  {
    label: 'Drama and Dramatics/Theatre Arts, General',
    value: '50.0501',
  },
  {
    label: 'Technical Theatre/Theatre Design and Technology',
    value: '50.0502',
  },
  {
    label: 'Playwriting and Screenwriting',
    value: '50.0504',
  },
  {
    label: 'Theatre Literature, History and Criticism',
    value: '50.0505',
  },
  {
    label: 'Acting',
    value: '50.0506',
  },
  {
    label: 'Directing and Theatrical Production',
    value: '50.0507',
  },
  {
    label: 'Musical Theatre',
    value: '50.0509',
  },
  {
    label: 'Costume Design',
    value: '50.051',
  },
  {
    label: 'Comedy Writing and Performance',
    value: '50.0511',
  },
  {
    label: 'Theatre and Dance',
    value: '50.0512',
  },
  {
    label: 'Dramatic/Theatre Arts and Stagecraft, Other',
    value: '50.0599',
  },
  {
    label: 'Film/Cinema/Media Studies',
    value: '50.0601',
  },
  {
    label: 'Cinematography and Film/Video Production',
    value: '50.0602',
  },
  {
    label: 'Photography',
    value: '50.0605',
  },
  {
    label: 'Documentary Production',
    value: '50.0607',
  },
  {
    label: 'Film/Video and Photographic Arts, Other',
    value: '50.0699',
  },
  {
    label: 'Art/Art Studies, General',
    value: '50.0701',
  },
  {
    label: 'Fine/Studio Arts, General',
    value: '50.0702',
  },
  {
    label: 'Art History, Criticism and Conservation',
    value: '50.0703',
  },
  {
    label: 'Drawing',
    value: '50.0705',
  },
  {
    label: 'Intermedia/Multimedia',
    value: '50.0706',
  },
  {
    label: 'Painting',
    value: '50.0708',
  },
  {
    label: 'Sculpture',
    value: '50.0709',
  },
  {
    label: 'Printmaking',
    value: '50.071',
  },
  {
    label: 'Ceramic Arts and Ceramics',
    value: '50.0711',
  },
  {
    label: 'Fiber, Textile and Weaving Arts',
    value: '50.0712',
  },
  {
    label: 'Jewelry Arts',
    value: '50.0713',
  },
  {
    label: 'Metal Arts',
    value: '50.0714',
  },
  {
    label: 'Fine Arts and Art Studies, Other',
    value: '50.0799',
  },
  {
    label: 'Music, General',
    value: '50.0901',
  },
  {
    label: 'Music History, Literature, and Theory',
    value: '50.0902',
  },
  {
    label: 'Music Performance, General',
    value: '50.0903',
  },
  {
    label: 'Music Theory and Composition',
    value: '50.0904',
  },
  {
    label: 'Musicology and Ethnomusicology',
    value: '50.0905',
  },
  {
    label: 'Conducting',
    value: '50.0906',
  },
  {
    label: 'Keyboard Instruments',
    value: '50.0907',
  },
  {
    label: 'Voice and Opera',
    value: '50.0908',
  },
  {
    label: 'Jazz/Jazz Studies',
    value: '50.091',
  },
  {
    label: 'Stringed Instruments',
    value: '50.0911',
  },
  {
    label: 'Music Pedagogy',
    value: '50.0912',
  },
  {
    label: 'Music Technology',
    value: '50.0913',
  },
  {
    label: 'Brass Instruments',
    value: '50.0914',
  },
  {
    label: 'Woodwind Instruments',
    value: '50.0915',
  },
  {
    label: 'Percussion Instruments',
    value: '50.0916',
  },
  {
    label: 'Sound Arts',
    value: '50.0917',
  },
  {
    label: 'Music, Other',
    value: '50.0999',
  },
  {
    label: 'Arts, Entertainment, and Media Management, General',
    value: '50.1001',
  },
  {
    label: 'Fine and Studio Arts Management',
    value: '50.1002',
  },
  {
    label: 'Music Management',
    value: '50.1003',
  },
  {
    label: 'Theatre/Theatre Arts Management',
    value: '50.1004',
  },
  {
    label: 'Arts, Entertainment, and Media Management, Other',
    value: '50.1099',
  },
  {
    label: 'Community/Environmental/Socially-Engaged Art',
    value: '50.1101',
  },
  {
    label: 'Visual and Performing Arts, Other',
    value: '50.9999',
  },
  {
    label: 'Health Services/Allied Health/Health Sciences, General',
    value: '51',
  },
  {
    label: 'Health and Wellness, General',
    value: '51.0001',
  },
  {
    label: 'Communication Sciences and Disorders, General',
    value: '51.0201',
  },
  {
    label: 'Audiology/Audiologist',
    value: '51.0202',
  },
  {
    label: 'Speech-Language Pathology/Pathologist',
    value: '51.0203',
  },
  {
    label: 'Audiology/Audiologist and Speech-Language Pathology/Pathologist',
    value: '51.0204',
  },
  {
    label: 'Communication Disorders Sciences and Services, Other',
    value: '51.0299',
  },
  {
    label: 'Digital Dentistry',
    value: '51.0512',
  },
  {
    label: 'Geriatric Dentistry',
    value: '51.0513',
  },
  {
    label: 'Implantology/Implant Dentistry',
    value: '51.0514',
  },
  {
    label: 'Dental Assisting/Assistant',
    value: '51.0601',
  },
  {
    label: 'Dental Hygiene/Hygienist',
    value: '51.0602',
  },
  {
    label: 'Dental Laboratory Technology/Technician',
    value: '51.0603',
  },
  {
    label: 'Dental Services and Allied Professions, Other',
    value: '51.0699',
  },
  {
    label: 'Health/Health Care Administration/Management',
    value: '51.0701',
  },
  {
    label: 'Hospital and Health Care Facilities Administration/Management',
    value: '51.0702',
  },
  {
    label: 'Health Unit Coordinator/Ward Clerk',
    value: '51.0703',
  },
  {
    label: 'Health Unit Manager/Ward Supervisor',
    value: '51.0704',
  },
  {
    label: 'Medical Office Management/Administration',
    value: '51.0705',
  },
  {
    label: 'Health Information/Medical Records Administration/Administrator',
    value: '51.0706',
  },
  {
    label: 'Health Information/Medical Records Technology/Technician',
    value: '51.0707',
  },
  {
    label: 'Medical Transcription/Transcriptionist',
    value: '51.0708',
  },
  {
    label: 'Medical Office Computer Specialist/Assistant',
    value: '51.0709',
  },
  {
    label: 'Medical Office Assistant/Specialist',
    value: '51.071',
  },
  {
    label: 'Medical/Health Management and Clinical Assistant/Specialist',
    value: '51.0711',
  },
  {
    label: 'Medical Reception/Receptionist',
    value: '51.0712',
  },
  {
    label: 'Medical Insurance Coding Specialist/Coder',
    value: '51.0713',
  },
  {
    label: 'Medical Insurance Specialist/Medical Biller',
    value: '51.0714',
  },
  {
    label: 'Health/Medical Claims Examiner',
    value: '51.0715',
  },
  {
    label: 'Medical Administrative/Executive Assistant and Medical Secretary',
    value: '51.0716',
  },
  {
    label: 'Medical Staff Services Technology/Technician',
    value: '51.0717',
  },
  {
    label: 'Long Term Care Administration/Management',
    value: '51.0718',
  },
  {
    label: 'Clinical Research Coordinator',
    value: '51.0719',
  },
  {
    label: 'Regulatory Science/Affairs',
    value: '51.072',
  },
  {
    label: 'Disease Registry Data Management',
    value: '51.0721',
  },
  {
    label: 'Healthcare Innovation',
    value: '51.0722',
  },
  {
    label: 'Healthcare Information Privacy Assurance and Security',
    value: '51.0723',
  },
  {
    label: 'Health and Medical Administrative Services, Other',
    value: '51.0799',
  },
  {
    label: 'Medical/Clinical Assistant',
    value: '51.0801',
  },
  {
    label: 'Clinical/Medical Laboratory Assistant',
    value: '51.0802',
  },
  {
    label: 'Occupational Therapist Assistant',
    value: '51.0803',
  },
  {
    label: 'Pharmacy Technician/Assistant',
    value: '51.0805',
  },
  {
    label: 'Physical Therapy Assistant',
    value: '51.0806',
  },
  {
    label: 'Veterinary/Animal Health Technology/Technician and Veterinary Assistant',
    value: '51.0808',
  },
  {
    label: 'Anesthesiologist Assistant',
    value: '51.0809',
  },
  {
    label: 'Emergency Care Attendant (EMT Ambulance)',
    value: '51.081',
  },
  {
    label: 'Pathology/Pathologist Assistant',
    value: '51.0811',
  },
  {
    label: 'Respiratory Therapy Technician/Assistant',
    value: '51.0812',
  },
  {
    label: 'Chiropractic Technician/Assistant',
    value: '51.0813',
  },
  {
    label: 'Radiologist Assistant',
    value: '51.0814',
  },
  {
    label: 'Lactation Consultant',
    value: '51.0815',
  },
  {
    label: 'Speech-Language Pathology Assistant',
    value: '51.0816',
  },
  {
    label: 'Allied Health and Medical Assisting Services, Other',
    value: '51.0899',
  },
  {
    label: 'Cardiovascular Technology/Technologist',
    value: '51.0901',
  },
  {
    label: 'Electrocardiograph Technology/Technician',
    value: '51.0902',
  },
  {
    label: 'Electroneurodiagnostic/Electroencephalographic Technology/Technologist',
    value: '51.0903',
  },
  {
    label: 'Emergency Medical Technology/Technician (EMT Paramedic)',
    value: '51.0904',
  },
  {
    label: 'Nuclear Medical Technology/Technologist',
    value: '51.0905',
  },
  {
    label: 'Perfusion Technology/Perfusionist',
    value: '51.0906',
  },
  {
    label: 'Medical Radiologic Technology/Science - Radiation Therapist',
    value: '51.0907',
  },
  {
    label: 'Respiratory Care Therapy/Therapist',
    value: '51.0908',
  },
  {
    label: 'Surgical Technology/Technologist',
    value: '51.0909',
  },
  {
    label: 'Diagnostic Medical Sonography/Sonographer and Ultrasound Technician',
    value: '51.091',
  },
  {
    label: 'Radiologic Technology/Science - Radiographer',
    value: '51.0911',
  },
  {
    label: 'Physician Assistant',
    value: '51.0912',
  },
  {
    label: 'Athletic Training/Trainer',
    value: '51.0913',
  },
  {
    label: 'Gene/Genetic Therapy',
    value: '51.0914',
  },
  {
    label: 'Cardiopulmonary Technology/Technologist',
    value: '51.0915',
  },
  {
    label: 'Radiation Protection/Health Physics Technician',
    value: '51.0916',
  },
  {
    label: 'Polysomnography',
    value: '51.0917',
  },
  {
    label: 'Hearing Instrument Specialist',
    value: '51.0918',
  },
  {
    label: 'Mammography Technology/Technician',
    value: '51.0919',
  },
  {
    label: 'Magnetic Resonance Imaging (MRI) Technology/Technician',
    value: '51.092',
  },
  {
    label: 'Hyperbaric Medicine Technology/Technician',
    value: '51.0921',
  },
  {
    label: 'Intraoperative Neuromonitoring Technology/Technician',
    value: '51.0922',
  },
  {
    label: 'Orthopedic Technology/Technician',
    value: '51.0923',
  },
  {
    label: 'Allied Health Diagnostic, Intervention, and Treatment Professions, Other',
    value: '51.0999',
  },
  {
    label: 'Blood Bank Technology Specialist',
    value: '51.1001',
  },
  {
    label: 'Cytotechnology/Cytotechnologist',
    value: '51.1002',
  },
  {
    label: 'Hematology Technology/Technician',
    value: '51.1003',
  },
  {
    label: 'Clinical/Medical Laboratory Technician',
    value: '51.1004',
  },
  {
    label: 'Clinical Laboratory Science/Medical Technology/Technologist',
    value: '51.1005',
  },
  {
    label: 'Ophthalmic Laboratory Technology/Technician',
    value: '51.1006',
  },
  {
    label: 'Histologic Technology/Histotechnologist',
    value: '51.1007',
  },
  {
    label: 'Histologic Technician',
    value: '51.1008',
  },
  {
    label: 'Phlebotomy Technician/Phlebotomist',
    value: '51.1009',
  },
  {
    label: 'Cytogenetics/Genetics/Clinical Genetics Technology/Technologist',
    value: '51.101',
  },
  {
    label: 'Renal/Dialysis Technologist/Technician',
    value: '51.1011',
  },
  {
    label: 'Sterile Processing Technology/Technician',
    value: '51.1012',
  },
  {
    label: 'Clinical/Medical Laboratory Science and Allied Professions, Other',
    value: '51.1099',
  },
  {
    label: 'Pre-Dentistry Studies',
    value: '51.1101',
  },
  {
    label: 'Pre-Medicine/Pre-Medical Studies',
    value: '51.1102',
  },
  {
    label: 'Pre-Pharmacy Studies',
    value: '51.1103',
  },
  {
    label: 'Pre-Veterinary Studies',
    value: '51.1104',
  },
  {
    label: 'Pre-Nursing Studies',
    value: '51.1105',
  },
  {
    label: 'Pre-Chiropractic Studies',
    value: '51.1106',
  },
  {
    label: 'Pre-Occupational Therapy Studies',
    value: '51.1107',
  },
  {
    label: 'Pre-Optometry Studies',
    value: '51.1108',
  },
  {
    label: 'Pre-Physical Therapy Studies',
    value: '51.1109',
  },
  {
    label: 'Pre-Art Therapy',
    value: '51.111',
  },
  {
    label: 'Pre-Physician Assistant',
    value: '51.1111',
  },
  {
    label: 'Health/Medical Preparatory Programs, Other',
    value: '51.1199',
  },
  {
    label: 'Osteopathic Medicine/Osteopathy',
    value: '51.1202',
  },
  {
    label: 'Podiatric Medicine/Podiatry',
    value: '51.1203',
  },
  {
    label: 'Medicine, Other',
    value: '51.1299',
  },
  {
    label: 'Clinical and Translational Science',
    value: '51.1402',
  },
  {
    label: 'Pain Management',
    value: '51.1403',
  },
  {
    label: 'Temporomandibular Disorders and Orofacial Pain',
    value: '51.1404',
  },
  {
    label: 'Tropical Medicine',
    value: '51.1405',
  },
  {
    label: 'Medical Clinical Sciences/Graduate Medical Studies, Other',
    value: '51.1499',
  },
  {
    label: 'Substance Abuse/Addiction Counseling',
    value: '51.1501',
  },
  {
    label: 'Psychiatric/Mental Health Services Technician',
    value: '51.1502',
  },
  {
    label: 'Clinical/Medical Social Work',
    value: '51.1503',
  },
  {
    label: 'Community Health Services/Liaison/Counseling',
    value: '51.1504',
  },
  {
    label: 'Marriage and Family Therapy/Counseling',
    value: '51.1505',
  },
  {
    label: 'Clinical Pastoral Counseling/Patient Counseling',
    value: '51.1506',
  },
  {
    label: 'Psychoanalysis and Psychotherapy',
    value: '51.1507',
  },
  {
    label: 'Mental Health Counseling/Counselor',
    value: '51.1508',
  },
  {
    label: 'Genetic Counseling/Counselor',
    value: '51.1509',
  },
  {
    label: 'Infant/Toddler Mental Health Services',
    value: '51.151',
  },
  {
    label: 'Medical Family Therapy/Therapist',
    value: '51.1511',
  },
  {
    label: 'Hospice and Palliative Care',
    value: '51.1512',
  },
  {
    label: 'Trauma Counseling',
    value: '51.1513',
  },
  {
    label: 'Mental and Social Health Services and Allied Professions, Other',
    value: '51.1599',
  },
  {
    label: 'Optometry',
    value: '51.1701',
  },
  {
    label: 'Opticianry/Ophthalmic Dispensing Optician',
    value: '51.1801',
  },
  {
    label: 'Optometric Technician/Assistant',
    value: '51.1802',
  },
  {
    label: 'Ophthalmic Technician/Technologist',
    value: '51.1803',
  },
  {
    label: 'Orthoptics/Orthoptist',
    value: '51.1804',
  },
  {
    label: 'Ophthalmic and Optometric Support Services and Allied Professions, Other',
    value: '51.1899',
  },
  {
    label: 'Pharmacy',
    value: '51.2001',
  },
  {
    label: 'Pharmacy Administration and Pharmacy Policy and Regulatory Affairs',
    value: '51.2002',
  },
  {
    label: 'Pharmaceutics and Drug Design',
    value: '51.2003',
  },
  {
    label: 'Medicinal and Pharmaceutical Chemistry',
    value: '51.2004',
  },
  {
    label: 'Natural Products Chemistry and Pharmacognosy',
    value: '51.2005',
  },
  {
    label: 'Clinical and Industrial Drug Development',
    value: '51.2006',
  },
  {
    label: 'Pharmacoeconomics/Pharmaceutical Economics',
    value: '51.2007',
  },
  {
    label: 'Clinical, Hospital, and Managed Care Pharmacy',
    value: '51.2008',
  },
  {
    label: 'Industrial and Physical Pharmacy and Cosmetic Sciences',
    value: '51.2009',
  },
  {
    label: 'Pharmaceutical Sciences',
    value: '51.201',
  },
  {
    label: 'Pharmaceutical Marketing and Management',
    value: '51.2011',
  },
  {
    label: 'Pharmacy, Pharmaceutical Sciences, and Administration, Other',
    value: '51.2099',
  },
  {
    label: 'Public Health, General',
    value: '51.2201',
  },
  {
    label: 'Environmental Health',
    value: '51.2202',
  },
  {
    label: 'Health/Medical  Physics',
    value: '51.2205',
  },
  {
    label: 'Occupational Health and Industrial Hygiene',
    value: '51.2206',
  },
  {
    label: 'Public Health Education and Promotion',
    value: '51.2207',
  },
  {
    label: 'Community Health and Preventive Medicine',
    value: '51.2208',
  },
  {
    label: 'Maternal and Child Health',
    value: '51.2209',
  },
  {
    label: 'International Public Health/International Health',
    value: '51.221',
  },
  {
    label: 'Health Services Administration',
    value: '51.2211',
  },
  {
    label: 'Behavioral Aspects of Health',
    value: '51.2212',
  },
  {
    label: 'Patient Safety and Healthcare Quality',
    value: '51.2213',
  },
  {
    label: 'Public Health Genetics',
    value: '51.2214',
  },
  {
    label: 'Public Health, Other',
    value: '51.2299',
  },
  {
    label: 'Rehabilitation and Therapeutic Professions, General',
    value: '51.23',
  },
  {
    label: 'Art Therapy/Therapist',
    value: '51.2301',
  },
  {
    label: 'Dance Therapy/Therapist',
    value: '51.2302',
  },
  {
    label: 'Music Therapy/Therapist',
    value: '51.2305',
  },
  {
    label: 'Occupational Therapy/Therapist',
    value: '51.2306',
  },
  {
    label: 'Orthotist/Prosthetist',
    value: '51.2307',
  },
  {
    label: 'Physical Therapy/Therapist',
    value: '51.2308',
  },
  {
    label: 'Therapeutic Recreation/Recreational Therapy',
    value: '51.2309',
  },
  {
    label: 'Vocational Rehabilitation Counseling/Counselor',
    value: '51.231',
  },
  {
    label: 'Kinesiotherapy/Kinesiotherapist',
    value: '51.2311',
  },
  {
    label: 'Assistive/Augmentative Technology and Rehabilitation Engineering',
    value: '51.2312',
  },
  {
    label: 'Animal-Assisted Therapy',
    value: '51.2313',
  },
  {
    label: 'Rehabilitation Science',
    value: '51.2314',
  },
  {
    label: 'Drama Therapy/Therapist',
    value: '51.2315',
  },
  {
    label: 'Horticulture Therapy/Therapist',
    value: '51.2316',
  },
  {
    label: 'Play Therapy/Therapist',
    value: '51.2317',
  },
  {
    label: 'Drama Therapy',
    value: '51.2391',
  },
  {
    label: 'Rehabilitation and Therapeutic Professions, Other',
    value: '51.2399',
  },
  {
    label: 'Veterinary Sciences/Veterinary Clinical Sciences, General',
    value: '51.2501',
  },
  {
    label: 'Veterinary Microbiology and Immunobiology',
    value: '51.2504',
  },
  {
    label: 'Health Aide',
    value: '51.2601',
  },
  {
    label: 'Home Health Aide/Home Attendant',
    value: '51.2602',
  },
  {
    label: 'Medication Aide',
    value: '51.2603',
  },
  {
    label: 'Rehabilitation Aide',
    value: '51.2604',
  },
  {
    label: 'Physical Therapy Technician/Aide',
    value: '51.2605',
  },
  {
    label: 'Health Aides/Attendants/Orderlies, Other',
    value: '51.2699',
  },
  {
    label: 'Medical Illustration/Medical Illustrator',
    value: '51.2703',
  },
  {
    label: 'Medical Informatics',
    value: '51.2706',
  },
  {
    label: 'Medical Illustration and Informatics, Other',
    value: '51.2799',
  },
  {
    label: 'Dietetics/Dietitian',
    value: '51.3101',
  },
  {
    label: 'Clinical Nutrition/Nutritionist',
    value: '51.3102',
  },
  {
    label: 'Dietetic Technician',
    value: '51.3103',
  },
  {
    label: 'Dietitian Assistant',
    value: '51.3104',
  },
  {
    label: 'Dietetics and Clinical Nutrition Services, Other',
    value: '51.3199',
  },
  {
    label: 'Bioethics/Medical Ethics',
    value: '51.3201',
  },
  {
    label: 'Health Professions Education',
    value: '51.3202',
  },
  {
    label: 'Nursing Education',
    value: '51.3203',
  },
  {
    label: 'Medical/Health Humanities',
    value: '51.3204',
  },
  {
    label: 'History of Medicine',
    value: '51.3205',
  },
  {
    label: 'Arts in Medicine/Health',
    value: '51.3206',
  },
  {
    label: 'Health Professions Education, Ethics, and Humanities, Other',
    value: '51.3299',
  },
  {
    label: 'Alternative and Complementary Medicine and Medical Systems, General',
    value: '51.33',
  },
  {
    label: 'Acupuncture and Oriental Medicine',
    value: '51.3301',
  },
  {
    label: 'Traditional Chinese Medicine and Chinese Herbology',
    value: '51.3302',
  },
  {
    label: 'Naturopathic Medicine/Naturopathy',
    value: '51.3303',
  },
  {
    label: 'Homeopathic Medicine/Homeopathy',
    value: '51.3304',
  },
  {
    label: 'Ayurvedic Medicine/Ayurveda',
    value: '51.3305',
  },
  {
    label: 'Holistic/Integrative Health',
    value: '51.3306',
  },
  {
    label: 'Alternative and Complementary Medicine and Medical Systems, Other',
    value: '51.3399',
  },
  {
    label: 'Direct Entry Midwifery',
    value: '51.3401',
  },
  {
    label: 'Alternative and Complementary Medical Support Services, Other',
    value: '51.3499',
  },
  {
    label: 'Massage Therapy/Therapeutic Massage',
    value: '51.3501',
  },
  {
    label: 'Asian Bodywork Therapy',
    value: '51.3502',
  },
  {
    label: 'Somatic Bodywork',
    value: '51.3503',
  },
  {
    label: 'Somatic Bodywork and Related Therapeutic Services, Other',
    value: '51.3599',
  },
  {
    label: 'Movement Therapy and Movement Education',
    value: '51.3601',
  },
  {
    label: 'Yoga Teacher Training/Yoga Therapy',
    value: '51.3602',
  },
  {
    label: 'Hypnotherapy/Hypnotherapist',
    value: '51.3603',
  },
  {
    label: 'Movement and Mind-Body Therapies and Education, Other',
    value: '51.3699',
  },
  {
    label: 'Aromatherapy',
    value: '51.3701',
  },
  {
    label: 'Herbalism/Herbalist',
    value: '51.3702',
  },
  {
    label: 'Polarity Therapy',
    value: '51.3703',
  },
  {
    label: 'Reiki',
    value: '51.3704',
  },
  {
    label: 'Energy and Biologically Based Therapies, Other',
    value: '51.3799',
  },
  {
    label: 'Registered Nursing/Registered Nurse',
    value: '51.3801',
  },
  {
    label: 'Nursing Administration',
    value: '51.3802',
  },
  {
    label: 'Adult Health Nurse/Nursing',
    value: '51.3803',
  },
  {
    label: 'Nurse Anesthetist',
    value: '51.3804',
  },
  {
    label: 'Family Practice Nurse/Nursing',
    value: '51.3805',
  },
  {
    label: 'Maternal/Child Health and Neonatal Nurse/Nursing',
    value: '51.3806',
  },
  {
    label: 'Nurse Midwife/Nursing Midwifery',
    value: '51.3807',
  },
  {
    label: 'Nursing Science',
    value: '51.3808',
  },
  {
    label: 'Pediatric Nurse/Nursing',
    value: '51.3809',
  },
  {
    label: 'Psychiatric/Mental Health Nurse/Nursing',
    value: '51.381',
  },
  {
    label: 'Public Health/Community Nurse/Nursing',
    value: '51.3811',
  },
  {
    label: 'Perioperative/Operating Room and Surgical Nurse/Nursing',
    value: '51.3812',
  },
  {
    label: 'Clinical Nurse Specialist',
    value: '51.3813',
  },
  {
    label: 'Critical Care Nursing',
    value: '51.3814',
  },
  {
    label: 'Occupational and Environmental Health Nursing',
    value: '51.3815',
  },
  {
    label: 'Emergency Room/Trauma Nursing',
    value: '51.3816',
  },
  {
    label: 'Nursing Education',
    value: '51.3817',
  },
  {
    label: 'Nursing Practice',
    value: '51.3818',
  },
  {
    label: 'Palliative Care Nursing',
    value: '51.3819',
  },
  {
    label: 'Clinical Nurse Leader',
    value: '51.382',
  },
  {
    label: 'Geriatric Nurse/Nursing',
    value: '51.3821',
  },
  {
    label: "Women's Health Nurse/Nursing",
    value: '51.3822',
  },
  {
    label: 'Forensic Nursing',
    value: '51.3824',
  },
  {
    label:
      'Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing, Other',
    value: '51.3899',
  },
  {
    label: 'Licensed Practical/Vocational Nurse Training',
    value: '51.3901',
  },
  {
    label: 'Nursing Assistant/Aide and Patient Care Assistant/Aide',
    value: '51.3902',
  },
  {
    label: 'Practical Nursing, Vocational Nursing and Nursing Assistants, Other',
    value: '51.3999',
  },
  {
    label: 'Health Professions and Related Clinical Sciences, Other',
    value: '51.9999',
  },
  {
    label: 'Business/Commerce, General',
    value: '52.0101',
  },
  {
    label: 'Business Administration and Management, General',
    value: '52.0201',
  },
  {
    label: 'Purchasing, Procurement/Acquisitions and Contracts Management',
    value: '52.0202',
  },
  {
    label: 'Logistics, Materials, and Supply Chain Management',
    value: '52.0203',
  },
  {
    label: 'Office Management and Supervision',
    value: '52.0204',
  },
  {
    label: 'Operations Management and Supervision',
    value: '52.0205',
  },
  {
    label: 'Non-Profit/Public/Organizational Management',
    value: '52.0206',
  },
  {
    label: 'Customer Service Management',
    value: '52.0207',
  },
  {
    label: 'E-Commerce/Electronic Commerce',
    value: '52.0208',
  },
  {
    label: 'Transportation/Mobility Management',
    value: '52.0209',
  },
  {
    label: 'Research and Development Management',
    value: '52.021',
  },
  {
    label: 'Project Management',
    value: '52.0211',
  },
  {
    label: 'Retail Management',
    value: '52.0212',
  },
  {
    label: 'Organizational Leadership',
    value: '52.0213',
  },
  {
    label: 'Research Administration',
    value: '52.0214',
  },
  {
    label: 'Risk Management',
    value: '52.0215',
  },
  {
    label: 'Science/Technology Management',
    value: '52.0216',
  },
  {
    label: 'Business Administration, Management and Operations, Other',
    value: '52.0299',
  },
  {
    label: 'Accounting',
    value: '52.0301',
  },
  {
    label: 'Accounting Technology/Technician and Bookkeeping',
    value: '52.0302',
  },
  {
    label: 'Auditing',
    value: '52.0303',
  },
  {
    label: 'Accounting and Finance',
    value: '52.0304',
  },
  {
    label: 'Accounting and Business/Management',
    value: '52.0305',
  },
  {
    label: 'Accounting and Related Services, Other',
    value: '52.0399',
  },
  {
    label: 'Administrative Assistant and Secretarial Science, General',
    value: '52.0401',
  },
  {
    label: 'Executive Assistant/Executive Secretary',
    value: '52.0402',
  },
  {
    label: 'Receptionist',
    value: '52.0406',
  },
  {
    label: 'Business/Office Automation/Technology/Data Entry',
    value: '52.0407',
  },
  {
    label: 'General Office Occupations and Clerical Services',
    value: '52.0408',
  },
  {
    label: 'Parts, Warehousing, and Inventory Management Operations',
    value: '52.0409',
  },
  {
    label: 'Traffic, Customs, and Transportation Clerk/Technician',
    value: '52.041',
  },
  {
    label: 'Customer Service Support/Call Center/Teleservice Operation',
    value: '52.0411',
  },
  {
    label: 'Business Operations Support and Secretarial Services, Other',
    value: '52.0499',
  },
  {
    label: 'Business/Corporate Communications, General',
    value: '52.0501',
  },
  {
    label: 'Grantsmanship',
    value: '52.0502',
  },
  {
    label: 'Business/Corporate Communications, Other',
    value: '52.0599',
  },
  {
    label: 'Business/Managerial Economics',
    value: '52.0601',
  },
  {
    label: 'Entrepreneurship/Entrepreneurial Studies',
    value: '52.0701',
  },
  {
    label: 'Franchising and Franchise Operations',
    value: '52.0702',
  },
  {
    label: 'Small Business Administration/Management',
    value: '52.0703',
  },
  {
    label: 'Social Entrepreneurship',
    value: '52.0704',
  },
  {
    label: 'Entrepreneurial and Small Business Operations, Other',
    value: '52.0799',
  },
  {
    label: 'Finance, General',
    value: '52.0801',
  },
  {
    label: 'Banking and Financial Support Services',
    value: '52.0803',
  },
  {
    label: 'Financial Planning and Services',
    value: '52.0804',
  },
  {
    label: 'International Finance',
    value: '52.0806',
  },
  {
    label: 'Investments and Securities',
    value: '52.0807',
  },
  {
    label: 'Public Finance',
    value: '52.0808',
  },
  {
    label: 'Credit Management',
    value: '52.0809',
  },
  {
    label: 'Financial Risk Management',
    value: '52.081',
  },
  {
    label: 'Finance and Financial Management Services, Other',
    value: '52.0899',
  },
  {
    label: 'Hospitality Administration/Management, General',
    value: '52.0901',
  },
  {
    label: 'Tourism and Travel Services Management',
    value: '52.0903',
  },
  {
    label: 'Hotel/Motel Administration/Management',
    value: '52.0904',
  },
  {
    label: 'Restaurant/Food Services Management',
    value: '52.0905',
  },
  {
    label: 'Resort Management',
    value: '52.0906',
  },
  {
    label: 'Meeting and Event Planning',
    value: '52.0907',
  },
  {
    label: 'Casino Management',
    value: '52.0908',
  },
  {
    label: 'Hotel, Motel, and Restaurant Management',
    value: '52.0909',
  },
  {
    label: 'Brewery/Brewpub Operations/Management',
    value: '52.091',
  },
  {
    label: 'Hospitality Administration/Management, Other',
    value: '52.0999',
  },
  {
    label: 'Human Resources Management/Personnel Administration, General',
    value: '52.1001',
  },
  {
    label: 'Labor and Industrial Relations',
    value: '52.1002',
  },
  {
    label: 'Organizational Behavior Studies',
    value: '52.1003',
  },
  {
    label: 'Labor Studies',
    value: '52.1004',
  },
  {
    label: 'Human Resources Development',
    value: '52.1005',
  },
  {
    label: 'Executive/Career Coaching',
    value: '52.1006',
  },
  {
    label: 'Human Resources Management and Services, Other',
    value: '52.1099',
  },
  {
    label: 'International Business/Trade/Commerce',
    value: '52.1101',
  },
  {
    label: 'Management Information Systems, General',
    value: '52.1201',
  },
  {
    label: 'Information Resources Management',
    value: '52.1206',
  },
  {
    label: 'Knowledge Management',
    value: '52.1207',
  },
  {
    label: 'Management Information Systems and Services, Other',
    value: '52.1299',
  },
  {
    label: 'Management Science',
    value: '52.1301',
  },
  {
    label: 'Business Statistics',
    value: '52.1302',
  },
  {
    label: 'Actuarial Science',
    value: '52.1304',
  },
  {
    label: 'Management Sciences and Quantitative Methods, Other',
    value: '52.1399',
  },
  {
    label: 'Marketing/Marketing Management, General',
    value: '52.1401',
  },
  {
    label: 'Marketing Research',
    value: '52.1402',
  },
  {
    label: 'International Marketing',
    value: '52.1403',
  },
  {
    label: 'Digital Marketing',
    value: '52.1404',
  },
  {
    label: 'Marketing, Other',
    value: '52.1499',
  },
  {
    label: 'Real Estate',
    value: '52.1501',
  },
  {
    label: 'Taxation',
    value: '52.1601',
  },
  {
    label: 'Insurance',
    value: '52.1701',
  },
  {
    label: 'Sales, Distribution, and Marketing Operations, General',
    value: '52.1801',
  },
  {
    label: 'Merchandising and Buying Operations',
    value: '52.1802',
  },
  {
    label: 'Retailing and Retail Operations',
    value: '52.1803',
  },
  {
    label: 'Selling Skills and Sales Operations',
    value: '52.1804',
  },
  {
    label: 'General Merchandising, Sales, and Related Marketing Operations, Other',
    value: '52.1899',
  },
  {
    label: 'Auctioneering',
    value: '52.1901',
  },
  {
    label: 'Fashion Merchandising',
    value: '52.1902',
  },
  {
    label: 'Fashion Modeling',
    value: '52.1903',
  },
  {
    label: 'Apparel and Accessories Marketing Operations',
    value: '52.1904',
  },
  {
    label: 'Tourism and Travel Services Marketing Operations',
    value: '52.1905',
  },
  {
    label: 'Tourism Promotion Operations',
    value: '52.1906',
  },
  {
    label: 'Vehicle and Vehicle Parts and Accessories Marketing Operations',
    value: '52.1907',
  },
  {
    label: 'Business and Personal/Financial Services Marketing Operations',
    value: '52.1908',
  },
  {
    label: 'Special Products Marketing Operations',
    value: '52.1909',
  },
  {
    label: 'Hospitality and Recreation Marketing Operations',
    value: '52.191',
  },
  {
    label: 'Specialized Merchandising, Sales, and Marketing Operations, Other',
    value: '52.1999',
  },
  {
    label: 'Construction Management, General',
    value: '52.2001',
  },
  {
    label: 'Construction Project Management',
    value: '52.2002',
  },
  {
    label: 'Construction Management, Other',
    value: '52.2099',
  },
  {
    label: 'Telecommunications Management',
    value: '52.2101',
  },
  {
    label: 'Business, Management, Marketing, and Related Support Services, Other',
    value: '52.9999',
  },
  {
    label: 'History, General',
    value: '54.0101',
  },
  {
    label: 'American  History (United States)',
    value: '54.0102',
  },
  {
    label: 'European History',
    value: '54.0103',
  },
  {
    label: 'History and Philosophy of Science and Technology',
    value: '54.0104',
  },
  {
    label: 'Public/Applied History',
    value: '54.0105',
  },
  {
    label: 'Asian History',
    value: '54.0106',
  },
  {
    label: 'Canadian History',
    value: '54.0107',
  },
  {
    label: 'Military History',
    value: '54.0108',
  },
  {
    label: 'History, Other',
    value: '54.0199',
  },
];
