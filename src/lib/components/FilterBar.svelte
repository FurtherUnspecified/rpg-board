<script lang="ts">
import TagButton from "./TagButton.svelte";

export let tags: string[]; 
export let search: string = "";
export let selectedTags: Set<string> = new Set();
function onToggle(tag: string) {
    if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(tag);
    }
    selectedTags = selectedTags;
}
</script>

<div class="flex justify-center">
    <input class="w-1/2" bind:value={search}>
</div>
<div class="m1 flex justify-center">
    {#each tags as tag}
    <TagButton name={tag} on:toggle={() => onToggle(tag)}></TagButton>
    {/each}
</div>
