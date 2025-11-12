# 🎮 Jeu de la Vie de Conway

Une implémentation interactive et moderne du célèbre automate cellulaire créé par John Conway en 1970.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📖 Description

Le Jeu de la Vie est un automate cellulaire qui simule l'évolution d'une population de cellules selon des règles simples. Malgré leur simplicité, ces règles produisent des comportements complexes et fascinants.

Cette implémentation offre une interface utilisateur moderne avec des contrôles intuitifs pour explorer les différents patterns et comportements émergents.

## ✨ Fonctionnalités

- **Grille interactive** : Grille de 40×60 cellules cliquables pour créer vos propres patterns
- **Simulation temps réel** : Animation fluide avec contrôle de vitesse
- **Génération aléatoire** : Créez rapidement des configurations aléatoires
- **Compteur de générations** : Suivez l'évolution de votre simulation
- **Contrôles intuitifs** : Interface simple avec boutons de contrôle
- **Design moderne** : Interface élégante avec animations et effets visuels

## 🎯 Règles du jeu

Le Jeu de la Vie suit quatre règles simples :

1. **Sous-population** : Une cellule vivante avec moins de 2 voisins meurt
2. **Survie** : Une cellule vivante avec 2 ou 3 voisins survit
3. **Surpopulation** : Une cellule vivante avec plus de 3 voisins meurt
4. **Reproduction** : Une cellule morte avec exactement 3 voisins devient vivante

## 🚀 Installation

### Prérequis

- Node.js 14.x ou supérieur
- npm ou yarn

### Étapes d'installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-utilisateur/game-of-life.git

# Se déplacer dans le répertoire
cd game-of-life

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

L'application sera accessible sur `http://localhost:3000`

## 🎨 Technologies utilisées

- **React** : Framework JavaScript pour l'interface utilisateur
- **Tailwind CSS** : Framework CSS utilitaire pour le styling
- **Lucide React** : Bibliothèque d'icônes modernes
- **React Hooks** : useState, useCallback, useRef, useEffect

## 📱 Utilisation

### Créer un pattern

1. Cliquez sur les cellules de la grille pour les activer/désactiver
2. Les cellules vertes sont vivantes, les cellules sombres sont mortes

### Lancer la simulation

1. Cliquez sur **"Démarrer"** pour lancer l'animation
2. Cliquez sur **"Pause"** pour arrêter temporairement
3. Utilisez **"Réinitialiser"** pour effacer la grille

### Contrôles de vitesse

- Utilisez les boutons **+** et **-** pour ajuster la vitesse de simulation
- La vitesse varie de 50ms à 500ms entre chaque génération

### Générer un pattern aléatoire

Cliquez sur **"Aléatoire"** pour créer une configuration aléatoire et découvrir de nouveaux comportements

## 🔬 Patterns célèbres à essayer

Voici quelques patterns classiques du Jeu de la Vie :

### Le Planeur (Glider)
```
  █
    █
█ █ █
```

### Le Clignotant (Blinker)
```
█ █ █
```

### Le Crapaud (Toad)
```
  █ █ █
█ █ █
```

### Le Bloc (Block)
```
█ █
█ █
```

## 🛠️ Structure du code

```
game-of-life/
├── src/
│   ├── App.jsx          # Composant principal
│   ├── index.js         # Point d'entrée
│   └── styles/          # Fichiers de style
├── public/              # Fichiers statiques
├── package.json         # Dépendances
└── README.md           # Documentation
```

## 🎓 Concepts mathématiques

Le Jeu de la Vie illustre plusieurs concepts importants :

- **Automates cellulaires** : Systèmes discrets avec états et règles
- **Émergence** : Comportements complexes issus de règles simples
- **Turing-complétude** : Capable de simuler n'importe quel ordinateur
- **Systèmes dynamiques** : Évolution déterministe dans le temps

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrir une Pull Request

## 📝 Idées d'amélioration

- [ ] Sauvegarde/chargement de patterns
- [ ] Bibliothèque de patterns prédéfinis
- [ ] Mode édition avancé (copier/coller)
- [ ] Statistiques de la simulation
- [ ] Grille infinie avec défilement
- [ ] Historique des générations
- [ ] Export en GIF ou vidéo

## 📚 Ressources

- [Wikipedia - Jeu de la Vie](https://fr.wikipedia.org/wiki/Jeu_de_la_vie)
- [LifeWiki](https://conwaylife.com/wiki/Main_Page) : Encyclopédie des patterns
- [Article original de Conway](https://web.stanford.edu/class/sts145/Library/life.pdf)

## 👤 Auteur

Votre nom - [@votre-twitter](https://twitter.com/votre-twitter)

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- John Conway pour avoir créé ce jeu fascinant
- La communauté des passionnés du Jeu de la Vie
- Tous les contributeurs du projet

---

⭐️ Si ce projet vous plaît, n'oubliez pas de lui donner une étoile sur GitHub !
