import { render } from "@testing-library/react";
import submit from "../pages/signIn/components/submit";
import userData from "../storage/userData";

test("sign in validation", () => {
  render(submit("amar", "amar123", userData));
  expect(localStorage.getItem("loggedIn")).toBe('{"name":"amar"}');
});
