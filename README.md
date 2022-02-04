# Deploy Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Development server

Run `npm install` and `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Optimization Technique
- Minification
- Uglification
- Bundling
- Dead code elimination
- Ahead-of-time (AOT) compilation

to apply all above technique run `ng build prod`

# Two types of Compilation
JIT (Just in time) compilation
- Inefficient for production
- Happens for every user
- More components, slower
- We have to ship angular compiler as part of vendor bundle

Ahead-of-time (AOT) compilation
- Faster startup
- Smaller buldle size
- Catch template errors earlier
- Better security
- `node_modules/.bin/ngc`
- `ng build`

# Environment
`ng serve --prod` or `ng serve --configuration production`

# Adding environment
- Add new file in environment folder
- Register in angular-cli.json

# Linter
- `ng lint`
- `ng lint --fix` (fix most of the easy fixes)
- install tslint extension in VScode

# Deploying on Github
- https://pages.github.com
- Deployes only front end
- Create a new repository
- `git remote add origin https://....` (copy the command and execute)
- `git push origin master`
- `npm i -g angular-cli-ghpages` (install node package to deploy in github)
- `ng build --configuration production --base-href="https://username.github.io/app-name/"` (set base-href or else apllication not gonna work)
- `angular-cli-pages` or 'ngh' (deployes to git hub)

# Short Method to deploy on Github
- Go to package.json
- Add new script in Scripts section
- "deploy:gh": "ng build --configuration production --base-href='https://username.github.io/app-name/https://username.github.io/app-name/' && ngh"
- run command `npm run deploy:gh`

-if above method don't deploy in github go to 'setting' and select 'pages' on left menu and then selcect theme

https://iamrashree.github.io/deploy-demo-followers/

# Deploying on Firebase
- Deployes front end and back end
- Provided by google
- Used for deploying back end , web application or mobile application
- https://console.firebase.google.com
- Add project in above URL
- `npm i -g firebase-tools` (install firebase tools)
- `firebase login`
- `firebase init` (select hosting, select created project on )
- verify firebase.json file with public property as dist
- `ng build --configuration production && firebase deploy`

# Short Method to deploy on Github
- Go to package.json
- Add new script in Scripts section
- "deploy:firebase": "ng build --configuration production && firebase deploy"
- `npm run deploy:firebase`

https://deploy-demo-followers.firebaseapp.com/

