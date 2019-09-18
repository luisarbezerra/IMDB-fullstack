#!/usr/bin/env bash

# set -o xtrace
set -o errexit

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."

cd "${PROJECT_DIR}/api"
source venv/bin/activate
python load_csv.py "$@"
