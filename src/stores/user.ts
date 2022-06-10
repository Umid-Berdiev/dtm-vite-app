import { defineStore, acceptHMRUpdate } from "pinia";
import { useToast } from "vue-toastification";
import makeRequest from "../api/makeRequest";

const toast = useToast();

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a: string, p: string) {
  if (a === "ed" && p === "ed") return Promise.resolve({ isAdmin: true });
  if (p === "ed") return Promise.resolve({ isAdmin: false });
  return Promise.reject(new Error("invalid credentials"));
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: useStorage("user", {
      email: "",
      locale: "uz",
      balance: 0,
    }),
  }),

  getters: {
    getUserBalance: (state) => state.user.balance,
    getUserLocale: (state) => state.user.locale,
  },

  actions: {
    async fetchUserBalance() {
      try {
        //   const res = makeRequest({
        // })
      } catch (error: any) {
        console.log("Error while fetching user balance: ", error.message);
        toast.error("Error while fetching user balance: " + error.message);
        throw error;
      }
    },

    async updateUserBalance() {
      try {
        //   const res = makeRequest({
        // })
      } catch (error: any) {
        console.log("Error while updating user balance: ", error.message);
        toast.error("Error while updating user balance: " + error.message);
        throw error;
      }
    },

    async setLocale(locale: string) {
      try {
        const res = await makeRequest({
          url: "/api/locale",
          method: "post",
          data: {
            locale,
          },
          headers: { authorization: true },
        });

        this.user.locale = res.data.locale;
      } catch (error: any) {
        console.log("Error while setting locale: ", error.message);
        throw error;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
