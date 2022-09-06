<script lang="ts">
import FilterBar from "$lib/components/FilterBar.svelte";

let tags: string[] = ['foo', 'goo'];
</script>

<FilterBar tags={tags}></FilterBar>
