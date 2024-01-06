# holiday-udp

Fires frames at the UDP-based [secret API] of [Holiday by MooresCloud][holiday].

[secret API]: https://github.com/moorescloud/secretapi
[holiday]: http://holiday.moorescloud.com/

## Usage

    import Holiday from './holiday.js';
    const holiday = new Holiday('192.168.23.254');

    let frame = new Array[50];
    // fill frame with [r, g, b] values, each 0..value..255
    holiday.send(frame);

## Lazy Usage

If you just want to see see it work:

    npm install -g holiday-udp
    holiday-xmas 192.168.23.254 &

## API

`Holiday.send` takes two arguments:

* `frame`, an array of 50 RGB values to send to the Holiday
* `callback`, an optional callback function passed to `Socket.send`

If `callback` isn't supplied and an error occurs (e.g. `getaddrinfo ENOTFOUND`), the `Holiday` will emit `error`.

**WARNING:** On macOS, if a `setInterval` timer calls `send` an `error` emitted to no subscribers *should* bring down NodeJS if you've called `unref`, but it doesn't.

## Testing

Once you've found your Holiday, try `node bin/thrash.js <HOLIDAY IP> &`. If it works and you're into red, white, and green themed holidays at the end of the year, try `node bin/xmas.js <HOLIDAY IP> &`. The latter has a simple animation module hiding in it, waiting to be broken out.
