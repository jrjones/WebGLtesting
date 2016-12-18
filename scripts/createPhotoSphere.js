// creates a photosphere of the specified size and geometric complexity textured with the specified image
function createPhotoSphere(imageUrl, size, segments)
{
    var myMap = tLoader.load(imageUrl);
    var myMat = new THREE.MeshPhongMaterial({map: myMap});
    var myGeometry = new THREE.SphereGeometry(size, segments, segments);
    mySphere = new THREE.mesh(myGeometry, myMat);

    return mySphere;
}
