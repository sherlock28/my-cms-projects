export const getDataSessionStorage = () => {
  let data = {};

  if (window !== undefined) {
    data.username = window.sessionStorage.getItem("username");
  }
  return data;
};
