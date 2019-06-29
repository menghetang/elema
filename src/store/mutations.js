export default{
    getUsers(state,a){
        state.userMsg = a;
        console.log(a)
    },
    getCity(state,b){
        state.cityInfo=b;
        console.log(b);
    },
    getsum(state,c){
        state.sum=c;
        console.log(c);
    },
    getavater(state,d){
        state.imagavater=d
    }
  }