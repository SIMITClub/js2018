function startTime() {


    var date = new Date();
    var day = date.getDay();
     var month = date.getMonth() ;
    var daym = date.getDate();
     var year = date.getYear();
           if (year < 1000) {
            year += 1900
 var months = new Array('January','February','March','April','May',
                             'June','July','August','September','October',
                            'November','December');
 var days = new Array ("Monday, " , "Tuesday, " , "Wednesday, " , "Thursday, " , "Friday, " , 
                           "Saturday," , "Sunday," )

// TIME
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
      
       if (h== 24) {
           h= 0;
       }
       else if (h>12) {
           h = h-0 ;
       }
    }
       if (h<10) {
           h= "0" + h;
               }
        if (m <10) {
            m = "0" + m;
        }
        if (s <10) {
            s = "0" + s;
        }
        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = " " + days[day] + " " + daym + " "  + months[month] + " " + year + "|" 
                               + h + ":" + m + ":" + s ;
        myClock.innerText = " " + days[day] + " " + daym +  " " + months[month] + " " + year + "|" 
                               + h + ":" + m + ":" + s ;
  
         setTimeout("startTime()" , 1000);
    }
startTime();

    