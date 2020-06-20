<template>
    <div>
        <b-list-group>
            <div v-for="c in categories" v-bind:key="c.id">
              <b-list-group-item>
                <router-link :to="'/category' + c.id + '/caregory'"><router-link>
                    {{ c.title }}
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
            caregories: []  
        };
    }, 
    //methods: {
        //findAll: function(){
            //fech('http://localhost:8000/api/category/?format=json')
                //.then(res => res.json())
                //.then(res => this.categories = res)
        //}
    //}, 
}
</script>