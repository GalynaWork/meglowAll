$(document).ready(function () {
    $("#estate_button").click(function(){
        if( $(".right_side").hasClass("download")){
            $(".right_side").removeClass("download");
            $("#estate_button").removeClass("download");
        }
        else{
        $(".right_side").addClass("download");
        $("#estate_button").addClass("download");
        }
        }

    );
});

