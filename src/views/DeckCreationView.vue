<template>
  <h1>Créer un deck</h1>
  <form @submit.prevent="addDeck">
    <input type="text" v-model="deckName" placeholder="Nom du deck"/>
    <button type="submit">Créer</button>
  </form>
</template>

<script setup lang="ts">
import {Ref, ref} from "vue";
import {useDeckBuilder} from "@/logic/useDeckBuilder";

const deckName: Ref<String> = ref('')

const addDeck = () => useDeckBuilder().add([1, 2], deckName.value, 1)
</script>
