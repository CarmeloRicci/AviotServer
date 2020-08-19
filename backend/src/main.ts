import * as express from 'express';
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


// -----  API che gestisce le richieste di tipo dns  ----- \\
const pubApiDnsRoute = require('./routes/dnsRoutes');
app.use('/dns', pubApiDnsRoute);


// -----  Avvia il job che sta in ascolto in modo da intercettare i cambiamenti dell'arp table e del file dnsmasq.leases  ----- \\ 
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
