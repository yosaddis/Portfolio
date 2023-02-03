const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMobile = document.querySelector('.nav-mobile');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close-btn');
const linkMyWorks = document.querySelector('.link-my-works');
const linkAboutMe = document.querySelector('.link-about-me');
const linkContactMe = document.querySelector('.link-contact-me');
const myWorks = document.querySelector('#works-list');

const myWorksContent = [
  {
    id: 0,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 1',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 1,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 2',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 2,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 3',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 3,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 4',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 4,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 5',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
  {
    id: 5,
    url: './img/background/bk.png',
    alt: 'Project preview image',
    title: 'My Works Title 6',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tecnologies: {
      tech1: 'CodeKit',
      tech2: 'GitHub',
      tech3: 'Javascript',
      tech4: 'Bootstrap',
    },
    linkVersion: '#',
    linkSource: '#',
  },
];

const popupDiv = (index) => `

 <section class="my-works-details">
          <button type="button" class="icon btn-close-pop-up">
              <img class="icon" src="./img/icon/Icon-cancel-menu.svg" alt="cancel icon">
          </button>
          <div class="work-image-details">
          <img src=${myWorksContent[index].url} alt ='${myWorksContent[index].alt}'>
          </div>
          <h2 class="work-title-mobile">
              ${myWorksContent[index].title}
          </h2>
          <ul class="work-tags-mobile">
              <li class="tag-mobile">${myWorksContent[index].tecnologies.tech1}</li>
              <li class="tag-mobile">${myWorksContent[index].tecnologies.tech2}</li>
              <li class="tag-mobile">${myWorksContent[index].tecnologies.tech3}</li>
          <li class="tag-mobile">${myWorksContent[index].tecnologies.tech4}</li>
          </ul>
          <p class="work-discription-mobile">
        ${myWorksContent[index].description}
          </p>
          <div class="work-button-mobile">
                  <a href=${myWorksContent[index].linkVersion} class="work-detail-btn-mobile">
                  See Live
                  <img src="./img/icon/live-icon.svg" class="icon" alt="live icon">
                  </a>
                  <a href=${myWorksContent[index].linkSource} class="work-detail-btn-mobile">
                  See Sources
                  <img src="./img/icon/git-hub-icon.svg" class="icon" alt="github icon">
                  </a>
          </div>
          <script src="java_script.js"></script>
  </section>

`;

function createMyWorksList(myWorksContent) {
  const myWorksList = `
      <div class="work-card">
        <div class="work-thumbnail">
        </div>
        <h3 class="card-title">${myWorksContent.title}</h3>
        <ul class="card-languages" >
          <li>${myWorksContent.tecnologies.tech1}</li>
          <li>${myWorksContent.tecnologies.tech2}</li>
          <li>${myWorksContent.tecnologies.tech3}</li>
          <li>${myWorksContent.tecnologies.tech4}</li>
        </ul>
        <button type="button" class="pop-up"> See Project</button>
      </div>`;
  return myWorksList;
}

for (let i = 0; i < myWorksContent.length; i += 1) {
  const work = createMyWorksList(myWorksContent[i]);
  myWorks.innerHTML += work;
}

const popupBtns = document.querySelectorAll('.pop-up');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenuBtn.classList.add('hidden');
  navMobile.classList.remove('hidden');
});

mobileMenuCloseBtn.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  mobileMenuBtn.classList.remove('hidden');
});

linkMyWorks.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  mobileMenuBtn.classList.remove('hidden');
});

linkAboutMe.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  mobileMenuBtn.classList.remove('hidden');
});

linkContactMe.addEventListener('click', () => {
  navMobile.classList.add('hidden');
  mobileMenuBtn.classList.remove('hidden');
});

for (let i = 0; i < popupBtns.length; i += 1) {
  popupBtns[i].addEventListener('click', () => {
    const myWork = document.createElement('div');
    myWork.classList.add('pop-up-bk');
    myWork.innerHTML = popupDiv(i);
    document.body.appendChild(myWork);
    const closePopupBtn = document.querySelector('.btn-close-pop-up');
    closePopupBtn.addEventListener('click', () => {
      document.body.removeChild(myWork);
    });
  });
}