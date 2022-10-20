// étape 1 : présentation

let hero = {
    name : "Hercules",
    job : "Demi-dieu",
    age : 35,
    department : 75,
    arm : 60.5,
    inRelationship : true, 
}

base.fillProfil(hero);

// étape 2 : amis


let friendsList = ["Jupiter", "Junon", "Alcmène", "Déjanire"]
let bestFriend = friendsList[0];
base.printFriends(friendsList);
base.setBestFriend(bestFriend);

// étape 3 : DOM

let title = document.createElement("h1");
title.classList.add = "banner__title";
title.textContent = "Vous consultez le profil de Hercule";
let herculeTitle = document.getElementById('header-banner');
herculeTitle.append(title);


