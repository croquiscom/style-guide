#!/bin/bash

echo --- Using index.js
npx tslint -p . -c tslint_js.json

echo --- Using tslint.json
npx tslint -p . -c tslint_json.json
