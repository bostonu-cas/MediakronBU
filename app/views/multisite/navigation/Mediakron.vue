<template>

<b-navbar toggleable="md" type="dark" class="px-3 py-0" variant="primary">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/" class="text-uppercase text-2xl my-1">MediaKron</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
   
      <b-navbar-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/help">Help</b-nav-item>
        <b-nav-item-dropdown text="Administration" right>
          <b-dropdown-item to="/admin/sites">Sites</b-dropdown-item>
          <b-dropdown-item to="/admin/groups">Groups</b-dropdown-item>
          <b-dropdown-item to="/admin/people">Users</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
        <b-dropdown-item to="/logout">Log Out</b-dropdown-item>
      </b-nav-item-dropdown>
     </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
       <b-nav-item href="http://www.bc.edu" id="bclogo"> <img class="bc-logo img-fluid" src="@/assets/images/BC-logo.png" /></b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters
    } from 'vuex';
    export default Vue.extend({
        computed: {
            ...mapGetters('users/profile', [
                'isLoaded',
                'isAdmin'
            ])
        }
    });
</script>

<style>
    .navbar {
      background-color: var(--mk-primary-color);;
    }

    .bc-logo {
        width:200px;
    }

</style>
