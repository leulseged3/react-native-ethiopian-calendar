/**
 * Modulus function for a non-integer numbers
 * @param {number} amount dividend
 * @param {number} numerator numerator
 * @return {number} modulo value
 */
export const mod = (amount: number, numerator: number) => {
  return amount - numerator * Math.floor(amount / numerator);
};
