import {app} from './initializers/bolt'
import {echo} from './commands/hello'


(async()=>{
  const server = await app.start(process.env.PORT || 80) as any;
  if(server){
    console.log(`⚡️ Bolt is running! PORT: ${server.address().port}`)
  }
})();

echo();

