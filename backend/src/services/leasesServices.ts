const arp1 = require('arp-a');
const cfg = require('config');
const equal = require('deep-equal');
const fs = require('fs');
import { Utilities } from '../shared/utilities';
import _ = require('lodash');
import { FormatLeases } from "../interfaces/interfaces";



export default class LeasesServices {
    async leasesServices(ip: string) {
        let leases_file: FormatLeases[] = new Array();
        let temp: FormatLeases;
        let data = fs.readFileSync('/var/lib/misc/dnsmasq.leases', 'utf8');
        //console.log('Leases', data);
        let splitted1 = data.split("\n");
        for (let i in splitted1) {
            let splitted2 = splitted1[i].split(" ");
            if (splitted2.length === 5) {
                temp = { timestamp: splitted2[0], mac: splitted2[1], ip: splitted2[2], host: splitted2[3], id: splitted2[4] };
                leases_file.push(temp)
            }
        }
        console.log(leases_file)
    }
}