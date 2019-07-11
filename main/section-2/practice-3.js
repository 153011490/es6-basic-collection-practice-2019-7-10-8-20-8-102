'use strict';

module.exports = function countSameElements(collection) {
  let map = collection.reduce((m, x) => {
    if(x.includes('-')||x.includes(':')){
      return m.set(x.slice(0,1), (m.get(x.slice(0,1)) || 0) + parseInt(x.substr(2)));
    }else if(x.includes('[')){
      return m.set(x.slice(0,1), (m.get(x.slice(0,1)) || 0) + parseInt(x.slice(2,x.length)));
    }else{
      return m.set(x.slice(0,1), (m.get(x) || 0) + 1);
    }
  }, new Map());
  let result=[];
  let newCollection=Array.from(map.keys());
  newCollection.forEach((item)=>{
    result.push({name:item,summary:map.get(item)})
  })
  return result;
}
