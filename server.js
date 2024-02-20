import {app} from './app.js';
import { connectiondb } from './data/database.js'
//Database Connection...
connectiondb() 
app.listen(4000, () => {
    console.log(`Server is Working on Port : ${process.env.PORT} In ${process.env.NODE_ENV} Mode`);
  });
  