import { Tags } from "../config/globals.js";

export default {
  getReturnValue: function (checkValue) {
    if (isNaN(checkValue) || isNull(checkValue) || !isFinite(checkValue)) {
      return "-";
    } else {
      return checkValue.toFixed(2);
    }
  },
  getValueFromFrequency: function (selection) {
    let selectionResult = selection.toUpperCase();
    switch (selectionResult) {
      case Tags.frequencyAnnual:
        return 12; // 12 months in a year
      case Tags.frequencyQuarterly:
        return 3; // 3 months in a quarter of a year
      case Tags.frequencyMonthly:
        return 1; // 1 month representing a single month
      default:
        return 0; // Misc values return 0 by default
    }
  },
  getValueFromFrequencyAlt: function (selection) {
    let selectionResult = selection.toUpperCase();
    switch (selectionResult) {
      case Tags.frequencyAnnual:
        return 1;
      case Tags.frequencySemiAnnual:
        return 2;
      case Tags.frequencyQuarterly:
        return 4;
      case Tags.frequencyMonthly:
        return 12;
      default:
        return 0; // Misc values return 0 by default
    }
  },
  getNumber: function (returnValue, returnStrict = false) {
    if (returnStrict) {
      return parseInt(returnValue) || 0;
    } else {
      return parseFloat(returnValue) || 0;
    }
  },
  getReturnValue: function (checkValue) {
    if (isNaN(checkValue) || checkValue == null || !isFinite(checkValue)) {
      // Is Nan, Null or Infinity
      return "-";
    } else {
      return checkValue.toFixed(2); // Convert value to display as 00.00 decimal
    }
  },
};

