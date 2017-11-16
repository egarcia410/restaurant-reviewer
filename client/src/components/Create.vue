<template>
  <div>
      <h1>Create Restaurant</h1>
      <div class="field">
            <p class="control">
                <input 
                    class="input" 
                    type="text" 
                    name="name"
                    v-model="name" 
                    placeholder="Name">
            </p>
        </div>
        <div class="field">
            <p class="control">
                <input 
                    class="input" 
                    type="text" 
                    name="address"
                    v-model="address"
                    placeholder="Address">
            </p>
        </div>
        <div class="field">
            <p class="control">
                <input 
                    class="input" 
                    type="text" 
                    name="category"
                    v-model="category" 
                    placeholder="Category">
            </p>
        </div>
        <div class="field">
            <p class="control ">
                <button
                    @click="create"
                    class="button is-success is-centered"
                    >Create</button>
            </p>
        </div>
        <p>{{message}}</p>
  </div>
</template>

<script>
import RestaurantService from '@/services/RestaurantService'

export default {
    data() {
        return {
            name: '',
            address: '',
            category: '',
            message: ''
        }
    },
    methods: {
        async create() {
            const response = await RestaurantService.create({
                name: this.name,
                address: this.address,
                category: this.category
            });
            this.message = response.data.message;
            this.name = '';
            this.address = '';
            this.category = ''; 
        }
    }
}
</script>

