//some variables
var currentDate = new Date();
var course = "null";
var name = "null";
var father = "null";
var mother = "null";
var occupation = "null";
var dob = "null";
var cast = "null";
var adhar = " null";
var gender = " null";
var address = " null";
var district = " null";
var state = " null";
var pin = "null";
var email = " null";
var phone = " null";
var phone2 = "null";
var userId = null;
var photoUrl = "none";
var adharUrl = "none";
var matricUrl = "none";
var interUrl = "none";
var diplomaUrl = "none";
// this web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsQrWVk88FhJqWJQSdpQMzHjy0CnycrFk",
    authDomain: "cciwebsited7a7.firebaseapp.com",
    databaseURL: "https://cciwebsited7a7.firebaseio.com",
    projectId: "cciwebsited7a7",
    storageBucket: "cciwebsited7a7.appspot.com",
    messagingSenderId: "422403036454",
    appId: "1:422403036454:web:bebaaa056d9b578b479de7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var storage = firebase.storage();//get a reference to storage
function action() {
    course = document.getElementById("course").options[(document.getElementById("course")).selectedIndex].value;
    name = document.getElementById("name").value;
    father = document.getElementById("father").value;
    mother = document.getElementById("mother").value;
    occupation = document.getElementById("occup").value;
    dob = document.getElementById("dob").value;
    cast = document.getElementById("cast").value;
    adhar = document.getElementById("adhar").value;
    gender = document.getElementById("gender").options[(document.getElementById("gender")).selectedIndex].value;
    address = document.getElementById("add").value;
    district = document.getElementById("dist").value;
    state = document.getElementById("state").value;
    pin = document.getElementById("pin").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    phone2 = document.getElementById("phone2").value;
    firebase.auth().signInAnonymously().catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        alert("Error in Authorisation\n" + errorMessage);
    });
    updateDataBase();
    uploadFiles();
    sendMail();
    /*  db.ref("/applications/" + userId).update({
          Photo_link: photoUrl,
          Adhar_link: adharUrl,
          Matric_marksheet_link: matricUrl,
          Inter_marksheet_link: interUrl,
          Diploma_certificate_link: diplomaUrl
      }); */
    document.getElementById("main").style.display = "none";
    document.getElementById("appDate").innerHTML = currentDate;
    document.getElementById("appName").innerHTML = name;
    document.getElementById("appNo").innerHTML = userId.substring(1);
    document.getElementById("final").style.display = "block";
}
function updateDataBase() {
    //id was added
    userId = db.ref("/applications").push({
        applicationDate: currentDate.toDateString(),
        courseSelected: course,
        userName: name,
        userFathersName: father,
        userMothersName: mother,
        userOccupation: occupation,
        userDOB: dob,
        userCast: cast,
        userAdhar: adhar,
        userGender: gender,
        userAdress: address,
        userDistrict: district,
        userState: state,
        userPIN: pin,
        userEmail: email,
        userPhone: phone,
        userPhone2: phone2,
    }, function (error) {
        if (error) {
            alert("An Error Occured.\n" + error.message);
            return 0;
        }
    }).key;
}
//we are using SMTPJS for sending form data to an email 
function sendMail() {
    var body = "Application Date & time => " + currentDate.toDateString() + "<br/>" +
        "application Id => " + userId.substring(1) + "<br/>" +
        "senders name => " + name + "<br/>" +
        "senders email => " + email + "<br/>" +
        "senders mobile number => " + phone + "<br/>" +
        "senders secondry mobile number => " + phone2 + "<br/>" +
        "course selected => " + course + "<br/>" +
        "senders fathers name => " + father + "<br/>" +
        "senders mothers name => " + mother + "<br/>" +
        "senders family Occcupation => " + occupation + "<br/>" +
        "senders date of birth => " + dob + "<br/>" +
        "senders cast => " + cast + "<br/>" +
        "senders Adhar number => " + adhar + "<br/>" +
        "Senders gender => " + gender + "<br/>" +
        "senders village/post => " + address + "<br/>" +
        "Senders district => " + district + "<br/>" +
        "senders state => " + state + "<br/>" +
        "senders pin code => " + pin + "<br/>";
    Email.send({
        Host: "smtp.gmail.com",
        Username: "samplehost2216@gmail.com",
        Password: "host$2216",
        To: 'sikandar.azam9825@gmail.com',
        From: email,
        Subject: "Application For Admission",
        Body: body,
        /*Attachments: [
            {
                name: "Photo.jpg",
                path: photoUrl
            }, {
                name: "Adhar_copy.jpg",
                path: adharUrl
            }, {
                name: "10th_markssheet.jpg",
                path: matricUrl
            }, {
                name: "12th_marksheet.jpg",
                path: interUrl
            }, {
                name: "diploma_certificate.jpg",
                path: diplomaUrl
            }]*/
    }).then(
        message => document.getElementById("alert").style.display = "block"
    );
}
function uploadFiles() {
    var storageRef = storage.ref();
    var filesRef = storageRef.child('files');
    var userRef = filesRef.child(userId.substring(1));
    var photoRef = userRef.child("photo.jpg");
    var file1 = document.getElementById("image").files[0];
    var adharRef = userRef.child("adhar.jpg");
    var file2 = document.getElementById("adhar-copy").files[0];
    var matricRef = userRef.child("10th_marksheet.jpg");
    var file3 = document.getElementById("matric").files[0];
    photoRef.put(file1).then(function (data) {
        photoRef.getDownloadURL().then(function (url) {
            photoUrl = String(url);
            console.log(photoUrl);
        }).catch(function (error) {
            console.log("An Error Occured.\n" + error.message);
        });
    });
    adharRef.put(file2).then(function (data) {
        adharRef.getDownloadURL().then(function (url) {
            adharUrl = String(url);
            console.log(adharUrl);
        }).catch(function (error) {
            console.log("An Error Occured.\n" + error.message);
        });
    });
    matricRef.put(file3).then(function (data) {
        matricRef.getDownloadURL().then(function (url) {
            matricUrl = String(url);
            console.log(matricUrl);
        }).catch(function (error) {
            console.log("An Error Occured.\n" + error.message);
        });
    });
    //time for some optional documents
    if (document.getElementById('inter').files.length != 0) {
        var interRef = userRef.child("12th_marksheeet.jpg");
        var file4 = document.getElementById("inter").files[0];
        interRef.put(file4).then(function (data) {
            interRef.getDownloadURL().then(function (url) {
                interUrl = String(url);
                console.log(interUrl);
            }).catch(function (error) {
                console.log("An Error Occured.\n" + error.message);
            });
        });
    }
    if (document.getElementById('diploma').files.length != 0) {
        var diplomaRef = userRef.child("diploma_certificate.jpg");
        var file5 = document.getElementById("diploma").files[0];
        diplomaRef.put(file5).then(function (data) {
            diplomaRef.getDownloadURL().then(function (url) {
                diplomaUrl = String(url);
                console.log(diplomaUrl);
            }).catch(function (error) {
                console.log("An Error Occured.\n" + error.message);
            });
        });
    }
}
