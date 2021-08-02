
//listen for submit

// document.getElementById('loan-form').addEventListener('submit', calculateResults);
document.getElementById('loan-form').addEventListener('submit', function(e){

  //show loader // hide results
  document.querySelector('#loading').style.display = 'block';

  document.querySelector('#results').style.display = 'none';

  setTimeout(calculateResults, 2000); //calculateResults() after 2 sec

  e.preventDefault();


});

//calculate results

function calculateResults(){

  //show Loading
  // showLoading();
  // document.querySelector('#loading').style.display = 'block';
  // document.querySelector('#results').style.display = 'none';

  //hide loading and show result
  // setTimeout(endLoading,2000);

  // console.log('calculating');

  //UI vars
  const amountEl = document.getElementById('amount');
  const interestEl = document.getElementById('interest');
  const yearsEl = document.getElementById('years');
  const monthlyPaymentEl = document.getElementById('monthly-payment');
  const totalPaymentEl = document.getElementById('total-payment');
  const totalInterestEl = document.getElementById('total-interest');

  const principal = parseFloat(amountEl.value);
  const calculatedInterest = parseFloat(interest.value)/100/12; // interest rate in monthly basis = annual Interest rate/12
  const calculatedPayments = parseFloat(years.value) * 12;// totoal number of payments(monthly)

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest)/(x-1);

  if(isFinite(monthly)){

    monthlyPaymentEl.value = monthly.toFixed(2);
    totalPaymentEl.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestEl.value = ((monthly * calculatedPayments) - principal).toFixed(2);

    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
  }
  else{
    // console.log('Please check your Inputs');
    showError('Please Check your inputs');
  }

  // e.preventDefault();
}

function showError(error){

  document.querySelector('#loading').style.display = 'none';
  document.querySelector('#results').style.display = 'none';

  console.log('error');
  //create a div
  const errorDiv = document.createElement('div');

  //add class
  errorDiv.className = "alert alert-danger";

  //text node & append to div
  errorDiv.appendChild(document.createTextNode(error));

  //get elements

  const card = document.querySelector('.card');
  const header = document.querySelector('.heading');

  //Insert error above heading
  card.insertBefore(errorDiv, header);

  //clear error after 3 seconds // window obj
  setTimeout(clearError, 3000);
}

//clear error

function clearError(){
  document.querySelector('.alert').remove();
}

//show loading
// function showLoading(){
//   setTimeout(function(){
//     document.querySelector('#loading').style.display = 'block';
//     document.querySelector('#results').style.display = 'none';
//   },3000);
//
// }

function endLoading(){
    document.querySelector('#loading').style.display = 'none';
    document.querySelector('#results').style.display = 'block';
}
