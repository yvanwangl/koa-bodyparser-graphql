Koa body-parser that supports the application/graphql MIME type.

How does it work?
koa-bodyparser-graphql checks the Content-Type header of the request. If the Content-Type is application/graphql, the request is transformed into a 'normal' application/json GraphQL request, and the Content-Type header is set to application/json.

Received request:

{
  books {
  	title
    author
	}
}
request.body value after the middleware:

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
If an application/json request is received, it applies the JSON koa-bodyparser.

Installation
Install koa-bodyparser-graphql using your favorite package manager:

$ yarn add koa-bodyparser-graphql
$ npm install koa-bodyparser-graphql
Usage
The koa-bodyparser-graphql can be used as a drop-in replacement for the normal json body-parser.

const Koa = require('koa')
- const bodyparser = require('koa-bodyparser')
+ const bodyparser = require('koa-bodyparser-graphql')

const app = new Koa();

app.use(bodyparser())

// Your express routes

app.listen(/* your configuration */)
