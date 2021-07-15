// const square = function(x){
//     return x * x
// }


// const square = (x) => {
//     return x * x
// }

//const square = (x) =>  x * x 

//console.log(square(3))


const event = {
    name:'birthday party',
    guestList: ['Andrew','Jen', 'Mike'],
    printGuestList()  {
        
        console.log('Guest list for ' + this.name)
        name:'hi'


        this.guestList.forEach((guest)=> {
            console.log(guest + 'is attending ' + this.name)
        })
    }
}

event.printGuestList()

