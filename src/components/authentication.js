const authentication = () => {
  if (localStorage.getItem("loggedIn")) return true;
  else return false;
};

export default authentication;
