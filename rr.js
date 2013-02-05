var rr = require('./librr.js');

console.log(rr.librr_c_api.getBuildTime());
console.log(rr.librr_c_api.getVersion());
console.log(rr.librr_c_api.getlibSBMLVersion());
console.log(rr.librr_c_api.getWorkingDirectory());

rr.librr_c_api.loadSBMLFromFile('/usr/local/models/feedback.xml')
console.log(rr.librr_c_api.getCurrentSBML())
console.log('number of floating species: ' + rr.librr_c_api.getNumberOfFloatingSpecies())
var results = rr.librr_c_api.simulate();
console.log('results are: \n' + rr.librr_c_api.resultToString(results))
