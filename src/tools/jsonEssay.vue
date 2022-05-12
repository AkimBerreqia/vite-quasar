<template>
{{object}}
hello
</template>

<script>
import {first} from '../../json/exemple.json'

const object = JSON.parse(first);
</script>