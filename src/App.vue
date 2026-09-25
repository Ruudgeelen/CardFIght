<template>
    <head>
        <title>Card Fight</title>
    </head>
    <nav>
        <RouterLink to="/homepage">Homepage</RouterLink>
        <RouterLink to="/cards">Cards</RouterLink>
        <RouterLink to="/settings">Settings</RouterLink>
    </nav>

    <RouterView />
</template>

<style scoped>
nav {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
}

nav a {
    text-decoration: none;
    color: black;
}
</style>