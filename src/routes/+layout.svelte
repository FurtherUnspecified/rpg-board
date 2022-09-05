<script>
    import "../app.css";
</script>

<nav>
    <a href="/">Home</a>
    <a href="/deck">Deck</a>
</nav>

<slot />

<style>
    :global(body) {
        background-color: rgb(45, 85, 126);
    }
</style>
