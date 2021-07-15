const { notEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=>{ note.title === title })

    const duplicateNote = notes.find((note)=>note.title===title)

    console.log(duplicateNotes)

    if(!duplicateNote){
        notes.push({
            title:title,
            body:body
        })
    
    saveNotes(notes)
    console.log('New note Added')
    }else{
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    //const dataBuffer = fs.readFileSync('notes.json')
    //const dataJSON = dataBuffer.toString()
    //const afterData = JSON.parse(dataJSON)
    // ->
    const afterData = loadNotes()
    
    const result = afterData.filter((data)=>{
        return data.title !== title
    })

    //console.log(result)
    //console.log(afterData)
    //console.log(result)
    
    //const resultinput = JSON.stringify(result)
    // if(afterData.length!==result.length){
    // fs.writeFileSync('notes.json',resultinput)
    // console.log("file has changed")
    // }   
    // ->

    if(afterData.length>result.length){
        console.log(chalk.green.inverse('Note Removed'))
         saveNotes(result)
    }else{
        console.log(chalk.green.inverse('Not Removed'))
    }
}

const readNote= (title) => {
    const notes = loadNotes()
    console.log(notes)
    const note = notes.find((note)=> note.title===title)
    console.log(note)
    if(note){
        console.log(note.title, note.body)
    }else{
        console.log('Note not found')
    }

}

const listNotes = () => {
    
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))

    notes.forEach((note)=>{
        console.log(note.title)
    })

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes:listNotes,   
    readNote:readNote,
}