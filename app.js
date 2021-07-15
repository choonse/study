const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'',
            demandOption:true,
            type:'string'
        },
        body:{

        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)

    }
})

yargs.command({
    command:'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:'',
            demandOption:true,
            type:'string'
        },
        body:{

        }
    },
    handler (argv){
        notes.removeNote(argv.title)

    }
})

yargs.command({
    command:'list',
    describe: 'List your notes',
    handler (argv){
        notes.listNotes()

    }
})


yargs.command({
    command:'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
       
    },
    handler(argv){
        notes.readNote(argv.title)

    }
})
//console.log(process.argv)
//console.log(yargs.argv)

yargs.parse()