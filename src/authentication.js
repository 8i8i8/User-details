const authentication = () => {
  let a;
  a = JSON.parse(localStorage.getItem("loggedIn"));
  if (a) return true;
  else return false;
};

export default authentication;
