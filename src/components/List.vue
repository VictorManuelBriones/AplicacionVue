<template>
    <div>
        <div class="box" v-for="e in elements" v-bind:key="e.id">
            {{ e.title }}            
        </div>
        <button v-on:click="findAll">Click</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            elemets: ["Uno", "Dos", "Tres"]  
        };
    }, 
    methods: {
        findAll: function(){
            fech('url')
                .then(res => res.json())
                .then(res => this.elements = res)
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