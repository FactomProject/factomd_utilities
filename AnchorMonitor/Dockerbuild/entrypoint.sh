#!/bin/sh
npm install
node server.js &
node routes.js
