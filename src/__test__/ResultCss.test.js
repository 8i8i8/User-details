import css from "../pages/Results/components/css";

test("CSS validation", () => {
  expect(
    css(
      { dishName: "test", id: "5" },
      { name: "test", id: "5" },
      { name: "testt", id: "8" },
      { name: "test", id: "6" }
    )
  ).toMatch(/card mx-auto bg/);
});

test("CSS validation", () => {
  expect(
    css(
      { dishName: "test", id: "5" },
      { name: "test", id: "9" },
      { name: "testt", id: "8" },
      { name: "test", id: "6" }
    )
  ).toMatch(/card mx-auto/);
});
