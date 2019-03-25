<template>
<div>
    <form>
        <h3>Credit</h3>
    <p>
        <label>Account Number</label>
        <input id="accNo" type="number" v-model="accNo">
        {{accNo}}
    </p>

 
    <p>
            <label>Credit Amount ($) </label>
            <input
      id="creditAmt"
      v-model="creditAmt"
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
    name: 'Credit',
}
</script>
