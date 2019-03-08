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
       <td>Abhinav</td>
       <td> 
          <div id="nav">
           <router-link to="/accountdetails">1215042985</router-link>
            </div>
            <router-view/>
        </td>
       <td><b-button variant="success">Modify</b-button></td>
       <td><b-button v-on:click="alertMsg()" variant="danger">Delete</b-button></td>
        </tr>
      </tbody>
    </table>
     </div>

</template>






  