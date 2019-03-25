<template>
<div>
    <form>
        <h3>Create New Employee</h3>
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

    </p>
      <p>
                            <label>Tier</label>
                            <select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>TIER1</option>
  <option>TIER2</option>
  <option>TIER3</option>
</select>
                            <span>Selected: {{ selected }}</span>
                            </p>
    </form><br><br><br><br><br><br>
</div>
</template>

<script>
export default {
    name: 'CreateNewEmployee',
}
</script>
