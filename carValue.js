export const getCarValue = (model, year) => {
  if (typeof model !== "string" || !model.trim()) {
    return "error:please enter a model name";
  }

  if (typeof year !== "number" || isNaN(year) || year > 2023) {
    return "error:please check the year entered";
  }

  const cleanModel = model.toLowerCase().replace(/[^a-zA-Z ]/g, "");

  const lowercaseAlphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let actualValue = 0;
  for (const character of cleanModel) {
    const position = lowercaseAlphabets.indexOf(character) + 1;
    actualValue = actualValue + position;
  }

  actualValue = actualValue * 100 + year;

  return actualValue;
};
