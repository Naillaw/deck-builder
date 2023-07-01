<template>
  <router-link :to="previousRoute">
    <button>Retour</button>
  </router-link>
  <CardElement :card="card"/>
</template>

<script setup lang="ts">
import {useCard} from "@/logic/useCard";
import {useRoute, useRouter} from "vue-router";
import CardElement from "@/components/CardElement.vue";
import {computed} from "vue";

const route = useRoute()
const cardId = parseInt(route.params.id as string)
const card = useCard().get(cardId)

const router = useRouter()
const previousRoute = computed(() => router.options.history.state.back || '/')
</script>
