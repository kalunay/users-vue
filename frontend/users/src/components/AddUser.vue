<template>
    <div class="uk-grid-small uk-child-width-1-2@s uk-flex-center uk-text-center" uk-grid>
        <div class="submit-form">
            <div v-if="!submitted">
                <fieldset class="uk-fieldset">

                    <div class="uk-margin">
                        <input class="uk-input" type="text" id="title" required v-model="user.title" name="title" placeholder="Title" aria-label="Title">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" id="profession" required v-model="user.profession" name="profession" placeholder="Profession" aria-label="Profession">
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="email" id="email" required v-model="user.email" placeholder="E-mail" name="email" aria-label="E-mail">
                    </div>
                    <button class="uk-button uk-button-secondary uk-width-1-1" @click="saveUser">Submit</button>
                </fieldset>           
                <p>{{ message }}</p>
            </div>
            <div v-else>
                <h4>You submitted successfully!</h4>
            </div>
        </div>
    </div>
</template>

<script>
import UserDataService from '@/services/UserDataService';

export default {
    name: "AddUser",
    data() {
        return {
            user: {
                id: null,
                title: "",
                profession: ""
            },
            submitted: false,
            message: ''
        };
    },
    methods: {
        saveUser() {

            if(this.user.title.length < 5 || this.user.profession.length < 5 || this.user.email.length < 5) {
                this.submitted = false;
                this.message = 'Please check fields!';
                return false;
            }

            var data = {
                title: this.user.title,
                profession: this.user.profession,
                email: this.user.email
            };

            UserDataService.create(data)
            .then(response => {
                this.user.id = response.data.id;
                this.submitted = true;
            })
            .catch(e => {
                console.log(e)
            });
        },
        newUser() {
            this.submitted = false;
            this.user = {},
            this.message = ''
        }
    }
};
</script>