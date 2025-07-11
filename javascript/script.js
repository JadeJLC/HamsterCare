'use strict' ;
// Définition des variables
// Valeur de besoins
let hunger = 100; // Faim
let thirst = 100; // Soif
let hyg = 100; // Propreté
let sleep = 100; // Energie
let move = 100; // Activité
let fun = 100; // Amusement

let isFood = true, isWater = true

// Remplissage
let food = 50; // Nourriture disponible dans la gamelle
let water = 50; // Eau disponible


// Cage du hamster
const cage = document.getElementById('HAMcage');

// Boutons d'interaction
const plate = document.getElementById('plate');
const bottle = document.getElementById('bottle');
const sponge = document.getElementById('sponge');
const bed = document.getElementById('bed');
const wheel = document.getElementById('wheel');
const tunnel = document.getElementById('tunnel');
const guitar = document.getElementById('guitar');
const brush = document.getElementById('brush');

// Barres de besoins
const hungerFill = document.getElementById('hunger-in');
const thirstFill = document.getElementById('thirst-in');
const hygFill = document.getElementById('hyg-in');
const sleepFill = document.getElementById('sleep-in');
const moveFill = document.getElementById('move-in');
const funFill = document.getElementById('fun-in');

// Initialisation des barres
updateHunger()
updateThirst()
updateHyg()
updateSleep()
updateMove()
updateFun()
plateLook()
bottleLook()

// Activation ou désactivation des boutons d'interaction (le nettoyage de la cage est toujours disponible)
function disableActions () {
    plate.setAttribute("disabled", "disabled")
    bottle.setAttribute("disabled", "disabled")
    bed.setAttribute("disabled", "disabled")
    tunnel.setAttribute("disabled", "disabled")
    wheel.setAttribute("disabled", "disabled")
    guitar.setAttribute("disabled", "disabled")
    brush.setAttribute("disabled", "disabled")
}

function enableActions () {
    plate.removeAttribute("disabled")
    bottle.removeAttribute("disabled")
    bed.removeAttribute("disabled")
    tunnel.removeAttribute("disabled")
    wheel.removeAttribute("disabled")
    guitar.removeAttribute("disabled")
    brush.removeAttribute("disabled")
}

// Gestion de la faim et de la nourriture
setInterval(() => { // Diminution automatique de la faim
    hunger -=5;
    updateHunger()
}, 10000);

plate.addEventListener('click', () => {
    if (isFood && hunger < 100) { // S'il y a de la nourriture dans la gamelle, nourrit le hamster
    disableActions()
    const myTimeout = setTimeout(stopEating, 1000);
    } else if (!isFood) { // Sinon, ajoute de la nourriture
    food += 50
    isFood = true
    }
    plateLook()
});

function stopEating () { // Fin de l'animation "manger"
    const n = Math.min(10, 100 - hunger, food);
    hunger += n
    food -= n
    if (hunger > 100) {
        hunger = 100
        }
    enableActions()
    plateLook()
    updateHunger()
}

function removeFoodClasses() { // Clean les class de la gamelle avant d'en ajouter une
    plate.classList.remove("empty", "almost-empty", "half-full", "full");
}

function plateLook() { // Vide ou remplit la gamelle en fonction de la quantité de nourriture
    if (food >= 40) {
    removeFoodClasses()
    plate.classList.add("full")
    } else if (food >= 20) {
    removeFoodClasses()
    plate.classList.add("half-full")
    } else if (food > 0) {
    removeFoodClasses()
    plate.classList.add("almost-empty")
    } else if (food == 0) {
    removeFoodClasses()
    plate.classList.add("empty")
    isFood = false
    }
    plate.innerHTML = "Nourrir (" + food + ")"
}

function updateHunger() { // Mise à jour de la barre de faim
    let color = "", hungerStat = ""
    hungerFill.style.width = hunger + "%"
    if (hunger <= 20) {
        color = "darkred"
        hungerStat = "Meurt de faim"
    } else if (hunger <= 40) {
        color = "red"
        hungerStat = "A très faim"
    }else if (hunger <= 70) {
        color = "orange"
        hungerStat = "A faim"
    } else if (hunger <= 90) {
        color = "yellow"
        hungerStat = "Petite faim"
    } else {
        color = "green"
        hungerStat = "Rassasié"
    }

    hungerFill.style.background = color
    hungerFill.innerHTML = hungerStat
}


// Gestion de la soif et de l'eau
setInterval(() => {
    thirst -=5;
    updateThirst()
}, 15000);

bottle.addEventListener('click', () => {
    if (isWater && thirst < 100) { // S'il y a de l'eau dans la gourde, le hamster boit
    disableActions()
    const myTimeout = setTimeout(stopDrinking, 1000);
    } else if (!isWater){ // Sinon, ajoute de l'eau
    water += 50
    isWater = true
    }
    bottleLook()
});

function stopDrinking () { // Fin de l'animation "boire"
    const n = Math.min(10, 100 - thirst, water);
    thirst += n
    water -= n
    if (thirst > 100) {
        thirst = 100
        }
    enableActions()
    bottleLook()
    updateThirst()
}

function removeWaterClasses() { // Clean les class de la bouteille avant d'en ajouter une
   bottle.classList.remove("empty", "almost-empty", "half-full", "full");
}

