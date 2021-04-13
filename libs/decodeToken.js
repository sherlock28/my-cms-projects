export const decodeToken = token => {
  if (token) {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (err) {
      throw new Error(err);
    }
  }
  return null;
};
