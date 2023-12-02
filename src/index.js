import "./style.css";

const markup = `
<h1>Webpack + Babel + ESLint + Prettier</h1>
`;

const h1 = new DOMParser()
  .parseFromString(markup, "text/html")
  .querySelector("h1");

document.body.appendChild(h1);

const cat = [1, 2, 3, 4];
console.log(cat);
