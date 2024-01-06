import dgram from 'node:dgram';
import { Buffer } from 'node:buffer';

export default class Holiday {
	constructor(host, portoverride) {
		this.address = host;
		this.port = portoverride || 9988;
		this.socket = dgram.createSocket('udp4');
	}

	send(frames, callback) {
		let bytes = new Uint8Array(160);

		for (let idx = 0; idx < 50; idx++) {
			let colour = frames[idx],
				offset = 10 + (idx * 3);
			if (colour && colour.length) {
				bytes[offset++] = colour[0] || 0;
				bytes[offset++] = colour[1] || 0;
				bytes[offset] = colour[2] || 0;
			}
		}

		let packet = Buffer.from(bytes);

        this.socket.send(packet, this.port, this.address, (err) => {
            callback && callback(err);
        });
	}
}
