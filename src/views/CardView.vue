<template>
  <router-link to="/">
    <button>Retour</button>
  </router-link>
  <CardElement :card="card"/>
</template>

<script setup lang="ts">
import {useCard} from "@/logic/useCard";
import {useRoute} from "vue-router";
import CardElement from "@/components/CardElement.vue";

const route = useRoute()
const cardId = parseInt(route.params.id as string)
const card = useCard().get(cardId)
</script>
