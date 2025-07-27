<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="armors">
                <span class="text-4xl font-bold">Armors</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Armors in this mod are crafted using various materials. Each armor has unique properties and durability.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="copperTier">
                <span class="text-4xl font-bold">Copper Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Copper tier armors are the first tier of equipment available in this mod. They are crafted using copper ingots and provide a good balance of durability and effectiveness for early-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Immune to lightning damage when full set in worn.
                </p>
                <div class="mt-4" id="copperDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="copperTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="copperObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <HelmetRecipe material="minecraft:copper_ingot" tier="copper" />
                        <ChestplateRecipe material="minecraft:copper_ingot" tier="copper" />
                        <LeggingsRecipe material="minecraft:copper_ingot" tier="copper" />
                        <BootsRecipe material="minecraft:copper_ingot" tier="copper" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="bronzeTier">
                <span class="text-4xl font-bold">Bronze Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Bronze tier armors are the second tier of equipment available in this mod. They are crafted using bronze ingots and provide a good balance of durability and effectiveness for early-game tasks.
                </p>
                <div class="mt-4" id="bronzeDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="bronzeTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="bronzeObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <HelmetRecipe material="mod:bronze_ingot" tier="bronze" />
                        <ChestplateRecipe material="mod:bronze_ingot" tier="bronze" />
                        <LeggingsRecipe material="mod:bronze_ingot" tier="bronze" />
                        <BootsRecipe material="mod:bronze_ingot" tier="bronze" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="steelTier">
                <span class="text-4xl font-bold">Steel Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Steel tier armors are the third tier of equipment available in this mod. They are crafted using steel ingots and provide a good balance of durability and effectiveness for mid-game tasks.
                </p>
                <div class="mt-4" id="steelDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="steelTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="steelObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <HelmetRecipe material="mod:steel_ingot" tier="steel" />
                        <ChestplateRecipe material="mod:steel_ingot" tier="steel" />
                        <LeggingsRecipe material="mod:steel_ingot" tier="steel" />
                        <BootsRecipe material="mod:steel_ingot" tier="steel" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="rubyTier">
                <span class="text-4xl font-bold">Ruby Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Ruby tier armors are the fourth tier of equipment available in this mod. They are crafted using ruby and provide a good balance of durability and effectiveness for mid-game tasks.
                </p>
                <div class="mt-4" id="rubyDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="rubyTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="rubyObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <HelmetRecipe material="mod:ruby" tier="ruby" />
                        <ChestplateRecipe material="mod:ruby" tier="ruby" />
                        <LeggingsRecipe material="mod:ruby" tier="ruby" />
                        <BootsRecipe material="mod:ruby" tier="ruby" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="titaniumTier">
                <span class="text-4xl font-bold">Titanium Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Titanium tier weapons and tools are the fifth tier of equipment available in this mod. They are crafted using titanium ingots and provide a high durability and effectiveness for late-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Titanium tiers item are fire resistance.
                </p>
                <div class="mt-4" id="titaniumDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="titaniumTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="titaniumObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_helmet" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_helmet" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_chestplate" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_chestplate" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_leggings" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_leggings" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_boots" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_boots" />
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="enderiteTier">
                <span class="text-4xl font-bold">Enderite Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Enderite tier armors are the final tier of equipment available in this mod. They are crafted using enderite ingots and provide unlimited durability and effectiveness for end-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Item and player are fire resistance, no fall damage (boots only), and never drown.
                </p>
                <div class="mt-4" id="enderiteDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <ArmorTable :tiers="enderiteTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="enderiteObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_helmet" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_helmet" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_chestplate" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_chestplate" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_leggings" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_leggings" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_boots" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_boots" />
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="weaponsAndTools" name="Weapons & Tools" :active-section="activeSection" />
                <AnchorLink id="copperTier" name="Copper Tier" :active-section="activeSection" />
                <AnchorLink id="copperDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="copperObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="bronzeTier" name="Bronze Tier" :active-section="activeSection" />
                <AnchorLink id="bronzeDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="bronzeObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="steelTier" name="Steel Tier" :active-section="activeSection" />
                <AnchorLink id="steelDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="steelObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="rubyTier" name="Ruby Tier" :active-section="activeSection" />
                <AnchorLink id="rubyDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="rubyObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="titaniumTier" name="Titanium Tier" :active-section="activeSection" />
                <AnchorLink id="titaniumDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="titaniumObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="enderiteTier" name="Enderite Tier" :active-section="activeSection" />
                <AnchorLink id="enderiteDurability" name="Durability" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="enderiteObtaining" name="Obtaining" :active-section="activeSection" :is-sub="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';
