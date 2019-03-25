<template>
  <div class="home">
    <form1></form1>
     <form2></form2>
     <form3></form3>
     <form4></form4>
      <form5></form5>
       <form6></form6>
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewCustomer from '@/components/CreateNewCustomer.vue';
import AdditionalBankAccCust from '@/components/AdditionalBankAccCust.vue';
import ModifyInfoByCust from '@/components/ModifyInfoByCust.vue';
import ModifyCustInfoByTier2 from '@/components/ModifyCustInfoByTier2.vue';
import CreateNewEmployee from '@/components/CreateNewEmployee.vue';
import ModifyEmployeeInfo from '@/components/ModifyEmployeeInfo.vue';

export default {
  name: 'home',
  components: {
    'form1':CreateNewCustomer,
    'form2':AdditionalBankAccCust,
    'form3':ModifyInfoByCust,
    'form4':ModifyCustInfoByTier2,
    'form5':CreateNewEmployee,
     'form6':ModifyEmployeeInfo,
  },
};</script>