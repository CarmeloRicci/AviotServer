const arp1 = require('arp-a');
const cfg = require('config');
const equal = require('deep-equal');
const fs = require('fs');
import { Utilities } from '../shared/utilities';
import _ = require('lodash');
//const leases = require('dnsmasq-leases');


export default class LeasesServices {
    async leasesServices(ip: string) {
        let data = fs.readFileSync('/var/lib/misc/dnsmasq.leases', 'utf8');
        console.log('Leases',data);
    }

}