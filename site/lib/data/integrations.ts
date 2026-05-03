export interface Integration {
  name: string
  category: string
  description: string
}

export const integrations: Integration[] = [
  { name: 'Workday', category: 'HRIS', description: 'Bidirectional HCM sync' },
  { name: 'BambooHR', category: 'HRIS', description: 'Employee data & org chart' },
  { name: 'Rippling', category: 'HRIS', description: 'Full HR data sync' },
  { name: 'UKG Pro', category: 'HRIS', description: 'Workforce management' },
  { name: 'SAP SuccessFactors', category: 'HRIS', description: 'Enterprise HCM' },
  { name: 'Dayforce', category: 'HRIS', description: 'Ceridian HCM platform' },
  { name: 'ADP Workforce Now', category: 'Payroll', description: 'Payroll export & sync' },
  { name: 'Paylocity', category: 'Payroll', description: 'Payroll & benefits' },
  { name: 'Paychex Flex', category: 'Payroll', description: 'SMB and mid-market payroll' },
  { name: 'Gusto', category: 'Payroll', description: 'Modern payroll platform' },
  { name: 'Ceridian Dayforce', category: 'Payroll', description: 'Enterprise payroll' },
  { name: 'QuickBooks Payroll', category: 'Payroll', description: 'Small business payroll' },
  { name: 'Benepass', category: 'Benefits', description: 'Flexible benefits spending' },
  { name: 'Forma', category: 'Benefits', description: 'Lifestyle spending accounts' },
  { name: 'Tedy', category: 'Benefits', description: 'Benefits administration' },
  { name: 'PlanSource', category: 'Benefits', description: 'Benefits enrollment' },
  { name: 'Maxwell Health', category: 'Benefits', description: 'Benefits marketplace' },
  { name: 'Lumity', category: 'Benefits', description: 'Benefits management' },
  { name: 'Okta', category: 'Security & SSO', description: 'Identity & SSO' },
  { name: 'Azure AD', category: 'Security & SSO', description: 'Microsoft identity' },
  { name: 'Google Workspace', category: 'Security & SSO', description: 'Google SSO & directory' },
  { name: 'OneLogin', category: 'Security & SSO', description: 'IAM and SSO' },
  { name: 'Slack', category: 'Communication', description: 'Election notifications' },
  { name: 'Microsoft Teams', category: 'Communication', description: 'HR announcements' },
  { name: 'Carta', category: 'Equity', description: 'Cap table & equity data' },
  { name: 'Shareworks', category: 'Equity', description: 'Morgan Stanley equity' },
  { name: 'Greenhouse', category: 'Recruiting', description: 'Offer comp integration' },
  { name: 'Lever', category: 'Recruiting', description: 'Offer comp integration' },
  { name: 'Lattice', category: 'Performance', description: 'Performance & comp cycles' },
  { name: 'Leapsome', category: 'Performance', description: 'Performance management' },
]

export const integrationCategories = [
  'All',
  'HRIS',
  'Payroll',
  'Benefits',
  'Security & SSO',
  'Communication',
  'Equity',
  'Recruiting',
  'Performance',
]
