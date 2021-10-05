<template>
    <div class="hexagon" :class="parentData.color" @click="select(parentData)">
        <transition name="fade">
            <span v-if="parentData.showValue" class="value-span">{{parentData.value}}</span>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Hexagon',
    props: {
        parentData: Object,
    },
    methods: {
        select: function (hexagon) {
            this.$emit('selected', hexagon);
        }
    },
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
