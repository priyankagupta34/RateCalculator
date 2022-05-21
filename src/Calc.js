export const Calc = {
  interest,
  getRate,
  getDecimal
};

function interest(year, rate, amount) {
  rate /= 100;

  while (year > 0) {
    amount = amount + amount * rate;
    year--;
  }

  return amount;
}

function getRate(year, amountInvested, amountReceived, maxInterest = 10) {
  let left = 0,
    right = maxInterest;

  let h = 0;

  while (left <= right) {
    const mid = (left + right) / 2;

    if (h === 200) break;

    const foundAmount = interest(year, mid, amountInvested);

    if (c3decimal(foundAmount) > c3decimal(amountReceived)) right = mid - 0.1;
    else left = mid + 0.1;
    h++;
  }

  return left;
}

function c3decimal(amount) {
  amount = amount / 100;
  return Math.round(amount);
}

function getDecimal(amount) {
  amount = Math.round(amount * 100);

  return parseFloat(amount / 100);
}
