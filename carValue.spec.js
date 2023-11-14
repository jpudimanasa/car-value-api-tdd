import { getCarValue } from "./carValue";

describe("getCarValue tests", () => {
  it("return car value 6614 for model civic and year 2014", () => {
    //Arrange
    const model = "civic";
    const year = 2014;
    const expectedValue = 6614;

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });
  it("return car value 6614 for model civi$c and year 2014", () => {
    //Arrange
    const model = "civi$c";
    const year = 2014;
    const expectedValue = 6614;

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });

  it("return car value 6614 for model civ ic and year 2014", () => {
    //Arrange
    const model = "civ ic";
    const year = 2014;
    const expectedValue = 6614;

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });

  it("return car value as error-'please check the year entered' for model civic and year 2300", () => {
    //Arrange
    const model = "civic";
    const year = 2300;
    const expectedValue = "error:please check the year entered";

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });

  it("return car value as error:'please enter a model name' for model 2019 and year 2014", () => {
    //Arrange
    const model = 2019;
    const year = 2014;
    const expectedValue = "error:please enter a model name";

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });

  it("return car value as error:'please enter a model name' for empty model and year 2014", () => {
    //Arrange
    const model = null;
    const year = 2014;
    const expectedValue = "error:please enter a model name";

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });

  it("return car value as error:'please check the year entered' for model toyota and year corolla ", () => {
    //Arrange
    const model = "toyota";
    const year = "corolla";
    const expectedValue = "error:please check the year entered";

    //Act
    const actualValue = getCarValue(model, year);

    //Assert
    expect(actualValue).toBe(expectedValue);
  });
});
