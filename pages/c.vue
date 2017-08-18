<template>
  <section class="c-container">
    <ul class="category-list">
      <li>
        <nuxt-link class="category-list-link home" v-bind:to="'/'">
          Site Home
        </nuxt-link>
      </li>
      <li v-for="item in categorys">
        <nuxt-link class="category-list-link" v-bind:to="'/c/' + item.name">{{item.name}}</nuxt-link>
      </li>
    </ul>
    <transition name="fade">
      <nuxt-child/>
    </transition>
  </section>
</template>

<script>
  import axios from 'axios'
  import { baseURL } from '../constants'

  export default {
    components: {

    },
    asyncData ({ params }) {
      return axios.get(`${baseURL}/_summary.json`)
        .then(res => {
          return { categorys: res.data }
        })
    },
    mounted () {
      if (!this.$route.params.category && process.browser) {
        this.$router.replace(`/c/${this.categorys[0].name}`)
      }
    }
  }
</script>

<style>
  .c-container {
    padding-top: 20px;
    padding-right: 30px;
    display: flex;
    justify-content: flex-start;
  }

  .category-list li {
    height: 27px;
  }

  .category-list-link {
    padding: 1px 3px;
    box-sizing: border-box;
    display: inline-block;
    margin-bottom: 5px;
  }

  .category-list-link:hover {
    border-bottom: 1px solid #999;

  }

  .category-list-link.home {
    border: 1px solid #999;
    border-radius: 2px;
    margin-bottom: 10px;
    transition: all 50ms ease-in-out;
    border-radius: 3px;
  }

  .category-list-link.home:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid white;
    user-select: none;
  }
</style>
