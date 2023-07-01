<template>
  <h1>{{ binder.name }}</h1>
  <BinderCard v-for="card in binder.cards" :key="card.id" :card="card"/>
</template>

<script setup lang="ts">
import {useBinder} from "@/logic/useBinder";
import {useRoute} from "vue-router";
import BinderCard from "@/components/BinderCard.vue";

const route = useRoute()
const binderId = parseInt(route.params.id as string)
const binder = useBinder().get(binderId)
</script>
