const core = require("@actions/core");
const github = require("@actions/github");
const version = require("./version");

function run() { 
  const tagPrefix = "v"; //core.getInput("tag-prefix");
  const tagCommit = false; //core.getInput("tag-commit");

  core.info("input: tagPrefix: " + tagPrefix);
  core.info("input: tagCommit: " + tagCommit);
  
  var v = version(tagPrefix).then(v => {

    core.setOutput("tagVersion", v.tagVersion);
    core.setOutput("nextVersion", v.nextVersion);

    core.info("currentVersion: " + v.currentVersion);
    core.info("nextVersion: " + v.nextVersion);
    
    core.info("releaseType: " + v.releaseType);

    core.info("currentTag: " + v.currentTag);
    core.info("nextTag: " + v.nextTag);
    
  });

    // Create the new tag
  //  if (tagCommit){
  //    core.info("tagging commit with: " + v.nextVersion);
  //    //await git.createTag(`${tagPrefix}${v.nextVersion}`)
  //  }

}

async function tryRun(){
  try 
  {
    await run();
  }
  catch (error) 
  {
      core.setFailed(error.message);
  }  
}

//tryRun();

run();