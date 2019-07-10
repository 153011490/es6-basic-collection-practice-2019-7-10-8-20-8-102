'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  return collectionA.filter ((element) => objectB.value.indexOf(element)!=-1);
}
