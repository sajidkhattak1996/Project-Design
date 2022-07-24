// var currentInputElementTab = 0;
// var stepBoxes = document.getElementsByClassName("stepBox");
// var allInputElement = document.getElementsByClassName("inputElements");

// // console.log(stepBoxes);

// showInputElement(currentInputElementTab);


// function showInputElement(element_no){

//     if(element_no==0 || element_no<3){
//         allInputElement[element_no].style.display = "block";
//     }
//     // tabSteps(element_no);
//     if(element_no > 0 || element_no<allInputElement.length){
//         document.getElementById("controlButtonPreview").style.display="block";
//     }else{
//         document.getElementById("controlButtonPreview").style.display="none";
//     }
//     tabSteps(element_no);
// }


// function nextTab(n){
//     var v_Status = validateForm();
//     console.log(v_Status);
//     if(n==1 && v_Status==false ) 
//     {
//         // allInputElement[currentInputElementTab].style.display="block";
//         //this condition is use for when single error msg are display on element for all
//         // console.log('validation is faildeddddddddddddddddddddddddddddd');
//         return false;
//     }
//     else{
//         // console.log("i an also call elseedgdgffeeeeeee");
//         // console.log(currentInputElementTab);
//         if(currentInputElementTab >= allInputElement.length ){
//             console.log("greater");
//             console.log(currentInputElementTab);
//             document.getElementById("myForm").submit();
//             return false;
//         }else{
//             allInputElement[currentInputElementTab].style.display="none";
//             currentInputElementTab = currentInputElementTab + n;
//             // console.log("curremt tab = "+currentInputElementTab);
//             showInputElement(currentInputElementTab);
//         }
//     }


// }


// function validateForm(){
//     // console.log('i am calling');
//     var t = document.getElementById("inputElement"+currentInputElementTab);
//     const e="Error";
//     const e1="Please Fill the required Field.";

//     var allInputs = t.getElementsByTagName("input");
//     var validationStatus = true;
    
//     // console.log(allInputs);
//     // console.log(i);
//     for(let j=0; j<allInputs.length; j++){
//         let inputId = allInputs[j].id;
//         let field_values = allInputs[j].value;
//         var errorDisplay = document.getElementById(inputId+e);

//         // var validation1 = true;
//         // var validation2 = true;
//         // console.log('filed values is  === '+field_values);
//         // console.log(allInputs[j].value);

