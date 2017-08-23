<template>
  <section class="index-container">
    <div>
      <div class="heading">
        HOLOTHUROIDEA
      </div>
      <div class="author">
        <a href="">放為</a>
      </div>
      <div class="enter">
        <nuxt-link :to="'/c/'">Enter</nuxt-link>
      </div>
      <div class="github">
        <img alt="github" src="/image/GitHub-Mark.png"/>
        <a href="https://github.com/fwchen/holothuroidea">github</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    components: {

    }
  }
</script>

<style>
  .index-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    text-align: center;
    white-space: nowrap;
  }

  .author {
    margin-top: 6px;
  }

  .heading {
    font-size: 3rem;
    letter-spacing: 5px;
    opacity: 0.7;
  }

  .enter {
    margin-top: 8px;
    font-size: 1.5rem;
    font-weight: lighter;
    opacity: 0.7;
  }

  .enter a {
    box-sizing: border-box;
    padding: 2px 6px;
    border: 0px solid #999;
    border-width: 0px;
    border-bottom: 1px solid #999;
    transition: all 300ms ease-in-out;
  }

  .enter a:hover {
    border-width: 1px;
  }

  .github {
    margin-top: 20px;
  }

  .github img {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    opacity: 0.9;
    vertical-align: middle;
    margin-right: 10px;
  }
</style>
