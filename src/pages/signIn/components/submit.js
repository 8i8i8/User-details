const submit = (username, password, userData) => {
  if (username && password) {
    const user = userData.find(
      (a) => a.username === username && a.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", JSON.stringify({ name: user.username }));
    }
  }
};
export default submit;
