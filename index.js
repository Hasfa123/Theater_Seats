//create a 6*6 multidimensional array
var myArray = new Array(6);

for (i=0; i<6; i++){
    myArray[i] = new Array(6);
}

//function to display the array
function displayArray(){
    document.getElementById("cell1").innerHTML = myArray[0][0] = parseInt(document.getElementById("display0").value, 10);
    document.getElementById("cell2").innerHTML = myArray[0][1] = parseInt(document.getElementById("display1").value, 10);
    document.getElementById("cell3").innerHTML = myArray[0][2] = parseInt(document.getElementById("display2").value, 10);
    document.getElementById("cell4").innerHTML = myArray[0][3] = parseInt(document.getElementById("display3").value, 10);
    document.getElementById("cell5").innerHTML = myArray[0][4] = parseInt(document.getElementById("display4").value, 10);
    document.getElementById("cell6").innerHTML = myArray[0][5] = parseInt(document.getElementById("display5").value, 10);

    document.getElementById("cell7").innerHTML = myArray[1][0] = parseInt(document.getElementById("display6").value, 10);
    document.getElementById("cell8").innerHTML = myArray[1][1] = parseInt(document.getElementById("display7").value, 10);
    document.getElementById("cell9").innerHTML = myArray[1][2] = parseInt(document.getElementById("display8").value, 10);
    document.getElementById("cell10").innerHTML = myArray[1][3] = parseInt(document.getElementById("display9").value, 10);
    document.getElementById("cell11").innerHTML = myArray[1][4] = parseInt(document.getElementById("display10").value, 10);
    document.getElementById("cell12").innerHTML = myArray[1][5] = parseInt(document.getElementById("display11").value, 10);

    document.getElementById("cell13").innerHTML = myArray[2][0] = parseInt(document.getElementById("display12").value, 10);
    document.getElementById("cell14").innerHTML = myArray[2][1] = parseInt(document.getElementById("display13").value, 10);
    document.getElementById("cell15").innerHTML = myArray[2][2] = parseInt(document.getElementById("display14").value, 10);
    document.getElementById("cell16").innerHTML = myArray[2][3] = parseInt(document.getElementById("display15").value, 10);
    document.getElementById("cell17").innerHTML = myArray[2][4] = parseInt(document.getElementById("display16").value, 10);
    document.getElementById("cell18").innerHTML = myArray[2][5] = parseInt(document.getElementById("display17").value, 10);

    document.getElementById("cell19").innerHTML = myArray[3][0] = parseInt(document.getElementById("display18").value, 10);
    document.getElementById("cell20").innerHTML = myArray[3][1] = parseInt(document.getElementById("display19").value, 10);
    document.getElementById("cell21").innerHTML = myArray[3][2] = parseInt(document.getElementById("display20").value, 10);
    document.getElementById("cell22").innerHTML = myArray[3][3] = parseInt(document.getElementById("display21").value, 10);
    document.getElementById("cell23").innerHTML = myArray[3][4] = parseInt(document.getElementById("display22").value, 10);
    document.getElementById("cell24").innerHTML = myArray[3][5] = parseInt(document.getElementById("display23").value, 10);

    document.getElementById("cell25").innerHTML = myArray[4][0] = parseInt(document.getElementById("display24").value, 10);
    document.getElementById("cell26").innerHTML = myArray[4][1] = parseInt(document.getElementById("display25").value, 10);
    document.getElementById("cell27").innerHTML = myArray[4][2] = parseInt(document.getElementById("display26").value, 10);
    document.getElementById("cell28").innerHTML = myArray[4][3] = parseInt(document.getElementById("display27").value, 10);
    document.getElementById("cell29").innerHTML = myArray[4][4] = parseInt(document.getElementById("display28").value, 10);
    document.getElementById("cell30").innerHTML = myArray[4][5] = parseInt(document.getElementById("display29").value, 10);

    document.getElementById("cell31").innerHTML = myArray[5][0] = parseInt(document.getElementById("display30").value, 10);
    document.getElementById("cell32").innerHTML = myArray[5][1] = parseInt(document.getElementById("display31").value, 10);
    document.getElementById("cell33").innerHTML = myArray[5][2] = parseInt(document.getElementById("display32").value, 10);
    document.getElementById("cell34").innerHTML = myArray[5][3] = parseInt(document.getElementById("display33").value, 10);
    document.getElementById("cell35").innerHTML = myArray[5][4] = parseInt(document.getElementById("display34").value, 10);
    document.getElementById("cell36").innerHTML = myArray[5][5] = parseInt(document.getElementById("display35").value, 10);
    
//compares 
    for (var i=0; i < myArray.length; i++){
        for(var j=0; j < myArray[i].length; j++){
            var num = myArray[i][j];
            for(var k = i+1; k < myArray.length; k++){
                if(num < myArray[k][j]){
                    document.getElementById("result").innerHTML = "True";
                   // document.getElementsByTagName("TD").style.color = "green";
            }else{
                document.getElementById("result").innerHTML = "False";
            }
            }
        }
    }
    
    
   // myArray[i][j].style.color = "red";

    

}
    
    
    

