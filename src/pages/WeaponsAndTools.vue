<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="weaponsAndTools">
                <span class="text-4xl font-bold">Weapons & Tools</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Weapons and tools in this mod are crafted using various materials and can be used for combat, mining, and other tasks. Each weapon and tool has unique properties and durability.
                    </p>
                    <p class="text-lg text-red-400 mt-4">
                        Important note: Bow and Arrow only added for Minecraft 1.21.4 and later versions. In earlier versions, the bow is not available.
                    </p>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="copperTier">
                <span class="text-4xl font-bold">Copper Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Copper tier weapons and tools are the first tier of equipment available in this mod. They are crafted using copper ingots and provide a good balance of durability and effectiveness for early-game tasks.
                </p>
                <div class="mt-4" id="copperDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <DurabilityTable :tiers="copperTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="copperObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SwordRecipe material="minecraft:copper_ingot" tier="copper" />
                        <PickaxeRecipe material="minecraft:copper_ingot" tier="copper" />
                        <ShovelRecipe material="minecraft:copper_ingot" tier="copper" />
                        <AxeRecipe material="minecraft:copper_ingot" tier="copper" />
                        <HoeRecipe material="minecraft:copper_ingot" tier="copper" />
                        <BowRecipe material="minecraft:copper_ingot" tier="copper" />
                        <ArrowRecipe material="minecraft:copper_ingot" tier="copper" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="bronzeTier">
                <span class="text-4xl font-bold">Bronze Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Bronze tier weapons and tools are the second tier of equipment available in this mod. They are crafted using bronze ingots and provide a good balance of durability and effectiveness for early-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Faster mining under water. (2x Speed compared to normal mining speed under water)
                </p>
                <div class="mt-4" id="bronzeDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <DurabilityTable :tiers="bronzeTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="bronzeObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SwordRecipe material="mod:bronze_ingot" tier="bronze" />
                        <PickaxeRecipe material="mod:bronze_ingot" tier="bronze" />
                        <ShovelRecipe material="mod:bronze_ingot" tier="bronze" />
                        <AxeRecipe material="mod:bronze_ingot" tier="bronze" />
                        <HoeRecipe material="mod:bronze_ingot" tier="bronze" />
                        <BowRecipe material="mod:bronze_ingot" tier="bronze" />
                        <ArrowRecipe material="mod:bronze_ingot" tier="bronze" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="steelTier">
                <span class="text-4xl font-bold">Steel Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Steel tier weapons and tools are the third tier of equipment available in this mod. They are crafted using steel ingots and provide a good balance of durability and effectiveness for mid-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Faster attack speed, but slower walking speed.
                </p>
                <div class="mt-4" id="steelDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <DurabilityTable :tiers="steelTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="steelObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SwordRecipe material="mod:steel_ingot" tier="steel" />
                        <PickaxeRecipe material="mod:steel_ingot" tier="steel" />
                        <ShovelRecipe material="mod:steel_ingot" tier="steel" />
                        <AxeRecipe material="mod:steel_ingot" tier="steel" />
                        <HoeRecipe material="mod:steel_ingot" tier="steel" />
                        <BowRecipe material="mod:steel_ingot" tier="steel" />
                        <ArrowRecipe material="mod:steel_ingot" tier="steel" />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="rubyTier">
                <span class="text-4xl font-bold">Ruby Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Ruby tier weapons and tools are the fourth tier of equipment available in this mod. They are crafted using ruby and provide a good balance of durability and effectiveness for mid-game tasks.
                </p>
                <div class="mt-4" id="rubyDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <DurabilityTable :tiers="rubyTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="rubyObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SwordRecipe material="mod:ruby" tier="ruby" />
                        <PickaxeRecipe material="mod:ruby" tier="ruby" />
                        <ShovelRecipe material="mod:ruby" tier="ruby" />
                        <AxeRecipe material="mod:ruby" tier="ruby" />
                        <HoeRecipe material="mod:ruby" tier="ruby" />
                        <BowRecipe material="mod:ruby" tier="ruby" />
                        <ArrowRecipe material="mod:ruby" tier="ruby" />
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
                    <DurabilityTable :tiers="titaniumTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="titaniumObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_sword" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_sword" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_pickaxe" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_pickaxe" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_shovel" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_shovel" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_axe" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_axe" />
                        <SmithingGui slot_1="mod:titanium_upgrade_smithing_template" slot_2="minecraft:netherite_hoe" slot_3="mod:titanium_ingot" output_count="1" output="mod:titanium_hoe" />
                        <BowRecipe material="mod:titanium_ingot" tier="titanium" />
                        <ArrowRecipe material="mod:titanium_ingot" tier="titanium" />
                    </div>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="enderiteTier">
                <span class="text-4xl font-bold">Enderite Tier</span>
                <p class="text-lg text-gray-300 mt-4">
                    Enderite tier weapons and tools are the final tier of equipment available in this mod. They are crafted using enderite ingots and provide unlimited durability and effectiveness for end-game tasks.
                </p>
                <p class="text-lg text-gray-300 mt-4 italic font-semibold">
                    Special Effect: Item is unbreakable, fire resistance.
                </p>
                <div class="mt-4" id="enderiteDurability">
                    <span class="text-3xl font-bold">Durability</span>
                    <DurabilityTable :tiers="enderiteTier" />
                </div>
                <div class="mt-4 scroll-mt-18" id="enderiteObtaining">
                    <span class="text-3xl font-bold">Obtaining</span>
                    <div class="grid grid-cols-1 3xl:grid-cols-2">
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_sword" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_sword" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_pickaxe" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_pickaxe" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_shovel" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_shovel" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_axe" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_axe" />
                        <SmithingGui slot_1="mod:enderite_upgrade_smithing_template" slot_2="mod:titanium_hoe" slot_3="mod:enderite_ingot" output_count="1" output="mod:enderite_hoe" />
                        <BowRecipe material="mod:enderite_ingot" tier="enderite" />
                        <ArrowRecipe material="mod:enderite_ingot" tier="enderite" />
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AnchorLink from "@/components/AnchorLink.vue";
import SwordRecipe from "@/components/SwordRecipe.vue";
import PickaxeRecipe from "@/components/PickaxeRecipe.vue";
import ShovelRecipe from "@/components/ShovelRecipe.vue";
import AxeRecipe from "@/components/AxeRecipe.vue";
import HoeRecipe from "@/components/HoeRecipe.vue";
import BowRecipe from "@/components/BowRecipe.vue";
import DurabilityTable from "@/components/DurabilityTable.vue";
import ArrowRecipe from "@/components/ArrowRecipe.vue";
import SmithingGui from "@/components/SmithingGui.vue";

