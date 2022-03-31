# GQL-Not-400

Just a simple repo to show that letting the `ValidationPipe` from Nest throw a `BadRequestException` does not result in an HTTP 400, though there is a status code reported inside the response. The HTTP status is still 200 as is standard with GraphQL.

## Reproduction Steps

```
1. git clone
2. npm i
3. npm run start
4. In a separate terminal run:
curl 'http://localhost:4000/graphql' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: http://localhost:4000' --data-binary '{"query":"mutation sayYo {sayWhatYouWant(input:{key:null}){key}}"}' --compressed -v
5. Notice the HTTP status as 400
```