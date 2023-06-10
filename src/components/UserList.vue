<template>
  <a-list
    item-layout="horizontal"
    :grid="{
      column: 5,
      gutter: 16,
    }"
    :data-source="props.userList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card hoverable style="width: 150px; height: 250px">
          <template #cover>
            <img alt="example" :src="cat" />
          </template>
          <a-card-meta :title="item.userName">
            <template #description>{{ item.userProfile }}</template>
          </a-card-meta>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import gege from "../assets/gege.jpg";
import kuli from "../assets/kuli.jpg";
import cartoon from "../assets/cartoon.jpg";
import cat from "../assets/cat.jpg";
import dog from "../assets/dog.jpg";
import { withDefaults, defineProps } from "vue";

interface Props {
  userList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  userList: () => [],
});
</script>

<style scoped>
.gege {
  width: 200px;
}
</style>
