# HamsterCare

<div align="center">

**Jeu de soin d'animaux virtuel inspiré des Tamagotchis. Prenez soin d'un hamster en pixel art et gardez-le en vie le plus longtemps possible.**

</div>

## Aperçu

HamsterCare est une application web interactive programmée en JavaScript. Inspiré des classiques Tamagotchis et des jeux de soin d'animaux, le jeu vous met dans la peau d'un propriétaire de hamster qui doit répondre à tous les besoins de son petit compagnon virtuel.
C'est un projet personnel développé pour approfondir les compétences en JavaScript, en gestion d'état et en animations, tout en créant une expérience ludique et attachante.

## Concept

Dans HamsterCare, vous devez maintenir votre hamster en bonne santé en surveillant et en gérant ses différents besoins. Chaque besoin évolue au fil du temps et les actions que vous prenez ont des conséquences sur les autres aspects de la santé du hamster.

- **Objectif** : Garder votre hamster en vie le plus longtemps possible
- **Gestion des besoins** : Surveillez six indicateurs vitaux interconnectés
- **Système dynamique** : Les besoins s'influencent mutuellement de manière réaliste

## Fonctionnalités

- **Six besoins à gérer** :
  - Nourriture
  - Eau
  - Sommeil
  - Activité physique
  - Propreté
  - Amusement
- **Système d'interactions** : Les besoins s'impactent les uns les autres de manière réaliste
- **Graphismes pixel art** : Hamster et interface en style rétro
- **Gestion du temps** : Les besoins évoluent progressivement en temps réel
- **Interface intuitive** : Boutons d'action clairs pour chaque besoin

## Technologies utilisées

**Language & Design:**

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![Pixel Art](https://img.shields.io/badge/Pixel_Art-Design-ff69b4?style=for-the-badge)](https://en.wikipedia.org/wiki/Pixel_art)

## Utilisation

### Prérequis

Un navigateur web moderne (Chrome, Firefox, Safari, Edge).

### Installation

1.  **Cloner le repo**
```bash
    git clone https://github.com/JadeJLC/HamsterCare.git
    cd HamsterCare
```

2.  **Ouvrir le jeu**
    
    Ouvrez le fichier `index.html` dans votre navigateur, ou utilisez un serveur local :
```bash
    # Avec Python 3
    python -m http.server 8000
    
    # Ou avec Node.js (si http-server est installé)
    npx http-server
```
    
    Puis accédez à `http://localhost:8000`

### **Comment jouer**

1. **Surveillance** : Gardez un œil sur les six barres de besoins de votre hamster
2. **Actions** : Cliquez sur les boutons correspondants pour répondre aux besoins :
   - Nourrir votre hamster
   - Lui donner à boire
   - Le laisser dormir
   - Le faire courir dans sa roue
   - Nettoyer sa cage
   - Jouer avec lui
3. **Équilibre** : Gérez intelligemment les besoins car ils s'influencent mutuellement
4. **Survie** : Évitez que les indicateurs atteignent des niveaux critiques

### **Mécaniques de jeu**

Les besoins sont interconnectés :
- Jouer salit la cage
- L'activité physique augmente les besoins de nourriture, d'énergie et d'eau
- Manger augmente le besoin d'eau
- Le sommeil restaure l'énergie au maximum

## Structure du projet
```
project-root/
├── javascript/     # Logique du jeu (gestion des besoins, animations)
├── style/          # Fichiers CSS pour l'interface
├── templates/      # Fichiers HTML et assets visuels
└── readme.md       # Ce fichier
```

## Development

### Architecture du jeu

- **Gestion d'état** : Système de besoins interconnectés avec mise à jour en temps réel
- **Boucle de jeu** : Décrémentation progressive des besoins via setInterval
- **Animations** : Réactions visuelles du hamster selon son état
- **Interface** : Affichage dynamique des barres de progression
- **Sauvegarde de votre hamster** : Retrouvez votre hamster dans l'état où vous l'avez laissé

### Système de besoins

Chaque besoin :
- Diminue progressivement avec le temps
- Peut être restauré par des actions spécifiques
- Influence les autres besoins selon des règles logiques

## Apprentissages clés

Ce projet permet de développer des compétences dans :

- Gestion d'état complexe en JavaScript vanilla
- Programmation orientée objet
- Intervalles et timing en JavaScript
- Game design et équilibrage de mécaniques
- Création de graphismes pixel art
- Interface utilisateur interactive

## Autres informations

- Ce projet est un projet personnel développé pour approfondir mes compétences en JavaScript.
- L'objectif était de créer un jeu complet et engageant tout en explorant la gestion d'état et les systèmes interconnectés.
- Inspiré par les Tamagotchis et d'autres jeux de soin d'animaux virtuels classiques.

## Améliorations futures

- [ ] Animations
- [ ] Système de récompenses et déblocables
- [ ] Différents hamsters avec des caractéristiques uniques
- [ ] Événements aléatoires (maladie, bonheur, etc.)
- [ ] Sons et musique d'ambiance
- [ ] Statistiques de survie et historique
- [ ] Partage de records sur les réseaux sociaux

<div align="center">

Par [JadeJLC](https://github.com/JadeJLC)

</div>
