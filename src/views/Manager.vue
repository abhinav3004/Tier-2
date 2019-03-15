<template>
  <div class="manageraccountdetails">
    <h1>Employee Account Holders</h1>
    <b-button variant="info" id="creatAccountBtn">Create Employee Id</b-button>
    <table>
      <thead>
        <tr>
          <th>Emp-Name</th>
          <th>Emp-Account No.</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       <td>jimmy clark</td>
        <td> 
          <div id="nav">
           <router-link to="/manageraccountdetails">82828140241</router-link>
            </div>
            <router-view/>
        </td>
        <td><b-button variant="success">Modify</b-button></td>
       <td><b-button variant="danger">Delete</b-button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>