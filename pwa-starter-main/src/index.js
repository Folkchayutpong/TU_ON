import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, where, query } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
//import { resolve } from "path";
//import { json } from "stream/consumers";
import { v4 as uuidv4 } from 'uuid';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';


// export { addData } from "../index.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsKd7V28u9z4HqrcV8eL67dNC-Gy1m0oI",
    authDomain: "tuapp-6c9a7.firebaseapp.com",
    databaseURL: "https://tuapp-6c9a7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tuapp-6c9a7",
    storageBucket: "tuapp-6c9a7.appspot.com",
    messagingSenderId: "985765389580",
    appId: "1:985765389580:web:53e0ad0699cbbe9d681529",
    measurementId: "G-RKVXL7J0H7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ดึงข้อมูล user
export async function getUser() {
    const querySnapshot = await getDocs(collection(db, "User"));
    return querySnapshot

};

// ดึงข้อมูล Document ของ Users โดยใช้ id
async function getUserByID(Id_user) {
    const data = await getUser()
    var d;
    data.forEach(aUser => {
        if (aUser.data().id == Id_user) {
            d = aUser
        }
    });
    return d.data()
}

//ดึงข้อมูล Document ของ Users โดขใช้ username
export async function getUserByUsername(userVal) {
    const data = await getUser()
    var d;
    try {
        data.forEach(aUser => {
            if (aUser.data().username == userVal) {
                d = aUser
            }
        });
        return d.data()
    } catch (e) {
        throw (e)
    }
}

// นำเข้าข้อมูล user
export async function addData(userVal, passVal, nameVal, facultyVal) {
    try {
        const docRef = await addDoc(collection(db, 'User'), {
            faculty: String(facultyVal),
            fileID: [],
            id: uuidv4(),
            name: String(nameVal),
            picPath: "",
            postID: [],
            username: String(userVal),
            password: String(passVal)
        });
        console.log("Document successfully written!");
        return docRef; // คืนค่า DocumentReference
    } catch (error) {
        console.error("Error writing document: ", error);
        throw error;
    }

}

//โชว์ user
function showData(User) {
    User.forEach(aUser => {
        console.log(aUser.data());
    });
}

//Encrypt & Decrpyt
/*function encry() {
    const url = db;
    fetch(url).then(getUser())
        .then(data => {
            data.forEach((item) => {
                const val = btoa(item.passVal);
                const val1 = atob(val);
                console.log(item.passVal);

            })
        })
}*/

const secretKey = "MySecretKey";

// Function to encrypt a password
export async function encrypt(text) {
    return AES.encrypt(text, secretKey).toString();
}

// Function to decrypt an encrypted password
export function decrypt(encrypted) {
    const bytes = AES.decrypt(encrypted, secretKey);
    return bytes.toString(Utf8);
}
