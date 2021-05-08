const { taskOne, taskTwo } = require("./tasks");

async function main() {
    try {
        console.time("Measuring time");
        const valueOne = await taskOne();
        console.timeEnd("Measuring time");
        
        console.time("test");
        const valueTwo = await taskTwo();
        console.timeEnd("test")
        
    
        console.log("Task one returned", valueOne);
        console.log("Task two returned", valueTwo);
    }
    catch(e) {
        console.log(e);
    }
}

main();