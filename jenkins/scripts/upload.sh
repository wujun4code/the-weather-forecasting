#!/usr/bin/env bash

# INSTALL REQUIRED PACKAGES
#npm ci
#npm run build

# CONFIGURE NPM SETTINGS
echo "@agus3rdyoga:registry=https://registry.npmjs.org" > .npmrc
echo "unsafe-perm=true"
echo "https://registry.npmjs.org/:_password:^7(!:t9Vb$BJpkV" >> .npmrc
#echo "https://registry.npmjs.org/:username:agus3rdyoga" >> .npmrc
#echo "https://registry.npmjs.org/:email:agus.3rd.yoga@gmail.com" >> .npmrc
#echo "https://registry.npmjs.org/:always-auth=false" >> .npmrc

# Publish!
npm config set registry http://registry.npmjs.org
npm login
#npm set //registry.npmjs.org/:_authToken=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
npm publish --access public