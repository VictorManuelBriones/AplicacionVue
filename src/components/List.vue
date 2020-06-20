<template>
    <div class="container">
        <div v-for="e in elements" v-bind:key="e.id">
              <router-link :to="'/detail' + e.id">
              <b-card
                    :title="e.title"
              >
              <b-card-text>
                    {{e.description}}
              </b-card-text>
              </b-card>
              <router-link>          
        </div>
    </div>
</template>

<script>
export default {

    created(){
        this.finAll()
    },

    data() {
        return {
            elemets: []  
        };
    }, 
    //methods: {
        //findAll: function(){
            //fech('http://localhost:8000/api/elemet/?format=json')
                //.then(res => res.json())
                //.then(res => this.elements = res)
        //}
    //}, 
}
</script>

<style>
    .box{
        border: 3px solid #CCC;
        margin: 5px 0 0 0; 
    }
</style>