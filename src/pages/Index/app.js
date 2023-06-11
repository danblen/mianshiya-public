// 创建场景和相机
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 创建渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// 创建地球几何体
const geometry = new THREE.SphereGeometry(5, 32, 32);

// 加载地球纹理贴图
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./earth.jpg');

// 创建材质
const material = new THREE.MeshBasicMaterial({ map: texture });

// 创建地球网格
const earthMesh = new THREE.Mesh(geometry, material);
scene.add(earthMesh);

// 设置相机位置
camera.position.z = 10;

// 渲染函数
function animate() {
  requestAnimationFrame(animate);
  earthMesh.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();
