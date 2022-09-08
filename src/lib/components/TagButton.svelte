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
    class="m-1 px-2 py-1 rounded font-semibold text-sm text-slate-200 border-transparent justify-center hover:ring {selected ? 'bg-opacity-80 bg-blue-300' : 'bg-slate-700 bg-opacity-50'}" 
    on:click={() => onClick()}
>{name}</button>

