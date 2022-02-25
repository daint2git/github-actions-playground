import * as core from "@actions/core";
import * as github from "@actions/github";

core.info("start");
core.info(JSON.stringify(github.context, null, 2));
core.info("end");

// This flag can be enabled by https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets ACTIONS_STEP_DEBUG to true.
core.debug("debugging 1");

core.exportVariable("MY_ENV_1", "123");
core.setSecret("$MY_ENV_1");
// core.setSecret('MY_ENV_1');

core.warning("core warning");
core.error("core error");
core.notice("core notice");

// This flag can be enabled by https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets ACTIONS_STEP_DEBUG to true.
core.debug("debugging 2");

core.saveState("myState", 12345);

const token = core.getInput("github-token", { required: true });

core.info(`github-token: ${token}`);

try {
  // Do stuff
  // throw new Error("something.");
} catch (err) {
  // setFailed logs the message and sets a failing exit code
  core.setFailed(`Action failed with error ${err}`);
}

(async function () {
  const octokit = github.getOctokit(token);
  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
    mediaType: {
      format: "json",
    },
  });

  core.info(JSON.stringify(pullRequest, null, 2))
})();
