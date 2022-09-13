<script lang="ts">
import type { Card } from "$lib/types/Card";
import CardComp from "./CardComp.svelte";


export let cards: Card[];
</script>

<div class="place-items-center">
    {#each cards as card}
    <CardComp card={card} on:add={(card) => console.log(card)} enableAddRemove={true}></CardComp>
    {/each}
</div>
