/* <![CDATA[ */
    
//document.write('<s'+'cript type="text/javascript" src="http://en.ad.altervista.org/js.ad/size=300X250/r='+new Date().getTime()+'"><\/s'+'cript>');

/* ]]> */

$( document ).ready(function() {

    $("pre.src").addClass("prettyprint linenums");
    $("code").addClass("prettyprint");

    $("#table-of-contents").addClass("toc"); // ui-widget
    $("#org-div-home-and-up").addClass(""); // ui-widget  ui-widget-header
    $("#content").addClass("");  // ui-widget  ui-widget-content
    $("#preamble").addClass("");  // ui-widget  ui-widget-header
    $("#postamble").addClass(""); // ui-widget  ui-widget-header
    
    // Breadcrumbs y estilos genéricos de índice
    // TODO: revisar cómo asignar los nombres de clase a los índices o página principal
    
    var ruta = $(location).attr('pathname');
    
    console.log(ruta);
    var f = ruta.indexOf(".");
    var atras = "";
    if ( f != -1 ) {
	// La ruta hace referencia a un nombre de archivo
	var e = ruta.indexOf("/index.html");
	if (e != -1) {
	    // La ruta hace referencia a index.html
	    $(".outline-2").addClass("toc lista");
	    ruta = ruta.substring(1, e);
	    atras = "../";
	} else {
	    // La ruta hace referencia a un archivo genérico
	    ruta = ruta.substring(1,f);
	    atras = "./";
	}
    } else {
	// La ruta hace referencia a una carpeta
	$(".outline-2").addClass("toc lista");
	atras="../";
	ruta = ruta.substring(1, ruta.length-1);
    }

    if (ruta =="/" || ruta=="/index.html") {
	//Estamos en la página principal
	$(".outline-2").removeClass("toc lista");
	$(".outline-text-2 ul").addClass("lista_main");
	$("#outline-container-sec-1").addClass("paginicial");    
    }


    var vect = ruta.split("/");
    if (ruta=="/") vect=[];
    console.log(vect);
    var breadcrumb = "";
    for (var i = vect.length-1; i >= 0; --i) { 
	if (i != vect.length-1) {
	    breadcrumb = "<a href='" + atras + "'>" + vect[i] + "</a>" + " > " + breadcrumb;
	    atras+="../";
	} else {
	    breadcrumb += vect[i];   
	}

	
    }
    console.log($(location).attr('hostname'));
    breadcrumb = "<a href='http://" + $(location).attr('hostname')  +"'>INICIO</a> > " + breadcrumb;
    
    //var nav = $( "#org-div-home-and-up" ).html();
     $( "#org-div-home-and-up" ).remove();
    var bread_bar = $("<div>").addClass("navbar");
    var span1 = $("<span>").html(breadcrumb).addClass("breadcrumb");
    //var span2 = $("<span>").html(nav).addClass("nav");
    //bread_bar.append(span1).append(span2);
    bread_bar.append(span1);
    bread_bar.insertAfter("#preamble");
    bread_bar.addClass("ui-widget ui-widget-header");
    //$( "#org-div-home-and-up" ).insertAfter("#preamble");

    //$( "#org-div-home-and-up" ).empty().append(span1).append(span2);
    

    // Table of contents
    //$("#table-of-contents").accordion({ collapsible: true });
    
    //Banner
    /*var banner = $("<div>").addClass("banner").attr("id","banner");;
    banner.insertAfter(".title");
    $("iframe[id^='av']").appendTo(".banner");*/
    //banner.load( "prueba.html" );

//document.write('<s'+'cript type="text/javascript" src="http://en.ad.altervista.org/js.ad/size=300X250/r='+new Date().getTime()+'"><\/s'+'cript>');
/* ]]> */
//</script>






        
});


