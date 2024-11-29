"use client";

import { useState } from "react";

export default function Calculator() {
  const [propertyPrice, setPropertyPrice] = useState(77000);
  const [annualRentalIncome, setAnnualRentalIncome] = useState(15000);
  const [loanInterestRate, setLoanInterestRate] = useState(4);
  const [additionalCosts, setAdditionalCosts] = useState(1000);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
      value
    );
  };

  const calculateNetIncome = () => {
    const annualInterest = (propertyPrice * loanInterestRate) / 100;
    const netIncome = annualRentalIncome - annualInterest - additionalCosts;
    return netIncome;
  };

  const calculateRentability = () => {
    const netIncome = calculateNetIncome();
    return ((netIncome / propertyPrice) * 100).toFixed(2);
  };

  const calculateAmortizationTime = () => {
    const netIncome = calculateNetIncome();
    const amortization = netIncome > 0 ? propertyPrice / netIncome : Infinity;

    if (amortization === Infinity || amortization > 100) {
      return "Bad Investment";
    }
    return amortization.toFixed(2) + " years";
  };

  return (
    <div className="card bg-base-100 w-11/12 md:w-2/3 lg:w-7/12 shadow-xl mx-auto p-6 mb-12">
      <div className="card-body">
        <h2 className="card-title text-xl flex justify-center mb-6">
          Calculate Your Potential Return
        </h2>

        <div className="mb-6">
          <label className="block text-gray-700">Property Price (€)</label>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Enter the purchase price of the property.
          </p>
          <input
            type="range"
            min={10000}
            max={2000000}
            value={propertyPrice}
            step={1000}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            className="range range-lg"
          />
          <div className="text-center mt-2 text-lg">
            €{formatNumber(propertyPrice)}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 ">
            Annual Rental Income (€)
          </label>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Enter the income generated yearly from the property.
          </p>
          <input
            type="range"
            min={0}
            max={100000}
            value={annualRentalIncome}
            step={500}
            onChange={(e) => setAnnualRentalIncome(Number(e.target.value))}
            className="range range-lg"
          />
          <div className="text-center mt-2 text-lg">
            €{formatNumber(annualRentalIncome)}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Loan Interest Rate (%)</label>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Enter the annual interest rate on your loan.
          </p>
          <input
            type="range"
            min={0}
            max={10}
            value={loanInterestRate}
            step={0.1}
            onChange={(e) => setLoanInterestRate(Number(e.target.value))}
            className="range range-lg"
          />
          <div className="text-center mt-2 text-lg">{loanInterestRate}%</div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">
            Additional Costs (€ per year)
          </label>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            Enter any recurring costs like maintenance or taxes.
          </p>
          <input
            type="range"
            min={0}
            max={10000}
            value={additionalCosts}
            step={100}
            onChange={(e) => setAdditionalCosts(Number(e.target.value))}
            className="range range-lg"
          />
          <div className="text-center mt-2 text-lg">
            €{formatNumber(additionalCosts)}
          </div>
        </div>

        <div className="p-6 mt-6 space-y-4 bg-blue-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Results</h3>

          <div className="flex items-center justify-between md:flex-row flex-col p-4 bg-white rounded-lg shadow-sm">
            <div className="text-lg font-semibold text-gray-700">
              Net Annual Income
            </div>
            <div className="text-xl font-bold text-green-500">
              €{formatNumber(calculateNetIncome())}
            </div>
          </div>

          <div className="flex items-center justify-between md:flex-row flex-col p-4 bg-white rounded-lg shadow-sm">
            <div className="text-lg font-semibold text-gray-700">
              Net Rentability
            </div>
            <div className="text-xl font-bold text-blue-500">
              {calculateRentability()}%
            </div>
          </div>

          <div className="flex items-center justify-between md:flex-row flex-col p-4 bg-white rounded-lg shadow-sm">
            <div className="text-lg font-semibold text-gray-700">
              Amortization Time
            </div>
            <div className="text-xl font-bold text-orange-500">
              {calculateAmortizationTime()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
