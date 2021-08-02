<template>
  <header>
    <h1>Expense Tracker</h1>
  </header>
  <section>
    <div>Available Funds: {{ availableFunds }}</div>
    <div>Total Expenses: {{ currentExpenses }}</div>
    <hr />
    <div>Funds left: {{ remainingFunds }}</div>
  </section>
  <section>
    <form @submit.prevent="addExpense">
      <div>
        <label for="amount">Amount</label>
        <input id="amount" type="number" v-model.number="enteredExpense" />
      </div>
      <button>Add Expense</button>
    </form>
    <form @submit.prevent="setAvailableFund">
      <input type="number" v-model.number="availableFundsInp">
      <button>Set Available Funds</button>
    </form>
  </section>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
  setup(){
    // const expenseData = reactive({
    //     availableFunds:100,
    //     currentExpenses:0,
    //     remainingFunds:100,
    //     enteredExpense:null,
    //   });
    const availableFunds = ref(100);
    const availableFundsInp = ref(null);
    const currentExpenses = ref(0);
    const  remainingFunds = computed(function(){
      return availableFunds.value - currentExpenses.value;
    });
    const enteredExpense = ref(null);
    function setAvailableFund(){
      availableFunds.value = availableFundsInp.value;
    }
    function addExpense(){
      currentExpenses.value += enteredExpense.value;
      console.log('add expense');
      // expenseData.availableFunds -= expenseData.enteredExpense;
      // expenseData.currentExpense += expenseData.enteredExpense;
      // expenseData.remainingFunds = expenseData.availableFunds - expenseData.currentExpenses;
    }
    watch(remainingFunds, ()=>{
      if(remainingFunds.value <= 0){
        alert('Funds Expired, You are broke');
      }
    });

    return{
      availableFunds,
      currentExpenses,
      remainingFunds,
      enteredExpense,
      addExpense,
      setAvailableFund,
      availableFundsInp,
    }
  }

  // data() {
  //   return {
  //     availableFunds: 100,
  //     currentExpenses: 0,
  //     enteredExpense: 0,
  //   };
  // },
  // computed: {
  //   remainingFunds() {
  //     return this.availableFunds - this.currentExpenses;
  //   },
  // },
  // methods: {
  //   addExpense() {
  //     this.currentExpenses += this.enteredExpense;
  //   },
  // },
  // watch: {
  //   remainingFunds(val) {
  //     if (val < 0) {
  //       alert('You are broke!');
  //     }
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30006e;
  color: white;
}
section {
  margin: 2rem auto;
  max-width: 35rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
}

form div {
  margin: 1rem 0;
}
input {
  width: 100%;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin: 0.5rem 0;
}
button {
  background-color: #30006e;
  border: 1px solid #30006e;
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  color: white;
}
button:hover,
button:active {
  background-color: #5819ac;
  border-color: #5819ac;
}
</style>
