
const hexBtn= document.querySelector(".hexBtn")
const hexColorValue =document.querySelector(".hex-color-value")
const hexColorContainer= document.querySelector(".hex-color")
const hexColorCopyBtn = document.querySelector(".hex-color-copy")
hexBtn.addEventListener("click",()=>{
    let charSet='0123456789ABCDEF'
    let hexOutput=""
    for(let i=0,charSetLength=charSet.length;i<6;i++)
    {
        hexOutput +=charSet.charAt(Math.floor(Math.random()*charSetLength))
    }
    console.log(hexOutput);
hexColorValue.textContent=`#${hexOutput}`
hexColorContainer.style.backgroundColor=`#${hexOutput}`
hexBtn.style.color=`#${hexOutput}`



})

function hexColorCopyToClipBoard(){
    navigator.clipboard.writeText(hexColorValue.textContent)
    alert("Hex color is copied to clipboard ")
}
hexColorCopyBtn.addEventListener("click",hexColorCopyToClipBoard)

//rgb color
const rgbBtn= document.querySelector(".rgdBtn")
let getRedInputRange= document.getElementById("red")
let getGreenInputRange= document.getElementById("green")
let getBlueInputRange= document.getElementById("blue")
const rgbContainer= document.querySelector(".rgb-color")
const rgbColorValue= document.querySelector(".rgb-value")
const rgbColorCopyBtn =document.querySelector(".rgb-color-copy")

rgbBtn.addEventListener("click",()=>{
    let extractRedValue=getRedInputRange.value
    let extractGreenValue=getGreenInputRange.value
    let extractBlueValue=getBlueInputRange.value
    // console.log(extractRedValue,extractGreenValue,extractBlueValue);
    rgbColorValue.textContent=`rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
rgbContainer.style.backgroundColor=`rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
rgbBtn.style.color=`rgb(${extractRedValue} ${extractGreenValue} ${extractBlueValue})`
})

function rgbValueCopy(){
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert("RGB color is copied to clipboard")
}
rgbColorCopyBtn.addEventListener("click",rgbValueCopy)
