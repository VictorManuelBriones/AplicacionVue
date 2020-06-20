<template>
    <div>
        <div class="box" v-for="e in elements" v-bind:key="e">
            {{ e }}            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          elemets: ["Uno", "Dos", "Tres"]  
        };
    }  
}
</script>

<style>
    .box{
        border: 3px solid #CCC;
        margin: 5px 0 0 0; 
    }
</style>