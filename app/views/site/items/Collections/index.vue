<template>
    <div>
        <transition name="fade">
        <div v-if="isEditing" class="fixed top-0 left-0 w-full bg-light z-10 p-3" >You are now editing a Collection</div>
        </transition>
        <component :is="component" :item="item"/>
        <div class="right-0 top-0 fixed mr-4 mt-20 flex flex-column ">
            <b-button v-if="!isEditing" class="uppercase mb-2 flex flex-column items-center bg-light border-none item-button " variant="outline-dark" size="sm" @click="editClicked"><font-awesome-icon icon="edit" class="text-lg mt-1"/> <span class="text-xs mt-1">Edit</span></b-button>  
            <b-button v-if="isEditing" class="uppercase mb-2 flex flex-column items-center border-none item-button " variant="primary" size="lg" @click="saveClicked"> <font-awesome-icon icon="check" class="text-lg mt-1"/> <span class="text-xs mt-1">Save </span></b-button>       
            <m-options></m-options>
        </div>
    </div>
</template>

<script>
import Default from './Default'
import ListSimple from './ListSimple'
import ListHalf from './ListHalf'
import ListFull from './ListFull'
import GridSimple from './GridSimple'
import GridHalf from './GridHalf'
import GridFull from './GridFull'
import Journal from './Journal'
import Mosaic from './Mosaic'
import Table from './Table'
import Slideshow from './Slideshow'
import Comparison from './Comparison'
import Progression from './Progression'
import editable from '~/components/mixins/editable'
import MOptions from '@/components/items-shared/Options'
export default {
    props: [ 'item' ],
    mixins: [ editable ],
    components: {
        MOptions
    },
    computed: {
        component(){
            switch(this.item.template){
                case 'list-simple':
                    return ListSimple;
                case 'list-half':
                    return ListHalf;
                case 'list-full':
                    return ListFull;
                case 'grid-simple':
                    return GridSimple;
                case 'grid':
                    return GridHalf;
                case 'grid-full':
                    return GridFull;
                case 'journal':
                    return Journal;
                case 'folder-mosaic':
                    return Mosaic;
                case 'table':
                    return Table;
                case 'slideshow':
                    return Slideshow;
                case 'comparison':
                    return Comparison;
                case 'progression':
                    return Progression;
                default:
                    return Default;
                }
            }
    }
}
</script>

<style>
.fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter,
    .fade-leave-to

    /* .fade-leave-active below version 2.1.8 */
        {
        opacity: 0;
    }
</style>
