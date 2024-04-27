 import { getCollFile, getCollUser, getUserByID } from "../index";

const url = 'http://192.168.1.111:3001';
export { url };
export var cookie = "1";

export async function getCookie(id: string) {
  console.log(id)
  var dee = getCollUser(id)
  return dee

}

export async function setCookie(dataID: string) {
  document.cookie = dataID
}

export function deleteCookie(name: string) {
  document.cookie = name + '=; Max-Age=-99999999;';
}

