<div style="text-align:center;">
  <img style="align:center;" src="./public/icon.png" width="125"/>
  <h2 style="text-align:center;">Swagger-Basic-Authentication-Logout</h2>
  <p style="text-align:center;">
      <strong>Clear the basic authentication credentials record by the browser on Swagger</strong>
  </p>
  <p style="text-align:center;">
    <img alt="swagger" src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=black"/> <img alt="chrome" src="https://img.shields.io/badge/Chrome Extension-4285F4?style=flat-square&logo=GoogleChrome&logoColor=white"/><img alt="react" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/><img alt="go" src="https://img.shields.io/badge/Webpack-8DD6F9?style=flat-square&logo=Webpack&logoColor=black"/>
    </p>
</div>
### ✨ Feature

Add a Logout button in

### 🛠️ Install

- **PC**

  - **Space Bar**:Jump
  - **E Key**: Switch Bag
  - **Q Key**: Cheat Mode
  - **Mouse Move**: Change Orientation
  - **WSAD Key**: Move
  - **Number Key**: Toggle Block
  - **Wheel Scroll**: Toggle Block
  - **Click Item Box**: Toggle Block
  - **Shift Key**: Drop in Cheat Mode
  - **Mouse left/right click**: Destroy/Create Blocks
  - **ESC Key**: Show Menu

- **Mobile**

  - **Drag Screen**: Change Orientation
  - **Click Item Box**: Toggle Block
  - **Click Active Item**: Open Backpack

- **Xbox joy stick(test on Xbox One)**

  <img src="./doc/img/xbox-en.png" height="200px"/>

- **PS joy stick(test on PS4)**

  <img src="./doc/img/ps-en.png" height="200px"/>

- **VR**
  - **Turn headset**: Change Orientation
  - **Using remote**: Destroy Blocks



  ### Useage



### 🛠️ How it work


### 🛠️ Develop

- Frontend

  ```bash
  # Install pnpm
  > npm install -g pnpm

  # Install all dependencies
  > pnpm install

  # Install a dependency
  > pnpm install xxx  -D/-S

  # Run
  > pnpm dev

  # Build
  > pnpm build
  ```

- Backend

  ```bash
  # Enter the backend directory
  > cd server

  # Install all dependance
  > pnpm install

  # Compile TS code
  > tsc

  # Execute backend programs (if process management tools such as PM2 are not required)
  > node ./dist/index.js

  # Install PM2
  > pnpm install -g pm2

  # Sign up for PM2 monitoring
  > pm2 start --watch ./dist/index.js

  # For reverse proxy, proxy /socket.io to localhost:9000 and configure same-origin policy
  ```

  After the program runs, the following prompt will be output

  ```
  ThreeCraft v1.0.2 game server running at:
  > Local:        http://localhost:9000
  > Network:      http://xxx.xxx.xxx.xxx:9000

  YOU MUST ENTER THE ADDRESS LIKE http://xxx.xxx.xxx.xxx:9000 IN GAME, NO PART CAN BE OMITTED!
  ```

  When connecting to the server, be sure to enter all `http://xxx.xxx.xxx.xxx:9000`, do not omit `http://` or `:9000`

  If the frontend runs on https, then the backend should also runs on https. Some reverse proxy tools may be needed to implement https

### 🥰 Reference

- The overall structure of the project refers from [vyse12138/minecraft-threejs](https://github.com/vyse12138/minecraft-threejs). Thanks a lot for their work!
- The implementation of the mobile joystick refers from [bobboteck/JoyStick](https://github.com/bobboteck/JoyStick).
- The overall structure of backend refers from [Merlin218/UNO-server](https://github.com/Merlin218/UNO-server/). Thanks a lot for his work!
