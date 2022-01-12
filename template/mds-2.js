// Gestion du dom

// document.querySelector(".class");
// document.querySelector("#id");

let titre = document.querySelector('#titre_principal');
console.log(titre);
console.log(titre.innerHTML);

// modification
titre.innerHTML = "bienvenue chez MDS";

console.log(titre.innerHTML);

// texte
let txt = "Chain App Dev is an app landing page HTML5 template based on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a great website to download free CSS templates.";

// pas bonne pratique
let txt_p = "<p>" + txt + "</p>";
// console.log(titre.parentNode);
// titre.parentNode.append(txt_p);

// titre.parentNode.innerHTML = txt_p;


// bonne pratique

// créer un élément <p>
let p = document.createElement("p");
p.innerHTML = txt;
// ajout au DOM
titre.parentNode.append(p);