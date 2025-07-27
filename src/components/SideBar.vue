<template>
    <div class="bg-gray-950 w-full">
        <div class="px-2 py-2 w-full">
            <SideBarLink path="/Home" text="Home"/>
            <SideBarLink path="/OreGeneration" text="Ore Generation"/>
            <SideBarLink path="/Ingots" text="Ingots"/>
            <SideBarLink path="/AlloySmelter" text="Alloy Smelter"/>
            <SideBarLink path="/SmithingTemplate" text="Smithing Template"/>
            <SideBarLink path="/WeaponsAndTools" text="Weapons & Tools"/>
            <SideBarLink path="/Armors" text="Armors"/>
        </div>
    </div>
</template>

<script setup>
import SideBarLink from "@/components/SideBarLink.vue";
</script>