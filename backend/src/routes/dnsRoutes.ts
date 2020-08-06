const config = require('config');
import * as express from 'express';
const _ = require('lodash');
const router = express.Router();
import * as HttpStatus from 'http-status-codes';

import DnsService from '../services/dnsServices';
const dnsService = new DnsService();

router.post('/', async (req, res) => {
    const body = req.body;
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.headers.
    //API che sta in ascolto per ricevere i dati dal DHCP server ed elaborali
    try {

        const params = body && body.params ? body.params : null;
        console.log("PARAMS", params);
        if (params && params.ipdns) {
            console.log("dnsRoutes: received " + params.ipdns)
            await dnsService.SendPostResponse();
        }
        res.status(HttpStatus.OK).send();
    } catch (error) {
        res.status(HttpStatus.OK).send(error);
    }
});

module.exports = router;