import _ from "lodash";
const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.texableCharge = Math.max(0, result.baseCharge - texThreshold());
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

function texThreshold() {
  return 0.1;
}

function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
