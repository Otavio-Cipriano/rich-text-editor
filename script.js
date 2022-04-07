//Elements
const elements = document.querySelectorAll('.btn');
const fontSelector = document.querySelector('#font-selector')
const sizeSelector = document.querySelector('#size-selector')
const editorContent = document.querySelector(".text-editor-content")

//Event
elements.forEach(element => {
    element.addEventListener('click', ()=>{
        let command = element.dataset['element']

        if(command == 'createLink' || command == 'insertImage'){
            let url = prompt('Enter the link here:', 'http://') 
            execCommand(command, url)
        }else{
            execCommand(command, null)
        }
    })
})

fontSelector.addEventListener('change', ()=>{
    setFontFamily(fontSelector.value)
})

sizeSelector.addEventListener('change',()=>{
    setFontSize(sizeSelector.value)
})

//Functions

function execCommand(command, value){
    document.execCommand(command, false, value)
    editorContent.focus()
}

function setFontFamily(font){
    execCommand('fontName', font)
}

function setFontSize(size){
    execCommand('fontSize', size)
}