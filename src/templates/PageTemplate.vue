<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="template">
                <span class="text-4xl font-bold">Template</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        This is a template for all pages in this wiki.
                    </p>
                </div>
                <div class="mt-4 scroll-mt-18" id="subTemplate">
                    <span class="text-3xl font-bold">Sub Template</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            This is a sub-template that can be used to create sections within the main template. It can be used to provide additional information or details about a specific topic.
                        </p>
                        <div class="grid grid-cols-2 mt-3">
                            <!-- Image if needed -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <p class="my-1.5 hover:text-blue-300">
                    <a href="#template" :class="{'text-blue-400': activeSection === 'template'}">Template</a>
                </p>
                <p class="my-1.5 ms-3 hover:text-blue-300">
                    <a href="#subTemplate" :class="{'text-blue-400': activeSection === 'subTemplate'}">Sub Template</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const activeSection = ref(null);

const sections = ['template', 'subTemplate'];

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