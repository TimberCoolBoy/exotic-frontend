<template>
  <a-list item-layout="horizontal" :data-source="props.postList">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.content">
          <template #title>
            <a> {{ item.title }}</a>
            <!--            <router-link :to="`/articles/${item.id}`">{{-->
            <!--              item.title-->
            <!--            }}</router-link>-->
          </template>
          <template #avatar>
            <a-avatar :src="timber" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import gege from "../assets/gege.jpg";
import cartoon from "../assets/cartoon.jpg";
import dog from "../assets/dog.jpg";
import timber from "../assets/timber.jpg";
import { withDefaults, defineProps } from "vue";

interface Props {
  postList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});
</script>

<style scoped>
.gege {
  width: 200px;
}
</style>
