<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="alloySmelter">
                <span class="text-4xl font-bold">Alloy Smelter</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The mod introduces a new block entity called the Alloy Smelter, along with a unique recipe type known as Alloy Smelting.
                        This system allows players to combine multiple ingredients into powerful alloyed materials, enabling more advanced crafting and tool progression beyond standard smelting.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="obtaining">
                <span class="text-4xl font-bold">Obtaining</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Alloy Smelter can be crafted using the following recipe:
                    </p>
                    <div>
                        <CraftingGui
                            slot_1="minecraft:furnace"
                            slot_2="minecraft:deepslate"
                            slot_3="minecraft:furnace"
                            slot_4="minecraft:deepslate"
                            slot_5="minecraft:gunpowder"
                            slot_6="minecraft:deepslate"
                            slot_7="minecraft:deepslate"
                            slot_8="minecraft:deepslate"
                            slot_9="minecraft:deepslate"
                            output="mod:alloy_smelter"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="usage">
                <span class="text-4xl font-bold">Usage</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The Alloy Smelter is used to combine various materials into alloys, which can then be used to craft advanced tools, armor, and other items.
                        It operates similarly to a furnace but allows for more complex recipes that require multiple ingredients.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="steelIngot">
                    <span class="text-3xl font-bold">Steel Ingot</span>
                    <div>
                        <AlloySmeltingGui
                            :slot_1="['minecraft:iron_ingot']"
                            :slot_2="['minecraft:coal']"
                            output="mod:steel_ingot"
                            output_count="2"
                        />
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="bronzeIngot">
                    <span class="text-3xl font-bold">Bronze Ingot</span>
                    <div>
                        <AlloySmeltingGui
                            :slot_1="['minecraft:copper_ingot']"
                            :slot_2="['mod:tin_ingot']"
                            output="mod:bronze_ingot"
                            output_count="2"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#alloySmelter" :class="{'text-blue-400': activeSection === 'alloySmelter'}">Alloy Smelter</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#obtaining" :class="{'text-blue-400': activeSection === 'obtaining'}">Obtaining</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#usage" :class="{'text-blue-400': activeSection === 'usage'}">Usage</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#steelIngot" :class="{'text-blue-400': activeSection === 'steelIngot'}">Steel Ingot</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#bronzeIngot" :class="{'text-blue-400': activeSection === 'bronzeIngot'}">Bronze Ingot</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CraftingGui from "@/components/CraftingGui.vue";
import AlloySmeltingGui from "@/components/AlloySmeltingGui.vue";

const activeSection = ref(null);

const sections = ['alloySmelter', 'obtaining', 'usage', 'steelIngot', 'bronzeIngot'];

let observer;

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, options);

    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>