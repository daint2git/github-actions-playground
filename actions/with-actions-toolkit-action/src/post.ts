import * as core from "@actions/core";

const state = core.getState("myState");

core.info(`state: ${state}`);
