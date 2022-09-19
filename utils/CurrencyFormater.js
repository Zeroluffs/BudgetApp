const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const CurrencyFormatter = (currencyAmout) => {
  return currencyFormatter.format(Number(currencyAmout));
};
