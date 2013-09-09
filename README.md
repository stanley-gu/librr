# `librr.js`

RoadRunner C-library wrapper for Node.

Uses [FFI](https://github.com/rbranson/node-ffi) to call the RoadRunner native libraries.
FFI bindings were generated using [ffi-generate](https://github.com/tjfontaine/node-ffi-generate).

# Installation

Install using NPM with:
`npm install librr`

and include `librr` with:
`librr = require('librr');`

# Example Usage

    var rr = require('librr').librrc_api;
    
    console.log(rr.getAPIVersion());
    
    var myrr = rr.createRRInstance();
    rr.setTempFolder(myrr, '/tmp');
    console.log(rr.getTempFolder(myrr));
    var currentDir = rr.getWorkingDirectory();
    console.log(currentDir);
    rr.loadSBMLFromFile(myrr, currentDir + '/feedback.xml');
    console.log(rr.getCurrentSBML(myrr));
    console.log('number of floating species: ' + rr.getNumberOfFloatingSpecies(myrr));
    var results = rr.simulate(myrr);
    console.log('results are: \n' + rr.rrDataToString(results));
