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
    <ul class="@shake|1s|infinite>li:first list-style:none">
      <li
        class="bg:gray-28:hover bg:gray-32:active flex gap:12 cursor:pointer outline:2|solid|gray-28:hover_svg"
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
          <svg
            class="abs right:0 bottom:3 bg:green-70 outline:2|solid|gray-22 round w:7 h:7"
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
    </ul>
  </div>
</template>
<style scoped></style>
