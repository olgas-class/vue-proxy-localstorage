const { createApp } = Vue;

createApp({
  data() {
    return {
      username: "",
      newAnimal: {
        type: "",
        name: "",
      },
      animals: [],
    };
  },
  created() {
    const localName = localStorage.getItem("username");
    console.log(localName);
    this.username = localName !== null ? localName : "";

    // All avvio della pagina controllo se nel local storage c'è la chiave animals
    const localAnimals = localStorage.getItem("animals"); // string
    // Se animals è diversa da null
    if (localAnimals !== null) {
      //    trasformo la stringa json in unarray e lo salvo nel data
      this.animals = JSON.parse(localAnimals);
    } else {
      //    altrimenti imposto nel data array vuoto
      this.animals = [];
    }
  },
  methods: {
    addAnimal: function () {
      // const animalCopy = {
      //   type: this.newAnimal.type,
      //   name: this.newAnimal.name,
      // };
      const copyAnimal = { ...this.newAnimal };
      this.animals.push(copyAnimal);
      this.newAnimal.type = "";
      this.newAnimal.name = "";

      // Salvare dentro local storage
      // 1. Trasformo l'array in una stringa JSON
      const jsonAnimals = JSON.stringify(this.animals);
      console.log(jsonAnimals);
      // Salvo la stringa json in local storaeg
      localStorage.setItem("animals", jsonAnimals);
    },
    save: function () {
      localStorage.setItem("username", this.username);
    },
  },
}).mount("#app");
