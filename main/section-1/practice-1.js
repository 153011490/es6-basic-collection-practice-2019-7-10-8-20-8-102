'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  return collectionA.filter ((element) => collectionB.indexOf(element)!=-1);
}
