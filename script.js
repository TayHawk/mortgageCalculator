alert("Welcome to the Mortgage Calculator!");

function isInvalidNumber(num) {
  return num.trimStart() === "" || num < 0 || Number.isNaN(Number(num));
}
function isInvalidYear(num) {
  return num <= 0;
}

function getLoan() {
  let loanAmount = prompt(
    "What is you loan amount?\n Example: 20000 for $20,000"
  );
  while (isInvalidNumber(loanAmount)) {
    loanAmount = prompt(
      "Not a valid number....please try again!\n Please no $ or , or ."
    );
  }
  return loanAmount;
}

function getApr() {
  let apr = prompt("What is your APR %\n Example: 5 for 5% or 2.5 for 2.5%");
  while (isInvalidNumber(apr)) {
    apr = prompt("Not a valid number....please try again!");
  }
  return apr;
}

function getLoanDuration() {
  let loanDuration = prompt("What is your loan duration (in years)").toString();

  while (isInvalidNumber(loanDuration) || isInvalidYear(loanDuration)) {
    loanDuration = prompt("Not a valid number....please try again!");
  }
  return loanDuration;
}

function response() {
  const VALID_YES_NO = ["y", "n", "no", "yes"];
  answer = prompt(
    "Would you like to perform another calculation?\n  'y' for yes or  'n' for no."
  ).toLowerCase();

  while (!VALID_YES_NO.includes(answer)) {
    answer = prompt(
      'Please enter a valid response: "yes", "y", "no" or "n"'
    ).toLowerCase();
  }

  return answer;
}

function getMonthlyInterestRate(apr) {
  let aprDecimal = apr / 100;
  let monthlyInterestRate = Number(aprDecimal / 12);
  return monthlyInterestRate;
}
function displayPaymentSummary(loanAmount, apr, loanDuration, monthlyPayments) {
  alert(
    `Your loan amount is:$${loanAmount}\n Your APR is: ${apr}%\n Your loan duration in years is: ${loanDuration}\nYour monthly payments are: $${monthlyPayments.toFixed(
      2
    )}`
  );
}
function getMonthlyPayments(
  monthlyInterestRate,
  loanAmount,
  loanDurationinMonths
) {
  let monthlyPayments;
  if (monthlyInterestRate === 0) {
    return (monthlyPayments = loanAmount / loanDurationinMonths);
  } else {
    return (monthlyPayments =
      loanAmount *
      (monthlyInterestRate /
        (1 - Math.pow(1 + monthlyInterestRate, -loanDurationinMonths))));
  }
}

do {
  let loanAmount = getLoan();
  let apr = getApr();
  let loanDuration = getLoanDuration();
  let monthlyInterestRate = getMonthlyInterestRate(apr);
  let loanDurationinMonths = loanDuration * 12;

  let monthlyPayments = getMonthlyPayments(
    monthlyInterestRate,
    loanAmount,
    loanDurationinMonths
  );

  displayPaymentSummary(loanAmount, apr, loanDuration, monthlyPayments);

  answer = response();
} while (answer[0] === "y");

alert("Ok Goodbye 🤙\n\nThank you for using the Mortgage Calculator app 😁");
