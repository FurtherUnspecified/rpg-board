<script lang="ts">
import type { TagState } from "$lib/types/TagState";

import TagButton from "./TagButton.svelte";

export let tags: string[]; 

let search: string = "";
let selectedTags: Set<string> = new Set();

function onToggle(tag: TagState) {
    if (tag.toggled) {
        selectedTags.delete(tag.name);
    } else {
        selectedTags.add(tag.name);
    }
    console.log(tag.toggled)
}
</script>

<input bind:value={search}>
<div>
    {#each tags as tag}
    <TagButton name={tag}></TagButton>
    {/each}
</div>
