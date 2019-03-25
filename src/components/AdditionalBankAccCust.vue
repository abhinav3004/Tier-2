<template>
<div>
    <form>
        <h3>Additional Bank Account For Customer</h3>
    <p>
        <label>User Id</label>
        <input id="userid" type="text" v-model="userid">
        {{userId}}
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
                <label>Bank Account Type</label>
                <select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>Individual</option>
  <option>Merchant</option>
</select>
                <span>Selected: {{ selected }}</span>
</p></form><br><br><br><br><br><br>
</div>
</template>

<script>
export default {
    name: 'AdditionalBankAccCust',
}
</script>
