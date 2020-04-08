<template>
	<b-container class="info" fluid>
		<b-col sm="4">
			<b-row>
				<b-col sm="3">
					<label for="fistName" class="col-form-label required">First Name</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="firstName" type="text" v-model="currentUser.firstName"></b-form-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="3">
					<label for="lastName" class="col-form-label required">Last Name</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="lastName" type="text" v-model="currentUser.lastName"></b-form-input>
				</b-col>
			</b-row>
			<b-row>
				<b-col sm="3">
					<label for="email" class="col-form-label required">Email</label>
				</b-col>
				<b-col sm="6">
					<b-form-input  id="email" type="email" v-model="currentUser.email"></b-form-input>
				</b-col>
			</b-row>
		</b-col>
		<b-button @click=save> save </b-button>
		
	</b-container>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import userService from '@/services/user_service'
import store from "@/store";

export default {
	name: "Profile",
    methods: {
        ...mapMutations('session', {
            setCurrentUser: 'setUser'
		}),
		async save() {
			try {
				this.user = (( await store.dispatch('session/save', this.currentUser)));

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