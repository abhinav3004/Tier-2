<template>
<div class="hello">
  
    <form @submit="checkForm" method="post" novalidate="true">
      <h3>Create New Customer</h3>
        <!--  <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
            
         </p> -->
        <p>
            <label>First Name</label>
            <input id="fname" type="text" v-model="fname">
            {{fname}}
        </p>
        <p>
            <label>Last Name</label>
            <input id="lname" type="text" v-model="lname">
            {{lname}}
        </p>
        <p>
            <label>User Name</label>
            <input id="user" type="text" v-model="lnamusere">
            {{user}}
        </p>
        <p>
            <label for="pass">Password</label>
            <input
      id="pass"
      v-model="pass"
      type="password"
      name="pass"
    >
      </p>
            <p>
                <label for="email">Email</label>
                <input
      id="email"
      v-model="email"
      type="email"
      name="email"
    >
  </p>
                <p>
                    <label for="phone">Phone</label>
                    <input
      id="phone"
      v-model="phone"
      type="text"
      name="phone"
    >
  </p>
                    <p>
                        <label>DOB</label>
                        <input v-validate="'date_format:dd/MM/yyyy|date_between:10/09/1960,20/04/2018'" name="date_between_field" type="text">

    </p> <!-- checkbox -->
                        <p>
                            <label>User Account Type</label>
                            <input type="radio" id="individual" value="Individual" v-model="picked">
                            <label for="individual">Individual</label>
                            <br>
                            <input type="radio" id="merchant" value="Merchant" v-model="picked">
                            <label for="merchant">Merchant</label>
                            <br>
                            <span>Picked: {{ picked }}</span>
                        </p>
                        <!-- select -->
                        <p>
                            <label>Bank Account Type</label>
                            <select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>Individual</option>
  <option>Merchant</option>
</select>
                            <span>Selected: {{ selected }}</span>
                            <p>
                                <input
      type="submit"
      value="Submit"
    >
  </p>

    </form><br><br><br><br><br><br>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    /*methods: {
      alertMsg: function (event) {
        alert('Do you want to delete this Account?');
      },
    },*/
    data() {
        return {
            fname: null,
            lname: null,
            user: null,
            email: null,
            checked: true,
            picked: 'one',
            selected: 'two',
            multiSelect: ['one', 'two', 'three']

        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            if (!this.fname) {
                this.errors.push("Name required.");
            }
            if (!this.lname) {
                this.errors.push("Name required.");
            }
            if (!this.user) {
                this.errors.push("Name required.");
            }
            if (!this.email) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    },
    props: {
        msg: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss">
</style>
