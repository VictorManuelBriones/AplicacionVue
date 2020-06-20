<template>
    <div class="container">
        <b-card :title="e.title">
        <b-card-text>{{e.description}}</b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {

    created(){
        this.find()
        console.log(this.$route.params.id)
    },

    data() {
        return {
            elemets: Object
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