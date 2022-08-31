<script setup lang="ts">
import "@master/css";
import { onMounted, ref, computed } from "vue";
import UserList from "./components/UserList.vue";
import { useUserStore } from "@/stores/users";
import type OrderTerm from "@/types/OrderTerm";

const users = useUserStore();
const order = ref<OrderTerm>("all");
const orderTermList: Array<OrderTerm> = ["all", "male", "female"];

const getUserDataHandler = () => {
  users.getUserData();
};

const getOrderHandeler = (term: OrderTerm) => {
  order.value = term;
};

const filteredUserData = computed(() => {
  if (order.value == "all") {
    return users.users;
  } else {
    return users.users.filter((user) => user.gender === order.value);
  }
});

onMounted(() => {
  getUserDataHandler();
});
</script>

<template>
  <div
    class="w:full flex align-items:start justify-content:center mt:50 max-w:450@sm"
  >
    <button
      v-for="(orderTerm, index) in orderTermList"
      :key="index"
      class="font:14 text:center height:40 height:56@md bg:gray-44 color:white border:none p:15 cursor:pointer mb:20 text-transform:capitalize"
      :class="{
        'bg:gray-22.active active font-weight:bolder ': orderTerm === order,
      }"
      @click="getOrderHandeler(orderTerm)"
    >
      Order By {{ orderTerm }}
    </button>
  </div>
  <div>
    <template v-if="filteredUserData?.length">
      <UserList :data="filteredUserData"></UserList>
    </template>
    <template v-else>
      <h1 class="font:25 font:heavy italic m:50 text:center color:white">
        Loading...
      </h1>
    </template>
  </div>
</template>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  font-family: "Roboto", sans-serif !important;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  background: #1e1e1e;
}
</style>
