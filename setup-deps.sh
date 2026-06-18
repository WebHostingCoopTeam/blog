#!/usr/bin/env bash
sudo apt update
sudo apt-get upgrade -yq
sudo apt-get install -yq curl git build-essential
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
curl -sL https://raw.githubusercontent.com/joshuacox/cloner/refs/heads/main/bootstrapcloner.sh | bash
