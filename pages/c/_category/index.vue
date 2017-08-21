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

  export default {
    data () {
      return { category: {articles: []} }
    },
    components: {

    },
    asyncData ({ params }) {
      if (process.browser) {
        return axios({
          method: 'get',
          timeout: 1000,
          url: `/data/${params.category}.json`
        }).then(res => {
          return { category: res.data }
        })
      } else {
        return {
          category: JSON.parse(require('fs').readFileSync(`./static/data/${params.category}.json`, 'utf-8'))
        }
      }
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
