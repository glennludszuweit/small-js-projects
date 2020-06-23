// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Show loading
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// Calculate Results
function calculateResults(e) {
  console.log("Calculating...");
  // UI Vars
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyRate = document.getElementById("monthly-rate");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyRate.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
    // Show results
    document.getElementById("results").style.display = "block";
    // Hide loading
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";
  // Hide loading
  document.getElementById("loading").style.display = "none";
  const errorDiv = document.createElement("div");
  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // Add class
  errorDiv.className = "alert alert-danger";
  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));
  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // Error 3 sec disappear
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
