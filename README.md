<div align="center">
  <img src="./image/icon.png" width="125"/>
  <h2>Swagger-Basic-Authentication-Logout</h2>
  <p>
    <strong>Clear the basic authentication certificate record by browser on Swagger</strong>
  </p>
  <p>
    <img alt="swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=black"/> <img alt="chrome" src="https://img.shields.io/badge/Chrome Extension-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white"/> <img alt="react" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img alt="go" src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=black"/>



  </p>
</div>

### ✨ Feature

This extension provide a Logout button for Swagger API page. With almost all the browsers save basic authentication certificate automatically, it is hard to "logout" the website using basic authentication and also makes developers hard to debug multi-user APIs.

<div align="center">
  <img src="./image/demonstration-1.png"/>
</div>

### ⚙️ Install

- Install on Chrome Web Store (still under review...)
- Install the offline package on Chrome
  - Download the `Swagger-Basic-Authentication-Logout.crx` from the [Release Page](https://github.com/KairuiLiu/Swagger-Basic-Authentication-Logout/releases)
  - Rename the file to  `Swagger-Basic-Authentication-Logout.zip` and unzip it.
  - Move unziped folder to a "safe" place and make sure it will be never moved again
  - Type `chrome://extensions/` on chrome address bar
  - Turn on "Developer mode"
  - Select "Load Unpacked" and point it to the extension folder

- Support of Firefox is on road...

### 🛠️ Useage

- After installing the extension, once you open a Swagger API page the extension will automatically work with the badge of icon turns "ON"

- When any request is responsed with code not 400 - 500, There will appear a "Logout" button. Click it you can logout. 

  It also means that, requests, no matter whether it is using basic authentication will be appened a button. Logout a request without basic authentication will get error.

- Sometimes when you click logout, the browser will popup a menu and ask you enter the username and password. Just cancel it! This is caused by the server setted a [WWW-Authenticate](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/WWW-Authenticate) header on the response. A good way to circumvent this annoying problem is to not return the WWW-Authenticate header for requests with wrong username and password in debugging mode.

- If you do not like the extension, there is also a JavaScript code in `/script` can also release the feature. You should run the script when the page has loaded.

### 🤔 How it work

In fact, we can not actually logout base on basic authentication, There are 2 ways to "logout"

1. Clear the data of website in browser

   The basic authentication certificate is not stored in Cookie or LocalStorage, it is saved by the browser. Using following ways, you can clean the certificate

   - For Chrome: type `chrome://settings/clearBrowserData` on address bar (or `Ctrl+Shift+Del`), select `Advanced > Cookie and other website data > clean`

   - For Firefox: type `about:preferences#privacy` on address bar, select `clean data Cookie and other website data > clean`

2. Login with a wrong user

   Once the browser save the certificate, we can relogin and overwrite the certificate. If we login with wrong username and password, we can clear the certificate. The most easy way to clean the certificate of `http://example.com` is visit `http://wrong:user@example.com`. It is also the method the extension used.


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

- The template of Chrome extension comes from [chibat/chrome-extension-typescript-starter](https://github.com/chibat/chrome-extension-typescript-starter)
- [stackoverflow - How to clear basic authentication details in chrome](https://stackoverflow.com/questions/5957822/how-to-clear-basic-authentication-details-in-chrome)
- [stackoverflow - How to log out user from web site using BASIC authentication?](https://stackoverflow.com/questions/233507/how-to-log-out-user-from-web-site-using-basic-authentication)
