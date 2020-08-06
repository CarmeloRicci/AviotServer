const arp1 = require('arp-a');
const cfg = require('config');
const equal = require('deep-equal');
const fs = require('fs');
import { Utilities } from '../shared/utilities';
import _ = require('lodash');


export default class DnsService {
    async SendDnsResponse() {
        let request_data = {
            url: `http://${ip}:3800/dns_response`,
            method: 'POST',
            body: {
                params: {
                    dsn: '10.10.0.1'
                }
            },
            json: true
        };
        await Utilities.request(request_data);
    }
}