<template>
  <div class="custom-select">
    <div class="search-container">
      <input
        v-model="search"
        class="search-input"
        placeholder="Buscar fruta..."
        @input="searchFruits"
      />
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






<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
  background: #fff;
  box-shadow: 0px 10px 15px 0px rgba(35, 78, 82, 0.10);
  border-radius: 8px;
 }

.search-container {
  position: relative;
  display: flex;
  width: 256px;
  justify-content:flex-start;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  margin-bottom:5.3%; 

}

.search-container ::placeholder {
  color: #A0AEC0;
  font-family: Lato;
font-size: 16px;
font-style: normal;
padding-left: 3%;

}

.search-input {
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-family: Lato, sans-serif;
  background: #fff;
  color: #242D2E;
  gap: 85px;
  outline: none;
  
}

.arrow-down {
  position: absolute;
  top: 55%;
  right: 16px;
  transform: translateY(-50%);
  cursor: hand;
  transition: transform 0.3s;
  color: #A0AEC0;
  Width: 24px;
  Height:24px;
}

.arrow-rotate {
  transform: translateY(-50%) rotate(180deg);
}

.arrow-active {
  color: #242D2E;
}

.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  background: #fff;
  border: 1px none #ccc;
  border-top: none;
  border-radius: 0 0 8px 8px;
  width: 100%;
  left: 0;
  position: absolute;
  top: 56px;
  z-index: 1;
  color: black;
  cursor: auto;
  text-align: left;
}

.selected {
  color: #4299E1;
}

.dropdown-menu li {
  padding: 16px;
  cursor: pointer;
}

.no-results-api {
  color: rgba(160, 174, 192, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  font-family: Lato;
  Line-height:24px;
}
</style>