//we are using SMTPJS for sending form data to an email
function sendMail() {
    var subject = document.getElementById("subject").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var body = "Sender's Email = " + email + "<br/>"
        + "Sender's Phone Number = " + mobile + "<br/>" +
        "Messege = " + "<br/>" + document.getElementById("body").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "samplehost2216@gmail.com",
        Password: "host$2216",
        To: 'sikandar.azam9825@gmail.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        message => alert("Submitted successfully!")
    );
}