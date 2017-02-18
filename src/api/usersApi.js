import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

//export
export function getUsers(){
  return get('users');

}

//function get
function get(url){
  return fetch(baseUrl+ url).then(onSuccess,onError);
}




export function deleteUser(id){
  return del(`users/${id}`);
}

//success
function onSuccess(res){
  return res.json();

}


//error
function onError(err){
  console.error(err); //eslint-disable-line no-console
}
