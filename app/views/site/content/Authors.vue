<template>
    <div class="min-h-screen w-full lg:static lg:max-h-full max-w-6xl mx-auto lg:overflow-visible ">
        <header class="line-behind mb-4">
            <h1> Authors</h1>
            <span> {{ }}</span>
        </header>

        <b-input-group class="my-3 mb-3 max-w-sm">
            <b-form-input v-model="filter" placeholder="Type to Search" />
            <b-input-group-append>
                <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
        </b-input-group>
        <loader v-if="listIsLoading">Loading...</loader>
        <b-table v-if="listIsLoaded" :fields="fields" :filter="filter" :items="users" sortBy="last_login" stacked="md">
            <template slot="email" slot-scope="user">
                <router-link :to="'/release33/content/mycontent?user_id=' + user.item.id ">{{ user.item.email }}</router-link >
            </template>

            <template slot="username" slot-scope="user">
                {{ user.item.username }}
            </template>

            <template slot="last_login" slot-scope="user">
                {{ user.item.last_login }}
            </template>
        </b-table>
        <b-pagination-nav v-if="listIsLoaded" :link-gen="linkGen" :number-of-pages="lastPage" use-router />
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    import Loader from '@/components/Loader';
    export default Vue.extend({
        components: {
            Loader
        },
        computed: {
            ...mapGetters('sites', [
                'siteIsLoading',
                'siteIsLoaded',
                'basePath',
                'currentSite'
            ]),

            ...mapGetters('users', [
                'listIsLoading',
                'listIsLoaded',
                'users',
                'currentPage',
                'totalItems',
                'lastPage'
            ]),

            objList() {
                return this.users.map((item) => Object.values(item))
            },

            keyValuePair() {
                return this.users.map((item) => {
                    return Object.keys(item).reduce((acc, curr) => {
                        acc.push(`${curr} - ${item[curr]}`)
                        return acc
                    }, [])
                })
            }
        },

        methods: {
            linkGen(pageNum) {
                return '/' + this.currentSite.url + '/content/authors/' + pageNum
            },
            ...mapActions('users', [
                'routeLoad'
            ]),
        },
        data() {
            return {
                fields: {
                    email: {
                        label: "Email",
                        sortable: true
                    },
                    username: {
                        label: "Username",
                        sortable: true
                    },
                    last_login: {
                        label: "last login",
                        sortable: true
                    },
                },
                filter: null,
                list: [
                    /*
                    {
                        foo: 'value1',
                        bar: 'value2',
                        baz: 'value3'
                    },
                    {
                        foo: 'value4',
                        bar: 'value5',
                        baz: 'value6'
                    }
                    */
                ],
            }

        },
        watch: {
            '$route.params.page': function (page) {
                this.routeLoad({
                    to: this.$route
                });
            }
        },
        mounted() {
            this.routeLoad({
                to: this.$route,
                site: this.currentSite
            });
        }
    });
</script>

<style>

</style>