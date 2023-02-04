let button = document.querySelector('button')
let one = document.querySelector('.one')
let two = document.querySelector('.two')
let three = document.querySelector('.three')
let image = document.querySelectorAll('.two img')
let timeplus = document.querySelector('.time span')
let scoreplus = document.querySelector('.score span')
let photos = document.querySelector('.photos')



button.onclick = () => {
    one.style.display = 'none'
    two.style.display = 'block'
    two.style.display = 'flex '
}

for(let i=0;i<image.length;i++){
    image[i].onclick = () => {
    
    two.style.display = 'none'
    three.style.display = 'block'
    three.style.display = 'flex'
    
    Timeout()
    scorestart()


  
   
    let y = three.clientHeight
    let x = three.clientWidth

    setInterval(() => {
        let left = Math.random() *(x-50)
        let top = Math.random() * (y-50)
        console.log(left)

        let newImg = document.createElement('img')
        if(i==0){
            newImg.src = './Image/Chacha-Chaudhary.jpg'
        }
        if(i==1){
            newImg.src = './Image/Doremon.png'
        }
        if(i==2){
            newImg.src = './Image/hathori-removebg-preview.png'
        }
      

        photos.insertAdjacentElement('beforeend', newImg)
        newImg.style.left = left + 'px'
        newImg.style.top = top + 'px'

        newImg.setAttribute('onclick','tab(this)')
        // newImg.onclick =()=>{
        //     newImg.remove()
        //     scoreplus.innerHTML = Number( scoreplus.innerHTML) +1
        // }


    }, 600)

}





}



function Timeout() {
    setInterval(() => {
        if(timeplus.innerHTML <30){
        timeplus.innerHTML = Number(timeplus.innerHTML) + 1
        }
        else{
            alert("Time Out.....\n"+"Your score is...."+scoreplus.innerHTML)
        }
    }, 1000)
}
function scorestart() {
    scoreplus.innerHTML = 0

}



    function tab(pic){
        pic.remove()
        scoreplus.innerHTML = Number( scoreplus.innerHTML) +1
    }
