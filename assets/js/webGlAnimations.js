var cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12;
var scene, camera, renderer;
function init(domObj) {
  renderer = new THREE.WebGLRenderer({alpha: true});
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 1.5, 1, 10000);
  camera.position.z = 500;
  var texture;
  var geometry = new THREE.BoxBufferGeometry(200, 200, 200);
  var material = new THREE.MeshBasicMaterial({ map: texture });
  // line1
  cube1 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate.gif')}));
  cube1.scale.x = cube1.scale.y = cube1.scale.z = 0.40;
  cube1.position.x = -300;
  cube1.position.y = 200;
  cube1.position.z = 0;
  scene.add(cube1);
  cube2 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_angular.gif')}));
  cube2.scale.x = cube2.scale.y = cube2.scale.z = 0.40;
  cube2.position.x = -100;
  cube2.position.y = 200;
  cube2.position.z = 0;
  scene.add(cube2);
  cube3 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_angular2.gif')}));
  cube3.scale.x = cube3.scale.y = cube3.scale.z = 0.40;
  cube3.position.x = 100;
  cube3.position.y = 200;
  cube3.position.z = 0;
  scene.add(cube3);
  cube4 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_jquery.gif')}));
  cube4.scale.x = cube4.scale.y = cube4.scale.z = 0.40;
  cube4.position.x = 300;
  cube4.position.y = 200;
  cube4.position.z = 0;
  scene.add(cube4);
  //line2
  cube5 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_boot.gif')}));
  cube5.scale.x = cube5.scale.y = cube5.scale.z = 0.40;
  cube5.position.x = -300;
  cube5.position.y = 0;
  cube5.position.z = 0;
  scene.add(cube5);
  cube6 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_css3.gif')}));
  cube6.scale.x = cube6.scale.y = cube6.scale.z = 0.40;
  cube6.position.x = -100;
  cube6.position.y = 0;
  cube6.position.z = 0;
  scene.add(cube6);
  cube7 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_javascript.gif')}));
  cube7.scale.x = cube7.scale.y = cube7.scale.z = 0.40;
  cube7.position.x = 100;
  cube7.position.y = 0;
  cube7.position.z = 0;
  scene.add(cube7);
  cube8 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_liferay.gif')}));
  cube8.scale.x = cube8.scale.y = cube8.scale.z = 0.40;
  cube8.position.x = 300;
  cube8.position.y = 0;
  cube8.position.z = 0;
  scene.add(cube8);
  //line3
  cube9 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_nodejs.gif')}));
  cube9.scale.x = cube9.scale.y = cube9.scale.z = 0.40;
  cube9.position.x = -300;
  cube9.position.y = -200;
  cube9.position.z = 0;
  scene.add(cube9);
  cube10 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_prmefaces.gif')}));
  cube10.scale.x = cube10.scale.y = cube10.scale.z = 0.40;
  cube10.position.x = -100;
  cube10.position.y = -200;
  cube10.position.z = 0;
  scene.add(cube10);
  cube11 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_k.gif')}));
  cube11.scale.x = cube11.scale.y = cube11.scale.z = 0.40;
  cube11.position.x = 100;
  cube11.position.y = -200;
  cube11.position.z = 0;
  scene.add(cube11);
  cube12 = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('assets/img/crate_se.gif')}));
  cube12.scale.x = cube12.scale.y = cube12.scale.z = 0.40;
  cube12.position.x = 300;
  cube12.position.y = -200;
  cube12.position.z = 0;
  scene.add(cube12);
  renderer.setSize(domObj.clientWidth,600);
  renderer.setPixelRatio(1);
  domObj.appendChild(renderer.domElement);
  animation();
}
function animation() {
  requestAnimationFrame(animation);
  cube1.rotation.x += 0.005;
  cube1.rotation.y += 0.01;
  cube2.rotation.x += 0.005;
  cube2.rotation.y += 0.01;
  cube3.rotation.x += 0.005;
  cube3.rotation.y += 0.01;
  cube4.rotation.x += 0.005;
  cube4.rotation.y += 0.01;
  cube5.rotation.x += 0.005;
  cube5.rotation.y += 0.01;
  cube6.rotation.x += 0.005;
  cube6.rotation.y += 0.01;
  cube7.rotation.x += 0.005;
  cube7.rotation.y += 0.01;
  cube8.rotation.x += 0.005;
  cube8.rotation.y += 0.01;
  cube9.rotation.x += 0.005;
  cube9.rotation.y += 0.01;
  cube10.rotation.x += 0.005;
  cube10.rotation.y += 0.01;
  cube11.rotation.x += 0.005;
  cube11.rotation.y += 0.01;
  cube12.rotation.x += 0.005;
  cube12.rotation.y += 0.01;
  renderer.render(scene, camera);
}
// main page script 		
var container,stats;
        var cameraHome, sceneHome1, scene2, rendererHome;
        var mouseX = 0, mouseY = 0;
        var windowHalfX;
        var windowHalfY;
        //initMainPage();
        function initMainPage(homeDom) {
    var SCREEN_WIDTH = homeDom.clientWidth;
    var SCREEN_HEIGHT = 400;
    windowHalfX = SCREEN_WIDTH / 2;
          windowHalfY = SCREEN_HEIGHT / 2;
            //container = document.createElement( 'div' );
            //homeDom.appendChild( container );
            cameraHome = new THREE.PerspectiveCamera( 35, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 5000 );
            cameraHome.position.z = 2000;
            sceneHome1 = new THREE.Scene();
            sceneHome1.fog = new THREE.Fog( 0x000000, 1500, 4000 );
            scene2 = new THREE.Scene();
            scene2.fog = sceneHome1.fog;
            // GROUND
            var imageCanvas = document.createElement( "canvas" ),
                context = imageCanvas.getContext( "2d" );
            imageCanvas.width = imageCanvas.height = 128;
            context.fillStyle = "#444";
            context.fillRect( 0, 0, 128, 128 );
            context.fillStyle = "#fff";
            context.fillRect( 0, 0, 64, 64);
            context.fillRect( 64, 64, 64, 64 );
            var textureCanvas = new THREE.CanvasTexture( imageCanvas );
            textureCanvas.repeat.set( 1000, 1000 );
            textureCanvas.wrapS = THREE.RepeatWrapping;
            textureCanvas.wrapT = THREE.RepeatWrapping;
            var textureCanvas2 = textureCanvas.clone();
            textureCanvas2.magFilter = THREE.NearestFilter;
            textureCanvas2.minFilter = THREE.NearestFilter;
            var	materialCanvas = new THREE.MeshBasicMaterial( { map: textureCanvas } );
            var materialCanvas2 = new THREE.MeshBasicMaterial( { map: textureCanvas2 } );
            var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
            var meshCanvas = new THREE.Mesh( geometry, materialCanvas );
            meshCanvas.rotation.x = - Math.PI / 2;
            meshCanvas.scale.set( 1000, 1000, 1000 );
            var meshCanvas2 = new THREE.Mesh( geometry, materialCanvas2 );
            meshCanvas2.rotation.x = - Math.PI / 2;
            meshCanvas2.scale.set( 1000, 1000, 1000 );
            // PAINTING
            var callbackPainting = function() {
                var image = texturePainting.image;
                texturePainting2.image = image;
                texturePainting2.needsUpdate = true;
                sceneHome1.add( meshCanvas );
                scene2.add( meshCanvas2 );
                var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
                var mesh = new THREE.Mesh( geometry, materialPainting );
                var mesh2 = new THREE.Mesh( geometry, materialPainting2 );
                addPainting( sceneHome1, mesh );
                addPainting( scene2, mesh2 );
                function addPainting( zscene, zmesh ) {
                    zmesh.scale.x = image.width / 50;
                    zmesh.scale.y = image.height / 50;
                    zscene.add( zmesh );
                    var meshFrame = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial() );
                    meshFrame.position.z = - 10.0;
                    meshFrame.scale.x = 1.1 * image.width / 100;
                    meshFrame.scale.y = 1.1 * image.height / 100;
                    zscene.add( meshFrame );
                    var meshShadow = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial() );
                    meshShadow.position.y = - 1.1 * image.height/2;
                    meshShadow.position.z = - 1.1 * image.height/2;
                    meshShadow.rotation.x = - Math.PI / 2;
                    meshShadow.scale.x = 1.1 * image.width / 100;
                    meshShadow.scale.y = 1.1 * image.height / 100;
                    zscene.add( meshShadow );
                    var floorHeight = - 1.117 * image.height/2;
                    meshCanvas.position.y = meshCanvas2.position.y = floorHeight;
                }
            };
            var texturePainting = new THREE.TextureLoader().load( "assets/img/homeTxt.png", callbackPainting );
            var texturePainting2 = new THREE.Texture();
            var materialPainting = new THREE.MeshBasicMaterial( { map: texturePainting } );
            var materialPainting2 = new THREE.MeshBasicMaterial( {map: texturePainting2 } );
        //	texturePainting2.minFilter = texturePainting2.magFilter = THREE.NearestFilter;
        //	texturePainting.minFilter = texturePainting.magFilter = THREE.LinearFilter;
        //texturePainting.mapping = THREE.UVMapping;
            rendererHome = new THREE.WebGLRenderer( { antialias: true } );
            rendererHome.setClearColor( sceneHome1.fog.color );
            rendererHome.setPixelRatio( window.devicePixelRatio );
            rendererHome.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
            rendererHome.autoClear = false;
            rendererHome.domElement.style.position = "relative";
            homeDom.appendChild(rendererHome.domElement);
            stats = new Stats();
            //container.appendChild( stats.dom );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    animateHome();
        }
        function onDocumentMouseMove(event) {
            mouseX = ( event.clientX - windowHalfX );
            mouseY = ( event.clientY - windowHalfY );
        }
        function animateHome() {
            requestAnimationFrame( animateHome );
            renderHome();
            stats.update();
        }
        function renderHome() {
            cameraHome.position.x += ( mouseX - cameraHome.position.x ) * .05;
            cameraHome.position.y += ( - ( mouseY - 200) - cameraHome.position.y ) * .05;
            cameraHome.lookAt( sceneHome1.position );
            rendererHome.clear();
            rendererHome.render( sceneHome1, cameraHome );
            rendererHome.render( scene2, cameraHome );
        }