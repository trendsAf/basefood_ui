export type BusinessDetailsFormValues = {
  companyName: string;
  country: string;
  companyType: string;
  companySize: string;
  revenue: string;
  yearFounded: string;
  role: string;
};

export const currentYear = new Date().getFullYear();
export const years = Array.from(
  new Array(currentYear - 1900 + 1),
  (_, index) => `${1900 + index}`,
);
