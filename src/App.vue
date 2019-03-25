<template>
  <div id="app">
    <div id="nav">
     <!--<router-link to="/about">Tier2</router-link> |
      <router-link to="/manager">Tier3</router-link>!-->
    </div>
    <router-view/>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
form {
  width: 50%;
  height: 100%;
  border-left: 10px solid #000;
  border-right: 10px solid #FFF;
  padding: 10px 0;
  margin: 50px auto;
  background-image: -webkit-linear-gradient(left, #000 50%, #FFF 50%), -webkit-linear-gradient(left, #000 50%, #FFF 50%);
  background-image: -moz-linear-gradient(left, #000 50%, #FFF 50%), -moz-linear-gradient(left, #000 50%, #FFF 50%);
  background-image: -o-linear-gradient(left, #000 50%, #FFF 50%), -o-linear-gradient(left, #000 50%, #FFF 50%);
  background-image: linear-gradient(to right, #000 50%, #FFF 50%), linear-gradient(to right, #000 50%, #FFF 50%);
  background-position: 0 0, 0 100% ;
  background-repeat: no-repeat;
  background-size: 100% 10px;
}
div {
  background-image: -webkit-linear-gradient(left, #FFF 50%, #afdcc9 50%);
  background-image: -moz-linear-gradient(left, #FFF 50%, #afdcc9 50%);
  background-image: -o-linear-gradient(left, #FFF 50%, #afdcc9 50%);
  background-image: linear-gradient(to right, #FFF 50%, #afdcc9 50%);
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
   box-sizing: border-box;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#creatAccountBtn{
  margin-left:70%;
}
table{
  margin-top:10px;
  margin-left:10%;
  width: 80%;
}

#employeeTable
{
  width: 60%;
  margin-left:20%;
}
tr {
     background-color: #f5f5f5;
 }
 
 th {
     background-color: #afdcc9;
     color: #424242;
 }
 
 td {
     text-align: center;
}
 .table tbody tr:hover td,
 .table tbody tr:hover th {
     background-color: #d9f1e7;
 }
table>thead>tr>th {
     text-align: center;
}
</style>
