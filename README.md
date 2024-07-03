# Application Pendu avec React et Vite

Cette application est une version moderne du jeu classique du pendu, construite avec React et Vite. Elle permet aux joueurs de deviner le nom d'un Pokémon en sélectionnant des lettres. Si le joueur réussit à deviner le nom avant d'épuiser toutes ses vies, il gagne; sinon, il perd.

## Fonctionnalités

- **Sélection de Pokémon :** Au début de chaque partie, un nom de Pokémon est sélectionné aléatoirement.
- **Sélection de Lettres :** Les joueurs sélectionnent des lettres pour deviner le nom du Pokémon.
- **Gestion des Vies :** Les joueurs commencent avec un nombre limité de vies. Une vie est perdue à chaque fois qu'une lettre incorrecte est choisie.
- **Indicateurs Visuels :** Les lettres déjà sélectionnées sont désactivées pour éviter les sélections répétées.
- **Support du Clavier :** Les joueurs peuvent utiliser le clavier pour sélectionner les lettres.
- **Victoire et Défaite :** Des alertes indiquent au joueur s'il a gagné ou perdu, et le jeu se réinitialise automatiquement pour une nouvelle partie.

## Technologies Utilisées

- **[React](https://reactjs.org/):** Une bibliothèque JavaScript pour construire des interfaces utilisateur.
- **[Vite](https://vitejs.dev/):** Un outil de construction moderne qui offre une expérience de développement plus rapide.

## Installation

Pour exécuter cette application sur votre machine locale, suivez ces étapes :

1. Clonez ce dépôt sur votre machine locale en utilisant :

```bash
git clone https://github.com/guillaumeMego/PenduPokemon-React.git
```

2. Naviguez dans le dossier du projet :

```bash
cd chemin/vers/le/dossier
```

3. Installez les dépendances du projet :

```bash
npm install
```

4. Exécutez l'application en mode développement :

```bash
npm run dev
```

5. Ouvrez votre navigateur et accédez à l'URL suivante :

```
http://localhost:3000
```

## Licence

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier [LICENSE](LICENSE).
