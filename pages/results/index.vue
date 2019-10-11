<template>
    <div>
        <Result :tours="results"></Result>
    </div>
    
</template>
<script>
import Result from '../../components/Result'

export default {
    data(){
        return{
            results:[]
        }
    },
    methods:{
        getSearchResult(){
            var searchResults = this.$store.getters.loadResult
            const urlRes = `itineraries`
            const result = this.$axios.$get(urlRes,{params:{
                cities:[`${searchResults}`],
                top:5,
                skip:0,
                season:null,
                budget:1
            }}).then(res=>{
                this.results = res.data;
            }).catch(err=>err)
            
        }
    },

    mounted(){
        this.getSearchResult()
    },
    components:{
        Result
    }
}
</script>
