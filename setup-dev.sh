#!/usr/bin/env bash
: ${BLOG_PATH:=$HOME}
nvm install lts/jod
npm i -g pnpm
cloner https://github.com/WebHostingCoopTeam/blog.git
cd blog/main
pnpm i
pnpm run dev
