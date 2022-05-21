import { computed, ref } from "vue";
import { acceptHMRUpdate, defineStore } from "pinia";
import makeRequest from "~/api/makeRequest.js";

export const useUserStore = defineStore("user", () => {
  /**
   * Current name of the user.
   */
  const user = ref({});
  const userBalance = ref(0);
  const savedName = ref("");
  const previousNames = ref(new Set<string>());

  function setUser(val: object) {
    user.value = val;
  }

  function setUserBalance(val: number) {
    userBalance.value = val;
  }

  function getUser(): number {
    return userBalance.value;
  }

  function getUserBalance(): number {
    return userBalance.value;
  }

  async function fetchUser() {
    try {
      const res = await makeRequest({
        url: "/api/user",
        headers: { authorization: true },
      });

      setUser(res.data);
    } catch (err) {
      return console.log("Error while fetching user: ", err);
    }
  }

  async function fetchUserBalance() {
    try {
      const res = await makeRequest({
        url: "/api/balance",
        headers: { authorization: true },
      });

      setUserBalance(res.data);
    } catch (err) {
      return console.log("Error while fetching user balance: ", err);
    }
  }

  return {
    getUser,
    getUserBalance,
    fetchUser,
    fetchUserBalance,
  };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
