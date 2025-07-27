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
        :slot_2="''"
        :slot_3="material"
        :slot_4="material"
        :slot_5="material"
        :slot_6="material"
        :slot_7="material"
        :slot_8="material"
        :slot_9="material"
        :output="`mod:${tier}_chestplate`"
        :output_count="1"
    />
</template>