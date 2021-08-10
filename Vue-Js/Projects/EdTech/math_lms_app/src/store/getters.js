export default {
    getProblemObj(state){
        //Return Current Problem Object
        return state.currProbObj;
    },
    getCurrOpdCount(state){
        //returns the number of operands
        return state.currOpdCount;
    },
    getCurrOperCount(state){
        //returns the number of operators
        return state.currOperCount;
    }
}