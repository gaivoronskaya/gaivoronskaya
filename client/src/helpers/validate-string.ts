export const validateString = (input: string): boolean => {
  const regex = /^(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(input);
};
