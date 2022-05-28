<template>

    <div class="hexagon color-sass" :class="props.parentData.color" @click="select(parentData)">
        <transition name="fade">
            <span class="hex-number" v-if="props.parentData.showValue">
                {{props.parentData.value}}
            </span>
        </transition>
    </div>

</template>

<script setup>

const props = defineProps({
    parentData: Object
})

const emit = defineEmits(['selected'])

function select(hexagon) {
    emit('selected', hexagon)
}

</script>

<style scoped lang="scss">

.hex-number {
    font-weight: bold;
    font-size: 2rem;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
