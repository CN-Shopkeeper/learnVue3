import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'

export function useMapper(mapper, mapFunction){
  const store = useStore();
  const storeMapperFns = mapFunction(mapper);

  const storeMapper = {}
  Object.keys(storeMapperFns).forEach(fnKey=>{
    const fn = storeMapperFns[fnKey].bind({$store: store});
    storeMapper[fnKey]=computed(fn);
  })

  return storeMapper;
}