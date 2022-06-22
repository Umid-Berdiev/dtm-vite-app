import { fetchEducationForms } from "~/api";

interface EducationForm {
  id: number;
  title: string;
}

const data: EducationForm[] = reactive([]);
const selectedItem = ref();

export default () => {
  async function setData() {
    const res = await fetchEducationForms();
    Object.assign(data, res);
  }

  async function setSelectedData(value: any) {
    selectedItem.value = value;
  }

  const getData = computed(() => data);
  const getSelectedData = computed(() => selectedItem.value);

  return {
    setEducationForms: setData,
    getEducationForms: getData,
    setSelectedEducationForm: setSelectedData,
    getSelectedEducationForm: getSelectedData,
  };
};
