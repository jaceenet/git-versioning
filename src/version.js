const gitSemverTags = require("git-semver-tags");
var conventionalChangelogPresetLoader = require('conventional-changelog-preset-loader');
var conventionalChangelogPresetLoader = require('conventional-changelog-angular');
const conventionalRecommendedBump = require(`conventional-recommended-bump`);
const semver = require("semver");
const tagPrefix = "v";

const getGitVersion = (fallback) => {
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

function nextVersion(releaseType, version) {
  let major,
    minor,
    patch = 0;

  major = semver.major(version);
  minor = semver.minor(version);
  patch = semver.patch(version);

  switch (releaseType) {
    case "major":
      major = parseInt(major, 10) + 1;
      minor = 0;
      patch = 0;
      break;

    case "minor":
      minor = parseInt(minor, 10) + 1;
      patch = 0;
      break;

    default:
      patch = parseInt(patch, 10) + 1;
  }

  return major + "." + minor + "." + patch;
}

const bumpVersion = () => {
  return new Promise((resolve, reject) => {

    conventionalRecommendedBump(
      {
        preset: 'angular',
        tagPrefix,
      },
      (error, recommendation) => {
        //console.log("bump: ", recommendation, error);
        if (error !== null) {
          reject(error);
        }

        resolve(recommendation);
      }
    );
  });
};

const version = async () => {
  const currentVersion = await getGitVersion("0.0.1");
  const a = await bumpVersion();
  const nversion = nextVersion(a.releaseType, currentVersion);
  // console.log(currentVersion);
  // console.log(nversion);
  // console.log(a.releaseType);

  return { tagVersion: currentVersion, nextVersion: nversion, currentVersion, releaseType: a.releaseType };
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
