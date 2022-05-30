import { defineStore, acceptHMRUpdate } from "pinia";
import { useToast } from "vue-toastification";
import makeRequest from "../api/makeRequest";

const toast = useToast();
const locale = "uz";

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
    name: "Eduardo",
    isAdmin: true,
  }),

  getters: {
    getUserBalance: (state) => {},
  },

  actions: {
    logout() {
      this.$patch({
        name: "",
        isAdmin: false,
      });

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: string, password: string) {
      const userData = await apiLogin(user, password);

      this.$patch({
        name: user,
        ...userData,
      });
    },

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
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
