function cambiarMenu(){ 
    if ( $("#section0").hasClass('active')){
        $("#barra").removeClass("navbar-fixed-top");
        $("#barra").addClass("navbar-fixed-bottom"); 
    };
    if ( $("#section1").hasClass('active')){
        $("#barra").removeClass("navbar-fixed-bottom");
        $("#barra").addClass("navbar-fixed-top"); 
    };  
    if ( $("#section2").hasClass('active')){
        $("#barra").removeClass("navbar-fixed-bottom");
        $("#barra").addClass("navbar-fixed-top");  
    };
    if ( $("#section3").hasClass('active')){
        $("#barra").removeClass("navbar-fixed-bottom");
        $("#barra").addClass("navbar-fixed-top");  
    };   
}