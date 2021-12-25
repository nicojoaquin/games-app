export const startLogout = () => () => {
  sessionStorage.clear();
  window.location.reload();
};