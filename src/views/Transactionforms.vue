<template>
  <div class="transactionforms">
    <form1></form1>
     <form2></form2>
     <form3></form3>
     
  </div>
</template>

<script>
// @ is an alias to /src
import Credit from '@/components/Credit.vue';
import Debit from '@/components/Debit.vue';
import TransferForm from '@/components/TransferForm.vue';


export default {
  name: 'transactionforms',
  components: {
    'form1':Credit,
    'form2':Debit,
    'form3':TransferForm,
    },
};</script>