const activeSection = ref(null);

const sections = ['weaponsAndTools', 'copperTier', 'copperDurability', 'copperObtaining', 'bronzeTier', 'bronzeDurability', 'bronzeObtaining', 'steelTier', 'steelDurability', 'steelObtaining', 'rubyTier', 'rubyDurability', 'rubyObtaining', 'titaniumTier', 'titaniumDurability', 'titaniumObtaining', 'enderiteTier', 'enderiteDurability', 'enderiteObtaining'];

const copperTier = [
    { name: 'Copper Sword', durability: 200, attackDamage: 5.5, attackSpeed: 1.6 },
    { name: 'Copper Pickaxe', durability: 200, attackDamage: 3.5, attackSpeed: 1.2 },
    { name: 'Copper Axe', durability: 200, attackDamage: 9.5, attackSpeed: 0.8 },
    { name: 'Copper Shovel', durability: 200, attackDamage: 4, attackSpeed: 1 },
    { name: 'Copper Hoe', durability: 200, attackDamage: 1.5, attackSpeed: 2.5 },
    { name: 'Copper Bow', durability: 520, attackDamage: '-', attackSpeed: '-' },
    { name: 'Copper Arrow', durability: '-', attackDamage: 1.75, attackSpeed: '-' },
];

const bronzeTier = [
    { name: 'Bronze Sword', durability: 700, attackDamage: 6.5, attackSpeed: 1.6 },
    { name: 'Bronze Pickaxe', durability: 700, attackDamage: 4.5, attackSpeed: 1.2 },
    { name: 'Bronze Axe', durability: 700, attackDamage: 9, attackSpeed: 1 },
    { name: 'Bronze Shovel', durability: 700, attackDamage: 5, attackSpeed: 1 },
    { name: 'Bronze Hoe', durability: 700, attackDamage: 1, attackSpeed: 3.5 },
    { name: 'Bronze Bow', durability: 789, attackDamage: '-', attackSpeed: '-' },
    { name: 'Bronze Arrow', durability: '-', attackDamage: 2.5, attackSpeed: '-' },
];

