<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="ingots">
                <span class="text-4xl font-bold">Ingots</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        There are 6 types of ingots added to the game, each with its own unique properties and uses. Below is a list of all the ingots available in the game, along with their crafting recipes.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="tinIngot">
                <span class="text-4xl font-bold">Tin Ingot</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Tin Ingot can be obtained by smelting Tin Ore or Raw Tin in a furnace. They are used to craft a new ingot.
                    </p>
                    <div>
                        <SmeltingGui
                            :slot_1="['mod:tin_ore', 'mod:deepslate_tin_ore', 'mod:raw_tin']"
                            output="mod:tin_ingot"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="ruby">
                <span class="text-4xl font-bold">Ruby</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Ruby can be obtained by smelting Ruby Ore or Raw Ruby in a furnace. They are used to craft a variety of tools, armor, and other ruby-based equipment.
                    </p>
                    <div>
                        <SmeltingGui
                            :slot_1="['mod:ruby_ore', 'mod:deepslate_ruby_ore', 'mod:raw_ruby']"
                            output="mod:ruby"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="titaniumIngot">
                <span class="text-4xl font-bold">Titanium Ingot</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Titanium Ingot can be obtained by smelting Titanium Ore or Raw Titanium in a furnace. They are used to craft a variety of tools, armor, and other titanium-based equipment.
                    </p>
                    <div>
                        <SmeltingGui
                            :slot_1="['mod:nether_titanium_ore', 'mod:raw_titanium']"
                            output="mod:titanium_ingot"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="enderiteIngot">
                <span class="text-4xl font-bold">Enderite Ingot</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Enderite Ingot can be obtained by smelting Enderite Ore or Raw Enderite in a furnace. They are used to craft a variety of tools, armor, and other Enderite-based equipment.
                    </p>
                    <div>
                        <SmeltingGui
                            :slot_1="['mod:end_enderite_ore', 'mod:raw_enderite']"
                            output="mod:enderite_ingot"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="steelIngot">
                <span class="text-4xl font-bold">Steel Ingot</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Steel Ingot can be obtained by alloy smelting Iron Ingot and Coal in an <router-link class="text-blue-500 hover:underline" to="/AlloySmelter">Alloy Smelter</router-link> They are used to craft a variety of tools, armor, and other Steel-based equipment.
                    </p>
                    <div>
                        <AlloySmeltingGui
                            :slot_1="['minecraft:iron_ingot']"
                            :slot_2="['minecraft:coal']"
                            output="mod:steel_ingot"
                            output_count="2"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="bronzeIngot">
                <span class="text-4xl font-bold">Bronze Ingot</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Bronze Ingot can be obtained by alloy smelting Copper Ingot and Tin Ingot in an <router-link class="text-blue-500 hover:underline" to="/AlloySmelter">Alloy Smelter</router-link> They are used to craft a variety of tools, armor, and other Bronze-based equipment.
                    </p>
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
                    <a href="#ingots" :class="{'text-blue-400': activeSection === 'ingots'}">Ingots</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#tinIngot" :class="{'text-blue-400': activeSection === 'tinIngot'}">Tin Ingot</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#ruby" :class="{'text-blue-400': activeSection === 'ruby'}">Ruby</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#titaniumIngot" :class="{'text-blue-400': activeSection === 'titaniumIngot'}">Titanium Ingot</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#enderiteIngot" :class="{'text-blue-400': activeSection === 'enderiteIngot'}">Enderite Ingot</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#steelIngot" :class="{'text-blue-400': activeSection === 'steelIngot'}">Steel Ingot</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#bronzeIngot" :class="{'text-blue-400': activeSection === 'bronzeIngot'}">Bronze Ingot</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import SmeltingGui from "@/components/SmeltingGui.vue";
import AlloySmeltingGui from "@/components/AlloySmeltingGui.vue";

const activeSection = ref(null);

const sections = ['ingots', 'tinIngot', 'ruby', 'titaniumIngot', 'enderiteIngot', 'steelIngot', 'bronzeIngot'];

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