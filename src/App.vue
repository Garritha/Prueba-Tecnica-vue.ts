<template>
  <div id="app">
    <FruitsList />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from "vue";
import FruitsList from "./components/FruitsList.vue";

export default defineComponent({
  name: "App",

  components: {
    FruitsList,
  },
  scopeId: 'app',

  data() {
    return {
      selectedFruit: "", // Para almacenar la fruta seleccionada
      fruits: [], // Para almacenar las frutas cargadas desde FruitsList
    };
  },

  watch: {
    selectedFruit(newVal) {
      // Puedes usar "newVal" para realizar acciones cuando se selecciona una fruta
      console.log("Fruta seleccionada:", newVal);
    },
  },
});
</script>