const steelTier = [
    { name: 'Steel Sword', durability: 1300, attackDamage: 7, attackSpeed: 2.6 },
    { name: 'Steel Pickaxe', durability: 1300, attackDamage: 5, attackSpeed: 2.2 },
    { name: 'Steel Axe', durability: 1300, attackDamage: 10, attackSpeed: 2 },
    { name: 'Steel Shovel', durability: 1300, attackDamage: 5.5, attackSpeed: 2 },
    { name: 'Steel Hoe', durability: 1300, attackDamage: 2, attackSpeed: 4 },
    { name: 'Steel Bow', durability: 1115, attackDamage: '-', attackSpeed: '-' },
    { name: 'Steel Arrow', durability: '-', attackDamage: 3, attackSpeed: '-' },
];

const rubyTier = [
    { name: 'Ruby Sword', durability: 1000, attackDamage: 6.75, attackSpeed: 1.6 },
    { name: 'Ruby Pickaxe', durability: 1000, attackDamage: 4.75, attackSpeed: 1.2 },
    { name: 'Ruby Axe', durability: 1000, attackDamage: 7.75, attackSpeed: 0.8 },
    { name: 'Ruby Shovel', durability: 1000, attackDamage: 5.25, attackSpeed: 1 },
    { name: 'Ruby Hoe', durability: 1000, attackDamage: 0.75, attackSpeed: 4 },
    { name: 'Ruby Bow', durability: 1442, attackDamage: '-', attackSpeed: '-' },
    { name: 'Ruby Arrow', durability: '-', attackDamage: 3.5, attackSpeed: '-' },
];

const titaniumTier = [
    { name: 'Titanium Sword', durability: 3000, attackDamage: 12, attackSpeed: 2.5 },
    { name: 'Titanium Pickaxe', durability: 3000, attackDamage: 9, attackSpeed: 2 },
    { name: 'Titanium Axe', durability: 3000, attackDamage: 13, attackSpeed: 1.8 },
    { name: 'Titanium Shovel', durability: 3000, attackDamage: 9, attackSpeed: 2 },
    { name: 'Titanium Hoe', durability: 3000, attackDamage: 5, attackSpeed: 4 },
    { name: 'Titanium Bow', durability: 1763, attackDamage: '-', attackSpeed: '-' },
    { name: 'Titanium Arrow', durability: '-', attackDamage: 4.5, attackSpeed: '-' },
];

const enderiteTier = [
    { name: 'Enderite Sword', durability: 'Unbreakable', attackDamage: 18, attackSpeed: 3 },
    { name: 'Enderite Pickaxe', durability: 'Unbreakable', attackDamage: 14, attackSpeed: 2.7 },
    { name: 'Enderite Axe', durability: 'Unbreakable', attackDamage: 19, attackSpeed: 2.5 },
    { name: 'Enderite Shovel', durability: 'Unbreakable', attackDamage: 13.5, attackSpeed: 2.2 },
    { name: 'Enderite Hoe', durability: 'Unbreakable', attackDamage: 9, attackSpeed: 4 },
    { name: 'Enderite Bow', durability: 'Unbreakable', attackDamage: '-', attackSpeed: '-' },
    { name: 'Enderite Arrow', durability: '-', attackDamage: 5, attackSpeed: '-' },
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