function bottleLook() { // Vide ou remplit la bouteille en fonction de la quantité d'eau
    if (water >= 40) {
    removeWaterClasses()
    bottle.classList.add("full")
    } else if (water >= 20) {
    removeWaterClasses()
    bottle.classList.add("half-full")
    } else if (water > 0) {
    removeWaterClasses()
    bottle.classList.add("almost-empty")
    } else if (water == 0) {
    removeWaterClasses()
    bottle.classList.add("empty")
    isWater = false
    }
    bottle.innerHTML = "Boire (" + water + ")"
}

function updateThirst() { // Mise à jour de la barre de soif
    let color = "", thirstStat = ""
    thirstFill.style.width = thirst + "%"
    if (thirst <= 20) {
        color = "darkred"
        thirstStat = "Meurt de soif"
    } else if (thirst <= 40) {
        color = "red"
        thirstStat = "A très soif"
    }else if (thirst <= 70) {
        color = "orange"
        thirstStat = "A soif"
    } else if (thirst <= 90) {
        color = "yellow"
        thirstStat = "Petite soif"
    } else {
        color = "green"
        thirstStat = "Hydraté"
    }

    thirstFill.style.background = color
    thirstFill.innerHTML = thirstStat
}

// Gestion de la propreté
setInterval(() => {
    hyg -=20;
    updateHyg()
}, 50000);

sponge.addEventListener('click', () => {
    if (hyg < 100) { // Si la cage est sale, nettoie la cage
    hyg += 30
    }
    if (hyg > 100) {
        hyg = 100
        }
    updateHyg()
});

function updateHyg() { // Mise à jour de la barre de propreté
    let color = "", hygStat = ""
    hygFill.style.width = hyg + "%"
    if (hyg <= 20) {
        color = "darkred"
        hygStat = "Très sale"
    } else if (hyg <= 50) {
        color = "red"
        hygStat = "Sale"
    }else if (hyg <= 80) {
        color = "orange"
        hygStat = "Un peu sale"
    } else {
        color = "green"
        hygStat = "Propre"
    }

    hygFill.style.background = color
    hygFill.innerHTML = hygStat
}

// Gestion de l'énergie et du sommeil
setInterval(() => {
    sleep -=10;
    updateSleep()
}, 40000);


bed.addEventListener('click', () => {
    if (sleep < 100) { // Si le hamster est fatigué, il dort
    disableActions()
    const myTimeout = setTimeout(wakeUp, 5000);
    }
});

function wakeUp () { // Fin de l'animation sommeil
    sleep = 100
    enableActions()
    updateSleep()
}

function updateSleep() { // Mise à jour de la barre de sommeil
    let color = "", sleepStat = ""
    sleepFill.style.width = sleep + "%"
    if (sleep <= 20) {
        color = "darkred"
        sleepStat = "Epuisé"
    } else if (sleep <= 50) {
        color = "red"
        sleepStat = "Fatigué"
    }else if (sleep <= 80) {
        color = "orange"
        sleepStat = "Un peu fatigué"
    } else {
        color = "green"
        sleepStat = "En forme"
    }

    sleepFill.style.background = color
    sleepFill.innerHTML = sleepStat
}

// Gestion de l'activité
setInterval(() => {
    move -=15;
    updateMove()
}, 40000);

wheel.addEventListener('click', () => { // Activité "courir dans la roue"
    startActivity()
});

tunnel.addEventListener('click', () => { // Activité "promenade dans le tunnel"
    startActivity()
});

function startActivity () {
    if (move < 100) { // Si le hamster a besoin d'activité, il en fait
    disableActions()
    const myTimeout = setTimeout(stopActivity, 2000);
    }
}

function stopActivity () { // Fin de l'animation d'activité
    enableActions()
    move += 25
    if (move > 100) {
        move = 100
        }
    updateMove()
};

function updateMove() { // Mise à jour de la barre d'activité
    let color = "", moveStat = ""
    moveFill.style.width = move + "%"
    if (move <= 20) {
        color = "darkred"
        moveStat = "Ankylosé"
    } else if (move <= 50) {
        color = "red"
        moveStat = "Impatient"
    }else if (move <= 80) {
        color = "orange"
        moveStat = "Besoin de bouger"
    } else {
        color = "green"
        moveStat = "Actif"
    }

    moveFill.style.background = color
    moveFill.innerHTML = moveStat
}

// Gestion de l'amusement
setInterval(() => {
    fun -=15;
    updateFun()
}, 40000);

guitar.addEventListener('click', () => { // Jeu "guitare"
    startPlay() 
});

brush.addEventListener('click', () => { // Jeu "dessin"
    startPlay() 
});

function startPlay () {
     if (fun < 100) { // Si le hamster a besoin de s'amuser, il joue
    disableActions()
    const myTimeout = setTimeout(stopPlay, 3000);
    }
}

function stopPlay() { // Fin du jeu
    enableActions()
    fun += 25
    if (fun > 100) {
        fun = 100
        }
    updateFun()
};

function updateFun() { // Mise à jour de la barre d'amusement
    let color = "", funStat =""
    funFill.style.width = fun + "%"
    if (fun <= 20) {
        color = "darkred"
        funStat = "Sans entrain"
    } else if (fun <= 50) {
        color = "red"
        funStat = "S'ennuie"
    }else if (fun <= 80) {
        color = "orange"
        funStat = "Distrait"
    } else {
        color = "green"
        funStat = "Heureux"
    }

    funFill.style.background = color
    funFill.innerHTML = funStat
}