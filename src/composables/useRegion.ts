import { fetchRegions } from "~/api";

const regions = reactive([]);
const selectedRegion = ref();

export default () => {
  async function setRegions() {
    const res = await fetchRegions();
    Object.assign(regions, res);
  }

  async function setSelectedRegion(value: any) {
    selectedRegion.value = value;
  }

  const getRegions = computed(() => regions);
  const getSelectedRegion = computed(() => selectedRegion.value);

  return {
    setRegions,
    getRegions,
    setSelectedRegion,
    getSelectedRegion,
  };
};
