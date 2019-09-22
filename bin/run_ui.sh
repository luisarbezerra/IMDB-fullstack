#!/usr/bin/env bash

set -o xtrace
set -o errexit

PROJECT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."

pushd "${PROJECT_DIR}"
pushd ui
npm run start
