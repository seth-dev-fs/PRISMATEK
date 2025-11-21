#!/usr/bin/env bash
set -e
BRANCH="feature/update-topics"
git checkout -b $BRANCH
git add .
git commit -m "chore: update topics, feeds and category navigation"
git push -u origin $BRANCH
if command -v gh >/dev/null 2>&1; then
  gh pr create --title "chore: update topics and feeds" --body "Automated update: expanded keywords, new feeds, new category pages and nav." --base main --head $BRANCH
else
  echo "gh CLI not found. Please run: gh pr create --title 'chore: update topics and feeds' --body 'Automated update...' --base main --head $BRANCH"
fi
