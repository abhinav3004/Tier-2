<template>
  <div class="manager">
    <h1>Tier-3 Home page</h1>
    <button>Create Employee Id</button>
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
       <td><button>Modify</button> </td>
       <td><button>Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>