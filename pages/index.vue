<template>
  <div class="haederImage">
    <img class="image" src="/images/desert.jpg" />
    <h4 id="IRAN-TRIP-PLANNER">IRAN TRIP PLANNER</h4>
    <h1 id="Plan-Your-trip-to-Iran">Plan Your trip to Iran</h1>
    <p id="Find-Best-Plan">
      Find or create your best plan to visit Iran based on +300 plans designed by professional tour guides and travelers
    </p>
    <div class="max-w-sm rounded overflow-hidden shadow-lg searchFilterDiv">
      <div class="inline-block relative w-64">
        <select
          v-model="slug"
          class="block appearance-none
           w-full bg-white border border-gray-400
            hover:border-gray-500 px-4 py-2 pr-8 rounded shadow
             leading-tight focus:outline-none focus:shadow-outline">
          <option v-for="city in citiesInfo"
           :data-slug="city.slug" 
           :key="city.slug"
           :value="city.slug" >
            {{ city.name }}
          </option>
        </select>
      </div>
       <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="getSlug"
      >
        Search
      </a>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data() {
    return {
      citiesInfo: null,
      slug:''
    };
  },

  methods: {
    async fetchCities() {
      const url = 'cities'
      const ip = await this.$axios.$get(url)
      .then(res=>{
        this.citiesInfo = (res.data)
      })
      .catch(err=>err) 
    },
    getSlug() {
      this.$store.dispatch('getResult',this.slug)
      this.$router.push(`/results`)
    }
  },
  mounted() {
    this.fetchCities();
  }
};
</script>

<style>
.image {
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
}

.haederImage {
  position: relative;
}

.searchFilterDiv {
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  background: white;
  max-width: 100% !important;
  padding: 10px;
  padding-left: 10.8%;
}

#Plan-Your-trip-to-Iran {
  position: fixed;
  top: 21%;
  left: 10.8%;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: white;
}

#IRAN-TRIP-PLANNER {
  position: fixed;
  left: 1.8%;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: white;
}

#Find-Best-Plan {
  position: fixed;
  top: 29.8%;
  left: 10.8%;
  width: 513px;
  height: 53px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: white;
}
</style>
