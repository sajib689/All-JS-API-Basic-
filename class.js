class Instructor {
    name;
    desitgnation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)
    }
    createQuize(module){
        console.log(`please create quize for module ${module}`)
    }
}
const amir = new Instructor('amir','Mumbai');
console.log(amir)