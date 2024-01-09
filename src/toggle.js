// global variables
import PlusSign from './images/icon-plus.svg';
import MinusSign from './images/icon-minus.svg';

function toggleDescription() {
    const accTitle = document.querySelectorAll('.acc-title');
    /* When accTitle is clicked, description will toggle the closed
    data attribute on and off */
    accTitle.forEach((title) => {
        title.addEventListener('click', (event) => {
            let eventTar = event.target;
            let eventAcc = eventTar.nextElementSibling;
            let accImg = eventTar.lastElementChild;
            if (!eventAcc.hasAttribute('open')) {
                eventAcc.setAttribute('open', '');
                accImg.src = MinusSign;
                eventAcc.style.maxHeight = eventAcc.scrollHeight + 'px';
            } else {
                eventAcc.style.maxHeight = 0;
                accImg.src = PlusSign;
                eventAcc.removeAttribute('open', '');
            }
        })
    })
}



export { toggleDescription };