<template>
    <div>
        <h4 id="IRAN-TRIP-PLANNER"></h4>
        <div class="max-w-sm rounded overflow-hidden shadow-lg resultHeader">
            <button class="bg-blue-400 hover:bg-gray-100 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded">Tehran, Shiraz, Isfahan</button>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">All Month</button>
            <button class="bg-blue-400 hover:bg-gray-100 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded">2 Weeks</button>
            <button class="bg-blue-400 hover:bg-gray-100 text-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded">2 Passengers</button>
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">All Budget Range</button>
        </div>
        <div id="locationMap">
            <div class="mapouter"><div class="gmap_canvas"><iframe width="800" height="560" id="gmap_canvas" src="https://maps.google.com/maps?q=iran&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>Google Maps Generator by <a href="https://www.embedgooglemap.net">embedgooglemap.net</a></div><style>.mapouter{position:relative;text-align:right;height:560px;width:800px;}.gmap_canvas {overflow:hidden;background:none!important;height:560px;width:800px;}</style></div>
        </div>
        <div class="afterSearchBar">
            <div id="results">
                <h4 id="Plans-for-2019-Summer">Plans for 2019 Summer</h4>
                <div  @click="getDetailTour(tour.slug)" 
                        v-for="(tour, index) in tours" :key="index">
                    <div class="tripItem">
                        <h5 class="tour-title">{{tour.title}}</h5>
                        <small>From ${{tour.totalPrice.min}} per person</small>
                        <hr/>
                        <div class="item-images">
                            <img class="image1" :src="image.src" alt="" v-for="(image, index) in imagesOfCity(tour)[0]" :key="index">
                        </div>
        
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:['tours'],
    computed:{
       
    },
    data(){
        return {
            slug:null,
        }
    },
    methods:{   
        getDetailTour(slug){
            this.slug = slug
            this.$router.push(`detail/${this.slug}`)
            
        },
         imagesOfCity(tour){
             var arr = []
           for(var cit of tour.cities){
               arr.push(cit.images)
           }
           return arr
        }
    },
    mounted(){
         console.log(this.imagesOfCity,'imageOf city')
    }
}
</script>

<style>
   .image1 {
    max-width: 115px;
    max-height: 75px;
    float: left;
    border-radius: 5px;
    margin-right: 5px;
}

.item-images {
    height: 85px;
    margin-top: 15px;
}
    .tripItem {
        width: 514px;
        height: 176px;
        border-radius: 10px;
        border: solid 1px #eaf0f4;
        background-color: white;
        padding: 10px 5px;
        margin-top: 5px;
    }

    #results {
        float: left;
        width: 100%;
        margin-top: 2.1%;
    }

    #locationMap {
        max-width: 804.3px;
        max-height: 565.1px;
        right: 0;
        float: right;
    }

    #IRAN-TRIP-PLANNER {
        width: 100%;
        font-family: Roboto;
        font-size: 20px;
        font-weight: 900;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: normal;
        text-align: left;
        color: #373d45;
    }

    .resultHeader {
        width: 100%;
        background: white;
        max-width: 100% !important;
        padding: 10px;
        padding-left: 1.8%;
        border: solid 1px #eaf0f4;
        text-align: center;
    }
    .tour-title {
        font-size: 15px;
        font-weight: 700;

    }

    .afterSearchBar {
        width: 100%;
        margin: 0 20px
    }

    #Plans-for-2019-Summer {
        object-fit: contain;
        font-family: Roboto;
        font-size: 24px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.17;
        letter-spacing: normal;
        text-align: left;
        color: #373d45;
        margin-bottom: 10px;
    }
</style>