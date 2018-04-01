# generator-react-go

Above generator has its purpose optymizing and making easier to use \***\*React** 16** with **Materialize Css\*\*. It contains required boilerplate code which helps other programmers to start easy their work with skipping hard to make configuration.

The package contains **React**, **Redux**, **React-Router** and **Materialize Css** libraries mainly. The most important thing is, this generator show you the way how to modify css of **Materialize Css** without copying whole app and putting it into _src/vendor_ folder.

Moreover, I used **Json-Server** as a backend, so you will be able to see how to implement interaction with **live data server** and how to handle its states with **Redux**.

## Installation

```sh
npm i -g yo generator-react-go
```

## How to use

In console

```sh
yo react-go <appname>
cd <appname>
npm install
npm start
```

and in the second console

```sh
npm run json-api
```

Above commands will create, install deps and start an application. Second console is needed for json data server.

## Test

Test were written with **Jest** and **Enzyme**.

To run tests you can simply put below command.

```sh
npm test
```
