const { notEqual } = require('assert')
const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return 'Your Notes...'
}


const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    console.log(duplicateNotes)

    if(duplicateNotes.length === 0){
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


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
    
}