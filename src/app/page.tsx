"use client";

import { useState } from "react";

export default function Calculator() {
  const [propertyPrice, setPropertyPrice] = useState(77000);
  const [annualRentalIncome, setAnnualRentalIncome] = useState(15000);
  const [loanInterestRate, setLoanInterestRate] = useState(4);
  const [additionalCosts, setAdditionalCosts] = useState(1000);
  const [loanTerm, setLoanTerm] = useState(20);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
      value
    );
  };

  const calculateNetIncome = () => {
    const annualRepayment = calculateAnnualLoanRepayment();
    const netIncome = annualRentalIncome - annualRepayment - additionalCosts;
    return netIncome;
  };

  const calculateRentability = () => {
    const netIncome = calculateNetIncome();
    return ((netIncome / propertyPrice) * 100).toFixed(2);
  };

  const calculateAnnualLoanRepayment = () => {
    const loanPrincipal = propertyPrice;
    const monthlyRate = loanInterestRate / 100 / 12;
    const totalMonths = loanTerm * 12;

    if (monthlyRate === 0) {
      return loanPrincipal / loanTerm;
    }

    const annualRepayment =
      ((loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)) *
      12;

    return annualRepayment;
  };

  const formatYearsAndMonths = (years: number) => {
    const totalMonths = Math.round(years * 12);
    const displayYears = Math.floor(totalMonths / 12);
    const displayMonths = totalMonths % 12;

    const yearText = displayYears === 1 ? "1 year" : `${displayYears} years`;
    const monthText =
      displayMonths === 1 ? "1 month" : `${displayMonths} months`;

    if (displayYears > 0 && displayMonths > 0) {
      return `${yearText} and ${monthText}`;
    } else if (displayYears > 0) {
      return yearText;
    } else {
      return monthText;
    }
  };

  const calculateAmortizationTime = () => {
    const netIncome = calculateNetIncome();
    const amortization = netIncome > 0 ? propertyPrice / netIncome : Infinity;

    if (amortization === Infinity || amortization > 100) {
      return "+100 years";
    }

    return formatYearsAndMonths(amortization);
  };

  const isBadInvestment = () => {
    const rentability = parseFloat(calculateRentability());
    const amortization = calculateAmortizationTime();

    if (amortization === "Bad Investment" || rentability < 5) {
      return true;
    }
    return false;
  };

  return (
    <div className="card bg-base-100 w-11/12 shadow-xl mx-auto mb-12 md:mb-32">
      <div className="card-body">
        <h2 className="card-title text-3xl flex justify-center mb-6">
          Calculate Your Potential Return
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
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
                className="range"
              />
              <div className="text-center mt-2 text-lg">
                €{formatNumber(propertyPrice)}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700">
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
                className="range"
              />
              <div className="text-center mt-2 text-lg">
                €{formatNumber(annualRentalIncome)}
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <div className="mb-6">
                <label className="block text-gray-700">Loan Term (Years)</label>
                <p className="text-sm text-gray-500 mt-1 mb-4">
                  Enter the loan repayment period.
                </p>
                <input
                  type="range"
                  min={1}
                  max={90}
                  value={loanTerm}
                  step={1}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="range"
                />
                <div className="text-center mt-2 text-lg">{loanTerm} years</div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">
                  Loan Interest Rate (%)
                </label>
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
                  className="range"
                />
                <div className="text-center mt-2 text-lg">
                  {loanInterestRate}%
                </div>
              </div>
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
                className="range"
              />
              <div className="text-center mt-2 text-lg">
                €{formatNumber(additionalCosts)}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="p-6 mt-6 space-y-4 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Results</h3>

              <div className=" p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-between md:flex-row flex-col">
                  <div className="text-lg font-semibold text-gray-700">
                    Net Annual Income
                  </div>
                  <div className="text-xl font-bold text-blue-500">
                    €{formatNumber(calculateNetIncome())}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Net Annual Income is calculated as:{" "}
                  <span className="font-medium">
                    Annual Rental Income - Annual Loan Repayment - Additional
                    Costs
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center flex-wrap justify-between md:flex-row flex-col">
                  <div className="text-lg font-semibold text-gray-700">
                    Net Rentability
                  </div>
                  <div className="text-xl font-bold text-blue-500">
                    {calculateRentability()}%
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Net Rentability is calculated as:{" "}
                  <span className="font-medium">
                    (Net Annual Income ÷ Property Price) × 100
                  </span>
                </p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="flex items-center flex-wrap justify-between md:flex-row flex-col">
                  <div className="text-lg font-semibold text-gray-700">
                    Amortization Time
                  </div>
                  <div className="text-xl font-bold text-blue-500">
                    {calculateAmortizationTime()}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Amortization Time is calculated as:{" "}
                  <span className="font-medium">
                    Property Price ÷ Net Annual Income
                  </span>
                </p>
              </div>

              <div className="p-4 bg-blue-500 rounded-lg shadow-sm">
                <div className="flex items-center flex-wrap justify-between md:flex-row flex-col">
                  <div className="text-lg font-semibold text-white">
                    Investment Evaluation
                  </div>
                  <div className="text-xl font-bold text-white">
                    {isBadInvestment() ? (
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M2 11.5a2 2 0 0 0 2 2a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3a2 2 0 0 0-2 2zm13.479 4.694l-.267-.86c-.218-.705-.327-1.057-.243-1.336a.98.98 0 0 1 .42-.547c.251-.158.63-.158 1.39-.158h.404c2.57 0 3.855 0 4.462-.76q.104-.131.185-.277c.467-.848-.064-1.991-1.126-4.277c-.974-2.098-1.462-3.147-2.366-3.764a4 4 0 0 0-.27-.17c-.952-.545-2.132-.545-4.492-.545h-.511c-2.86 0-4.289 0-5.177.86C7 5.222 7 6.607 7 9.377v.974c0 1.455 0 2.183.258 2.85c.259.666.753 1.213 1.743 2.309l4.091 4.53c.103.114.154.17.2.21a1.033 1.033 0 0 0 1.442-.091c.04-.045.083-.108.17-.234a9 9 0 0 0 .261-.392a3.8 3.8 0 0 0 .446-2.89a8 8 0 0 0-.132-.448"
                            color="currentColor"
                          />
                        </svg>
                        Bad Investment
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M2 12.5a2 2 0 0 1 2-2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3a2 2 0 0 1-2-2zm13.479-4.694l-.267.86c-.218.705-.327 1.057-.243 1.336a1 1 0 0 0 .42.547c.251.158.63.158 1.39.158h.404c2.57 0 3.855 0 4.462.76q.104.131.185.277c.467.848-.064 1.991-1.126 4.277c-.974 2.098-1.462 3.147-2.366 3.764q-.132.09-.27.17c-.952.545-2.132.545-4.492.545h-.511c-2.86 0-4.289 0-5.177-.86C7 18.779 7 17.394 7 14.624v-.974c0-1.455 0-2.183.258-2.85c.259-.666.753-1.213 1.743-2.309l4.091-4.53c.103-.114.154-.17.2-.21a1.033 1.033 0 0 1 1.442.091c.04.045.083.108.17.234c.135.196.202.294.261.392c.528.871.687 1.906.446 2.89c-.027.109-.062.222-.132.448"
                            color="currentColor"
                          />
                        </svg>
                        Good Investment
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-200 mt-2">
                  <span className="font-medium">
                    The investment is bad if rentability is less than 5%
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
