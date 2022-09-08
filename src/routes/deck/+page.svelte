<script lang="ts">
import CardList from "$lib/components/CardList.svelte";
import FilterBar from "$lib/components/FilterBar.svelte";
import { CardDataSource } from "$lib/dataSources/CardDataSource";
import type { Card } from "$lib/types/Card";

function filterCards(
    cards: Card[], 
    selectedTags: Set<string>, 
    search: string
) : Card[] {
    let filtered: Card[] = [];
    const selectedTagsList: string[] = [...selectedTags];
    cards.forEach(card => {
        const matches: boolean = selectedTagsList
            .map((tag) => card.tags.has(tag))
            .every((val) => val);
        if (!matches) {
            return;
        }
        if (!card.matches(search)) {
            return;
        }
        filtered.push(card);
    });
    return filtered;
}

let tags: string[] = ['first', 'second'];
let search: string = "";
let selectedTags: Set<string> = new Set();
let cards: Card[] = new CardDataSource().retrieveCards();
let filteredCards: Card[] = cards;
$: filteredCards = filterCards(cards, selectedTags, search);
</script>

<div class="mx-10">
    <FilterBar 
        tags={tags} 
        bind:search={search} 
        bind:selectedTags={selectedTags}
    ></FilterBar>
    <CardList
        cards={filteredCards}
    ></CardList>
</div>
