var fs = require('fs')

fs.createReadStream('env/dev.env').pipe(fs.createWriteStream('app/dist/.env'))
