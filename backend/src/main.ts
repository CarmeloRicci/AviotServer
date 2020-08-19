import * as express from 'express';
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


// -----  API per comunicare ai gateway il dns  ----- \\
const pubApiDnsRoute = require('./routes/dnsRoutes');
app.use('/dns_request', pubApiDnsRoute);


// -----  Avvia il job che sta in ascolto in modo da intercettare i cambiamenti dell'arp table e del file dnsmasq.leases  ----- \\ 
// -----  ad ogni modifica verrà richiamato il metodo per scansionare l'arp table e contattare i GW                       ----- \\
require('./shared/watcher');

//import { WatcherService } from './shared/watcher';

//const WatcherService = require('./shared/watcher');
// import WatcherService from './shared/watcher';

// const watcherService = new WatcherService();
// watcherService.watcher_file_arp();
// watcherService.watcher_file_leases();


app.listen(3880, () => {
  console.log('Application listening on port 3880!');
});

module.exports = app;
