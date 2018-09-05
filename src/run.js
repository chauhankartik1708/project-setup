const {app} = require('./server')
const {db} = require('./models/db')
const log = require('debug')('app:run')

async function run() {
    await db.sync({force:true})  //force: true to delete and recreate all the tables
    log('Database is ready')
    app.listen(2929,()=>{
        log('Sever is running on port 2929')
    })
}

run()