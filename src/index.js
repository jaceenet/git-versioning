const core = require("@actions/core");
const github = require("@actions/github");
const version = require("./version");

async function run() {
  await version().then(v => {    
    core.setOutput("tagVersion", v.tagVersion);
    core.setOutput("nextVersion", v.nextVersion);

    core.info("tagVersion: " + v.tagVersion);
    core.info("nextVersion: " + v.nextVersion);
    core.info("releaseType: " + v.releaseType);
  })
}

// try {

//   version().then(v => {    
//     core.setOutput("tagVersion", v.tagVersion);
//     core.setOutput("nextVersion", v.nextVersion);
//   })

//   // // `who-to-greet` input defined in action metadata file
//   // const nameToGreet = core.getInput("who-to-greet");
//   // console.log(`Hello ${nameToGreet}!`);
//   // const time = new Date().toTimeString();
//   // core.setOutput("time", time);
  
//   // // Get the JSON webhook payload for the event that triggered the workflow
//   // const payload = JSON.stringify(github.context.payload, undefined, 2);
//   // console.log(`The event payload: ${payload}`);
// } catch (error) {
//   core.setFailed(error.message);
// }

run();
