'use strict';

module.exports = function countSameElements(collection) {
  let map = collection.reduce((m, x) => {
    if(x.includes('-')){
      return m.set(x, (m.get(x) || 0) + parseInt(x.substr(2)));
    }else{
      return m.set(x, (m.get(x) || 0) + 1);
    }
  }, new Map());
  let result=[];
  let newCollection=Array.from(map.keys());
  newCollection.forEach((item)=>{
    result.push({'key':item.substr(0,1),'count':map.get(item)})
  })
  return result;
}
