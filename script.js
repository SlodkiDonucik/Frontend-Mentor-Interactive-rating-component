const marks = new Array(5)
let mark = 0
let a = mark
const submit = document.querySelector(".sub")
const newContent = document.querySelector(".card")

// "get elem" for all ids
for (let i = 0; i < marks.length; i++) {
    marks[i] = document.querySelector('#id' + (i + 1))
}

// "onclick" for add event listener
const addActiveClass = (a) => {
    for (let i = 0; i < marks.length; i++) {
        marks[i].classList.remove('active')
    }
    marks[a].classList.add('active')
    mark = a + 1
}

//add event listener for all marks
for (let i = 0; i < marks.length; i++) {
    marks[i].addEventListener("click", () => addActiveClass(i))
}

// new content for submit
submit.addEventListener("click", () => {
    if (mark) {
        newContent.innerHTML = `  
            <div class="thank-pic">
                <img src="./images/illustration-thank-you.svg" alt="thank you">   
            </div>
            <div class="thank-pill">You selected ${mark} out of 5</div>
            <div class="thank-text">
                <h1 class="header">Thank you!</h1>
                <p class="para">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        `
        newContent.classList.add('thank-pos')
    }
})




