<!-- Source: https://codepen.io/ionic/pen/GgwVON  -->
<!-- import Loader from '@/components/Loader'; -->

<template>
    <div class="loader py-2 mb-3"> 
        <span class="d-inline-block font-weight-bold">Loading </span> 
        <span icon="dots" class="spinner-dark spinner spinner-dots">
            <svg viewBox="0 0 64 64"><g>
                <circle cx="16" cy="32" stroke-width="0">
                <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
                <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g></svg></span>
    </div>
</template>

<script>


</script>

<style scoped>

    .loader svg {
        width: auto !important;
        height: 64px !important;
        margin-top: -20px;
        margin-bottom: -20px;
    }

</style>
