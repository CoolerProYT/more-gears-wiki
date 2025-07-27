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
        :slot_7="''"
        :slot_8="''"
        :slot_9="''"
        :output="`mod:${tier}_helmet`"
        :output_count="1"
    />
</template>