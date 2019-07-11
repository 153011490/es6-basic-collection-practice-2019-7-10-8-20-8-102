'use strict';

module.exports = function countSameElements(collection) {
  let map = collection.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map());
  let result=[];
  let newCollection=Array.from(map.keys());
  newCollection.forEach((item)=>{
    result.push({'key':item,'count':map.get(item)})
  })
  return result;
}
