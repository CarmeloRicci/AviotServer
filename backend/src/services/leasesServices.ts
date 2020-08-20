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
        let temp:FormatLeases;
        let data = fs.readFileSync('/var/lib/misc/dnsmasq.leases', 'utf8');
        console.log('Leases',data);
        let splitted1 = data.split("\n");
        for (let i in splitted1) {
            console.log(i,splitted1)
            // let splitted2 = i.split(" ");
            // if (splitted2.length === 5) {
            //     for (let i in splitted1) {

            //     }

            // }
        }

    }

}