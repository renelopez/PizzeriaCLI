<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-for="link in links" v-bind:key="link.id"><b-card :title="link.name"
                       img-src="https://lorempixel.com/600/300/food/5/"
                       img-alt="Image"
                       img-top
                       tag="article"
                       style="max-width: 20rem;"
                       class="mb-2">
          <p class="card-text">
            {{link.text}}
          </p>
          <b-button to="ingredients" variant="primary">Go somewhere</b-button>
        </b-card></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: function () {
    return {
      links: [
        {
          id: 1,
          name: 'Products',
          link: '/products',
          image: 'products.jpg',
          text: 'Apartado para administracion de productos'
        },
        {
          id: 2,
          name: 'Sales',
          link: '/sales',
          image: 'sales.jpg',
          text: 'Apartado para ventas'
        },
        {
          id: 3,
          name: 'Ingredients',
          link: '/ingredients',
          image: 'ingredients.jpg',
          text: 'Apartado para Ingredientes'
        }

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
