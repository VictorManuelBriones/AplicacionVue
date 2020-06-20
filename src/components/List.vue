<template>
    <div>
        <div class="box" v-for="e in elements" v-bind:key="e">
            {{ e }}            
        </div>
        <button v-on:click="findAll">Click</button>
        {{ msj }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            msj: "... :(",
            elemets: ["Uno", "Dos", "Tres"]  
        };
    }, 
    methods: {
        findAll: function(){
            fech('url')
                .then(res => res.json())
                .then(res => console.log(res))
        }
    }, 
}
</script>

<style>
    .box{
        border: 3px solid #CCC;
        margin: 5px 0 0 0; 
    }
</style>