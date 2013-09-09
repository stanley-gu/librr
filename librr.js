var FFI = require('ffi'),
    ArrayType = require('ref-array'),
    Struct = require('ref-struct'),
    ref = require('ref');

var voidPtr = ref.refType(ref.types.void);

exports.CONSTANTS = {
  'ListItemType': {
      litString: 0,
      litInteger: 1,
      litDouble: 2,
      litList: 3,
      '0': 'litString',
      '1': 'litInteger',
      '2': 'litDouble',
      '3': 'litList',
  },
};

var RRListItemPtr = exports.RRListItemPtr = voidPtr;
var RRListItemPtrPtr = exports.RRListItemPtrPtr = ref.refType(RRListItemPtr);
var RRList = exports.RRList = Struct({
  Count: ref.types.int32,
  Items: RRListItemPtr,
});
var RRListPtr = exports.RRListPtr = ref.refType(RRList);
var RRCData = exports.RRCData = Struct({
  RSize: ref.types.int32,
  CSize: ref.types.int32,
  Data: ref.refType(ref.types.double),
  Weights: ref.refType(ref.types.double),
  ColumnHeaders: voidPtr,
});
var RRCDataPtr = exports.RRCDataPtr = ref.refType(RRCData);
var RRStringArray = exports.RRStringArray = Struct({
  Count: ref.types.int32,
  String: voidPtr,
});
var RRStringArrayPtr = exports.RRStringArrayPtr = ref.refType(RRStringArray);
var RRVector = exports.RRVector = Struct({
  Count: ref.types.int32,
  Data: ref.refType(ref.types.double),
});
var RRVectorPtr = exports.RRVectorPtr = ref.refType(RRVector);
var RRDoubleMatrix = exports.RRDoubleMatrix = Struct({
  RSize: ref.types.int32,
  CSize: ref.types.int32,
  Data: ref.refType(ref.types.double),
});
var RRDoubleMatrixPtr = exports.RRDoubleMatrixPtr = ref.refType(RRDoubleMatrix);
var RRCCode = exports.RRCCode = Struct({
  Header: ref.types.CString,
  Source: ref.types.CString,
});
var RRCCodePtr = exports.RRCCodePtr = ref.refType(RRCCode);
var RRComplex = exports.RRComplex = Struct({
  re: ref.types.double,
  imag: ref.types.double,
});
var RRComplexPtr = exports.RRComplexPtr = ref.refType(RRComplex);
var RRComplexMatrix = exports.RRComplexMatrix = Struct({
  RSize: ref.types.int32,
  CSize: ref.types.int32,
  Data: RRComplexPtr,
});
var RRComplexMatrixPtr = exports.RRComplexMatrixPtr = ref.refType(RRComplexMatrix);
var RRHandle = exports.RRHandle = voidPtr;
var RRHandlePtr = exports.RRHandlePtr = ref.refType(RRHandle);
var RRComplexVector = exports.RRComplexVector = Struct({
  Count: ref.types.int32,
  Data: RRComplexPtr,
});
var RRComplexVectorPtr = exports.RRComplexVectorPtr = ref.refType(RRComplexVector);
var RRInstanceList = exports.RRInstanceList = Struct({
  Count: ref.types.int32,
  Handle: RRHandlePtr,
  RRList: voidPtr,
});
var RRInstanceListPtr = exports.RRInstanceListPtr = ref.refType(RRInstanceList);
var RRDataHandle = exports.RRDataHandle = voidPtr;
var RRDataHandlePtr = exports.RRDataHandlePtr = ref.refType(RRDataHandle);

