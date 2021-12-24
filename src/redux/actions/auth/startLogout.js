export const startLogout = () => (dispatch) => {

  localStorage.clear();
  window.location.reload();
  
};