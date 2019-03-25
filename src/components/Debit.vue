<template>
<div>
    <form>
        <h3>Debit</h3>
    <p>
        <label>Account Number</label>
        <input id="accNo" type="number" v-model="accNo">
        {{accNo}}
    </p>
 
    <p>
            <label>Debit Amount ($) </label>
            <input
      id="debitAmt"
      v-model="debitAmt"
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
    name: 'Debit',
}
</script>
