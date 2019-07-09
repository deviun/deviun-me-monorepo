# API

Service to manage data resources: objects, lists.

## NEEDS

- MongoDB

## ENV

Make file `.env` at root folder.

Main variables:

`ADMIN_TOKEN` — token to manage data resource via API.

`DATADOG_API_KEY` — datadog api token to use cloud logging.

Other (that has default values):

`MONGO_HOST` — mongodb host (ip or hostname).

`MONGO_DB` — mongodb database name.

`SERVER_PORT` — API server port.

> Also see `./config/index.ts` file.

## INSTALL

```bash
$ npm i
```

## BUILD

Developer build:

```bash
$ npm run build-watch
```

Production build:

```bash
$ npm run build
```

## RUN

```bash
$ npm start
```

## API METHODS

### **POST** /object

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Body:

```json
{
  "id": "skillList",
  "data": {
    "skills": [
      {
        "imagePath": "/static/images/skills/nodejs.svg",
        "level": 2
      },
    ]
  }
}
```

Create some object.

----

### **GET** /object/skillList

Headers:

- Content-Type = application/json

Get object.

-----

### **PUT** /object/skillList

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Body:

```json
{
  "data": {
    "skills": [
      {
        "imagePath": "/static/images/skills/nodejs.svg",
        "level": 3
      },
    ]
  }
}
```

Update object.

------

### **DELETE** /object/skillList

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Delete object.

-----

### **POST** /list/playlists

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Body:

```json
{
  "cover": "https://is2-ssl.mzstatic.com/image/thumb/SG-MQ-US-001-Image000001/v4/a1/8c/78/a18c78c2-a1dd-5c1e-743b-670ae0ddad25/image/313x313cc.jpg",
  "name": "wrm flrt",
  "songs": 12,
  "time": "41m",
  "year": 2019,
  "month": 6,
  "link": "https://music.apple.com/ru/playlist/wrm-flrt/pl.u-r2yBBvqCP6X4rZm?l=en"
}
```

Push object to some list.

-----

### **GET** /list/playlists

Headers:

- Content-Type = application/json

Get pushed items from list.

----

### **PUT** /list/playlists/1a715835-4e21-4440-ad3f-01c2491f68cd

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Body:

```json
{
  "cover": "https://is2-ssl.mzstatic.com/image/thumb/SG-MQ-US-001-Image000001/v4/a1/8c/78/a18c78c2-a1dd-5c1e-743b-670ae0ddad25/image/313x313cc.jpg",
  "name": "wrm flrt",
  "songs": 12,
  "time": "41m",
  "year": 2019,
  "month": 6,
  "link": "https://music.apple.com/ru/playlist/wrm-flrt/pl.u-r2yBBvqCP6X4rZm?l=en"
}
```

Update list item.

----

### **DELETE** /list/playlists/1a715835-4e21-4440-ad3f-01c2491f68cd

Headers:

- Content-Type = application/json
- token = `ADMIN_TOKEN`

Delete list item.
