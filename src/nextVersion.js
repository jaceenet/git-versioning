const semver = require("semver");

const nextVersion = (releaseType, version) => {
    let major,
      minor,
      patch = 0;
  
    major = semver.major(version);
    minor = semver.minor(version);
    patch = semver.patch(version);
  
      switch (releaseType) {
      case "minor":
        minor = parseInt(minor, 10) + 1;
        patch = 0;
        break;
      
      case "major":
        major = parseInt(major, 10) + 1;
        minor = 0;
        patch = 0;
        break;
  
      default:
        patch = parseInt(patch, 10) + 1;
    }
  
    return major + "." + minor + "." + patch;
  }

  module.exports = nextVersion;