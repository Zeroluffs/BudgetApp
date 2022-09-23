import { CurrencyFormatter } from "../CurrencyFormater";

describe("Currency Formatter", () => {
  it("formatted value", () => {
    const number = 12300;
    const expectedFormat = "$12,300.00";
    expect(CurrencyFormatter(number)).toBe(expectedFormat);
  });
});
