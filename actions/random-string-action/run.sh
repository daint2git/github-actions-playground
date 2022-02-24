#!/bin/bash

read NODE_VERSION _ <<< $(node -v)

if [ -z "$NODE_VERSION" ]; then
    echo "No node installed. Please use \"actions/setup-node\" or install node manually"

    ret=1
else
    # echo "Running using node $NODE_VERSION"

    SCRIPT="node dist/index.js rdstr"

    sudo chmod +x "${SCRIPT}"

    "${ENV_SCRIPT}"

    ret=$?
fi

exit $ret