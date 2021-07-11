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
    handler: (argv)=>{
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
    handler: (argv)=>{
        notes.removeNote(argv.title)

    }
})

//console.log(process.argv)
//console.log(yargs.argv)

yargs.parse()