<template>
  <section class="container">
    <ul>
      <li v-for="item in category.articles">
        <div>{{item.title}}</div>
        <div v-html="item.content"></div>
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    components: {

    },
    asyncData ({ params }) {
      return axios.get(`http://localhost:3000/data/${params.category}.json`)
        .then(res => {
          return { category: res.data }
        })
    }
  }
</script>

<style>

</style>
