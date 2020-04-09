<template>
	<b-container class="info" fluid>
		<b-col sm="4">
			<b-row>
				<b-col sm="3">
					<label for="fistName" class="col-form-label required">First Name</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="firstName" type="text" v-model="user.firstName"></b-form-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="3">
					<label for="lastName" class="col-form-label required">Last Name</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="lastName" type="text" v-model="user.lastName"></b-form-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="3">
					<label for="email" class="col-form-label required">Email</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="email" type="email" v-model="user.email"></b-form-input>
				</b-col>
			</b-row>
		</b-col>
		<b-button @click="save">Save</b-button>
		
	</b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import userService from '@/services/user_service'
import store from "@/store";

export default {
    name: "Profile",
    data() {
        return {
            user: null
        };
    },
    created() {
        this.user = this.currentUser;
    },
    methods: {
        ...mapActions('session', {
            saveUser: 'save'
		}),
		async save() {
			try {
                await this.saveUser(this.user);
                this.user = this.currentUser;
                // TODO: show a success message
			} catch (e) {
				console.log(e);
			}
		}
    },
    computed: {
        ...mapState("session", {  
            currentUser: "currentUser"
        })  
    }
}
</script>

<style scoped>

.info {
	padding: 5em;
}
.row {
	padding: .25em;
}
</style>