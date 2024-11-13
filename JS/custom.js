var notes_area=document.querySelector('.notes_area')
var btn=document.querySelector('button')
var newnote=[]
var note = "";
btn.addEventListener('click',()=>{

    addnewnote(note)
   

})

function addnewnote(note){
    // console.log(notes_area.)
    addnote(note);

  newnote=JSON.parse(localStorage.getItem('notes')) ?? []
  
  newnote=[...newnote,note]

  // console.log(newnote)


  // console.log(newnote) 
  localStorage.setItem('notes',JSON.stringify(newnote))
}
function addnote(note){
  var notes_area=document.querySelector('.notes_area')

  var notHtml = '';
  newnote=JSON.parse(localStorage.getItem('notes')) ?? []
  newnote.map((note)=>{
    notHtml +=
    `<div class="note">
                 <div class="header_bar">
                    <i class="save fas fa-save save_icon" ></i>
                    <i class="fa-solid fa-trash trash-icon"></i>
                </div>
                <textarea name="add_note">${note}</textarea>
            </div>`
  })

  // console.log(note);
   console.log(notes_area);
   notHtml +=
    `<div class="note">
                 <div class="header_bar">
                    <i class="save fas fa-save save_icon" ></i>
                    <i class="fa-solid fa-trash trash-icon"></i>
                </div>
                <textarea name="add_note">${note}</textarea>
            </div>`

            notes_area.innerHTML = notHtml;
  
}
function savenote(note,index){
  //  console.log(index,note)
  newnote.splice(index,1,note)
  localStorage.setItem('notes',JSON.stringify(newnote))
}

 notes_area.addEventListener('click',(event)=>{
  if(event.target.classList.contains('save_icon')){
    var  note=document.querySelectorAll('textarea')
    console.log(note)
    note.forEach((note,index)=>{
      // console.log(note.value,index)
      savenote(note.value,index)
    })
  }  
  else if(event.target.classList.contains('trash-icon')){
    newnote=JSON.parse(localStorage.getItem('notes')) ?? []
    newnote.pop()
    localStorage.setItem('notes',JSON.stringify(newnote))
    const lastNote = event.currentTarget.querySelector('.note:last-child');
    if (lastNote) {
      lastNote.remove(); 
  }
  newnote=JSON.parse(localStorage.getItem('notes')) ?? []
  if(newnote.length===0){
    localStorage.removeItem('notes')
  }
  }
 })
 

 var newnote=JSON.parse(localStorage.getItem('notes')) ?? []
 console.log(newnote)
 if(newnote.length===0){
  addnewnote('')
 }
 else{
  newnote.map((note)=>{
    addnote(note)
   })
  
 }

