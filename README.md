# koa-bodyparser-graphql 

Koa body-parser that supports the `application/graphql` MIME type.

## How does it work?
`koa-bodyparser-graphql` checks the `Content-Type` header of the request. If the Content-Type is `application/graphql`, it will get the request info and pack it into normal body.

Received request:
```graphql
{
	books {
		title
		author
	}
}
```
`ctx.request.body` value after the middleware:
```js
{
  query: {
    {
	    books {
		    title
		    author
	    }
    }
  }
}
```

If an `application/json` request is received, it applies the JSON koa-bodyparser.

## Installation

Install `koa-bodyparser-graphql` using your favorite package manager:
```shell
$ yarn add koa-bodyparser-graphql
$ npm install koa-bodyparser-graphql
```

## Usage

The `koa-bodyparser-graphql` can be used as a drop-in replacement for the normal `json` koa-bodyparser.

```diff
const Koa = require('koa')
- const bodyparser = require('koa-bodyparser');
+ const bodyparser = require('koa-bodyparser-graphql');
const app = new Koa();

app.use(bodyparser());
// Your koa routes
app.listen(/* your configuration */)
```

That's all!

