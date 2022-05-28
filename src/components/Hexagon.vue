<template>
    <div class="hexagon" :class="props.parentData.color" @click="select(parentData)">
        <transition name="fade">
            <span v-if="props.parentData.showValue" class="value-span">{{props.parentData.value}}</span>
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

<style scoped>

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
