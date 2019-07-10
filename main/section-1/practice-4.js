'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let arr = collectionA.filter ((element) => objectB.value.indexOf(element.key)!=-1);
  return arr.map((element)=>element.key);
}
