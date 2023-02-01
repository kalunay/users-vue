<template>
    <div class="uk-grid-small uk-child-width-1-2@s uk-flex-center uk-text-center" uk-grid>
        <div v-if="currentUser">
            <form>
                <fieldset class="uk-fieldset">

                    <legend class="uk-legend">Edit user -> {{ currentUser.title }}</legend>

                    <div class="uk-margin">
                        <input class="uk-input" type="text" id="title" v-model="currentUser.title" placeholder="Title" aria-label="Input">
                    </div>        
                    
                    <div class="uk-margin">
                        <input class="uk-input" type="text" id="profession" v-model="currentUser.profession" placeholder="Profession" aria-label="Profession">
                    </div>        

                    <div class="uk-margin">
                        <input class="uk-input" type="email" id="email" v-model="currentUser.email" placeholder="E-mail" aria-label="Email">
                    </div>        

                </fieldset>
            </form>  
            <button class="uk-button uk-button-danger" @click="deleteUser">Delete</button>
            <button class="uk-button uk-button-secondary" type="submit" @click="updateUser">Update</button>
            <p>{{ message }}</p>
        </div>
        <div v-else>
            <p>Please click on a Users...</p>
        </div> 
    </div> 

</template>

<script>
import UserDataService from '@/services/UserDataService';

export default {
    name: "User",
    data() {
        return {
            currentUser: null,
            message: ''
        };
    },
    methods: {
        getUser(id) {
            UserDataService.get(id)
            .then(response => {
                this.currentUser = response.data;
            })
            .catch(e => {
                console.log(e);
            });
        },
        updateUser() {
            UserDataService.update(this.currentUser._id, this.currentUser)
            .then(response => {
                this.message = 'The user was updated successfully!';
            })
            .catch(e => {
                console.log(e);
            });
        },
        deleteUser() {
            UserDataService.delete(this.currentUser._id)
            .then(response => {
                this.$router.push({ name: "users" });
            })
            .catch(e => {
                console.log(e);
            })
        }
    },
    mounted() {
        this.message = '';
        this.getUser(this.$route.params.id);
    }
}
</script>