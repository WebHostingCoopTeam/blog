#!/usr/bin/env -vS bash -l
sudo apt update
sudo apt-get upgrade -yq
sudo apt-get install -yq curl git build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash
export NVM_DIR="${HOME}/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[[ -r $NVM_DIR/bash_completion ]] && \. $NVM_DIR/bash_completion
: ${BLOG_PATH:=$HOME}

set -eux
nvm install lts/jod
npm i -g yarn
#cloner https://github.com/WebHostingCoopTeam/blog.git
#cd blog/main
cd ${BLOG_PATH}
git clone https://github.com/WebHostingCoopTeam/blog.git
cd blog
yarn install
yarn dev
