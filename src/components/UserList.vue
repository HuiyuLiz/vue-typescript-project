<script setup lang="ts">
import type { PropType } from "vue";
import type User from "@/types/User";

const props = defineProps({
  data: {
    type: Array as PropType<User[]>,
    required: true,
  },
});
</script>
<template>
  <div class="bg:gray-22.active active p:8|20_li p:10|0 r:10 w:full">
    <TransitionGroup
      name="list"
      tag="ul"
      class="@shake|1s|infinite>li:first list-style:none mt:10 pl:15"
    >
      <li
        class="bg:gray-28:hover bg:gray-32:active flex gap:12 cursor:pointer"
        v-for="item in props.data"
        :key="item.email"
      >
        <div class="rel">
          <img
            :src="item.picture.large"
            width="40"
            height="40"
            class="round object:cover"
            alt="avatar"
          />
        </div>
        <div>
          <div class="flex align-items:center">
            <div class="font:14 font:gray-88 mr:8 mt:2">
              {{ item?.name?.last || "" }} {{ item?.name?.first || "" }}
            </div>
          </div>
          <p class="text:12 m:0 font:gray-66">{{ item.email || "" }}</p>
        </div>
      </li>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
