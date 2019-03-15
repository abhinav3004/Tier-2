<template>
  <div>
    <h1>Customer Accounts List</h1>
    <b-button variant="info" id="creatAccountBtn">Create Account</b-button>
    <br><br><br>
    <table>
      <thead>
        <tr>
          <th id="heading">Customer Name</th>
          <th>Account Number</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       <td>Saksham Rathore</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042985</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>
          <tr>
       <td>Abhinav Mishra</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042986</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>
          <tr>
       <td>Ajey Sharma</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042987</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>
          <tr>
       <td>Bhagyashree Yadav</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042988</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>  <tr>
       <td>Samkit Jain</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042989</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>
        <td>Mohit Agarwal</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042990</router-link>
            </div>
            <router-view/>
            
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button>
       </td>
      </tbody>
    </table>
 <ul id="example-2">
  <p>{{ title }}</p>

</ul>
</div>
</template>


<!--<script>
var example2 = new Vue({
  el: '#example-2',
  data: {
   title:'abhianv'
  }
})
</script>!-->






  