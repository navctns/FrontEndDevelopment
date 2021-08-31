<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->
    <header class="header">
      <h1>Gridsome Blog</h1>
      <p>A simple blog designed with Gridsome</p>
    </header>

      <slot/> <!-- Page/Template will be inserted here -->
    <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Made with ❤️ by
        <a class="link" href="//twitter.com/lauragift21">Gift Egwuenu</a>
      </p>
    </div>
  </Layout>
  
</template>
<page-query>
  query {
      metadata {
      siteName
    }
    allPost {
      totalCount
      edges {
        node {
          id
          title
          timeToRead
          description
          date (format: "D MMMM YYYY")
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>



<style>
.home-links a {
  margin-right: 1rem;
}
.header{
  display: flex;
  flex-direction: column;
  gap: 1em;
}
  .footer {
    padding-top: calc(30em / 4);
    text-align: center;
    font-size: 1em;
  }
  
  .link {
    border: 2px dashed #fecd43;
    padding: 7px;
    color: #333;
    text-decoration: none;
  }
    body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    border: 15px solid #548CA8;
    min-height: 100vh;
  }
  
  .layout {
    max-width: 760px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
</style>
