//Function to get a random item of an array.
const randomize = (i) => i[Math.floor(Math.random() * i.length)];

//Objects containing languages, frameworks and randomizing methods.
const backend = {
  languages: ['Javascript-Node', 'GO', 'Java', 'PHP', 'Ruby', 'Python', 'C#'],
  backendFrameworks: {
    javascript: ['Express', 'Hapi', 'Koa', 'Adonis'],
    go: ['Gin', 'Beego'],
    java: ['Spring', 'Struts', 'Hibernate'],
    php: ['Laravel', 'Cake', 'Yii'],
    ruby: ['Rails', 'Sinatra'],
    python: ['Flask', 'Django'],
    'c#': ['.net'],
  },
  getRandomBackendLanguage() {
    return randomize(this.languages);
  },
  getRandBackendFramework(framework) {
    let b = this.backendFrameworks[framework];
    return b.length > 1 ? randomize(b) : b;
  },
};

const frontend = {
  languages: ['Javascript', 'Dart'],
  frontendFrameworks: {
    javascript: ['React', 'Vue', 'Angular', 'Svelte', 'Ember'],
    dart: ['Flutter', 'AngularDart', 'MDLDart'],
  },
  getRandomFrontendLanguage() {
    return randomize(this.languages);
  },
  getRandFrontendFramework(framework) {
    return randomize(this.frontendFrameworks[framework]);
  },
};

/*Functions taking a parameter of the backend/frontend langauge and returning 
a random framework for that SPECIFIC language.*/
const getBackendFramework = (backendLang) =>
  backend.getRandBackendFramework(
    backendLang.replace(/-Node/, '').toLowerCase()
  );

const getFrontendFramework = (frontendLang) =>
  frontend.getRandFrontendFramework(frontendLang.toLowerCase());

//Setting variables for the final back and frontend languages+frameworks.
const backendLanguage = backend.getRandomBackendLanguage();
const frontendLanguage = frontend.getRandomFrontendLanguage();

const backendFramework = getBackendFramework(backendLanguage);
const frontendFramework = getFrontendFramework(frontendLanguage);

//Prints the complete message containing all languages and frameworks.
const results = () =>
  console.log(
    `You will be using ${backendLanguage} with ${backendFramework} framework for the backend of your web app. 
On the front end, you will be using ${frontendLanguage} with ${frontendFramework} framework!`
  );

const art = () => {
  console.log(
    '\x1b[36m%s\x1b[0m',
    `
█▀█ ▄▀█ █▄░█ █▀▄ █▀█ █▀▄▀█   ▀█▀ █▀▀ █▀▀ █░█   █▀ ▀█▀ ▄▀█ █▀▀ █▄▀
█▀▄ █▀█ █░▀█ █▄▀ █▄█ █░▀░█   ░█░ ██▄ █▄▄ █▀█   ▄█ ░█░ █▀█ █▄▄ █░█
`
  );
};

art();
results();
