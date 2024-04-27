import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, where, query, updateDoc, arrayUnion, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getBytes, getBlob, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
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
const storage = getStorage();
const db = getFirestore(app);

// ดึงข้อมูล user
export async function getUser() {
    const querySnapshot = await getDocs(collection(db, "User"));
    return querySnapshot

};
// ดึงข้อมูล Post
export async function getPost() {
    const querySnapshot = await getDocs(collection(db, "Tutor"));
    return querySnapshot

};

// ดึงข้อมูล File
export async function getFile() {
    const querySnapshot = await getDocs(collection(db, "File"));
    return querySnapshot

};

// ดึงข้อมูล data Document ของ Users โดยใช้ id
export async function getUserByID(Id_user) {
    const data = await getUser()
    var d;
    console.log(Id_user)
    try {
        data.forEach(aUser => {
            if (aUser.data().id == Id_user) {
                d = aUser
            }
        });
        return d.data()
    } catch (e) {
        throw e;
    }
}

// ดึงข้อมูล Document ของ Users โดยใช้ id
export async function getUserDocByID(Id_user) {
    const data = await getUser();
    var d;
    console.log(Id_user);
    try {
        data.forEach(aUser => {
            if (aUser.data().id == Id_user) {
                d = aUser.ref; // Change to reference
            }
        });
        return d;
    } catch (error) {
        throw error;
    }
}


// ดึงข้อมูล Document ของ Post โดยใช้ id
export async function getPostByID(Id) {
    const data = await getPost()
    var d;
    try {
        data.forEach(aPost => {
            if (aPost.data().id == Id) {
                d = aPost
            }
        });
        return d.data()
    } catch (e) {
        throw e;
    }
}

// ดึงข้อมูล data Document ของ File โดยใช้ id
export async function getFileByID(Id) {
    const data = await getFile()
    var d;
    try {
        data.forEach(aFile => {
            if (aFile.data().uID == Id) {
                d = aFile
            }
        });
        return d.data()
    } catch (e) {
        throw e;
    }
}


//
export async function getCollUser(Id) {
    const data = await getUserByID(Id)
    var d = {};
    try {
        d = {
            "faculty": data.faculty, "fileID": data.fileID, "id": data.id, "name": data.name,
            "password": data.password, "picPath": data.picPath, "postID": data.postID, "username": data.username
        }
        return d
    } catch (e) {
        throw e;
    }
}

//
export async function getCollPost(Id) {
    const data = await getPostByID()
    var d = {};
    try {
        d = {
            "con": data.con, "describ": data.describ, "joinedID": data.joinedID, "location": data.location,
            "postID": data.postID, "tag": data.tag, "timeDate": data.timeDate, "title": data.title,
            "uID": data.uID
        }
        return d
    } catch (e) {
        throw e;
    }
}

//
export async function getCollFile(Id) {
    const data = await getFileByID()
    var d = {};
    try {
        d = {
            "fileID": data.fileID, "filepath": data.filepath, "isMid": data.isMid, "tag": data.tag,
            "title": data.title, "uID": data.uID
        }
        return d
    } catch (e) {
        throw e;
    }
}

//ดึงข้อมูล data Document ของ Users โดขใช้ username
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
        throw e;
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



const secretKey = "MySecretKey";

// Function to encrypt a password
export async function encryptText(text) {
    return AES.encrypt(text, secretKey).toString();
}

// Function to decrypt an encrypted password
export function decryptText(encrypted) {
    const bytes = AES.decrypt(encrypted, secretKey);
    return bytes.toString(Utf8);
}

// นำเข้าข้อมูล file
export async function addFile(file, isMid, tag, title, uID) {
    try {
        file = file[0]

        var pdfFileRef = await ref(storage, 'file/' + file.name);
        var i

        for (i = 0; i >= 0; i++) {
            try {
                var testing = await getDownloadURL(pdfFileRef);
                var pdfFileRef = await ref(storage, 'file/' + String(i) + "_" + file.name);
            } catch (error) {
                i = -99
            }
        }

        await uploadBytes(pdfFileRef, file).then((snapshot) => {
            console.log('Uploaded a PDF file!');
        }).catch((error) => {
            console.error('Error uploading PDF file:', error);
        });

        const downloadURL = await getDownloadURL(pdfFileRef); // ดึง URL ของไฟล์ที่อัพโหลด

        const docRef = await addDoc(collection(db, 'File'), {
            fileID: uuidv4(),
            filepath: downloadURL, // ใช้ URL ของไฟล์แทน
            isMid: Boolean(isMid == "MID"),
            tag: String(tag).toUpperCase(),
            title: String(title),
            uID: String(uID) // cookie ติดต่อเอาไอดีมาใส่ตรงนี้
        });
        console.log("Document successfully written!");
        return docRef; // คืนค่า DocumentReference
    } catch (error) {
        console.error("Error writing document: ", error);
        throw error;
    }
}



//นำเข้า post
export async function addPost(con, describ, tag, timeDate, title, uID, location) {
    try {
        const docRef = await addDoc(collection(db, 'Tutor'), {
            con: String(con),
            describ: String(describ),
            postID: uuidv4(),
            tag: String(tag),
            timeDate: String(timeDate),
            title: String(title),
            uID: String(uID),//cookie ต้องติดต่อตรงนี้
            location: String(location),
            joinedID: []
        });
        console.log("Document successfully written!");
        return docRef; // คืนค่า DocumentReference
    } catch (error) {
        console.error("Error writing document: ", error);
        throw error;
    }
}

//Feed Data อยู่หน้า mid เป็น true
export async function feedDataList(isMid, tag) {
    const Files = await getFile();
    var aList = [];

    try {
        Files.forEach(aFile => {
            if (aFile.data().isMid == isMid) {
                const title = aFile.data().title.substring(0, 10);
                const tagLimited = aFile.data().tag.substring(0, 5);
                if (aFile.data().tag == tagLimited) {
                    aList.push({ title, content: aFile.data().filepath, tag: tagLimited });
                }
                else if (tag == "") {
                    aList.push({ title, content: aFile.data().filepath, tag: tagLimited });
                }
            }
        });
        return aList;
    } catch (e) {
        throw e;
    }
}


//getFileDownloadURL
export async function getFileDownloadURL(fromUser) {
    const storageRef = ref(storage, fromUser);
    const url = await getDownloadURL(storageRef);
    return url;
}

export async function updateFileID(userID, newfileID) {
    try {
        const docRef = await getUserDocByID(userID);
        await updateDoc(docRef, {
            fileID: arrayUnion(newfileID),
        });
    } catch (error) {
        throw error;
    }
}

//Feed Data อยู่หน้า mid เป็น true
export async function feedTutorList(isMid, tag = "") {
    const Posts = await getPost();
    var aList = [];

    try {
        Posts.forEach(Post => {
            if (Post.data().isMid == isMid) {
                const title = Post.data().title.substring(0, 10);
                const tagLimited = Post.data().tag.substring(0, 5);
                if (Post.data().tag == tagLimited) {
                    aList.push({ title, content: Post.data().filepath, tag: tagLimited });
                }
                else if (tag == "") {
                    aList.push({ title, content: Post.data().filepath, tag: tagLimited });
                }
            }
        });
        return aList;
    } catch (e) {
        throw e;
    }
}