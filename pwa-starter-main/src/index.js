import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, doc, where, query, updateDoc, arrayUnion, getDoc, deleteDoc, arrayRemove } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getBytes, getBlob, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js";
//import { resolve } from "path";
//import { json } from "stream/consumers";
import { v4 as uuidv4 } from 'uuid';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

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
export async function getPostDocByPostID(Id) {
    const data = await getPost();
    var d;
    try {
        data.forEach(aPost => {
            if (aPost.data().postID == Id) {
                d = aPost.ref; // Change to reference
            }
        });
        return d;
    } catch (error) {
        throw error;
    }
}


// ดึงข้อมูล Document ของ Post โดยใช้ Postid
export async function getPostByID(Id) {
    const data = await getPost()
    var d;
    try {
        data.forEach(aPost => {
            if (aPost.data().postID == Id) {
                d = aPost
            }
        });
        return d.data()
    } catch (e) {
        throw e;
    }
}

// ดึงข้อมูล data Document ของ File โดยใช้ Fileid
export async function getFileByID(Id) {
    const data = await getFile()
    var d;
    try {
        data.forEach(aFile => {
            if (aFile.data().fileID == Id) {
                d = aFile
            }
        });
        return d.data()
    } catch (e) {
        throw e;
    }
}

//getFileDocByID
export async function getFileDocByID(Id) {
    const data = await getFile()
    var d;
    try {
        data.forEach(aFile => {
            if (aFile.data().fileID == Id) {
                d = aFile.ref
            }
        });
        return d
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
        var reff = 'file/' + file.name
        var i

        for (i = 0; i >= 0; i++) {
            try {
                var testing = await getDownloadURL(pdfFileRef);
                var pdfFileRef = await ref(storage, 'file/' + String(i) + "_" + file.name);
                reff = 'file/' + String(i) + "_" + file.name
            } catch (error) {
                i = -99
            }
        }

        await uploadBytes(pdfFileRef, file).then((snapshot) => {
            console.log('Uploaded a PDF file!');
        }).catch((error) => {
            console.error('Error uploading PDF file:', error);
        });

        //gen fileID
        const newFileID = uuidv4()

        //add fileID to Profile
        const userdocRef = await getUserDocByID(uID);
        await updateDoc(userdocRef, {
            fileID: await arrayUnion(newFileID),
        });

        //get dowloadURL
        const downloadURL = await getDownloadURL(pdfFileRef); // ดึง URL ของไฟล์ที่อัพโหลด

        //add fileInfo to df
        const docRef = await addDoc(collection(db, 'File'), {
            fileID: newFileID,
            filepath: downloadURL, // ใช้ URL ของไฟล์แทน
            isMid: Boolean(isMid == "MID"),
            tag: String(tag),
            title: String(title),
            uID: String(uID), // cookie ติดต่อเอาไอดีมาใส่ตรงนี้
            ref: String(reff)
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

    const newPostID = uuidv4()

    const userdocRef = await getUserDocByID(uID);
    await updateDoc(userdocRef, {
        postID: await arrayUnion(newPostID),
    });

    try {
        const docRef = await addDoc(collection(db, 'Tutor'), {
            con: String(con),
            describ: String(describ),
            postID: newPostID,
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

//Feed Post
export async function feedPostList(tag) {
    const Posts = await getPost();
    var aList = [];

    try {
        Posts.forEach(Post => {
            const titleData = Post.data().title;
            const tagData = Post.data().tag;
            if (titleData && tagData) {
                const title = titleData.substring(0, 25);
                const tagLimited = tagData.substring(0, 5);
                if (tagData == tagLimited) {
                    aList.push({ id: Post.data().postID, title: title, location: Post.data().location, tag: tagLimited, datetime: Post.data().timeDate, description: Post.data().describ, contact: Post.data().con });
                } else if (tag == "") {
                    aList.push({ id: Post.data().postID, title: title, location: Post.data().location, tag: tagLimited, datetime: Post.data().timeDate, description: Post.data().describ, contact: Post.data().con });
                }
            }
        });
        return aList;
    } catch (e) {
        throw e;
    }
}

//ฟังชันใช้ในหน้า profile - ไฟล์ที่ตั้วเอง(uid) เคยโพส
export async function ProfilefeedDataList(uID) {
    const user = await getUserByID(uID)
    const FilesID = user.fileID
    var aList = [];
    for (var aFileID in FilesID) {
        var aFile = await getFileByID(FilesID[aFileID])
        aList.push({ title: aFile.title.substring(0, 20), content: aFile.filepath, tag: aFile.tag.substring(0, 5), fileID: aFile.fileID });
    }
    return aList;
}

//ฟังชันใช้ในหน้า profile - โพสตัวเอง(uid) ที่เคยโพสไว้
export async function ProfilefeedPostList(uID) {
    const user = await getUserByID(uID)
    const PostsID = user.postID
    var aList = [];

    for (var aPostID in PostsID) {
        var Post = await getPostByID(PostsID[aPostID])
        console.log(Post)
        aList.push({ id: Post.postID, title: Post.title.substring(0, 25), location: Post.location, tag: Post.tag.substring(0, 5), datetime: Post.timeDate, description: Post.describ, contact: Post.con });
    }
    return aList;
}

//ฟังชันใช้ในหน้า profile - โพสคนอื่นที่กด join ไว้
export async function JoinedProfilefeedPostList(uID) {
    const Posts = await getPost()
    var d = [];

    Posts.forEach(Post => {
        d.push(Post)
    });

    var join = [];
    for (var aPost in d) {
        var PostuID = await d[aPost].data().uID
        var joinedID = await d[aPost].data().joinedID

        if (joinedID.includes(uID) && PostuID != uID) {
            join.push(d[aPost].data())
        }
    }

    var aList = []

    for (var Postindex in join) {
        var Post = join[Postindex]
        console.log(Post)
        aList.push({ id: Post.postID, title: Post.title.substring(0, 10), location: Post.location, tag: Post.tag.substring(0, 5), datetime: Post.timeDate, description: Post.describ, contact: Post.con, time: await timeLeft(Post.postID) });
    }
    return aList;
}



//ฟังชันใช้ในหน้า profile - join โพสคนอื่นที่
export async function joinPost(uID, postID) {
    const postdocRef = await getPostDocByPostID(postID);
    await updateDoc(postdocRef, {
        joinedID: await arrayUnion(uID),
    });
}

//2024-04-20T13:54
export async function timeLeft(postID) {
    const nowdate = new Date();
    const Postref = await getPostDocByPostID(postID);
    var Post = await getDoc(Postref);
    var postdate = new Date(Post.data().timeDate);
    console.log("time: ", postdate);
    console.log("nowdate: ", nowdate);
    const secDiff = (postdate.getTime() - nowdate.getTime()) / 1000;
    console.log(secDiff);
    if (secDiff > 86400) {
        return String(Math.floor(secDiff / 86400)) + " Day" + (Math.floor(secDiff / 86400) === 1 ? "" : "s");
    } else if (secDiff > 3600) {
        return String(Math.floor(secDiff / 3600)) + " Hour" + (Math.floor(secDiff / 3600) === 1 ? "" : "s");
    } else if (secDiff > 60) {
        return String(Math.floor(secDiff / 60)) + " Minute" + (Math.floor(secDiff / 60) === 1 ? "" : "s");
    } else if (secDiff > 0) {
        return String(Math.floor(secDiff)) + " Second" + (Math.floor(secDiff) === 1 ? "" : "s");
    } else {
        return String(Math.floor((secDiff * (-1)) / 60)) + " Minute" + (Math.floor((secDiff * (-1)) / 60) === 1 ? "" : "s") + " Ago";
    }
}


//YYYY-MM-DDTHH:mm:ss.sssZ
async function delPost() {
    const nowdate = new Date()
    const Posts = await getPost();

    Posts.forEach(async Post => {
        const time = Post.data().timeDate
        const postdate = new Date(time)
        if (postdate.getTime() - nowdate.getTime() < 3600 * 1000 * 2) {
            await delPostId(Post.data().postID)
            await deleteDoc(Post.ref);
        }
    }
    )
}

async function delPostId(apostID) {
    const data = await getUser()
    data.forEach(async user => {
        const userDoc = await getUserDocByID(user.data().id)

        await updateDoc(userDoc, {
            "postID": await arrayRemove(apostID),
        });
    })
}

export async function updateFileData(fileID, aTopic, aSubject, ismid, fileInput, uID) {

    var file = fileInput[0]

    var pdfFileRef = await ref(storage, 'file/' + file.n);
    var reff = 'file/' + file.name
    var i

    for (i = 0; i >= 0; i++) {
        try {
            var testing = await getDownloadURL(pdfFileRef);
            var pdfFileRef = await ref(storage, 'file/' + String(i) + "_" + file.name);
            reff = 'file/' + String(i) + "_" + file.name
        } catch (error) {
            i = -99
        }
    }

    await uploadBytes(pdfFileRef, file).then((snapshot) => {
        console.log('Uploaded a PDF file!');
    }).catch((error) => {
        console.error('Error uploading PDF file:', error);
    });

    //gen fileID
    const newFileID = uuidv4()

    //add fileID to Profile
    const userdocRef = await getUserDocByID(uID);
    await updateDoc(userdocRef, {
        fileID: await arrayRemove(fileID), // ลบเก่า
    });
    await updateDoc(userdocRef, {
        fileID: await arrayUnion(newFileID) // เพิ่มใหม่
    });


    // Delete the file
    await deleteObject(ref(storage, (await getFileByID(fileID)).ref)).then(() => {
        console.log('Del a PDF file!');
    }).catch((error) => {
        console.error('Error Del PDF file:', error);
    });

    //get dowloadURL
    const downloadURL = await getDownloadURL(pdfFileRef); // ดึง URL ของไฟล์ที่อัพโหลด



    //updateDoc file
    const fileRef = await getFileDocByID(fileID); //
    try {
        await updateDoc(fileRef, {
            fileID: String(newFileID),
            filepath: String(downloadURL),
            isMid: ismid == "Midterm",
            title: String(aTopic),
            tag: String(aSubject),
            ref: String(reff)
        });
    } catch (e) {
        console.log(e)
    }


};

export async function updatePost(postID, topic, subject, detail, aLocation, contact, date) {
    const postDocRef = await getPostDocByPostID(postID);
    try {
        console.log(postDocRef)
        await updateDoc(postDocRef, {
            con: String(contact),
            describ: String(detail),
            location: String(aLocation),
            tag: String(subject),
            timeDate: String(date),
            title: String(topic),
        })
        window.location.href = "/profile";
    } catch (e) {
        console.log(e)
    }

}

export async function getPicture(){
    var user = getUserByID()
}

delPost()

