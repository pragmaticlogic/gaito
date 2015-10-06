# Gaito for Genneper Parken [![Dependency Status](https://david-dm.org/accommodavid/gaito.svg)](https://david-dm.org/accommodavid/gaito)

University project that turns street lights into performance trackers for runners.
Open the app, start tracking, then go to [this web interface](https://safe-garden-3090.herokuapp.com/) for a real-time display. There's also an [interactive mock-up of what the interface that manages all Gaito nodes would look like](https://github.com/Accommodavid/gaito-management).

<img alt="Gaito" src="https://cloud.githubusercontent.com/assets/6472410/10223485/6e9b27b2-6859-11e5-9715-c1043727227b.png" height="300">
<img alt="Modular design" src="https://cloud.githubusercontent.com/assets/6472410/10223486/6e9bfe58-6859-11e5-8c3a-295005a4a19d.png" height="300">
<img alt="Tracking" src="https://cloud.githubusercontent.com/assets/6472410/10223487/6e9ce84a-6859-11e5-8550-fdae325372cb.png" height="300">

<img alt="Screenshot of the app" src="https://cloud.githubusercontent.com/assets/6472410/10306648/ca0a015e-6c28-11e5-9b41-7cb0e8ef642d.PNG" height="300">

The whole thing uses Ionic as a mobile app framework and Socket.io for sending the data. You should consider it more as an interactive sketch or proof of concept, rather than a working prototype.

## Running the app

You need [Node](https://nodejs.org), NPM and [Ionic](http://ionicframework.com/getting-started/). Then do

```
npm install
ionic serve
```

Alternatively, for the native experience you can download the Ionic View app (iOS) and download the app by entering the id `E4E64D52`.
