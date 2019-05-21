The idea is to give a [SPA](https://en.wikipedia.org/wiki/Single-page_application) -like experience 

The frontpage and login page call the backend through a simple token API. 

## How does JWT work.

So our backend using [JWT-auth by TymonDesigns](https://github.com/tymondesigns/jwt-auth) will be authenticating the user (by checking user credentials) and sending back a token (JSON Web Token). This JSON Web Token is securely stored in the user's localStorage in the browser. It can be refreshed at certain time s during which the user will need to re-login to create new tokens. Here's an additional [article](https://medium.com/vandium-software/5-easy-steps-to-understanding-json-web-tokens-jwt-1164c0adfcec) about JWT.

## Prod app file structure

This repo will be using [Angular](https://angular.io). The backend will be placed in the same folder under /api. [NGINX](https://www.nginx.com/) will be configured so that /api requests will be routed to backend. This saves us from having to enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing). 

## Nginx config for backend

It looks something like this 

```nginx
location /api {
  root /path/to/laravel/backend;
}
```

## Nginx config for front

We'll just use nginx to push the NodeJS server which is running this Angular app:

```nginx
location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```
