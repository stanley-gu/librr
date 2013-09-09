var rr = require('./librr.js').librrc_api;

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
