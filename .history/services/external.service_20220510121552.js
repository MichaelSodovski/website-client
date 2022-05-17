
function execute(task) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const randNum = Math.random();
            console.log('randNum:', randNum);
            resolve(parseInt(Math.random() * 100))
        }, 5000)
    })
}

module.exports = {
    execute
}