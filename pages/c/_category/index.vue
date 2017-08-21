<template>
  <section class="i-container">
    <ul class="item-list">
      <li v-for="item in category.articles">
        <div class="head">
          <span class="title">{{item.title}}</span>
          <span class="date">{{item.date}}</span>
        </div>
        <div v-if="!!item.content" class="content" v-html="item.content"></div>
      </li>
    </ul>
  </section>
</template>

<script>
  import axios from 'axios'
  import { baseURL } from '../../../constants'

  export default {
    data () {
      return { category: {articles: []} }
    },
    components: {

    },
    asyncData ({ params }) {
      return axios({
        method: 'get',
        timeout: 1000,
        url: `${baseURL}/${params.category}.json`
      }).then(res => {
        return { category: res.data }
      })
    }
  }
</script>

<style>
  .item-list li {
    margin-bottom: 12px;
  }

  .head {
    padding: 0 6px;
  }

  .title {
    font-weight: normal;
  }

  .date {
    margin-left: 12px;
  }

  .content {
    margin-top: 2px;
    background-color: #333;
    border-radius: 2px;
    padding: 2px 6px;
  }
</style>
