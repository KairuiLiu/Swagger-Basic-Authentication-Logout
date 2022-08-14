<div align="center">
  <img src="./image/icon.png" width="125"/>
  <h2>Swagger-Basic-Authentication-Logout</h2>

  <p>
    <strong>Clear the basic authentication credentials record by the browser on Swagger</strong>
  </p>

  <p>
    <img alt="swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=black"/> <img alt="chrome" src="https://img.shields.io/badge/Chrome Extension-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white"/><img alt="react" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/><img alt="go" src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=black"/>

  </p>
</div>

### ✨ Feature

This extension provide a Logout button for Swagger API page. With almost all the browser would like to save basic authentication credentials automatically, It is hard to "Logout" if the website using basic authentication.  And it also makes developers hard to debug multi-user APIs

![demonstration-1](./image/demonstration-1.png)

### ⚙️ Install

- Install on Chrome Web Store (still under review...)
- Install offline package on Cheome
  - Download the `Swagger-Basic-Authentication-Logout.crx` from the [Release Page](https://github.com/KairuiLiu/Swagger-Basic-Authentication-Logout/releases)
  - Rename the file to  `Swagger-Basic-Authentication-Logout.zip` and unzip it.
  - Move unziped folder to a "safe" place and make sure you will never move again
  - Type `chrome://extensions/` on chrome address bar
  - Turn on "Developer mode"
  - Select "Load Unpacked" and point it to the extension folder

- Support of firefox is still on road...

  ### 🛠️ Useage

- Just install the extension, once you open a swagger API page and the badge of icon turns "ON", it works
- when 
- www-
- 

### 🤔 How it work

In fact, we can not actually logout using 


### 🧑‍💻 Develop

- Set up

  ```bash
  pnpm install
  ```

- Build

  ```bash
  npm run build
  ```

- Build in watch mode in terminal

  ```bash
  npm run watch
  ```

- Build in watch mode in Visual Studio Code: type `Ctrl + Shift + B`

### 🥰 Reference

- The template of chrome extension comes from [chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- [stackoverflow - How to clear basic authentication details in chrome](https://stackoverflow.com/questions/5957822/how-to-clear-basic-authentication-details-in-chrome)
- [stackoverflow - How to log out user from web site using BASIC authentication?](https://stackoverflow.com/questions/233507/how-to-log-out-user-from-web-site-using-basic-authentication)
