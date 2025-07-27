<script setup>
import CraftingGui from "@/components/CraftingGui.vue";

defineProps({
    material: String,
    tier: String
});
</script>

<template>
    <CraftingGui
        :slot_1="material"
        :slot_2="material"
        :slot_3="material"
        :slot_4="material"
        :slot_5="''"
        :slot_6="material"
        :slot_7="material"
        :slot_8="''"
        :slot_9="material"
        :output="`mod:${tier}_leggings`"
        :output_count="1"
    />
</template>