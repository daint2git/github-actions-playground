#!/bin/bash
echo "Running using node $NODE_VERSION"
node "$GITHUB_ACTION_PATH/dist/index.js rdstr"
ret=$?
exit $ret