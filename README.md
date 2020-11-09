decodeco
===

deco ₍₍(ง˘ω˘)ว⁾⁾ deco

## Feature Description

URIエンコードされた文字列やUTF-8の文字コードをデコードします。

## Usage

### WebUI

https://decodeco.vercel.app/

### WebAPI

```bash
curl "https://decodeco.vercel.app/api/v1/decode?target=\xe3\x81\xa7\xe3\x81\x93"
# => でこ
```

## Dev

```bash
# docker run --rm -it -p "5000:5000" -v "${PWD}/:/home/" --workdir=/home/ node:15.1 bash
npm install -g http-server
/usr/local/lib/node_modules/http-server/bin/http-server -p 5000
#=> http://localhost:5000/

# test
echo '{ "type": "module" }' > package.json
node --experimental-modules ./src/test.js
```

