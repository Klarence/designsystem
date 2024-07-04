# Design System

## Introduction

Ce projet est un système de design construit avec JavaScript vanille, bundlé avec Vite.js, et testé avec Storybook. La base de code permet la création de composants web standard, avec la possibilité de tester des composants isolés ainsi que des intégrations complexes avec [Storybook](https://storybook.js.org/)

## Démarrage

### Cloner le dépôt

Tout d'abord, clonez le dépôt depuis GitHub sur votre machine locale :

```bash
git clone https://github.com/bourpie/designsystem
```

### Installer les dépendances

Naviguez vers le répertoire du projet et installez les dépendances nécessaires en utilisant npm :

```bash
cd designsystem
npm install
```

### Démarrer l'environnement de développement

Pour démarrer l'environnement de développement, utilisez la commande suivante :

```bash
npm run dev
```

### Builder la solution

Pour construire la solution pour la production, utilisez la commande suivante :

```bash
npm run build
```
Cette commande créera un dossier `dist` à la racine du projet. À l'intérieur, vous trouverez les fichiers JavaScript, les styles CSS, et les images optimisées prêtes à être intégrées dans votre projet.

### Démarrer Storybook

Pour démarrer Storybook et visualiser vos composants, utilisez la commande suivante :

```bash
npm run storybook
```

Cela lancera Storybook sur `http://localhost:6006` par défaut, où vous pourrez naviguer et tester vos composants dans un environnement isolé.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE.md) pour plus de détails.

## Auteur

Pierre Bourgeois - [@bourpie](https://github.com/bourpie)
