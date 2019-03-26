<template>
<div>
      <div>
        <h2> Modify Contact Information Request </h2>
    </div>
    <div> 
        <form style="margin-top: 10px;">
            <div id="formid">
                Enter Name:<br>
                <input type="text" name="name"><br>
                Enter Account ID:<br>
                <input type="text" name="accountid"><br>
                Enter your current contact number: <br>
                <input type="number" name="oldno"><br>
                Enter your new contact number: <br>
                <input type="number" name="newno"><br><br>
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</div>
</template>
<style>
#formid {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align: left ;
  text-align: left;
  color: #2c3e50;
  margin: 10px;

}
</style>