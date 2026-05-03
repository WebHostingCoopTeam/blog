#!/usr/bin/env -vS bash -l
export NVM_DIR="/home/thoth/.nvm"
export PNPM_HOME=/home/thoth/.local/share/pnpm
#export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[[ -r $NVM_DIR/bash_completion ]] && \. $NVM_DIR/bash_completion
: ${BLOG_PATH:=$HOME}
set -eux
nvm install lts/jod
npm i -g pnpm
cloner https://github.com/WebHostingCoopTeam/blog.git
cd blog/main
pnpm i
pnpm run dev
