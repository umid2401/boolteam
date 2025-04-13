const openAuth = document.getElementById('openAuth');
const authPopup = document.getElementById('authPopup');
const regPopup = document.getElementById('regPopup');
const closePopups = document.querySelectorAll('.close-popup');
const openRegFromAuth = document.getElementById('openRegFromAuth');

// openAuth.addEventListener('click', () => {
//     authPopup.classList.add('active');
// });

openRegFromAuth.addEventListener('click', (e) => {
    e.preventDefault(); 
    authPopup.classList.remove('active');
    regPopup.classList.add('active');
});

closePopups.forEach(close => {
    close.addEventListener('click', () => {
        close.closest('.popup').classList.remove('active');
        resetRegSteps();
    });
});

const regStep1 = document.getElementById('regStep1');
const regStep2 = document.getElementById('regStep2');
const regStep3 = document.getElementById('regStep3');
const regSuccess = document.getElementById('regSuccess');
const regNext1 = document.getElementById('regNext1');
const regNext2 = document.getElementById('regNext2');
const regSubmit = document.getElementById('regSubmit');

regNext1.addEventListener('click', () => {
    regStep1.style.display = 'none';
    regStep2.style.display = 'block';
});

regNext2.addEventListener('click', () => {
    regStep2.style.display = 'none';
    regStep3.style.display = 'block';
});

regSubmit.addEventListener('click', () => {
    regStep3.style.display = 'none';
    regSuccess.style.display = 'block';
});

function resetRegSteps() {
    regStep1.style.display = 'block';
    regStep2.style.display = 'none';
    regStep3.style.display = 'none';
    regSuccess.style.display = 'none';
}
//
document.addEventListener('DOMContentLoaded', function() {
    const smsButton = document.querySelector('.sms-button');
    const messageContent = document.querySelector('.message-content-sms');
    const closeButton = document.getElementById('close-btn');
    const otvetitButton = document.querySelector('.otvetit-button');
    const otvetitModal = document.getElementById('otvetitModal');
    const closeModal = document.querySelector('.close-modal');

    smsButton.addEventListener('click', () => {
        messageContent.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        messageContent.classList.remove('active');
    });

    otvetitButton.addEventListener('click', () => {
        otvetitModal.style.display = 'block';
        messageContent.classList.remove('active');
    });

    closeModal.addEventListener('click', () => {
        otvetitModal.style.display = 'none';
    });

    // Tashqariga bosilganda xabarni yopish
    window.addEventListener('click', (event) => {
        if (
            messageContent.classList.contains('active') && 
            !messageContent.contains(event.target) && 
            event.target !== smsButton && 
            !smsButton.contains(event.target) // Yangi shart
        ) {
            messageContent.classList.remove('active');
            
        }
    });
});