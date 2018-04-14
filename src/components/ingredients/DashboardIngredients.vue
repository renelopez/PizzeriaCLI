<template>
<div>
  <b-card>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-for="ingredient in ingredients" v-bind:key="ingredient.id"><b-card :title="ingredient.name"
                                                                  img-src="https://lorempixel.com/600/300/food/5/"
                                                                  img-alt="Image"
                                                                  img-top
                                                                  tag="article"
                                                                  style="max-width: 20rem;"
                                                                  class="mb-2">
          <p class="card-text">
            Cantidad en existencia: {{ingredient.quantityInExistence}}
          </p>
          <b-button :to="{ name: 'ingredient', params: { id: ingredient.id }}" variant="primary">Go somewhere</b-button>
        </b-card></b-col>
      </b-row>
    </b-container>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'DashboardIngredients',
  data: function () {
    return {
      ingredients: [
        {
          id: 1,
          name: 'Jitomate',
          price: 10,
          unit: 'kg',
          quantityInExistence: 90
        },
        {
          id: 2,
          name: 'Harina',
          price: 25,
          unit: 'kg',
          quantityInExistence: 25
        },
        {
          id: 3,
          name: 'Cebolla',
          price: 12,
          unit: 'kg',
          quantityInExistence: 12
        },
        {
          id: 4,
          name: 'Salsa de Tomate',
          price: 12,
          unit: 'lt',
          quantityInExistence: 30
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
