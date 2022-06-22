import { fetchRegions } from "~/api";

interface Region {
  id?: number;
  soato: number | string;
  name: string;
}

const regions: Region[] = reactive([]);
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
