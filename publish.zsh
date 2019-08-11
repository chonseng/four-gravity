#!/bin/sh
ng build --prod --output-path docs --base-href /four-gravity/
git add -A
git commit -m 'Build'
git push origin master