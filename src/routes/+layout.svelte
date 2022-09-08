<script>
    import "../app.css";
</script>

<nav class="shadow bg-slate-800">
    <div class="ml-20 text-white">
        <a href="/">Home</a>
        <a href="/deck">Deck</a>
    </div>
</nav>

<slot />

<style>
    :global(body) {
        background-color: rgb(45, 85, 126);
    }
</style>
