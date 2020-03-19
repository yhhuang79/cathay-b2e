# cathay-b2e

Simple URL Shortener

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install
```

### Running
```
npm start
```

## How to use

I provide two APIs
* Redirect API
```
GET /:hashId
```
* Create shorten URL API
```
POST /api/shorturl
```

If you want to create a short URL to https://www.google.com, you can use the following command
```
curl -X POST \
  http://localhost:3000/api/shorturl \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -d trueUrl=https%3A%2F%2Fwww.google.com
```

You will get the following response
```
WdJHsM
```

"WdJHsM" is your short URL shortcode, you can link to the original website with the following URL
```
http://localhost:3000/WdJHsM
```

## Todos
* Supports SQLite memory mode only. Other databases may be supported in the future
* Can add support for dynamic DNS
* Management UI
