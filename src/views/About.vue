<template>
  <div class="about">
    <h1>Tier-2 Home page</h1>
    <button>Create Account</button>
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
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
       <td><button>Modify</button> </td>
       <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

  