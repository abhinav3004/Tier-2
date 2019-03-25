<template>
  <div class="about">
    <h1>Account Details</h1><br>

<h3>Accounts</h3>
<b-button variant="info">Create New User</b-button>
<b-button variant="info">Create New Bank Account</b-button>
<table>
<thead>
        <tr>
          <th>Customer Name</th>
          <th>UserID</th>
          <th>email</th>
          <th>phone</th>
          <th>DOB</th>
          <th>Type</th>
          <th>Options</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       <td>Abhinav Mishra</td>
       <td> 1234</td>
       <td> test@gmail.com</td>
       <td> 123-456-7890</td>
       <td> 1/1/2019</td>
       <td> Individual</td>
       <td><b-button variant="danger">Delete</b-button> </td>
       <td><b-button variant="info">Modify</b-button> </td>
        </tr>
      </tbody>
</table>

<br><h3>Transactions</h3>

<b-button variant="info">Create</b-button>

<table>
<thead>
        <tr>
          <th>Transaction ID</th>
          <th>Transaction Type ID</th>
          <th>From Account ID</th>
          <th>To Account ID</th>
          <th>Request Amount</th>
          <th>Status</th>
          <th>Created By</th>
          <th>Options</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       <td>1234</td>
       <td>Debit</td>
       <td>12345</td>
       <td>67890</td>
       <td>$30</td>
       <td>Unapproved</td>
       <td>T1 Bill</td>
       <td><b-button variant="success">Accept</b-button> </td>
       <td><b-button variant="info">Decline</b-button> </td>
        </tr>
      </tbody>
</table>

<br><h3>Employees</h3>

<b-button variant="info">Create</b-button>

<table>
<thead>
        <tr>
          <th>Customer Name</th>
          <th>UserID</th>
          <th>email</th>
          <th>phone</th>
          <th>DOB</th>
          <th>Type</th>
          <th>Options</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
       <td>Abhinav Mishra</td>
       <td> 1234</td>
       <td> test@gmail.com</td>
       <td> 123-456-7890</td>
       <td> 1/1/2019</td>
       <td> Individual</td>
       <td><b-button variant="success">Accept</b-button> </td>
       <td><b-button variant="info">Decline</b-button> </td>
        </tr>
      </tbody>
</table>
  </div>
</template>


