interface Utils {
  currentYear(): number;
}

export const currentYear = () => {
  return new Date().getFullYear();
};

export const utils: Utils = {
  currentYear
};
