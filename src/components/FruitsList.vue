<template>
  <div class="custom-select">
    <div class="search-container">

      <!-- input de busqueda de fruta si no encuentra-->
      <input
        v-model="search"
        class="search-input"
        placeholder="Buscar fruta..."
        @input="searchFruits"
      />

      <!-- icono para despleglar el menu-->
      <i
        class="material-symbols-outlined arrow-down"
        data-testid="arrow-down"
        @click="toggleDropdown"
        :class="{ 'arrow-active': isDropdownOpen, 'arrow-rotate': isDropdownOpen }"
      >expand_more</i>
    </div>
    <ul v-show="isDropdownOpen" class="dropdown-menu">
      <li
        v-for="fruit in filteredFruits"
        :key="fruit"
        @click="selectFruit(fruit)"
        :class="{ 'selected': fruit === selectedFruit }"
      >
        {{ fruit }}
      </li>
      <!-- si no encuentra la fruta en el Api nos regresa el mensaje-->
      <li v-show="noResults" class="no-results no-results-api">
        No se encontró ninguna fruta.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  data() {
    return {
      selectedFruit: "",
      search: "",
      fruits: [] as string[],
      isDropdownOpen: false,
      noResults: false,
    };
  },
  created() {
    // Realiza la petición a la API para obtener la lista de frutas
    axios
      .get("http://127.0.0.1:8888/api/fruits.json")
      .then((response) => {
        this.fruits = response.data.data.fruits;
      })
      .catch((error) => {
        console.error("Error al cargar los datos de la API:", error);
      });
  },
  computed: {
    filteredFruits() {
      const lowerSearch = this.search.toLowerCase();
      this.noResults = this.fruits.every(fruit =>
        !fruit.toLowerCase().includes(lowerSearch)
      ) && this.search !== '';
      return this.fruits.filter((fruit) =>
        fruit.toLowerCase().includes(lowerSearch)
      );
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      if (!this.isDropdownOpen) {
        this.search = this.selectedFruit;
      }
    },
    selectFruit(fruit: string) {
      this.selectedFruit = fruit;
      this.search = fruit;
      this.isDropdownOpen = false;
    },
    searchFruits() {
      this.isDropdownOpen = true;

      // Busca la fruta en la lista de frutas
      const fruit = this.filteredFruits.find((fruit) => fruit === this.search);

      // Si la fruta no se encuentra, muestra un mensaje
      if (!fruit) {
        this.noResults = true;
      }
    },
  },
});
</script>


