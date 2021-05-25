
import { ref, computed, watch} from 'vue';

export default function(items, searchProp){
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(function () {
    let users = [];
    if (activeSearchTerm.value) {
      users = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items.value) {
      users = items.value;
    }
    return users;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });
  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return{
    enteredSearchTerm,
    availableItems,
    updateSearch,
  }
}
