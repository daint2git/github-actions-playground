import * as core from "@actions/core";
import * as github from "@actions/github";

core.info("start");
core.info(JSON.stringify(github.context, null, 2));
core.info("end");

core.exportVariable("MY_ENV_1", "123");
core.setSecret("$MY_ENV_1");
// core.setSecret('MY_ENV_1');

core.warning("core warning");
core.error("core error");
core.notice("core notice");

try {
  // Do stuff
  // throw new Error("something.");
} catch (err) {
  // setFailed logs the message and sets a failing exit code
  core.setFailed(`Action failed with error ${err}`);
}
