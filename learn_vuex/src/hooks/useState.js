import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper';
export function useState(mapper, moduleId){
  let mapperFn= mapState;
  if (typeof moduleId==='string' && moduleId.length>0){
    mapperFn=createNamespacedHelpers(moduleId).mapState;
  }
  return useMapper(mapper, mapperFn);
}