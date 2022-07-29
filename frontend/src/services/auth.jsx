import { api, notifySuccess, notifyError } from "@services/service";

const authentification = (user, setInfoUser) => {
  const ENDPOINT = "/auth/login";
  api
    .post(ENDPOINT, user, { withCredentials: true })
    .then((response) => {
      setInfoUser({
        username: response.data.username,
        isAdmin: response.data.isAdmin,
      });
      sessionStorage.setItem(`username`, response.data.username);
      sessionStorage.setItem(`isAdmin`, response.data.isAdmin);
      notifySuccess("La connection a réussi");
    })
    .catch(() => {
      notifyError(
        "Un problème est survenu lors de votre tentative de connection"
      );
    });
};

export default authentification;
