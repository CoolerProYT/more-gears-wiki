<template>
    <div class="w-full flex">
        <div class="md:w-9/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="smithingTemplate">
                <span class="text-4xl font-bold">Smithing Template</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        This mod adds two new Smithing Templates, expanding the customization and crafting possibilities for gear upgrades and modifications.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="titaniumUpgrade">
                <span class="text-4xl font-bold">Titanium Upgrade Smithing Template</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The Titanium Upgrade Smithing Template allows players to upgrade their gear to titanium tier, providing significant boosts to durability and performance.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="obtainingTitanium">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div>
                        <CraftingGui
                            slot_1="minecraft:netherite_scrap"
                            slot_2="mod:netherite_upgrade_smithing_template"
                            slot_3="minecraft:netherite_scrap"
                            slot_4="minecraft:netherite_scrap"
                            slot_5="mod:titanium_nugget"
                            slot_6="minecraft:netherite_scrap"
                            slot_7="minecraft:netherite_scrap"
                            slot_8="minecraft:netherite_scrap"
                            slot_9="minecraft:netherite_scrap"
                            output="mod:titanium_upgrade_smithing_template"
                            output_count="1"
                        />
                        <CraftingGui
                            slot_1="minecraft:netherite_scrap"
                            slot_2="mod:titanium_upgrade_smithing_template"
                            slot_3="minecraft:netherite_scrap"
                            slot_4="minecraft:netherite_scrap"
                            slot_5="minecraft:blackstone"
                            slot_6="minecraft:netherite_scrap"
                            slot_7="minecraft:netherite_scrap"
                            slot_8="minecraft:netherite_scrap"
                            slot_9="minecraft:netherite_scrap"
                            output="mod:titanium_upgrade_smithing_template"
                            output_count="2"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="enderiteUpgrade">
                <span class="text-4xl font-bold">Enderite Upgrade Smithing Template</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The Enderite Upgrade Smithing Template allows players to upgrade their gear to enderite tier, providing massive boosts to durability and performance.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="obtainingEnderite">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div>
                        <CraftingGui
                            slot_1="mod:titanium_nugget"
                            slot_2="mod:titanium_upgrade_smithing_template"
                            slot_3="mod:titanium_nugget"
                            slot_4="mod:titanium_nugget"
                            slot_5="mod:enderite_ingot"
                            slot_6="mod:titanium_nugget"
                            slot_7="mod:titanium_nugget"
                            slot_8="mod:titanium_nugget"
                            slot_9="mod:titanium_nugget"
                            output="mod:enderite_upgrade_smithing_template"
                            output_count="1"
                        />
                        <CraftingGui
                            slot_1="mod:titanium_nugget"
                            slot_2="mod:enderite_upgrade_smithing_template"
                            slot_3="mod:titanium_nugget"
                            slot_4="mod:titanium_nugget"
                            slot_5="minecraft:end_stone"
                            slot_6="mod:titanium_nugget"
                            slot_7="mod:titanium_nugget"
                            slot_8="mod:titanium_nugget"
                            slot_9="mod:titanium_nugget"
                            output="mod:enderite_upgrade_smithing_template"
                            output_count="2"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-3/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#smithingTemplate" :class="{'text-blue-400': activeSection === 'smithingTemplate'}">Smithing Template</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#titaniumUpgrade" :class="{'text-blue-400': activeSection === 'titaniumUpgrade'}">Titanium Upgrade Smithing Template</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#obtainingTitanium" :class="{'text-blue-400': activeSection === 'obtainingTitanium'}">Obtaining</a>
                </p>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#enderiteUpgrade" :class="{'text-blue-400': activeSection === 'enderiteUpgrade'}">Enderite Upgrade Smithing Template</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#obtainingEnderite" :class="{'text-blue-400': activeSection === 'obtainingEnderite'}">Obtaining</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import CraftingGui from "@/components/CraftingGui.vue";

const activeSection = ref(null);

const sections = ['smithingTemplate', 'titaniumUpgrade', 'obtainingTitanium', 'enderiteUpgrade', 'obtainingEnderite'];

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