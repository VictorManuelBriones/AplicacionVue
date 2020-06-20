<template>
    <div>
        <b-list-group>
            <div v-for="t in types" v-bind:key="t.id">
              <b-list-group-item>
                <router-link :to="'/type/' + t.id + '/type'"><router-link>
                    {{ t.title }}</router-link>
              </b-list-group-item>
            </div>
        </b-list-group>          
    </div>
</template>

<script>
export default {

    created(){
        this.finAll()
    },

    data() {
        return {
            types: []  
        };
    }, 
    //methods: {
        //findAll: function(){
            //fech('http://localhost:8000/api/type/?format=json')
                //.then(res => res.json())
                //.then(res => this.types = res)
        //}
    //}, 
}
</script>