//we are using jquery in this for toggling 
//run script only when page is fully loaded and ready
$(".syllabus").hide();//hide every syllabus at starting
$(document).ready(function () {
    //clicking behaviour for BASIC
    $(".toggle-basic").click(function () {
        $(".syllabus-basic").toggle();
        $(".toggle-basic").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-basic > i").toggleClass("fa-angle-double-up");
        $(".icon-basic").text() == ' MORE' ? $(".icon-basic").text(" LESS") : $(".icon-basic").text(" MORE");
    });
    //clicking behaviour for basic+tally
    $(".toggle-basic-tally").click(function () {
        $(".syllabus-basic-tally").toggle();
        $(".toggle-basic-tally").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-basic-tally > i").toggleClass("fa-angle-double-up");
        $(".icon-basic-tally").text() == ' MORE' ? $(".icon-basic-tally").text(" LESS") : $(".icon-basic-tally").text(" MORE");
    });
    //for dca
    $(".toggle-dca").click(function () {
        $(".syllabus-dca").toggle();
        $(".toggle-dca").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-dca > i").toggleClass("fa-angle-double-up");
        $(".icon-dca").text() == ' MORE' ? $(".icon-dca").text(" LESS") : $(".icon-dca").text(" MORE");
    });
    //for adca
    $(".toggle-adca").click(function () {
        $(".syllabus-adca").toggle();
        $(".toggle-adca").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-adca > i").toggleClass("fa-angle-double-up");
        $(".icon-adca").text() == ' MORE' ? $(".icon-adca").text(" LESS") : $(".icon-adca").text(" MORE");
    });
    //for adra
    $(".toggle-adra").click(function () {
        $(".syllabus-adra").toggle();
        $(".toggle-adra").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-adra > i").toggleClass("fa-angle-double-up");
        $(".icon-adra").text() == ' MORE' ? $(".icon-adra").text(" LESS") : $(".icon-adra").text(" MORE");
    });

    //for hardware and networking
    $(".toggle-hn").click(function () {
        $(".syllabus-hn").toggle();
        $(".toggle-hn").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-hn > i").toggleClass("fa-angle-double-up");
        $(".icon-hn").text() == ' MORE' ? $(".icon-hn").text(" LESS") : $(".icon-hn").text(" MORE");
    });

    //for 3ds max
    $(".toggle-max").click(function () {
        $(".syllabus-max").toggle();
        $(".toggle-max").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-max > i").toggleClass("fa-angle-double-up");
        $(".icon-max").text() == ' MORE' ? $(".icon-max").text(" LESS") : $(".icon-max").text(" MORE");
    });
    //for revit
    $(".toggle-revit").click(function () {
        $(".syllabus-revit").toggle();
        $(".toggle-revit").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-revit > i").toggleClass("fa-angle-double-up");
        $(".icon-revit").text() == ' MORE' ? $(".icon-revit").text(" LESS") : $(".icon-revit").text(" MORE");
    });
    //for mannual drafting
    $(".toggle-md").click(function () {
        $(".syllabus-md").toggle();
        $(".toggle-md").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-md > i").toggleClass("fa-angle-double-up");
        $(".icon-md").text() == ' MORE' ? $(".icon-md").text(" LESS") : $(".icon-md").text(" MORE");
    });
    //for Tally
    $(".toggle-tally").click(function () {
        $(".syllabus-tally").toggle();
        $(".toggle-tally").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-tally > i").toggleClass("fa-angle-double-up");
        $(".icon-tally").text() == ' MORE' ? $(".icon-tally").text(" LESS") : $(".icon-tally").text(" MORE");
    });
    //for DTP
    $(".toggle-dtp").click(function () {
        $(".syllabus-dtp").toggle();
        $(".toggle-dtp").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-dtp > i").toggleClass("fa-angle-double-up");
        $(".icon-dtp").text() == ' MORE' ? $(".icon-dtp").text(" LESS") : $(".icon-dtp").text(" MORE");
    });
    //for cad
    $(".toggle-cad").click(function () {
        $(".syllabus-cad").toggle();
        $(".toggle-cad").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-cad > i").toggleClass("fa-angle-double-up");
        $(".icon-cad").text() == ' MORE' ? $(".icon-cad").text(" LESS") : $(".icon-cad").text(" MORE");
    });
    //for estimate and costing
    $(".toggle-ec").click(function () {
        $(".syllabus-ec").toggle();
        $(".toggle-ec").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-ec > i").toggleClass("fa-angle-double-up");
        $(".icon-ec").text() == ' MORE' ? $(".icon-ec").text(" LESS") : $(".icon-ec").text(" MORE");
    });
    //for internet
    $(".toggle-internet").click(function () {
        $(".syllabus-internet").toggle();
        $(".toggle-internet").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-internet > i").toggleClass("fa-angle-double-up");
        $(".icon-internet").text() == ' MORE' ? $(".icon-internet").text(" LESS") : $(".icon-internet").text(" MORE");
    });
    //for ms-office
    $(".toggle-office").click(function () {
        $(".syllabus-office").toggle();
        $(".toggle-office").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-office > i").toggleClass("fa-angle-double-up");
        $(".icon-office").text() == ' MORE' ? $(".icon-office").text(" LESS") : $(".icon-office").text(" MORE");
    });
    //for advanced excel
    $(".toggle-adex").click(function () {
        $(".syllabus-adex").toggle();
        $(".toggle-adex").toggleClass("btn-danger");
        //changes colour of button from green to red and red to green
        $(".toggle-adex > i").toggleClass("fa-angle-double-up");
        $(".icon-adex").text() == ' MORE' ? $(".icon-adex").text(" LESS") : $(".icon-adex").text(" MORE");
    });

});//ending of window.ready