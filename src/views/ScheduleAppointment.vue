<template>
<div>
    <div>
        <h2> Schedule an appointment </h2>
    </div>
    <div id=""> 
        <form style="margin-top: 10px;">
            <div id="innerdiv">
                Enter Name:<br>
                <input type="text" name="name"><br>
                Enter Account ID:<br>
                <input type="text" name="accountid"><br>
                Enter your contact number: <br>
                <input type="number" name="oldno"><br>
                Enter your preferred timings for in person appointment: <br>
                <input type="text" placeholder="MM/DD/YYYY HH:MM AM/PM" size="30" name="time"><br><br>
                <input type="submit" value="Submit">
            </div>
        </form>
    </div>
</div>
</template>
<style>
#innerdiv {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align: left ;
  text-align: left;
  color: #2c3e50;
  margin: 10px;

}
#outerdiv {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  align: left ;
  text-align: left;
  color: #2c3e50;
  margin: 10px;

}
#formid {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>