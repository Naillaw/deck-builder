<template>
  <div v-for="index in card.quantity" :key="index">
    <img :src="card.imageLink" :title="card.name" :alt="card.name"/>
  </div>
</template>

<script setup lang="ts">
import {Card} from "@/type";

const props = defineProps<{
  card: Card & {
    quantity;
  };
}>()
</script>
