import {
  info,
  debug,
  error,
  warning,
  notice,
  getInput,
  setFailed,
  saveState,
  exportVariable,
  setSecret,
} from "@actions/core";
import { context, getOctokit } from "@actions/github";
import { EmitterWebhookEvent } from "@octokit/webhooks";

if (context.eventName === "pull_request") {
  const { pull_request } =
    context.payload as EmitterWebhookEvent<"pull_request">["payload"];

  info("The pull_request base is:");
  info(JSON.stringify(pull_request.base, null, 2));
  info("The pull_request head is:");
  info(JSON.stringify(pull_request.head, null, 2));
}

info("start");
info(JSON.stringify(context, null, 2));
info("end");

// This flag can be enabled by https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets ACTIONS_STEP_DEBUG to true.
debug("debugging 1");

exportVariable("MY_ENV_1", "123");
setSecret("$MY_ENV_1");
// setSecret('MY_ENV_1');

warning("core warning");
error("core error");
notice("core notice");

// This flag can be enabled by https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets ACTIONS_STEP_DEBUG to true.
debug("debugging 2");

saveState("myState", 12345);

const token = getInput("github-token", { required: true });

info(`github-token: ${token}`);

try {
  // Do stuff
  // throw new Error("something.");
} catch (err) {
  // setFailed logs the message and sets a failing exit code
  setFailed(`Action failed with error ${err}`);
}

(async function () {
  const octokit = getOctokit(token);
  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: "octokit",
    repo: "rest.js",
    pull_number: 123,
    mediaType: {
      format: "json",
    },
  });

  info(JSON.stringify(pullRequest, null, 2));
})();
