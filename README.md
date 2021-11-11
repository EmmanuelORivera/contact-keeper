# Contact Keeper

> Full stack MERN contact manager with React hooks, context & JWT authentication.

## Watch this project deployed on heroku

[https://contact-keeper95.herokuapp.com/](https://contact-keeper95.herokuapp.com/)

## Usage

Install dependencies

```bash
npm install
npm run clientinstall
```

### Mongo connection setup

Edit your /config/default.json file to include the correct MongoDB URI
And if you want to deploy make sure that the correct MongoDB URI is set on /config/production.json

### Run Server

```bash
npm run dev     # Express & React :3000 & :5000
npm run server  # Express API Only :5000
npm run client  # React Client Only :3000
```
