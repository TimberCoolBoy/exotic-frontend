<template>
  <a-list
    item-layout="horizontal"
    :grid="{
      column: 5,
      gutter: 16,
    }"
    :data-source="props.videoList"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a :href="item.arcurl" target="_blank">
          <a-card hoverable style="width: 150px; height: 200px">
            <template #cover>
              <img
                :src="item.pic"
                referrerpolicy="no-referrer"
                style="width: 150px; height: 150px"
              />
            </template>
            <a :href="item.arcurl" target="_blank">
              <a-card-meta :title="item.author" />
            </a>
          </a-card>
        </a>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, ref } from "vue";

interface Props {
  videoList: any[];
}

const props = withDefaults(defineProps<Props>(), {
  videoList: () => [],
});
</script>

<style scoped></style>
