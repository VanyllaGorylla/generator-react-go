# generator-react-go

Above generator has its purpose in optymizing and making easier to use \***\*React** 16** with **Materialize Css\*\*.
It contains required boilerplate code which helps other programmers to start easy their work with skipping hard to make configuration. It is based on _create-react-app_.

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
yarn install
yarn start
```

and in the second console

```sh
yarn json-api
```

Above commands will create, install deps and start an application. Second console is needed for json data server.

## Test

Test were written with **Jest** and **Enzyme**.

To run tests you can simply put below command.

```sh
yarn test
```

## To the user

Dear user, if you have any suggestions/find any bugs please do not hesitate to let me know :)

Best regards, VanyllaGorylla
