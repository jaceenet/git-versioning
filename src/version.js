 const nextVersion = require("./nextVersion");
 const bumpVersion = require("./bump");
 const getTag = require("./getTag");

const version = async (tagPrefix) => {
  
  const currentVersion = await getTag(tagPrefix, "0.0.1");
  const a = await bumpVersion(tagPrefix);
  const nversion = nextVersion(a.releaseType, currentVersion);
    return { currentVersion: currentVersion, nextVersion: nversion, releaseType: a.releaseType, nextTag: `${tagPrefix}${nversion}`, currentTag: `${tagPrefix}${currentVersion}`  };
}

module.exports = version;

// async function run() {
//   const v = await getGitVersion("0.0.1");
//   const a = await bumpVersion();
//   const res = nextVersion(a.releaseType, v);
//   console.log(res);
// }

// run().catch((reason) => {
//   console.log("failed");
// });
