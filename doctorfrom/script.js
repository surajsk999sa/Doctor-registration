//input field select  
const doctorName = document.getElementById('name-of-doctor');
const qualification = document.getElementById('qualification-of-doctor');
const experience = document.getElementById('experience-in-year');
const specialize= document.getElementById('specialization');
const doctorImage = document.getElementById('image');
const adharNumber = document.getElementById('adhar');
const doctorCertificateNumber = document.getElementById('certificate-no');
const appointmentDay = document.getElementById('appointment-day');
const appointmentTime = document.getElementById('appointment-time');
const fees = document.getElementById('fees');
const doctorPhoneNumber = document.getElementById('phone');
const doctorEmail = document.getElementById('email');
//submit button select
const SubmitBtn= document.getElementById('submit-btn');
const form = document.getElementById('form');
//close pop up box code
const popUp = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.close-btn');

//submit form function
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    //doctor detail
    const doctor = doctorName.value;
    const qual = qualification.value;
    const experienceYear = experience.value;
    const special = specialize.value;
    const doctorAvatar = doctorImage.value;
    const aadhaar = adharNumber.value;
    const autCertificate = doctorCertificateNumber.value;
    const day = appointmentDay.value;
    const time = appointmentTime.value;
    const doctorFees = fees.value;
    const phoneNumber = doctorPhoneNumber.value;
    const email = doctorEmail.value;
   //conosole log data
    console.log(`Doctor name is ${doctor},qualification ${qual},experience ${experienceYear},specialize ${special},
    Aadhaar number ${aadhaar},Certificate no ${autCertificate},appointment day ${day},appointment time ${time},
    fees ${doctorFees},phone no ${phoneNumber} and E-mail ${email} .`);

  console.log(doctorAvatar);

    if(popUp.classList.contains('active')){
        form.classList.remove('active');
    }else{
        popUp.classList.add('active');
    }
})

//input field selected
let input = document.querySelectorAll('input');

//close button popup function
closeBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(popUp.classList.contains('active')){
        popUp.classList.remove('active');
    }
   input.reset(); 
})