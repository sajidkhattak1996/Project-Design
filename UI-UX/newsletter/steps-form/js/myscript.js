var currentTab = 0;
showInputElement(currentTab);

function showInputElement(n) {
    var allInputElement = document.getElementsByClassName("inputElements");
    allInputElement[n].style.display = "block";

    document.getElementById("stepStatus").innerHTML = `  Step -  ${n+1}`
    document.querySelector(".noButton").style.backgroundColor = "black"
    if (n == 0) {
        document.getElementById("controlButtonPreview").style.display = "none";
    } else {
        document.getElementById("controlButtonPreview").style.display = "inline";
    }
    if (n == (allInputElement.length - 1)) {
        document.getElementById("controlButton").innerHTML = "Submit";

    } else {
        document.getElementById("controlButton").innerHTML = "Next";
    }

    stepsNumber(n)
}

function nextTab(n) {

    var alltab = document.getElementsByClassName("inputElements");
    if (n == 1 && !validateForm()) return false;
    alltab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    document.getElementById("stepStatus").innerHTML = `  Step -  ${currentTab +1}`
    showInputElement(currentTab);

}

function stepsNumber(n) {

    var x = document.querySelectorAll(".noButton");
    x.forEach((item, i) => {
        item.style.backgroundColor = " #161853"
    })


    x[n].style.backgroundColor = " #ec255a";;
}

function validateForm() {
    var alltab, smalltxt, validationForm, valid = true;
    alltab = document.getElementsByClassName("inputElements");
    validationForm = alltab[currentTab].querySelectorAll("input");
   requiredTxt = alltab[currentTab].querySelectorAll(".form-text");
    for (let i in validationForm) {
        if (validationForm[i].value == "") {
            validationForm[i].style.border = "2px solid red";

            requiredTxt.forEach(item => {
                item.innerHTML = "Please fill all fields"
            })
           

            valid = false;
        }

    }



    return valid;

}