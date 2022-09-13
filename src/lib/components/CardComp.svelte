<script lang="ts">
import type { Card } from "$lib/types/Card";
import { createEventDispatcher } from "svelte";


export let card: Card;
export let enableAddRemove: boolean = false;
let tags = [...card.tags].join(", ");
let expanded: boolean = true;
let added: boolean = false;

const dispatch = createEventDispatcher<{add: Card, remove: Card}>();

function onClick() {
    expanded = !expanded;
}

function onAdd() {
    added = true;
    dispatch('add', card);
}

function onRemove() {
    added = false;
    dispatch('remove', card);
}
</script>

<div class="bg-slate-400 rounded-lg">
    <div 
        on:click={onClick} 
        class="grid grid-cols-4 bg-slate-500 my-1 rounded-t-lg"
        >
        <div class:hidden="{!enableAddRemove}">
            <button on:click|stopPropagation="{() => added ? onRemove() : onAdd()}">{added ? 'Remove' : 'Add'}</button>
        </div>
        <div class="ml-1 w-30 truncate">{card.title}</div>
        <div>{card.cost}</div>
        <div class="order-last mr-1">{tags}</div>
    </div>
    <div class:hidden="{expanded}" class="m-1">
        {card.description}
    </div>
</div>
