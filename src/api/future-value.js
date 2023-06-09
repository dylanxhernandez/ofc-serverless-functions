import Calculations from '../services/calculator.js';
import Helper from '../services/helper.js';
import { Tags, DueDate } from '../config/globals.js';

export default {
	getFutureValuePeriodic_annualCompoundReturn: function (investmentAmount, investmentFrequecy, year, percentage) {
		let _investmentAmount = Helper.getNumber(investmentAmount);
		let _percentage = Helper.getNumber(percentage);
		let _frequency = Helper.getValueFromFrequencyAlt(investmentFrequecy);
		let _parameterYear = Helper.getNumber(year);
		let per = (_percentage / 100.0);
		let newReturnAmount = Math.pow((1.0 + per), (1.0 / 12.0));
		let newRate = Math.pow(newReturnAmount, (12.0 / _frequency)) - 1.0;
		let finalValue = Calculations.calculateFutureValue(newRate, (_parameterYear * _frequency), -_investmentAmount, 0, DueDate.BegOfPeriod);
		return Helper.getReturnValue(finalValue);
	},
	getFutureValueLumpSum_annualCompoundReturn: function (lumpSumInvested, year, percentage) {
		let _lumpSumInvested = Helper.getNumber(lumpSumInvested);
		let _percentage = Helper.getNumber(percentage);
		let _parameterYear = Helper.getNumber(year);
		let finalValue = _lumpSumInvested * Math.pow(1 + (_percentage / 100), _parameterYear);
		return Helper.getReturnValue(finalValue);
	},
	getFutureValuePeriodicLumpSum_annualCompoundReturn: function (investmentAmount, lumpSumInvested, investmentFrequecy, year, percentage) {
		let _investmentAmount = Helper.getNumber(investmentAmount);
		let _lumpSumInvested = Helper.getNumber(lumpSumInvested);
		let _percentage = Helper.getNumber(percentage);
		let _frequency = Helper.getValueFromFrequencyAlt(investmentFrequecy);
		let _parameterYear = Helper.getNumber(year);
		let per = (_percentage / 100.0);
		let newReturnAmount = Math.pow((1.0 + per), (1.0 / 12.0));
		let newRate = Math.pow(newReturnAmount, (12.0 / _frequency)) - 1.0;
		let finalValue = Calculations.calculateFutureValue(newRate, (_parameterYear * _frequency), -_investmentAmount, -_lumpSumInvested, DueDate.BegOfPeriod);
		return Helper.getReturnValue(finalValue);
	}
}