import AnchorLink from "@/components/AnchorLink.vue";
import SwordRecipe from "@/components/SwordRecipe.vue";
import PickaxeRecipe from "@/components/PickaxeRecipe.vue";
import ShovelRecipe from "@/components/ShovelRecipe.vue";
import AxeRecipe from "@/components/AxeRecipe.vue";
import HoeRecipe from "@/components/HoeRecipe.vue";
import BowRecipe from "@/components/BowRecipe.vue";
import ArrowRecipe from "@/components/ArrowRecipe.vue";
import SmithingGui from "@/components/SmithingGui.vue";
import ArmorTable from "@/components/ArmorTable.vue";
import HelmetRecipe from "@/components/HelmetRecipe.vue";
import ChestplateRecipe from "@/components/ChestplateRecipe.vue";
import LeggingsRecipe from "@/components/LeggingsRecipe.vue";
import BootsRecipe from "@/components/BootsRecipe.vue";

const activeSection = ref(null);

const sections = ['armors', 'copperTier', 'copperDurability', 'copperObtaining', 'bronzeTier', 'bronzeDurability', 'bronzeObtaining', 'steelTier', 'steelDurability', 'steelObtaining', 'rubyTier', 'rubyDurability', 'rubyObtaining', 'titaniumTier', 'titaniumDurability', 'titaniumObtaining', 'enderiteTier', 'enderiteDurability', 'enderiteObtaining'];

const copperTier = [
    { name: 'Copper Helmet', durability: 165, toughness: 0, knockbackResistance: 0 },
    { name: 'Copper Chestplate', durability: 240, toughness: 0, knockbackResistance: 0 },
    { name: 'Copper Leggings', durability: 225, toughness: 0, knockbackResistance: 0 },
    { name: 'Copper Boots', durability: 195, toughness: 0, knockbackResistance: 0 },
];

const bronzeTier = [
    { name: 'Bronze Helmet', durability: 242, toughness: 0, knockbackResistance: 0 },
    { name: 'Bronze Chestplate', durability: 352, toughness: 0, knockbackResistance: 0 },
    { name: 'Bronze Leggings', durability: 330, toughness: 0, knockbackResistance: 0 },
    { name: 'Bronze Boots', durability: 286, toughness: 0, knockbackResistance: 0 },
];

const steelTier = [
    { name: 'Steel Helmet', durability: 330, toughness: 1.5, knockbackResistance: 0 },
    { name: 'Steel Chestplate', durability: 480, toughness: 1.5, knockbackResistance: 0 },
    { name: 'Steel Leggings', durability: 450, toughness: 1.5, knockbackResistance: 0 },
    { name: 'Steel Boots', durability: 390, toughness: 1.5, knockbackResistance: 0 },
];

const rubyTier = [
    { name: 'Ruby Helmet', durability: 308, toughness: 1, knockbackResistance: 0 },
    { name: 'Ruby Chestplate', durability: 448, toughness: 1, knockbackResistance: 0 },
    { name: 'Ruby Leggings', durability: 420, toughness: 1, knockbackResistance: 0 },
    { name: 'Ruby Boots', durability: 364, toughness: 1, knockbackResistance: 0 },
];

const titaniumTier = [
    { name: 'Titanium Helmet', durability: 495, toughness: 4, knockbackResistance: 5 },
    { name: 'Titanium Chestplate', durability: 720, toughness: 4, knockbackResistance: 5 },
    { name: 'Titanium Leggings', durability: 675, toughness: 4, knockbackResistance: 5 },
    { name: 'Titanium Boots', durability: 520, toughness: 4, knockbackResistance: 5 },
];

const enderiteTier = [
    { name: 'Enderite Helmet', durability: '∞', toughness: 5, knockbackResistance: 10 },
    { name: 'Enderite Chestplate', durability: '∞', toughness: 5, knockbackResistance: 10 },
    { name: 'Enderite Leggings', durability: '∞', toughness: 5, knockbackResistance: 10 },
    { name: 'Enderite Boots', durability: '∞', toughness: 5, knockbackResistance: 10 },
];

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