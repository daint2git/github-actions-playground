import * as core from "@actions/core";
import * as github from "@actions/github";

core.info('start')
core.info(JSON.stringify(github.context, null, 2));
core.info('end')
core.exportVariable('MY_ENV_1', '123');
core.setSecret('$MY_ENV_1');
// core.setSecret('MY_ENV_1');