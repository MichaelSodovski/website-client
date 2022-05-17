
function execute(task) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const randNum = Math.random();
            console.log('randNum:', randNum);
            // if (randNum > 0.5) resolve(parseInt(Math.random() * 100))
            // else reject('Err');
            resolve(parseInt(Math.random() * 100))
        }, 5000)
    })
}

module.exports = {
    execute
}