<template>
    <div v-if="itemIsLoaded">
        <l-map
         style="min-height:500px; height: 100%; width: 100%"
        :zoom.sync="current.getZoom()"
        :center="current.getCenter()"
        :options="{zoomControl: true}">
            <l-tile-layer
                :url="current.getTiles()"
                :attribution="current.getAttribution()" />

            <l-marker v-for="marker in current.children" v-bind:key="marker.id" :lat-lng="marker.coordinate">
                <l-popup>{{ marker.title }}</l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script>
import {
        LMap, 
        LTileLayer,
        LMarker,
        LPolyline,
        LPolygon,
        LLayerGroup,
        LPopup
        
    } from 'vue2-leaflet'
import { mapGetters } from 'vuex'

export default {
    components:{
        LMap,
        LTileLayer,
        LMarker,
        LPolyline,
        LLayerGroup,
        LPopup
    },
    computed: {
        ...mapGetters('items', [
            'editItem',
            'isEditing',
            'itemIsLoaded',
            'current'
        ]),
        options(){
            return {};
        },
    },
    mounted(){
        console.log(this.current)
    },
    methods: {
        openPopUp (latLng, caller) {
            this.caller = caller;
            this.$refs.features.mapObject.openPopup(latLng);
        }
    }
}
</script>

<style>

</style>
