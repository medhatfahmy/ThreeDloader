var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 5000 );
camera.position.z = 250;

var renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;
  
var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(70, 50%, 100%)'),0.75);
keyLight.position.set(-100, 10, 100);
var keyLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(30, 10%, 10%)'),0.75);
keyLight.position.set(-100, 90, 100);
var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(70, 50%, 100%)'), 1);
fillLight.position.set(100, 10, 100);
var fillLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(70, 50%, 10%)'), 0.50);
fillLight.position.set(100, 90, 100);
var backLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 50%, 100%)'), 0.75);
backLight.position.set(100, 10, -100);
 var backLight2 = new THREE.DirectionalLight(new THREE.Color('hsl(30, 50%, 10%)'), 0.80);
 backLight.position.set(100, 90, -100);
var lightambiant = new THREE.AmbientLight(0xffffff , 0.5);
var lightpoint = new THREE.PointLight(0xffffff ,1.0, 1000);

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);
scene.add(lightambiant);
scene.add(lightpoint);
scene.add(keyLight2);
scene.add(fillLight2);
scene.add(backLight2);


var mtlLoader = new THREE.MTLLoader();
mtlLoader.setTexturePath('/examples/3d-obj-loader/assets/');
mtlLoader.setPath('/examples/3d-obj-loader/assets/');
mtlLoader.load('fa_A.mtl', function (materials) {
    materials.preload();0
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.setPath('/examples/3d-obj-loader/assets/');
    objLoader.load('fa_A.obj', function (object) {

        scene.add(object);
        object.position.y -= 90;

    });

});

var animate = function () {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render(scene, camera);
};

animate();