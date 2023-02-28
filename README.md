### NodeJs / Express

Le but sera de créer une app NodeJs from scratch.

L'app aura:

-   Une route GET qui renvoie tous les users
-   Une route GET qui renvoie un user
-   Une route POST qui modifiera un user.
-   Une route DELETE qui va supprimer un user.

# Steps

1. Créez un nouveau répertoire pour le projet qui se nomme "api-users".
2. Créer un fichier app.js qui contiendra le code pour run le serveur.
3. Le lancement du serveur devra aficher `Express is running on port: numeroDuPort`.
4. Ajouter le tableau `users` via une base de donnée dans une table `users`
5. Créer un route GET `/users` qui renvoie tous les users du tableau `users`.
6. Créer une route GET `/user/:id` qui renvoie le user qui posséde l'id passé en paramètre.
7. Créer une route POST `/users` qui reçoit dans son body l'objet ci-dessous, qui l'ajoute au tableau `users` et renvoie le nouveau tableau. L'id du nouvel entrant devra être l'id du dernier user du tableau `users` + 1.
8. Créer une route DELETE `/users/:id` qui supprime dans le tableau `users`, l'user avec l'id passé en paramètre de la requête, renvoyer ensuite le nouveau tableau.
9. Faire une route POST `sign-up` qui servira de route d'inscription à un user.
   Le body devra contenir: `name`, `age`, `salary`, `password`
   Le password doit être crypté avant d'être enregistré dans la BDD (npm bcrypt)
   Le mot de passe doit faire minimum 8 caractères, 1 majuscule, 1 chiffre
   La route doit renvoyer une réponse 200 si tout c'est bien passé
5. Faire une route POST `/login` pour que l'user se connecte
   Le body devra contenir: `name`, `password`
   La route devra vérifier que le password ainsi que le name soit correctes
   Par correct on entend que name existe en BDD et que le mot de passe soit celui enregistré en BDD
   Si tout est ok, la route renvoie un token JWT (npm jsonwebtoken) valide 1h
6. Hormis `sign-up` et `login`, toutes les routes ne pourront être accessible que par un user possédant un token valide.
   Si l'user n'est pas connecté, renvoyer l'erreur HTTP adequat (`Unauthorized`)



ReactJs

On utilise l'api node pour récupérer les data.

Faire une navbar de votre choix.
Créer une section et faire un boutton qui, au clic, appelle la route GET /users pour recupérer tous les users. Les users devront être display dans cette même section par colonne de 3 user.
Créer une section et faire un boutton et un champ qui, au clic, appelle la route GET /users/:id pour récupérer l'user demandé via son id.
Faire un formulaire pour ajouter un user (name, age, salary) en appelant votre route POST /users. Afficher le retour de votre API comme pour l'exercice 2
Créer une section et faire un boutton et un champ qui, au clic, appelle la route DELETE /users/:id qui supprime l'user demandé via son id
Créer une page sign-up pour qu'un user puisse s'inscrire
Créer une page login pour qu'un user puisse se connecter

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
