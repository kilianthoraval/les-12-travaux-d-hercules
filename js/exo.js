// étape 1 : link

// étape 2 : présentation

let hero = {
    name : "Hercules",
    job : "Demi-dieu",
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true, 
}

base.fillProfil(hero);

// étape 3 : amis

let friendsList = ["Jupiter", "Junon", "Alcmène", "Déjanire"]
let bestFriend = friendsList[0];
base.printFriends(friendsList);
base.setBestFriend(bestFriend);

// étape 4 : DOM

let title = document.createElement("h1");
title.classList.add = "banner__title";
title.textContent = "Vous consultez le profil de Hercule";
let herculeTitle = document.getElementById('header-banner');
herculeTitle.append(title);

// étape 5 : Boucle

for (let work = 0 ; work < 12 ; work++){
    base.displayWork(work)
}

// étape 6 : Condition

let disponibility = document.getElementById("availability");
let currentHour = base.getHour();
if ( currentHour > 8 && currentHour < 20 ){
    disponibility.innerHTML = "disponible";
    disponibility.classList.remove("off");
}
else {
    disponibility.innerHTML = "Non disponible";
    disponibility.classList.add("off");
}

// étape 7 : fonction

let profilName = document.getElementById("profil-name");

function generatePseudo(firstName, departmentNumber){
    return `${firstName}-du-${departmentNumber}`;
    
}

profilName.innerHTML = generatePseudo("hercule", 75);

// étape 8 : Event

function toggleMenu(Event){
    let headerBanner = document.getElementById("header-banner");
    headerBanner.classList.toggle("banner--open");
}

let menu = document.getElementById("menu-toggler");
menu.addEventListener("click", toggleMenu);

// étape 9 event bis

function submit(event){
    event.preventDefault();
    alert("Hercule ne souhaite pas être dérangé");
}
let contact = document.getElementById("contact");
contact.addEventListener("submit", submit);


