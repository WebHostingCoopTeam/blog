#!/usr/bin/env -vS bash -l
: ${BLOG_PATH:=$HOME}
set -eux
nvm install lts/jod
npm i -g pnpm
cloner https://github.com/WebHostingCoopTeam/blog.git
cd blog/main
pnpm i
pnpm run dev
