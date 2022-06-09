//Listen for submit button
document.getElementById('loan-form').addEventListener('submit',function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults,2000);
    e.preventDefault();
});

//calculate result function
function calculateResults(){
    console.log("calculating...");

    //UI Vars
    const amount = document.getElementById('amount');
    const intrest = document.getElementById('intrest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterst = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    console.log("principal",principal);
    const calculatedIntrest = parseFloat(intrest.value)/100/12;
    console.log("calculatedIntrest",calculatedIntrest);
    const calculatedPayment = parseFloat(years.value)*12;
    console.log("calculatedPayment",calculatedPayment);

    //compute the monthly payment
    const x = Math.pow(1+ calculatedIntrest,calculatedPayment);
    const monthly = (principal * x * calculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterst.value = ((monthly*calculatedPayment) - principal).toFixed(2);

        //Show results
        document.getElementById('results').style.display = 'block';
        
        //Hide loader
        document.getElementById('loading').style.display = 'none';
    }else{
        // console.log("Please check enterd number");
        showError('please check your numbers');
    }

    
}

//showError function
function showError(err){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    //Show loader
    document.getElementById('loading').style.display = 'none';

    //create a div
    const errDiv = document.createElement('div');

    //Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class
    errDiv.className = 'alert alert-danger';
    //create text node and append to div
    errDiv.appendChild(document.createTextNode(err))

    //Insert error in above heading
    card.insertBefore(errDiv,heading);

    //clear error after some time
    setTimeout(clearError,2000);
}

//clear error function
function clearError(){
    document.querySelector('.alert').remove();
}