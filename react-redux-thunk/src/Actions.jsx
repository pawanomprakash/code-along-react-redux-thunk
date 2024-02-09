
export function fetchUserData(users) {
  return {
    type:"FETCH_DATA",
    payload:users
  }
}

export function showerror(err){
    return{
        type:"ERROR",
        payload:err
    }
}
