<template>
  <h3>{{ card.name }}</h3>
  <div>
    <img :src="card.imageLink" :title="card.name" :alt="card.name"/>
  </div>
  <p>{{ card.effect }}</p>
  <span v-if="card.attack">Attaque: {{ card.attack }} - </span>
  <span v-if="card.defense">Défense: {{ card.defense }}</span>
</template>

<script setup lang="ts">
import {Card} from "@/type";

const props = defineProps<{
  card: Card;
}>()
</script>
