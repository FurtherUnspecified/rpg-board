<script lang="ts">
    // export let tags: string[]; 
    let search: string = ""

    function onSelect() {

    }

    function onDeselect() {

    }
</script>

<input bind:value={search}>
<div>
    <button on:select={onSelect on:select}></button>
</div>
