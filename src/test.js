const getTag = require("./getTag");
const bumpVersion = require("./bump");
const version = require("./version");

async function run(){
    const tagPrefix = 'v';

    // var v = await getTag(tagPrefix, "0.0.1");
    // console.debug("getTag:", v);
    
    // var b = await bumpVersion('v');
    // console.debug("bumpVersion:", b);
    
    var out = await version('v', '0.0.1');
    console.log(out);
    
//    await version('v');
}

run();