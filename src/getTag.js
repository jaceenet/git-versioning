const gitSemverTags = require("git-semver-tags");

const getGitVersion = (tagPrefix,fallback) => {
    return new Promise((resolve, reject) => {
      gitSemverTags(
        {
          tagPrefix,
        },
        (err, tags) => {
  //        console.log("tags", err, tags);
          const currentVersion =
            tags.length > 0 ? tags.shift().replace(tagPrefix, "") : fallback;
          resolve(currentVersion);
        }
      );
  
      // setTimeout(() => {
      //   resolve({ major: 1, minor: 0, patch: 0 });
      // }, 1500);
    });
  };

  module.exports = getGitVersion;