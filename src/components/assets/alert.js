import Swal from "sweetalert2";

export const addAlert = (msg, icon) => {
  Swal.fire({
    icon: icon,
    title: msg,
    background: "#fff",
    padding: "2rem",
    position: "center",
    showConfirmButton: false,
    timer: 1200,
    customClass: {
      title: "alert-title",
    },
  });
};