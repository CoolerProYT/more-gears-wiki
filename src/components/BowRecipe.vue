<script setup>
import CraftingGui from "@/components/CraftingGui.vue";

defineProps({
    material: String,
    tier: String
});
</script>

<template>
    <CraftingGui
        :slot_1="''"
        :slot_2="material"
        :slot_3="'minecraft:string'"
        :slot_4="material"
        :slot_5="''"
        :slot_6="'minecraft:string'"
        :slot_7="''"
        :slot_8="material"
        :slot_9="'minecraft:string'"
        :output="`mod:${tier}_bow`"
        :output_count="1"
    />
</template>