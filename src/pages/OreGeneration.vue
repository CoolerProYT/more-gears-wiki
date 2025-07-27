<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="oreGeneration">
                <span class="text-4xl font-bold">Ore Generation</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        This mod adds a total of <strong>six new ores</strong> to enrich your mining experience, including
                        <em>two Deepslate variants</em> that generate in the deeper layers of the world. Each ore is carefully integrated into the world generation to maintain balance while offering new progression paths for tool and gear crafting.
                        These ores are fully compatible with enchantments like <strong>Fortune</strong> and <strong>Silk Touch</strong>, and feature custom textures to stand out in caves and underground environments.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="overworld">
                <span class="text-4xl font-bold">Overworld</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        In the Overworld, you will find <strong>four new ores</strong> including
                        <em>two Deepslate variants</em> that can be mined and used to craft various tools and items, also can be alloy smelted into new ingot.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="tinOre">
                    <span class="text-3xl font-bold">Tin Ore</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            Tin Ore generates naturally between Y=-64 and Y=64, making it widely available throughout the underground. It can spawn in any biome, giving players consistent access to this early-game resource no matter where they explore or build.
                        </p>
                        <div class="grid grid-cols-2 mt-3">
                            <div class="flex justify-center">
                                <img :src="tin" alt="Tin Ore" class="w-11/12 aspect-square rounded shadow-lg">
                            </div>
                            <div class="flex justify-center">
                                <img :src="deepslateTin" alt="Tin Ore" class="w-11/12 aspect-square h-auto rounded shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="rubyOre">
                    <span class="text-3xl font-bold">Ruby Ore</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            Ruby Ore generates naturally between Y=-64 and Y=64, making it widely available throughout the underground. It can spawn in any biome, giving players consistent access to this mid-game resource no matter where they explore or build.
                        </p>
                        <div class="grid grid-cols-2 mt-3">
                            <div class="flex justify-center">
                                <img :src="ruby" alt="Ruby Ore" class="w-11/12 aspect-square rounded shadow-lg">
                            </div>
                            <div class="flex justify-center">
                                <img :src="deepslateRuby" alt="Ruby Ore" class="w-11/12 aspect-square h-auto rounded shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="nether">
                <span class="text-4xl font-bold">The Nether</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        In The Nether, you will find <strong>a new ore</strong> that can be mined and used to craft various tools and items, that is stronger than netherite.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="titaniumOre">
                    <span class="text-3xl font-bold">Titanium Ore</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            Titanium Ore generates naturally between Y=-64 and Y=25, making it a rare but powerful resource in the Nether. It can spawn in any biome, giving players access to this late-game material as they explore the fiery depths.
                            It spawn rate is similar to Ancient Debris.
                        </p>
                        <p class="text-lg text-gray-300 mt-4 italic">
                            Tips: Titanium Ore can survive TNT explosion, so you can use the same strategy as with Ancient Debris to find it.
                        </p>
                        <div class="grid grid-cols-1 mt-3">
                            <div class="flex justify-center">
                                <img :src="titanium" alt="Titanium Ore" class="w-6/12 aspect-square rounded shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="end">
                <span class="text-4xl font-bold">The End</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        In The End, you will find <strong>a new ore</strong> that can be mined and used to craft various tools and items, that is stronger than netherite and titanium.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="enderiteOre">
                    <span class="text-3xl font-bold">Enderite Ore</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            Enderite Ore generates naturally between Y=-64 and Y=128 in The End. However, due to the way End biomes are structured, it remains a rare and valuable resource. It can spawn in any End biome, offering a powerful reward for adventurous players who explore the outer islands.
                        </p>
                        <div class="grid grid-cols-1 mt-3">
                            <div class="flex justify-center">
                                <img :src="enderite" alt="Enderite Ore" class="w-6/12 aspect-square rounded shadow-lg">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#oreGeneration" :class="{'text-blue-400': activeSection === 'oreGeneration'}">Ore Generation</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#overworld" :class="{'text-blue-400': activeSection === 'overworld'}">Overworld</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#tinOre" :class="{'text-blue-400': activeSection === 'tinOre'}">Tin Ore</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#rubyOre" :class="{'text-blue-400': activeSection === 'rubyOre'}">Ruby Ore</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#nether" :class="{'text-blue-400': activeSection === 'nether'}">The Nether</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#titaniumOre" :class="{'text-blue-400': activeSection === 'titaniumOre'}">Titanium Ore</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#end" :class="{'text-blue-400': activeSection === 'end'}">The End</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#enderiteOre" :class="{'text-blue-400': activeSection === 'enderiteOre'}">Enderite Ore</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import deepslateTin from '@/assets/img/ore_generation/deepslate_tin.png';
import tin from '@/assets/img/ore_generation/tin.png';
import deepslateRuby from '@/assets/img/ore_generation/deepslate_ruby.png';
import ruby from '@/assets/img/ore_generation/ruby.png';
import titanium from '@/assets/img/ore_generation/titanium.png';
import enderite from '@/assets/img/ore_generation/enderite.png';
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeSection = ref(null);

const sections = ['oreGeneration', 'overworld', 'tinOre', 'rubyOre', 'nether', 'titaniumOre', 'end', 'enderiteOre'];

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