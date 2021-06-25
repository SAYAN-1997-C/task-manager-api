const mongoose = require('mongoose')

mongoose.connect(process.env.MongoDBUrl,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
})

