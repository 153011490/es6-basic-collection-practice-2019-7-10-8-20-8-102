'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter ((element) => collectionB[0].indexOf(element)!=-1);
}
