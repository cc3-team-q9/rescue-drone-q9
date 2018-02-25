# rescue-drone-q9

This repository is made by students of Code Chrysalis.

With this application, people can ask rescue teams to rescue them and inform the teams of people's position.  
This application uses Rakuten AIRMAP API.

## how to use rescue-drone-q9

If you want to use this, you have to install and activate [postgresql](https://www.postgresql.org/).  
After installing it, you have to migrate to make tables.  
Make sure postgresql is started before you hit the following command.

```unix
$ yarn migrate
```

And you can start the server with this command.

```unix
$ yarn start
```