//         if(field_values==""){
//             // console.log('field is empty');
//             errorDisplay.classList.add("alert-danger");
//             errorDisplay.innerHTML=e1;
//             // console.log(d);
//             return false;
//         }else{
//             // errorDisplay.classList.remove("alert-danger");
//             // errorDisplay.innerHTML="";
//             // validationStatus = true;
//             if(inputId=='firstName'){
//                 var fname_regexpression = new RegExp("^[a-zA-Z0-9.,/ $@()]+$");
//                 // var fname_regexpression = new RegExp(!/[~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g);
//                 let test = fname_regexpression.test(field_values);
//                 if(test==false){
//                     errorDisplay.classList.add("alert-danger");
//                     errorDisplay.innerHTML = "Please enter a valid first name";
//                     validationStatus = false;
//                 }else{
//                     errorDisplay.innerHTML = "";
//                     errorDisplay.classList.remove("alert-danger"); 
//                     validationStatus = true;
//                 }
//             }
//             else if(inputId=='lastName'){
//                 // var fname_regexpression = new RegExp(!/[~`!@#$%\^&*()+=\-\[\]\\';,/{}|\\":<>\?]/g);
//                 var fname_regexpression = new RegExp("^[a-zA-Z0-9.,/ $@()]+$");
//                 let test = fname_regexpression.test(field_values);
//                 if(test==false){
//                     errorDisplay.innerHTML = "Please enter a valid last name";
//                     errorDisplay.classList.add("alert-danger");
//                     validationStatus = false;
//                 }else{
//                     errorDisplay.innerHTML = "";
//                     errorDisplay.classList.remove("alert-danger"); 
//                     validationStatus = true;
//                 }
//             }
//              else if(inputId=='cnic'){
//                 var regexp = new RegExp('^[0-9]{5}-[0-9]{7}-[0-9]{1}');
//                 let verifty = regexp.test(field_values);
//                 // console.log("cnic=="+verifty);
//                 if(verifty==false){
//                     // var t =  document.getElementById("cnicError");
//                     errorDisplay.innerHTML="Please enter a valid cnic. eg: 12344-1234567-1";
//                      errorDisplay.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      errorDisplay.classList.remove("alert-danger");
//                      errorDisplay.innerHTML="";
//                      validationStatus = true;
//                  } 
//                 //  console.log(validationStatus);
//             }
//             else if(inputId=='phoneNo'){
//                 var regexp = new RegExp('^[0-9]{4}-[0-9]{7}');
//                 let verifty = regexp.test(field_values);
//                 var t =  document.getElementById("phoneNoError");
//                 if(verifty==false){
//                     t.innerHTML="Please enter a valid number. eg: 0310-1234567";
//                      t.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      t.classList.remove("alert-danger");
//                      t.innerHTML="";
//                      validationStatus = true;
//                  }
//             }
//             else if(inputId=='countryName'){
//                 // var regexp = new RegExp(/^[a-zA-Z0-9\s,'-]*$/);
//                 var regexp = new RegExp(/^[A-Za-z]+$/);
//                 let verifty = regexp.test(field_values);
//                 var t =  document.getElementById("countryNameError");
//                 if(verifty==false){
//                     t.innerHTML="Please enter a valid country name. eg: abcdefdgh";
//                      t.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      t.classList.remove("alert-danger");
//                      t.innerHTML="";
//                      validationStatus = true;
//                  }
//             }
//             else if(inputId=='cityName'){
//                 var regexp = new RegExp(/^[A-Za-z]+$/);
//                 let verifty = regexp.test(field_values);
//                 var t =  document.getElementById("cityNameError");
//                 if(verifty==false){
//                     t.innerHTML="Please enter a valid country name. eg: abcdefdgh";
//                      t.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      t.classList.remove("alert-danger");
//                      t.innerHTML="";
//                      validationStatus = true;
//                  }
//             }
//             else if(inputId=='postAddress'){
//                 var regexp = new RegExp(/^[A-Za-z]{1}[a-zA-Z0-9]{5,30}/);
//                 let verifty = regexp.test(field_values);
//                 var t =  document.getElementById("postAddressError");
//                 if(verifty==false){
//                     t.innerHTML="Please enter a valid address. eg: ";
//                      t.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      t.classList.remove("alert-danger");
//                      t.innerHTML="";
//                      validationStatus = true;
//                  }
//             }
//             else if(inputId=='permanentAddress'){
//                 var regexp = new RegExp(/^[A-Za-z]{1}[a-zA-Z0-9]{5,30}/);
//                 let verifty = regexp.test(field_values);
//                 var t =  document.getElementById("permanentAddressError");
//                 if(verifty==false){
//                     t.innerHTML="Please enter a valid address. eg: ";
//                      t.classList.add("alert-danger");
//                      validationStatus = false;
//                  }else{
//                      t.classList.remove("alert-danger");
//                      t.innerHTML="";
//                      validationStatus = true;
//                  }
//             }
//             // else if(validation1==false || validation2==false || validationStatus==false){
//             //     validationStatus == false;
//             // }else{
//             //     validationStatus = true;
//             // }

//         }
//     }
//     return validationStatus;
// }

// function tabSteps(no){
//     let number = no + 1;
//     var BoxLine1 = document.getElementById("box"+number+'Line'+1);
//     var BoxButtons = document.getElementById("box"+number+'Button');

//     if(no==0){
//         BoxLine1.classList.add("stepLineActive");
//         BoxButtons.classList.add("stepButtonActive");
//     }
//     else if(no == 1 || no == 2 || no == 3){
//         var boxPrevous = document.getElementById("box"+no+'Line'+2);
//         BoxLine1.classList.add("stepLineActive");
//         BoxButtons.classList.add("stepButtonActive");
//         boxPrevous.classList.add("stepLineActive");
        
//         document.getElementById("stepStatus").innerHTML="Step - "+number;

//         if(no == 3){
//             document.getElementById("controlButton").innerHTML="Submit";
//         }
//         else{
//             document.getElementById("controlButton").innerHTML="Next";
//         }
//     }
// }