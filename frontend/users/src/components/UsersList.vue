<template>
    <div>
        <h1 class="uk-heading-medium">Users List</h1>
        <div class="uk-child-width-1-3@s uk-grid-match" uk-grid>
            <div v-for="(user, index) in users" :key="index">
                <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                    <h3 class="uk-card-title">{{ user.title }}</h3>
                    <p>{{ user.profession }}</p>
                    <p>{{ user.email }}</p>
                    <router-link :to="`/users/${user._id}`" class="uk-button uk-button-default">Edit</router-link>
                </div>
            </div>    
        </div>    
    </div>
</template>

<script>
import UserDataService from '@/services/UserDataService';

export default {
    name: "UsersList",
    data() {
        return {
            users: [],
            currentUser: null,
            currentIndex: -1,
            title: ""
        };
    },
    methods: {
        retrieveUsers() {
            UserDataService.gelAll()
            .then(response => {
                this.users = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        refreshList() {
            this.retrieveUsers();
            this.currentUser = null;
            this.currentIndex = -1;
        }
    },
    mounted() {
        this.retrieveUsers();
    }
};
</script>