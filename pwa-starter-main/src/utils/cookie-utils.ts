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

// export function getUserIdFromCookie(cookieName: string): string | null {
//     const cookies = document.cookie.split(';').map(cookie => cookie.trim());
//     for (const cookie of cookies) {
//         const [name, value] = cookie.split('=');
//         if (name === cookieName) {
//             return value;
//         }
//     }
//     return null;
// }

// export async function getCookie() {
//   var d = getCollUser(cookie)
//   return d;
// }

// export async function setCookie(id: string) {
//   cookie = id;
// }
// export function getCookie(name: string): string | null {
//   const cookies = document.cookie.split(';');
//   for (const cookie of cookies) {
//     const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
//     if (cookieName === name) {
//       return cookieValue;
//     }
//   }
//   return null;
// }

// cookieUtils.ts
// export function setCookie(name: string, value: string, days: number) {
//     const date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }



//   for (const [key, value] of Object.entries(data)) {
//     document.cookie = key + "=" + value + ";" + expires + ";path=/";
//   }



//   // Get the value of the "user_id" cookie
//   const cookies = document.cookie.split(';').map(cookie => cookie.trim());
//   const userIdCookie = cookies.find(cookie => cookie.startsWith('user_id='));
//   const userId = userIdCookie ? userIdCookie.split('=')[1] : null;

// }