exports.librrc_api = new FFI.Library('librrc_api', {
  getFileContent: [ref.types.CString, [
    ref.types.CString,
  ]],
  createText: [ref.types.CString, [
    ref.types.CString,
  ]],
  createTextMemory: [ref.types.CString, [
    ref.types.int32,
  ]],
  createRRList: [RRListPtr, [
  ]],
  freeRRList: [ref.types.void, [
    RRListPtr,
  ]],
  getListLength: [ref.types.int32, [
    RRListPtr,
  ]],
  createIntegerItem: [RRListItemPtr, [
    ref.types.int32,
  ]],
  createDoubleItem: [RRListItemPtr, [
    ref.types.double,
  ]],
  createStringItem: [RRListItemPtr, [
    ref.types.CString,
  ]],
  createListItem: [RRListItemPtr, [
    voidPtr,
  ]],
  addItem: [ref.types.int32, [
    RRListPtr,
    RRListItemPtrPtr,
  ]],
  getListItem: [RRListItemPtr, [
    RRListPtr,
    ref.types.int32,
  ]],
  isListItemInteger: [ref.types.int32, [
    RRListItemPtr,
  ]],
  isListItemDouble: [ref.types.int32, [
    RRListItemPtr,
  ]],
  isListItemString: [ref.types.int32, [
    RRListItemPtr,
  ]],
  isListItemList: [ref.types.int32, [
    RRListItemPtr,
  ]],
  isListItem: [ref.types.int32, [
    RRListItemPtr,
    ref.types.uint32,
  ]],
  getIntegerListItem: [ref.types.int32, [
    RRListItemPtr,
    ref.refType(ref.types.int32),
  ]],
  getDoubleListItem: [ref.types.int32, [
    RRListItemPtr,
    ref.refType(ref.types.double),
  ]],
  getStringListItem: [ref.types.CString, [
    RRListItemPtr,
  ]],
  getList: [RRListPtr, [
    RRListItemPtr,
  ]],
  freeRRData: [ref.types.int32, [
    RRCDataPtr,
  ]],
  freeText: [ref.types.int32, [
    ref.types.CString,
  ]],
  freeStringArray: [ref.types.int32, [
    RRStringArrayPtr,
  ]],
  freeVector: [ref.types.int32, [
    RRVectorPtr,
  ]],
  freeMatrix: [ref.types.int32, [
    RRDoubleMatrixPtr,
  ]],
  freeCCode: [ref.types.int32, [
    RRCCodePtr,
  ]],
  pause: [ref.types.void, [
  ]],
  getVectorLength: [ref.types.int32, [
    RRVectorPtr,
  ]],
  createVector: [RRVectorPtr, [
    ref.types.int32,
  ]],
  getVectorElement: [ref.types.int32, [
    RRVectorPtr,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  setVectorElement: [ref.types.int32, [
    RRVectorPtr,
    ref.types.int32,
    ref.types.double,
  ]],
  createRRMatrix: [RRDoubleMatrixPtr, [
    ref.types.int32,
    ref.types.int32,
  ]],
  getMatrixNumRows: [ref.types.int32, [
    RRDoubleMatrixPtr,
  ]],
  getMatrixNumCols: [ref.types.int32, [
    RRDoubleMatrixPtr,
  ]],
  getMatrixElement: [ref.types.int32, [
    RRDoubleMatrixPtr,
    ref.types.int32,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  setMatrixElement: [ref.types.int32, [
    RRDoubleMatrixPtr,
    ref.types.int32,
    ref.types.int32,
    ref.types.double,
  ]],
  getComplexMatrixElement: [ref.types.int32, [
    RRComplexMatrixPtr,
    ref.types.int32,
    ref.types.int32,
    RRComplexPtr,
  ]],
  setComplexMatrixElement: [ref.types.int32, [
    RRComplexMatrixPtr,
    ref.types.int32,
    ref.types.int32,
    RRComplexPtr,
  ]],
  getRRDataNumRows: [ref.types.int32, [
    RRCDataPtr,
  ]],
  getRRDataNumCols: [ref.types.int32, [
    RRCDataPtr,
  ]],
  getRRDataElement: [ref.types.int32, [
    RRCDataPtr,
    ref.types.int32,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getRRDataColumnLabel: [ref.types.CString, [
    RRCDataPtr,
    ref.types.int32,
  ]],
  getCCodeHeader: [ref.types.CString, [
    RRCCodePtr,
  ]],
  getCCodeSource: [ref.types.CString, [
    RRCCodePtr,
  ]],
  getCSourceFileName: [ref.types.CString, [
    RRHandle,
  ]],
  vectorToString: [ref.types.CString, [
    RRVectorPtr,
  ]],
  complexVectorToString: [ref.types.CString, [
    RRComplexVectorPtr,
  ]],
  rrDataToString: [ref.types.CString, [
    RRCDataPtr,
  ]],
  matrixToString: [ref.types.CString, [
    RRDoubleMatrixPtr,
  ]],
  complexMatrixToString: [ref.types.CString, [
    RRComplexMatrixPtr,
  ]],
  getNumberOfStringElements: [ref.types.int32, [
    RRStringArrayPtr,
  ]],
  getStringElement: [ref.types.CString, [
    RRStringArrayPtr,
    ref.types.int32,
  ]],
  stringArrayToString: [ref.types.CString, [
    RRStringArrayPtr,
  ]],
  listToString: [ref.types.CString, [
    RRListPtr,
  ]],
  getInstanceCount: [ref.types.int32, [
    RRInstanceListPtr,
  ]],
  getRRHandle: [RRHandle, [
    RRInstanceListPtr,
    ref.types.int32,
  ]],
  writeRRData: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  writeMultipleRRData: [ref.types.int32, [
    RRInstanceListPtr,
    ref.types.CString,
  ]],
  compileSource: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  createRRInstance: [RRHandle, [
  ]],
  createRRInstanceEx: [RRHandle, [
    ref.types.CString,
    ref.types.CString,
  ]],
  createRRInstances: [RRInstanceListPtr, [
    ref.types.int32,
  ]],
  freeRRInstance: [ref.types.int32, [
    RRHandle,
  ]],
  freeRRInstances: [ref.types.int32, [
    RRInstanceListPtr,
  ]],
  getInstallFolder: [ref.types.CString, [
  ]],
  setInstallFolder: [ref.types.int32, [
    ref.types.CString,
  ]],
  getAPIVersion: [ref.types.CString, [
  ]],
  getCPPAPIVersion: [ref.types.CString, [
    RRHandle,
  ]],
  getExtendedAPIInfo: [ref.types.CString, [
  ]],
  getBuildDate: [ref.types.CString, [
  ]],
  getBuildTime: [ref.types.CString, [
  ]],
  getBuildDateTime: [ref.types.CString, [
  ]],
  getCopyright: [ref.types.CString, [
  ]],
  getInfo: [ref.types.CString, [
    RRHandle,
  ]],
  getlibSBMLVersion: [ref.types.CString, [
    RRHandle,
  ]],
  setTempFolder: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getTempFolder: [ref.types.CString, [
    RRHandle,
  ]],
  getWorkingDirectory: [ref.types.CString, [
  ]],
  getRRCAPILocation: [ref.types.CString, [
  ]],
  setCompiler: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getCompiler: [ref.types.CString, [
    RRHandle,
  ]],
  setCompilerLocation: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getCompilerLocation: [ref.types.CString, [
    RRHandle,
  ]],
  setSupportCodeFolder: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getSupportCodeFolder: [ref.types.CString, [
    RRHandle,
  ]],
  getCCode: [RRCCodePtr, [
    RRHandle,
  ]],
  setCodeGenerationMode: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
  ]],
  hasError: [ref.types.int32, [
  ]],
  getLastError: [ref.types.CString, [
  ]],
  setComputeAndAssignConservationLaws: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
  ]],
  loadSBML: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  loadSBMLEx: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.int32,
  ]],
  loadSBMLFromFile: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  loadSBMLFromFileE: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.int32,
  ]],
  unLoadModel: [ref.types.int32, [
    RRHandle,
  ]],
  isModelLoaded: [ref.types.int32, [
    RRHandle,
  ]],
  loadSimulationSettings: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getCurrentSBML: [ref.types.CString, [
    RRHandle,
  ]],
  getSBML: [ref.types.CString, [
    RRHandle,
  ]],
  getParamPromotedSBML: [ref.types.CString, [
    RRHandle,
    ref.types.CString,
  ]],
  setCapabilities: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getCapabilities: [ref.types.CString, [
    RRHandle,
  ]],
  getListOfCapabilities: [RRStringArrayPtr, [
    RRHandle,
  ]],
  setTimeStart: [ref.types.int32, [
    RRHandle,
    ref.types.double,
  ]],
  setTimeEnd: [ref.types.int32, [
    RRHandle,
    ref.types.double,
  ]],
  setNumPoints: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
  ]],
  createTimeCourseSelectionList: [ref.types.int32, [
    RRHandle,
  ]],
  setTimeCourseSelectionList: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getTimeCourseSelectionList: [RRStringArrayPtr, [
    RRHandle,
  ]],
  simulate: [RRCDataPtr, [
    RRHandle,
  ]],
  getSimulationResult: [RRCDataPtr, [
    RRHandle,
  ]],
  getRoadRunnerData: [RRDataHandle, [
    RRHandle,
  ]],
  simulateEx: [RRCDataPtr, [
    RRHandle,
    ref.types.double,
    ref.types.double,
    ref.types.int32,
  ]],
  oneStep: [ref.types.int32, [
    RRHandle,
    ref.types.double,
    ref.types.double,
    ref.refType(ref.types.double),
  ]],
  getTimeStart: [ref.types.int32, [
    RRHandle,
    ref.refType(ref.types.double),
  ]],
  getTimeEnd: [ref.types.int32, [
    RRHandle,
    ref.refType(ref.types.double),
  ]],
  getNumPoints: [ref.types.int32, [
    RRHandle,
    ref.refType(ref.types.int32),
  ]],
  steadyState: [ref.types.int32, [
    RRHandle,
    ref.refType(ref.types.double),
  ]],
  computeSteadyStateValues: [RRVectorPtr, [
    RRHandle,
  ]],
  setSteadyStateSelectionList: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
  ]],
  getSteadyStateSelectionList: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getValue: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  setValue: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.double,
  ]],
  getFloatingSpeciesConcentrations: [RRVectorPtr, [
    RRHandle,
  ]],
  getBoundarySpeciesConcentrations: [RRVectorPtr, [
    RRHandle,
  ]],
  getGlobalParameterValues: [RRVectorPtr, [
    RRHandle,
  ]],
  setBoundarySpeciesByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.types.double,
  ]],
  setFloatingSpeciesInitialConcentrationByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.types.double,
  ]],
  getFloatingSpeciesInitialConcentrationByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  setFloatingSpeciesByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.types.double,
  ]],
  setGlobalParameterByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.types.double,
  ]],
  getBoundarySpeciesByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getFloatingSpeciesByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getGlobalParameterByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getCompartmentByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  setCompartmentByIndex: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.types.double,
  ]],
  setFloatingSpeciesConcentrations: [ref.types.int32, [
    RRHandle,
    RRVectorPtr,
  ]],
  setBoundarySpeciesConcentrations: [ref.types.int32, [
    RRHandle,
    RRVectorPtr,
  ]],
  getFullJacobian: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getReducedJacobian: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getEigenvalues: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getStoichiometryMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getLinkMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getNrMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getConservationMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  reset: [ref.types.int32, [
    RRHandle,
  ]],
  setFloatingSpeciesInitialConcentrations: [ref.types.int32, [
    RRHandle,
    RRVectorPtr,
  ]],
  getFloatingSpeciesInitialConcentrations: [RRVectorPtr, [
    RRHandle,
  ]],
  getFloatingSpeciesInitialConditionIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getNumberOfReactions: [ref.types.int32, [
    RRHandle,
  ]],
  getReactionRate: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getReactionRates: [RRVectorPtr, [
    RRHandle,
  ]],
  getReactionRatesEx: [RRVectorPtr, [
    RRHandle,
    RRVectorPtr,
  ]],
  getRatesOfChange: [RRVectorPtr, [
    RRHandle,
  ]],
  getRatesOfChangeIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getRateOfChange: [ref.types.int32, [
    RRHandle,
    ref.types.int32,
    ref.refType(ref.types.double),
  ]],
  getRatesOfChangeEx: [RRVectorPtr, [
    RRHandle,
    RRVectorPtr,
  ]],
  evalModel: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfCompartments: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfBoundarySpecies: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfFloatingSpecies: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfGlobalParameters: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfDependentSpecies: [ref.types.int32, [
    RRHandle,
  ]],
  getNumberOfIndependentSpecies: [ref.types.int32, [
    RRHandle,
  ]],
  getReactionIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getBoundarySpeciesIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getFloatingSpeciesIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getGlobalParameterIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getCompartmentIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getEigenvalueIds: [RRStringArrayPtr, [
    RRHandle,
  ]],
  getAvailableTimeCourseSymbols: [RRListPtr, [
    RRHandle,
  ]],
  getAvailableSteadyStateSymbols: [RRListPtr, [
    RRHandle,
  ]],
  getElasticityCoefficientIds: [RRListPtr, [
    RRHandle,
  ]],
  getUnscaledFluxControlCoefficientIds: [RRListPtr, [
    RRHandle,
  ]],
  getFluxControlCoefficientIds: [RRListPtr, [
    RRHandle,
  ]],
  getUnscaledConcentrationControlCoefficientIds: [RRListPtr, [
    RRHandle,
  ]],
  getConcentrationControlCoefficientIds: [RRListPtr, [
    RRHandle,
  ]],
  getUnscaledElasticityMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getScaledElasticityMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getScaledFloatingSpeciesElasticity: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  getUnscaledConcentrationControlCoefficientMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getScaledConcentrationControlCoefficientMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getUnscaledFluxControlCoefficientMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getScaledFluxControlCoefficientMatrix: [RRDoubleMatrixPtr, [
    RRHandle,
  ]],
  getuCC: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  getCC: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  getEE: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  getuEE: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
  getScaledFloatingSpeciesElasticity: [ref.types.int32, [
    RRHandle,
    ref.types.CString,
    ref.types.CString,
    ref.refType(ref.types.double),
  ]],
});


