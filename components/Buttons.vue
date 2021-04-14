<template>
    <v-btn rounded color="#35bfc1" @click="onClick" style="color:white">
        <slot>
            {{$t('inputs.send')}}
        </slot>
    </v-btn>
</template>
<script>
export default {
    props:{
        onClick:{
            type: Function,
            required:true   
        }
    }
}
</script>
