#!/usr/bin/env bash

# INSTALL REQUIRED PACKAGES
#npm ci
#npm run build

# CONFIGURE NPM SETTINGS
#echo "@agus3rdyoga:registry=https://registry.npmjs.org" > .npmrc
#echo "unsafe-perm=true"
#echo "https://registry.npmjs.org/:_password:^7(!:t9Vb$BJpkV" >> .npmrc
#echo "https://registry.npmjs.org/:username:agus3rdyoga" >> .npmrc
#echo "https://registry.npmjs.org/:email:agus.3rd.yoga@gmail.com" >> .npmrc
#echo "https://registry.npmjs.org/:always-auth=false" >> .npmrc

# Publish!
npm set //registry.npmjs.org/:_authToken=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
npm publish --access public