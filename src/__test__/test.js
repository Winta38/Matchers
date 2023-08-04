import sortPlayers from "../main";

test("basic test", () => {
  let data = [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ];

  const standard = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ];

  data = sortPlayers(data);

  expect(data).toEqual(standard);
});
