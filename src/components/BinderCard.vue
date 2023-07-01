<template>
  <div v-for="index in card.quantity" :key="index">
    <router-link :to="`/card/${card.id}`">
      <img :src="card.imageLink" :title="card.name" :alt="card.name"/>
    </router-link>
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
