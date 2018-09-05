const models = require('../src/models/db')

async function  seed() {
    await models.User.bulkCreate([
        {username:'firstuser',password:'firstpass'},
        {username:'seconduser',password:'secondpass'}
    ])

    await models.Article.bulkCreate([
        {
            title:'',
            content:'',
            authorId:1
        },
        {
            title:'',
            content:'',
            authorId:1
        },
        {
            title:'',
            content:'',
            authorId:2
        },
        {
            title:'',
            content:'',
            authorId:2
        },
    ])
}