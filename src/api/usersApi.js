import 'whatwg-fetch';

//export
export function getUsers(){
  return get('users');



}

//success
function onSuccess(res){
  return res.json();

}


//error
function onError(err){
  console.error(err); //eslint-disable-line no-console
}
