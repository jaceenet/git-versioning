const core = require("@actions/core");
const github = require("@actions/github");
const version = require("./version");

async function run() {

  try {
    const tagPrefix = core.getInput("tag-prefix");
    const tagCommit = core.getInput("tag-commit");

    var v = await version();

    core.setOutput("tagVersion", v.tagVersion);
    core.setOutput("nextVersion", v.nextVersion);

    core.info("tagVersion: " + v.tagVersion);
    core.info("nextVersion: " + v.nextVersion);
    core.info("releaseType: " + v.releaseType);

     // Create the new tag
     if (tagCommit){
       await git.createTag(`${tagPrefix}${v.nextVersion}`)
     }
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run();
