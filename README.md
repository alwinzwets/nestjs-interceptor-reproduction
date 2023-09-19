# nestjs-interceptor-reproduction

# Steps To Replicate

## Build nest-lib

1) cd nest-lib
2) npm install
3) npm run build
4) npm link

## Build nest-app

1) cd nest-app
2) npm install
3) npm link nest-lib
4) npm run start:dev

## Reproduce problem

`GET http://localhost:3000/app`

Returns (expected result)

```json
{
  "msg": "Hello World - From app!"
}
```

`GET http://localhost:3000/lib`

Returns (unexpected result)

```json
{
  "source": {}
}
```
## Disable interceptor to remove problem

Remove the following lines from `app.module.ts`

```js
{
  provide: APP_INTERCEPTOR,
  useClass: AppInterceptor,
},
```
then run the lib call again

`GET http://localhost:3000/lib`

Returns (expected result)

```json
{
  "msg": "Hello World - From lib!"
}
```
