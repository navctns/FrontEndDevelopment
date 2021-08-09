export default{
    setCurrentProblem(context){
        console.log('set-problem')
        //Set problem status
        context.commit('setProblemStatus');
        //Create main problem object
        context.commit('createProblemObject');
        console.log('PROb obj on actions', context.state.currProbObj);
    }
}