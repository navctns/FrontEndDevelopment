
import { ref,computed } from 'vue';
export default function useSort(items, sortProperty){
  const sorting = ref(null);
  const displayedUsers = computed(function () {
    if (!sorting.value) {
      return items.value;
    }
    return items.value.slice().sort((u1, u2) => {
      if (sorting.value === 'asc' && u1[sortProperty] > u2[sortProperty]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (sorting.value === 'desc' && u1[sortProperty] > u2[sortProperty]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  function sort(mode) {
    sorting.value = mode;
  }
  return{
    sorting,
    sort,
    displayedUsers,
  }
}
