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

# Short Method to deploy on Firebase
- Go to package.json
- Add new script in Scripts section
- "deploy:firebase": "ng build --configuration production && firebase deploy"
- `npm run deploy:firebase`

https://deploy-demo-followers.firebaseapp.com/

# Deploying on Heroku
- First create a account in https://www.heroku.com/
- Visit this website and install heroku https://devcenter.heroku.com/articles/heroku-cli 
- Install heroku by executing command `npm install -g heroku`
- After installing check heroku version `heroku --version`
- Execute this command `herok login` it opens web to login.
- After login execute `heroku create <app-name>` will get a application link
- You can open application by executing `heroku open`
- When we depoy our application heroku is going to look at package.json under dependencies and it's going to install all of these with the npm, at this point we are going to build our applicaion using angular-cli on heroku, angular/cli is one of the devdevpendencies, heroku not going to install, this so by default we can not build our application using anular/cli on heroku,
so to fix this issue, we need to move angular/cli to dependenices also will be moving angular/copiler 
this angular-complier is build on top of typescript so we have to move typescript to dependencies
- Now the required dependencies are ready now we need to build our application
- In the script section add "postinstall": "ng build --prod", so this is a reserved script and it's run automatically after all these dependencies are installed.
- Now our front end is ready
- Create server.js file in your projetc folder, here will be importing express, express is a framework for building web applications on node, so because on the back end we are using express so we need to add as dependencies in package.json aswell, execute `npm install express` 
- Now the last step, in the script section we need to change "start" script and instead of serving this angular application we need to start our node server, so change start script to "node server.js"
- Node is going to run this server.js which is our web server, job of this web server is to host our static content and expose any api endpoint.
- Check server.js file
- Now we are ready to deploy our application on Heroku
- First commit changes to git by executing `git add .` `git commit -m "Prepare for heroku"`
- Let's create an app using heroku cli, by executing `heroku create` this heroku cli registeres the remote for this git repository(It's already done)
- check remote by executing `git remote`, it should list 'heroku' and 'origin'
- So every time to deploy our application all we have to do is to push our changes to heroku, at this point heroku has continuous deployment process it kicks in and 
- checks out all the latest code from that repository, it's going to install dependencies, build the application and run node server.
- Back in terminal execute `git push heroku master`.
- Application is deployed successfully
- To open execute `heroku open`.

https://find-dominant-color.herokuapp.com/

Note: to execute all above mentioned commands you should be in your project folder.

