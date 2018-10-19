
function car_cost ( mycar , paycheck) {

    alert ( "you have a "  + mycar + paycheck + " and make $" + paycheck);

}

function get_added_text() { 
    var textpart1 = "this is a project ";
    var textpart2 = "is almost fun";
    var addtext = textpart1 + textpart2;
    return addtext;
}

car_cost ("Mustang", 1500);
var alerttext = get_added_text();
alert( alerttext);