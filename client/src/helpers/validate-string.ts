export const validateString = (input?: string): boolean => {
  const regex = /^(?=.*\d)[A-Za-z\d]{6,}$/;

  if (input) {
    regex.test(input);
  }

  return false;
};
