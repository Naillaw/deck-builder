<template>
  <div v-for="card in cards" :key="card.id">
    <router-link :to="`/card/${card.id}`">
      <CardElement :card="card"/>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {useCard} from "@/logic/useCard";
import CardElement from "@/components/CardElement.vue";

const cards = useCard().getAll()
</script>
