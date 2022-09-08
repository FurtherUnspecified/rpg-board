<script lang="ts">
import type { Card } from "$lib/types/Card";
import CardList from "./CardList.svelte";


export let card: Card;
let tags = [...card.tags].join(", ");
let expanded: boolean = true;

function onClick() {
    expanded = !expanded;
}
</script>

<div class="bg-slate-400 rounded-lg">
    <div 
        on:click={onClick} 
        class="flex justify-between flex-row bg-slate-500 my-1 rounded-t-lg"
        >
        <div class="ml-1">{card.title}</div>
        <div class="order-last mr-1">{tags}</div>
    </div>
    <div class:hidden="{expanded}" class="m-1">
        {card.description}
    </div>
</div>
