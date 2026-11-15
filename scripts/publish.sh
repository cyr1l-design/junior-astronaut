#!/bin/sh
# Publishes the game to its public link:
#   https://cyr1l-design.github.io/junior-astronaut/
#
# It builds the game and puts ONLY the built game (dist/) on the gh-pages
# branch on GitHub, replacing what was there. The code, the notes and the
# reference pictures are not part of it. GitHub Pages serves that branch.
#
# Run from the project folder:  sh scripts/publish.sh
# Only run it when Cyril says to publish: the link is public.
set -e
cd "$(dirname "$0")/.."
REMOTE="$(git remote get-url origin)"
npm run build
TMP="$(mktemp -d)"
cp -R dist/. "$TMP/"
touch "$TMP/.nojekyll" # tells GitHub to serve the files as they are
cd "$TMP"
git init -q -b gh-pages
git config user.name "$(git -C "$OLDPWD" config user.name)"
git config user.email "$(git -C "$OLDPWD" config user.email)"
git add -A
git commit -q -m "Publish the built game (GitHub Pages)"
git push -q --force "$REMOTE" gh-pages
cd "$OLDPWD"
rm -rf "$TMP"
echo "Published. It takes GitHub about a minute to show the new version."
