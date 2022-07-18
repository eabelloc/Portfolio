const personalInfo = {
      name: 'Elias Bello',
      location: 'Lübeck',
      img: 'https://avatars.githubusercontent.com/u/108528855?s=400&u=5515c491d30fc021a3b69d9d623404473c553925&v=4',      
      about: 'Doing a Bootcamp for Web Development Full Stack in Neoland. I am also a composer that loves contemporary music and Balinese gamelan', 
    };

const technologies = {
  html: {
    name: 'HTML5',
    experience: 'Junior',
    img: 'https://e7.pngegg.com/pngimages/278/620/png-clipart-html-5-logo-area-text-brand-metroui-apps-html-5-text-trademark-thumbnail.png'
  },

  css: {
    name: 'CSS3',
    experience: 'Junior',
    img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_640.png'
  },

  js: {
    name: 'JavaScript',
    experience: 'Junior',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'
  },

  node: {
    name: 'NodeJS',
    experience: 'Junior',
    img: 'https://seeklogo.com/images/N/nodejs-logo-52F5C0204E-seeklogo.com.png'
  },
  
  reactjs: {
    name: 'ReactJS',
    experience: 'Junior',
    img: 'https://www.svgrepo.com/show/327388/logo-react.svg'
  },
  npm: {
    name: 'NPM',
    experience: 'Junior',
    img: 'https://authy.com/wp-content/uploads/npm-logo.png'
  },

  mongodb: {
    name: 'MongoDB',
    experience: 'Junior',
    img: 'https://www.seekpng.com/png/full/383-3838960_mongodb-png.png'
  },

  git: {
    name: 'Git',
    experience: 'Junior',
    img: 'https://cdn.worldvectorlogo.com/logos/git-bash.svg'
  },

  github: {
    name: 'GitHub',
    experience: 'Junior',
    img: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
};

const gallery = {
  landing1: {
    name: 'Tienda de Musica',
    cover: 'https://www.nicepng.com/png/full/806-8067770_music-store-graphic-design.png'
  },

  landing2: {
    name: 'Servicios de Composiciones y Transcripciones',
    cover: 'https://images.vectorhq.com/images/previews/417/music-notes-psd-434788.png'
  },

  landing3: {
    name: 'El Corte Ingles',
    cover: 'https://brandeps.com/logo-download/E/El-Corte-Ingles-logo-vector-01.svg'
  },

  landing4: {
    name: 'Parallax-Type Website',
    cover: 'https://i0.wp.com/rezghob.com/wp-content/uploads/2020/01/rezghob_rts_parallax_landscape_mountains_layers-1.png?resize=768%2C380&ssl=1'
  },
};

const rrss = {
  linkedin: {
    name: 'LinlkedIn',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174857.png'
  },

  github: {
    name: 'GitHub',
    logo: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
  },
};

let personalInfoHtml = document.querySelector('#personalInfo');
let technologiesHtml = document.querySelector('#technologies');
let galleryHtml = document.querySelector('#gallery');
let rrssHtml = document.querySelector('#rrss');

const personalInfoConversionHtml = (personalInfo) => {
  return `
  <h1>${personalInfo.name}</h1>
    <div class="personal-data">
      <h2>${personalInfo.location}</h2>
      <div class="personal-img-container">
        <img  class="personal-img" src="${personalInfo.img}" alt="${personalInfo.name}"
      </div>
    </div>
    <div><p>${personalInfo.about}</p></div>
   `
}

const technologiesConversionHtml = (technologies) => {
  return `
  <div class="technologies-info">
    <h1>${technologies.html.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.html.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.html.img}" alt="${technologies.html.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.css.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.css.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.css.img}" alt="${technologies.css.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.js.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.js.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.js.img}" alt="${technologies.js.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.node.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.node.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.node.img}" alt="${technologies.node.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.reactjs.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.reactjs.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.reactjs.img}" alt="${technologies.reactjs.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.npm.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.npm.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.npm.img}" alt="${technologies.npm.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.mongodb.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.mongodb.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.mongodb.img}" alt="${technologies.mongodb.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.git.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.git.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.git.img}" alt="${technologies.git.name}">
      </div>
    </div>
  </div>
  <div class="technologies-info">
    <h1>${technologies.github.name}</h1>
    <div class="technologies-data">
      <h2>${technologies.github.experience}</h2>
      <div class="technologies-img-container">
        <img src="${technologies.github.img}" alt="${technologies.github.name}">
      </div>
    </div>
  </div>
  `
}

const galleryConversionHtml = (gallery) => {
  return `
    <ul class"gallery-list">
      <li>
        <div claas="gallery-image-container">
          <img src="${gallery.landing1.cover}" alt="${gallery.landing1.name}">
        </div>
        <h2 class="gallery-title">${gallery.landing1.name}<h2>
      </li>
      <li>
        <div claas="gallery-image-container">
          <img src="${gallery.landing2.cover}" alt="${gallery.landing2.name}">
        </div>
        <h2 class="gallery-title">${gallery.landing2.name}</h2>
      </li>
      <li>
        <div claas="gallery-image-container">
          <img src="${gallery.landing3.cover}" alt="${gallery.landing3.name}">
        </div>
        <h2 class="gallery-title">${gallery.landing3.name}</h2>      
      </li>
      <li>
        <div claas="gallery-image-container"> 
          <img src="${gallery.landing4.cover}" alt="${gallery.landing4.name}">
        </div>
        <h2 class="gallery-title">${gallery.landing4.name}</h2>
      </li>
    </ul>
  `
}

const rrssConversionHtml = (rrss) => {
  return `
    <ul class="rrss-list">
    <li>
      <div class="rrss-img-container"x  >
        <img src="${rrss.linkedin.logo}" alt="${rrss.linkedin.name}">
      </div>
      <a href="#">${rrss.linkedin.name}</a>
    </li>
    <li>
      <div class="rrss-img-container">
        <img src="${rrss.github.logo}" alt="${rrss.github.name}">
      </div>
      <a href="#">${rrss.github.name}</a>
    </li>
    </ul>
`
}

const passToDocumentHtml = (container, functionCreateHTML, element) => {
  container.innerHTML += functionCreateHTML(element);
}

passToDocumentHtml(personalInfoHtml, personalInfoConversionHtml, personalInfo);
passToDocumentHtml(technologiesHtml, technologiesConversionHtml, technologies);
passToDocumentHtml(galleryHtml, galleryConversionHtml,gallery)