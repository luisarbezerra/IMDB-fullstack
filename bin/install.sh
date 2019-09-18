#!/usr/bin/env bash

set -o xtrace
set -o errexit

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."

pushd "${PROJECT_DIR}"

sudo apt install sqlite3
pushd api
virtualenv -p python3 venv
source venv/bin/activate
pip3 install -r requirements.txt
mkdir data
FLASK_APP=runapi.py flask db upgrade
deactivate
popd
pushd ui
npm install

popd
