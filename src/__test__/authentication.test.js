import authentication from "../components/authentication";

test("authetication", () => {
  localStorage.setItem("loggedIn", { name: "a" });
  expect(authentication()).toBe(true);
});
test("authetication", () => {
  localStorage.clear();
  expect(!authentication()).toBe(true);
});
