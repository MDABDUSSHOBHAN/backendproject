// ai file ar madhome je kono port onno je kono file a nite hobe ......

import dotenv from 'dotenv';
import path from 'path'
dotenv.config({path:path.join((process.cwd(),'.env'))});
//current dir ar sathe .env file add kora hoice ai file ar madhome ....

//what kind of voi do you have ??

// Nothing 
//Database url and port are install of this port---

export default {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
}
