export const startLogout = () => () => {
  localStorage.clear();
  window.location.reload();
};