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