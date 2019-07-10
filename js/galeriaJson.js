function crearGaleriaJson(){    
	$.getJSON( "json/jsonData.json", function( data ) {
		var htmlGallery = '';
        var htmlGallery2 = '';
        $.each( data, function( key, val ) {
			if (val.vOi == "i"){
				// imagen
				htmlGallery2 = '<a target="blank_" href="galeria_imagenes.html?imagen_id='+val.galeria+'" ><img id="imagen_"'+key+'" alt="'+val.desc_corta+'" src="../img/miniatura/'+val.src+'" data-image="'+val.src+'" data-description="'+val.desc_larga+'" style="display:none" ></a>'
			}else{
				// video                
				htmlGallery2 = '<a target="blank_" href="galeria_video.html?videos_id='+val.galeria+'" ><img id="video_"'+key+'" alt="'+val.desc_corta+' - '+val.desc_larga+'" src="../img/miniatura/'+val.src+'" data-image="'+val.src+'" data-description="'+val.desc_larga+'" style="display:none" ></a>'
			}            
			htmlGallery = htmlGallery + htmlGallery2;
		});
		
		$("#gallery").html(htmlGallery);
		
		$("#gallery").unitegallery({
			gallery_width: 1100,
			grid_num_rows:3,
			tile_as_link:true
		});
		
		$("#gallery a").attr("target", "");
		$("#gallery a").css("background-color", "");
		$("#gallery a").css("box-shadow", "");
		$("#gallery a").css("border", "3px solid rgba(0, 0, 0, 0.0)");
		
	});
}

function getHtmlGaleriaImagenes(){
	var texto = "";	
	for (var cont=0 ; cont < contarVariables() ; cont++){		
		texto = cogerVariable(cont);	
	}	
	var ids = texto.split("__");	
	var galery = "";	
	for (i = 0; i < ids.length; i++) {
		galery = galery + '<img alt="Este es el alt" src="../img/galeria/'+ids[i]+'" data-image="../img/galeria/'+ids[i]+'" data-description="esta es la descripcion">';
	}
	$("#galeriaImagenes").html(galery);
	$("#galeriaImagenes").unitegallery({
		gallery_theme: "slider"
	});
}	

function getHtmlGaleriaVideos(){
	var texto = "";	
	for (var cont=0 ; cont < contarVariables() ; cont++){		
		texto = cogerVariable(cont);	
	}	
	var ids = texto.split("__");	
	var galery = "";	
	for (i = 0; i < ids.length; i++) {
		var urlThumb = "https://vimeo.com/"+ids[i]+"/og_image_watermark/1";
 		galery = galery + '<div data-type="vimeo" data-videoid="'+ids[i]+'" data-image="'+urlThumb+'" data-title="" data-description=""></div>';
	}
	$("#galeriaVideos").html(galery);
	$("#galeriaVideos").unitegallery({
		gallery_theme: "slider"
	});
}	