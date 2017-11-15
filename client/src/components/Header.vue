<template>
    <div>
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">Home</router-link>
                <!-- <a class="navbar-item">Home</a> -->
            </div>
            <div class="navbar-menu navbar-end">
                <router-link class="navbar-item" to="/search">Search</router-link>
                <router-link class="navbar-item" to="/create">Create</router-link>
            </div>
        </nav>
    </div>
</template>
