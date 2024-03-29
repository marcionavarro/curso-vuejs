### Install Vuel Cli
`npm i -g @vue/cli`

### Criar projeto
`vue create vue-cli-hello-world `

### Setup

* Manually select features
* Babel, Linter / Formatter (default)
* 2.x
* ESLint + Standard config
* Lint on save (default)
* In dedicated config files 
* Save this as a preset for future projects? y
* Save preset as: vue-default

`cd vue-cli-hello-world`  
`npm run serve`

### Plugins  

vuetify  
`vue add vuetify`  

* setup
    - Still proceed? (y/N) y
    - Vuetify 2 - Configure Vue CLI (advanced)
    - Use a pre-made template? (will replace App.vue and HelloWorld.vue) (Y/n) y
    -  Use custom theme? (y/N) n
    - Use custom properties (CSS variables)? (y/N) n (default)
    - Select icon font
        - Material Icons
    -  Use fonts as a dependency (for Electron or offline)? (y/N) n (default)
    - Use a-la-carte components? (Y/n) y
    - Select locale (Use arrow keys)
        - English

### Pre-Processors

Sass  
`npm install -D sass-loader sass`

### Variables

`npm run serve -- --mode production`

### Build

`npm run build -- --mode development`    
`npm run build`

Acessar e rodar o build  
`cd dist`  
`npx http-server -o`

### ESLint  

Corrigir automaticamente  
`npm run lint`  
`npm run lint -- OlaMundo.vue`

### Prototyping 

`npm install -g @vue/cli @vue/cli-service-global`  
`vue serve OlaMundo.vue`