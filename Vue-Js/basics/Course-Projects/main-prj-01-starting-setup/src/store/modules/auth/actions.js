let timer;
export default{
  async login(context, payload){
    return context.dispatch('auth', {
      ...payload,
      mode:'login',
    });
  },
  async signup(context, payload){
    return context.dispatch('auth', {
      ...payload,
      mode:'signup'
    });
  },
  logout(context){
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');
    clearTimeout(timer);

    context.commit('setUser', {
      token:null,
      userId:null,
      tokenExpiration:null,
    });
  },
  async auth(context, payload){
    const mode = payload.mode;
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAkKIH5VQ0NKDhBhKbNnKcJznKFVwWhO-s';
    if(mode === 'signup'){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAkKIH5VQ0NKDhBhKbNnKcJznKFVwWhO-s';
    }
    const response = await fetch(
      url,
      {
      method:'POST',
      body:JSON.stringify({
        email:payload.email,
        password:payload.password,
        returnSecureToken:true,
      }),
    });
    const responseData = await response.json();
    console.log(responseData);
    if(!response.ok){
      console.log('responseData', responseData);
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    const expiresIn = responseData.expiresIn * 1000;
    const expirationDate = new Date().getTime() + expiresIn;
    localStorage.setItem('tokenExpiration', expirationDate)


    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);

    timer = setTimeout(function(){
      context.dispatch('logout');
    },expiresIn);

    //STORE AUTH TOKEN and other authentication data
    context.commit('setUser',{
      token:responseData.idToken,
      userId:responseData.localId,
    });
  },
  tryLogin(context){
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    // const tokenExpiration = localStorage.getItem('tokenExpiration');
    // const expiresIn = +tokenExpiration - new Date().getTime();
    //for testing
    const expiresIn = 5000;

    if(expiresIn < 0){
      //not need to login again time out
      return;
    }
    timer = setTimeout(function(){
      context.dispatch('autoLogout');
    }, expiresIn);


    if(token && userId){
      context.commit('setUser', {
        token:token,
        userId:userId,
        tokenExpiration:null,
      });
    }
  },
  autoLogout(context){
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
}
