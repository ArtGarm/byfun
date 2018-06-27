var panorama, panorama2, viewer, container, infospot , infospot2;

if ( $('#mag').length ){
    container = document.querySelector( '#mag' );

    panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
    panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/sunset.jpg' );

    infospot = new PANOLENS.Infospot( 500, PANOLENS.DataImage.Info );
    infospot.position.set( -100, -500, -5000 );
    infospot.addHoverText( "Some staff" );
    infospot.addEventListener( 'click', function(){
        
        location.replace('catalog.html');
        //viewer.setPanorama( panorama2 );
        
    } );

    infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot2.position.set( -100, -100, 2000 );
    infospot2.addHoverText( "Some staff 2" );
    infospot2.addEventListener( 'click', function(){
        
        location.replace('catalog.html');
        
    } );

    panorama.add( infospot );
    panorama.add( infospot2 );

    viewer = new PANOLENS.Viewer( { container: container } );
    viewer.add( panorama, panorama2 );

    viewer.addUpdateCallback(function(){
    
    });
}