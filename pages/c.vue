<template>
  <section class="container">
    <ul>
      <li v-for="item in categorys">
        <nuxt-link v-bind:to="item.name">{{item.name}}</nuxt-link>
      </li>
    </ul>
    <transition name="fade">
      <nuxt-child/>
    </transition>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    components: {

    },
    asyncData ({ params }) {
      return axios.get(`/static/data/_summary.json`)
        .then(res => {
          return { categorys: res.data }
        })
    }
  }
</script>

<style>
  .container {
    display: flex;
    justify-content: flex-start;
  }
</style>
