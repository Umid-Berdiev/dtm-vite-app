import { fetchEducationLanguages } from "~/api";

const data = reactive([]);
const selectedItem = ref();

export default () => {
  async function setData() {
    const res = await fetchEducationLanguages();
    Object.assign(data, res);
  }

  async function setSelectedData(value: any) {
    selectedItem.value = value;
  }

  const getData = computed(() => data);
  const getSelectedData = computed(() => selectedItem.value);

  return {
    setEducationLanguages: setData,
    getEducationLanguages: getData,
    setSelectedEducationLanguage: setSelectedData,
    getSelectedEducationLanguage: getSelectedData,
  };
};
