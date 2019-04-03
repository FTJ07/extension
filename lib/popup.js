$(function(){
    var config = {
        apiKey: "AIzaSyDFvmgluQrtqkBUqtIzyBZl3YK6Zw9xtxY",
        authDomain: "relativefact.firebaseapp.com",
        databaseURL: "https://relativefact.firebaseio.com",
        projectId: "relativefact",
        messagingSenderId: "110510668976"
      };
      firebase.initializeApp(config);

      $("#addRelative").on('click',AddRelative());
})

function AddRelative(){
    var relativeName = $("relativeName").val();
    var relativPhoneNumber = $("relativeNumber").val();
    var remindingDays = $("remindingDays").val();
    var relObj ={
        "relativeName":relativeName,
        "relativPhoneNumber":relativPhoneNumber,
        "remindingDays":remindingDays
    };

    var firebaseRef = firebase.database().ref();
    firebaseRef.child('Relatives').push().set(relObj);
    console.log();
}