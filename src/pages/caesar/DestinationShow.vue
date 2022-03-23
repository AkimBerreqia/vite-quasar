<template>
    <h2>Hello World {{$route.params.id}}</h2>
</template>

<script>
import sourceData from '@json/test.json'

export default {

    computed: {
        destinationId() {
            return this.$route.params.id
        },

        destination() {
            return sourceData.destinations.find(destination => destionation.if === this.destinationId)
        }
    }
}
</script>