$(document).ready(function(){

    //setup crossroads
    crossroads.addRoute('foo');
    crossroads.routed.add(console.log, console); //log all routes

    //setup hasher
    function parseHash(newHash, oldHash){
        crossroads.parse(newHash);
    }
    hasher.initialized.add(parseHash); //parse initial hash
    hasher.changed.add(parseHash); //parse hash changes
    hasher.init(); //start listening for history change
    
    if (!localStorage.datacount || localStorage.datacount == null)
    localStorage.datacount=0;
});

    var link3 = crossroads.addRoute('', function() {
        datalength = localStorage.datacount;
        htmlText = "";
        if (datalength > 0){
            for (var i = 1; i <= datalength; i++){
                myData = localStorage.getItem("data" + i);
                myData = JSON.parse(myData);
                htmlText = htmlText + "<tr onclick='trClick(this," +i+ ")'><td>" + myData.nickname + "</td><tr>";
            }
        }
        else{
            htmlText = htmlText + "<tr><td> no data found </td><tr>";
        }
            $('#maintable tbody').html(htmlText);
            $("#masterC").show();
            $("#divFrmAddKenalan").hide();
            $("#divFrmEditKenalan").hide();
    });

    var link4 = crossroads.addRoute('btnAddKenalan', function(){
        $("#masterC").hide();
        $("#divFrmAddKenalan").show();
        $("#divFrmEditKenalan").hide();
    });

    $(document).ready(function(){
        $("#frmAddKenalan").submit(function(e){
            e.preventDefault();
            e.stopPropagation();
            var firstName = $("#firstname").val();
            var lastName = $("#lastname").val();
            var nickName = $("#nickname").val();
            var phoneNum = $("#phoneno").val();
            var emailAdd = $("#contactemail").val();
        
            myData={};
            myData.firstname=firstName;
            myData.lastname=lastName;
            myData.nickname = nickName;
            myData.phoneno = phoneNum;
            myData.contactemail = emailAdd;
            console.log(JSON.stringify(myData));
            var i = localStorage.datacount
            i++;
            localStorage.setItem("data"+i, JSON.stringify(myData));
            localStorage.datacount=i;
        
            alert('New data added');
          
            $("#masterC").show();
            $("#divFrmAddKenalan").hide();
            $("#divFrmEditKenalan").hide();
            
        });
    
        
    });