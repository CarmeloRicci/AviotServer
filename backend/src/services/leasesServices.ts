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
        console.log ("1-->" + splitted1[0])
        console.log ("0-->" + splitted1[1])
        for (let i in splitted1) {
            //console.log(splitted1)
            //console.log(i)
            let splitted2 = splitted1[i].split(" ");
            if (splitted2.length === 5) {
                //for (let i in splitted2) {
                    temp = { timestamp: splitted2[0], mac: splitted2[1], ip: splitted2[2], host: splitted2[3], id: splitted2[4] };
                //}
                leases_file.push(temp)
            }
            // let splitted2 = splitted1[1].split(" ");
            // if (splitted2.length === 5) {
            //     for (let i in splitted2) {
            //     temp.timestamp = splitted2[0]
            //     temp.mac = splitted2[1]
            //     temp.ip = splitted2[2]
            //     temp.host = splitted2[3]
            //     temp.id = splitted2[4]
            //     }
            // }
            // leases_file.push(temp)
        }
        console.log(leases_file)
    }

}