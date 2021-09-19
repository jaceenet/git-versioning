var conventionalChangelogPresetLoader = require('conventional-changelog-preset-loader');
var angular = require('conventional-changelog-angular');
//const config = require('conventional-changelog-conventionalcommits')
const conventionalRecommendedBump = require(`conventional-recommended-bump`);

const bumpVersion = (tagPrefix) => {
    return new Promise((resolve, reject) => {

        const autoConfig = conventionalChangelogPresetLoader('angular');

        const defaultConfig = {
            tagPrefix,
            config: angular
        };

        conventionalRecommendedBump(
            defaultConfig,
            (error, recommendation) => {                
                if (error !== null) {
                    reject(error);
                }
                resolve(recommendation);
            }
        );
    });
};

module.exports = bumpVersion;