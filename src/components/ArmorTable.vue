<script setup>
defineProps({
    tiers: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="relative overflow-x-auto mt-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-400">
            <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-3 md:px-6 py-3">
                    Item name
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    <span class="hidden sm:block">Durability</span>
                    <span class="sm:hidden">Dura</span>
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    <span class="hidden sm:block">Toughness</span>
                    <span class="sm:hidden">Tough</span>
                </th>
                <th scope="col" class="px-3 md:px-6 py-3">
                    <span class="hidden sm:block">Knockback Resistance</span>
                    <span class="sm:hidden">Knk Res</span>
                </th>
            </tr>
            </thead>
            <tbody v-for="tier in tiers">
            <tr class="border-b bg-gray-800 border-gray-700">
                <td class="px-3 md:px-6 py-4">
                    {{ tier.name }}
                </td>
                <td class="px-3 md:px-6 py-4">
                    {{ tier.durability }}
                </td>
                <td class="px-3 md:px-6 py-4">
                    {{ tier.toughness }}
                </td>
                <td class="px-3 md:px-6 py-4">
                    {{ tier.knockbackResistance }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>