import { mapGetters,createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper';
export function useGetters(mapper, moduleId){
  let mapperFn= mapGetters;
  if (typeof moduleId==='string' && moduleId.length>0){
    mapperFn=createNamespacedHelpers(moduleId).mapGetters;
  }
  return useMapper(mapper,mapperFn);
}