import './styles/style.sass';
import { toggleDescription } from './toggle';
import HeaderImg from './images/icon-star.svg';
import PlusSign from './images/icon-plus.svg';

window.onload = loadPageContent;

function createBackground() {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('backgroundContainer');
    document.body.append(backgroundContainer);
}

function createCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // header section
    const header = document.createElement('header');
    
    const headerImg = new Image();
    headerImg.src = HeaderImg;
    headerImg.alt = 'A star';
    header.append(headerImg);

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'FAQS';
    header.append(headerTitle);

    card.append(header);

    // main section
    const main = document.createElement('main');

    const section1 = document.createElement('section');

    const accTitle1 = document.createElement('div');
    accTitle1.classList.add('acc-title');

    const accTitleHeader1 = document.createElement('h4');
    accTitleHeader1.textContent = 'What is Frontend Mentor, and how will it help me?';
    accTitle1.append(accTitleHeader1);

    const accTitlePlus1 = new Image();
    accTitlePlus1.src = PlusSign;
    accTitlePlus1.alt = 'A plus sign for expanding the hidden text underneath'
    accTitle1.append(accTitlePlus1);

    section1.append(accTitle1);

    const title1 = document.createElement('p');
    title1.classList.add('title1');
    title1.classList.add('description');
    title1.textContent = `Frontend Mentor offers realistic coding challenges to help developers
    improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It\'s suitable
    for all levels and ideal for portfolio building.`;
    
    section1.append(title1);
    main.append(section1);

    const breakEl1 = document.createElement('hr');
    main.append(breakEl1);

    const section2 = document.createElement('section');

    const accTitle2 = document.createElement('div');
    accTitle2.classList.add('acc-title');

    const accTitleHeader2 = document.createElement('h4');
    accTitleHeader2.textContent = 'Is Frontend Mentor free?';
    accTitle2.append(accTitleHeader2);

    const accTitlePlus2 = new Image();
    accTitlePlus2.src = PlusSign;
    accTitlePlus2.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle2.append(accTitlePlus2);

    section2.append(accTitle2);

    const title2 = document.createElement('p');
    title2.classList.add('title2');
    title2.classList.add('description');
    title2.textContent = `Yes, Frontend Mentor offers both free and premium coding challenges,
    with the free option providing access to a range of projects suitable for all skill levels.`;

    section2.append(title2);
    main.append(section2);

    const breakEl2 = document.createElement('hr');
    main.append(breakEl2);

    const section3 = document.createElement('section');

    const accTitle3 = document.createElement('div');
    accTitle3.classList.add('acc-title');

    const accTitleHeader3 = document.createElement('h4');
    accTitleHeader3.textContent = 'Can I use Frontend Mentor projects in my portfolio?';
    accTitle3.append(accTitleHeader3);

    const accTitlePlus3 = new Image();
    accTitlePlus3.src = PlusSign;
    accTitlePlus3.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle3.append(accTitlePlus3);

    section3.append(accTitle3);

    const title3 = document.createElement('p');
    title3.classList.add('title3');
    title3.classList.add('description');
    title3.textContent = `Yes, you can use projects completed on Frontend Mentor in your portfolio.
    It's an excellent way to showcase your skills to potential employers!`;

    section3.append(title3);
    main.append(section3);

    const breakEl3 = document.createElement('hr');
    main.append(breakEl3);

    const section4 = document.createElement('section');

    const accTitle4 = document.createElement('div');
    accTitle4.classList.add('acc-title');

    const accTitleHeader4 = document.createElement('h4');
    accTitleHeader4.textContent = 'How can I get help if I\'m stuck on a challenge?';
    accTitle4.append(accTitleHeader4);

    const accTitlePlus4 = new Image();
    accTitlePlus4.src = PlusSign;
    accTitlePlus4.alt = 'A plus sign for expanding the hidden text underneath';
    accTitle4.append(accTitlePlus4);

    section4.append(accTitle4);

    const title4 = document.createElement('p');
    title4.classList.add('title4');
    title4.classList.add('description');
    title4.textContent = `The best place to get help is inside Frontend Mentor's Discord community.
    There's a help channel where you can ask questions and seek support from other community members.`;

    section4.append(title4);
    main.append(section4);

    card.append(main);
    
    document.body.append(card);
}

function loadPageContent() {
    createBackground();
    createCard();
    toggleDescription();
}