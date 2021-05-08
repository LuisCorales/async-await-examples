const { taskOne, taskTwo } = require("./tasks");

async function main() {
    try {
        console.time("Measuring time");
        const results = await Promise.all([taskOne(), taskTwo()]); //Executed at the same time
        
        console.timeEnd("Measuring time");
        
        console.log("Task one returned", results[0]);
        console.log("Task two returned", results[1]);
    }
    catch(e) {
        console.log(e);
    }
}

main();