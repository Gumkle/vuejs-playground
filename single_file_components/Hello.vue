<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>

<style lang="sass" scoped>
    p {
        font-size: 2em;
        text-align: center;
    }
</style>