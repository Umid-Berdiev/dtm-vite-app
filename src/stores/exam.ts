import { computed, ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";

export const useExamStore = defineStore("examStore", () => {
  /**
   * Current name of the user.
   */
  const savedName = ref("");

  const otherNames = computed(() =>
    usedNames.value.filter((name) => name !== savedName.value)
  );

  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedName.value) previousNames.value.add(savedName.value);

    savedName.value = name;
  }

  return {
    setNewName,
    otherNames,
    savedName,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useExamStore, import.meta.hot));
