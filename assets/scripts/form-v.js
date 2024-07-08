const inputForm = document.querySelector("#order_form");
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");

const serviceID = "service_wu09ly2";
const templateId = "template_etj0y5o";
const publiсKey = "Ffh6s4a6_5ED8X0uS";

emailjs.init(publiсKey);

inputForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    if (inputName.value.trim() === "") {
        alert("Pleace enter your name");
        return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(inputEmail.value)) {
        alert("Email standart is wrong");
        return;
    }

    const inputData = {
        from_name: inputName.value,
        from_email: inputEmail.value,
    };
    
    emailjs.send(serviceID, templateId, inputData).then(() => {
        inputName.value = '';
        inputEmail.value = '';
        alert("İlklərin siyahısına xoş gəldiniz!");
    }, (error) => console.log(error));
});
