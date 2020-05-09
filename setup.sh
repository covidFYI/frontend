#!bin/bash
set -xe

git status

git pull

npm i
npm run build

pm2 reload all

pm2 show covidFyi
