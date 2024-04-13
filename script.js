
var f=0;

function selected(){
    var er3=document.querySelector(".error3");
    document.getElementById("error3").innerHTML="Please select any age group";
    er3.style.display="none";
    f=0 

    
}

function submittax(){
    var income=document.getElementById("income").value;
    var extraincome=document.getElementById("extraIncome").value;
    var agegroup=document.getElementById("age").value;
    var deductions=document.getElementById("deductions").value;


    if(income == "" || extraincome == "" || agegroup == "" || deductions == ""){

        if(income == ""){
            var er1=document.querySelector(".error1");
            document.getElementById("error1").innerHTML="Please fill this field...";
            er1.style.display="flex";
        }
        if(extraincome == ""){
            var er2=document.querySelector(".error2");
            document.getElementById("error2").innerHTML="Please fill this field...";
            er2.style.display="flex";
        }
        if(agegroup == ""){
            var er3=document.querySelector(".error3");
            document.getElementById("error3").innerHTML="Please select any age group";
            er3.style.display="flex";
        }
        else{
            var er3=document.querySelector(".error3");
            er3.style.display="none";

        }
        if(deductions == ""){
            var er4=document.querySelector(".error4");
            document.getElementById("error4").innerHTML="Please fill this field...";
            er4.style.display="flex";
        }

        f=1;

    }

    else{
        if(f==0){
            var income1=parseInt(document.getElementById("income").value);
            var extraincome1=parseInt(document.getElementById("extraIncome").value);
            var agegroup1=parseInt(document.getElementById("age").value);
            var deductions1=parseInt(document.getElementById("deductions").value);

            var finalincome=0;

            var overall=income1+extraincome1-deductions1;
            
            if(overall<=800000){
                finalincome=income1+extraincome1-deductions1;
                var tax=document.getElementById("atax");
                tax.innerHTML=finalincome;
                document.getElementById("resultModal").classList.remove("active");
            }
            else{
                var overall=income1+extraincome1-deductions1;
                finalincome=overall-800000;

                var taxadd=0;
                if(agegroup1=="40"){
                    taxadd=0.3;
                }
                else if (agegroup1=="41,59"){
                    taxadd=0.4;
                }
                else if(agegroup1=="60"){
                    taxadd=0.5;
                }

                finalincome=finalincome*taxadd;
                
                var tax=document.getElementById("atax");
                tax.innerHTML=overall-finalincome;
                document.getElementById("resultModal").classList.remove("active");

            }

        }
    }

}



function checkfield(id,field,error){
    var regExp = /[a-zA-Z]/g;
    var text=document.getElementById(id).value;
    if(regExp.test(text)){
        // console.log(document.getElementById(id).value);
        var er1=document.querySelector("."+error);
        document.getElementById(error).innerHTML="Please enter only numbers";
        er1.style.display="flex";
        f=1;
    }
    else{
        var er1=document.querySelector("."+error);
        document.getElementById(error).innerHTML="Please enter only numbers";
        er1.style.display="none";
        f=0;
    }
}























// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('taxCalculatorForm');
//     const errorIconsContainer = document.getElementById('errorIcons');

//     // Function to add error icon
//     function addErrorIcon(inputField, errorMessage) {
//         const errorIcon = document.createElement('div');
//         errorIcon.classList.add('error-icon');
//         errorIcon.innerHTML = '!';
//         errorIcon.title = errorMessage;
//         errorIconsContainer.appendChild(errorIcon);
//     }

//     // Function to remove all error icons
//     function removeErrorIcons() {
//         errorIconsContainer.innerHTML = '';
//     }

//     // Function to calculate tax
//     function calculateTax(income, extraIncome, deductions, age) {
//         let taxableIncome = income + extraIncome - deductions;
//         let taxRate = 0;

//         if (taxableIncome > 8000000) {
//             if (age === '<40') taxRate = 0.3;
//             else if (age === '>=40 & <60') taxRate = 0.4;
//             else if (age === '>=60') taxRate = 0.1;
//             return (taxableIncome - 800000) * taxRate;
//         } else {
//             return 0;
//         }
//     }

//     // Function to display result modal
//     function displayResultModal(taxAmount) {
//         const modal = document.getElementById('resultModal');
//         const closeBtn = document.querySelector('.close');
//         const taxAmountText = document.getElementById('taxAmount');

//         taxAmountText.textContent = `Tax Amount: ${taxAmount.toFixed(2)} Lakhs`;
//         modal.style.display = 'block';

//         closeBtn.onclick = function() {
//             modal.style.display = 'none';
//         }

//         window.onclick = function(event) {
//             if (event.target == modal) {
//                 modal.style.display = 'none';
//             }
//         }
//     }

//     // Form submit event listener
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Clear previous error icons
//         removeErrorIcons();

//         // Get form inputs
//         const income = parseFloat(form.elements.income.value);
//         const extraIncome = parseFloat(form.elements.extraIncome.value);
//         const deductions = parseFloat(form.elements.deductions.value);
//         const age = form.elements.age.value;

//         // Validate inputs
//         let hasError = false;

//         if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
//             addErrorIcon(form.elements.income, 'Please enter valid numbers');
//             hasError = true;
//         }

//         if (!age) {
//             addErrorIcon(form.elements.age, 'Please select an age group');
//             hasError = true;
//         }

//         if (hasError) return;

//         // Calculate tax
//         const taxAmount = calculateTax(income, extraIncome, deductions, age);

//         // Display result modal
//         displayResultModal(taxAmount / 100000); // Convert to Lakhs
//     });
// });
