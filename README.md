# ads-mylog

This is a personal logger based in the famous logging tool "winston". You can save time using this winston configuration.

## Intallation

```bash
npm install ads-mylog
```

## How to use

You can see the exemple file src/exemple.js


```js
const { log } = require('./index')

log.error('logging error')
log.warn('logging warn')
log.info('logging info')
log.debug('logging debug')
```
