import express from 'express';
import cluster from 'cluster';
import os from "os"

const totalCPUs = os.availableParallelism();



if (cluster.isPrimary) {
    console.log(`Number of CPUS is ${totalCPUs}`)
    console.log(`Primary ${process.pid} is running`)

    for (let i = 0; i < totalCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
        console.log("lets fork another worker");
        cluster.fork()
    })
}
else {
    const app = express()
    console.log(`workder ${process.pid} started`)

    app.get("/api/:n", (req, res) => {
        let n = parseInt(req.params.n)
        let count = 0;

        if (n > 5000000000) n = 5000000000
        for (let i = 0; i < n; i++) {
            count += i;
        }

        res.send(`final count is ${count} ${process.pid}`)
    })

    app.listen(3000, () => {
        console.log("Listening on PORT 3000")
    })
}





