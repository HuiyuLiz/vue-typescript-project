import { defineStore } from "pinia";
import axios from "axios";
import type User from "@/types/User";

export const useUserStore = defineStore({
  id: "users",
  state: () => ({
    users: [] as User[],
  }),
  getters: {},
  actions: {
    getUserData() {
      axios
        .get("https://randomuser.me/api/?results=10")
        .then((response) => {
          this.users = response?.data?.results || [];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
