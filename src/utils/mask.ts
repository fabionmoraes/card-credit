export const maskCard = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d)/, '$1 $2');
  value = value.replace(/(\d{4})(\d{1,2})$/, '$1 $2');
  return value;
};

export const expiryCard = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d)(\d{2})$/, '$1/$2');
  return value;
};
