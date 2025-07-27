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
        :slot_3="''"
        :slot_4="''"
        :slot_5="'minecraft:stick'"
        :slot_6="''"
        :slot_7="''"
        :slot_8="'minecraft:stick'"
        :slot_9="''"
        :output="`mod:${tier}_hoe`"
        :output_count="1"
    />
</template>