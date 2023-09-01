var allimg = document.images;
console.log(allimg);
for(i=0;i<=allimg.length-1;i++){
    allimg[i].src=`./images/${i}.jpg`;
    console.log(i);
}
var imageFilePath;
function imageContainer(imagePath){
    document.querySelector("#biggerImageContainer").style.display="flex";
    document.querySelector("#image").style.backgroundImage=`url(${imagePath})`;
    imageFilePath=imagePath;
}
function closeImageContainer(){
    document.querySelector("#biggerImageContainer").style.display="none";
}
function editWindowEnable(){
    document.querySelector("#editContainer").style.display="flex";
    document.getElementById("imageTag").style.backgroundImage=`URL(${imageFilePath})`;
    console.log(imageFilePath);
}
function effects(){
    var blurval=document.getElementById("blur").value;
    var brightVal=document.getElementById("brightVal").value;
    var conVal=document.getElementById("conVal").value;
    var grayVal=document.getElementById("grayVal").value;
    var hueVal=document.getElementById("hueVal").value;
    var invVal=document.getElementById("invVal").value;
    var opaVal=document.getElementById("opaVal").value;
    var satVal=document.getElementById("satVal").value;
    var sepVal=document.getElementById("sepVal").value;
  
    document.getElementById("imageTag").style.filter=`blur(${blurval}px)  brightness(${brightVal}%) contrast(${conVal}%) grayscale(${grayVal}%) hue-rotate(${hueVal}deg) invert(${invVal}%)  opacity(${opaVal}%) saturate(${satVal}%) sepia(${sepVal}%)`;
  
    var rotz=document.getElementById("rotz").value;
    var rotx=document.getElementById("rotx").value;
    var roty=document.getElementById("roty").value;
    var scaleVal=document.getElementById("scaleVal").value;
    var scalex=document.getElementById("scalex").value;
    var scaley=document.getElementById("scaley").value;
    var skewVal=document.getElementById("skewVal").value;
    var skewX=document.getElementById("skewX").value;
    var skewY=document.getElementById("skewY").value;
  
    document.getElementById("imageTag").style.transform=`rotateZ(${rotz}deg) rotateX(${rotx}deg) rotateY(${roty}deg) scale(${scaleVal}) scaleX(${scalex}) scaleY(${scaley}) skew(${skewVal}deg) skewX(${skewX}deg) skewY(${skewY}deg)`;

}

function editWindowClose(){
    document.getElementById("editContainer").style.display="none";
}