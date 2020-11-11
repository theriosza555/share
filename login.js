var firebaseConfig = {
    apiKey: "AIzaSyCgTsXZhfvGUhUspcX774LbrosJaWURnkw",
    authDomain: "volunteer-4f2fc.firebaseapp.com",
    databaseURL: "https://volunteer-4f2fc.firebaseio.com",
    projectId: "volunteer-4f2fc",
    storageBucket: "volunteer-4f2fc.appspot.com",
    messagingSenderId: "572865921645",
    appId: "1:572865921645:web:4ba8459ffc2d768fd37564",
    measurementId: "G-5WLN3P0LFJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function()
{
    var email = $("#email_field").val();
    var password = $("#password_field").val();

    if(email != ""  &&  password  != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);
        result.catch(function(error)
        {
           var errorCode = error.code;
           var errorMessage =  error.message;
           
           console.log(errorCode);
           onsole.log(errorMessage);
           window.alert("Message : " + errorMessage);
        });
    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
});