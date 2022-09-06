<script lang="ts">
import type { TagState } from "$lib/types/TagState";

import { createEventDispatcher } from "svelte";

export let name: string;
let selected: boolean = false;

const dispatch = createEventDispatcher<{toggle: TagState}>();

function onClick() {
    selected = !selected;
    const data: TagState = {
        name: name,
        toggled:  selected
    }
    dispatch('toggle', data)
}
</script>

<button 
    class="m-1 rounded {selected ? 'bg-opacity-80 bg-blue-300' : 'bg-white bg-opacity-50'} justify-center" 
    on:click={() => onClick()}
>{name}</button>

