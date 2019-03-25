<template>
<div>
    <form>
        <h3>Transfer Form</h3>
    <p>
        <label>Account Number: Outgoing </label>
        <input id="accNo1" type="number" v-model="accNo1">
        {{accNo1}}
    </p>
    <p>
        <label>Account Number: Incoming </label>
        <input id="accNo2" type="number" v-model="accNo2">
        {{accNo2}}
    </p>

    <p>
            <label> Amount ($) </label>
            <input
      id="amt"
      v-model="amt"
      type="number">
    </p>
    <p>
      <input
      type="submit"
      value="Submit">
    </p>
            
</form><br><br><br><br><br><br>
</div>
</template>

<script>
export default {
    name: 'Transfer Form',
}
</script>
