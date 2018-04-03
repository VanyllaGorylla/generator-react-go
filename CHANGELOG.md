# Changelog

## 0.2.1

* Components refactor -> make them more reusable
* Changes in tests
* More examples of _react-materialize_ library usage
* Adds indicators for backend errors -> Now you will see if something is wrong

## 0.2.0

* Based on create-react-app
* Upgrades to _React 16.3_
* Adds _yarn_
* Some tests were rewritten
* Updates file structure
* Adds _font-awesome 4.7_
* Divides Navigation components for smaller and more intuitive components
* Some UI fixes

## 0.1.5

* Changes _todoItem.cmp.jsx_ to _TodoItem.cmp.jsx_ - linux fix

## 0.1.4

* After putting _npm start_ browser will open
* Adds information about application port
* Adds support for **Redux Devtools**
* Switch from _babel-preset-2015_ to _babel-preset-env_
* Makes simplier to modify _MaterializeCss_

## 0.1.3

* Fixes **build-prod** command
* Removes unnecessary reference to _main.css_ file in _index.html_
* Adds **[chunkhash]** into webpack's result files

## 0.1.2

* Adds Modules, now there is no need to import files like _../../../../../_. You can **ExampleModule/file.js**. (Remember to put then into _wepack.config.js_ -> _resolve.alias_ and _package.json_ -> _jest section_)
* Adds _pre-commit_ with triggered _eslint_. Now before _git commit_ eslint will be triggered and you will be forced to improve your code.

## 0.1.1

* Solves windows components issue

## 0.1.0

* Adds redux forms
* Fixes some bugs
* Adds loading indicator in **POSTS** feature
* Removes _redux-promise_ and _redux-promise-loading_ in favour of _redux-promise-middleware_ and _redux-thunk_
* Adds _react-toastify_ - rly cool notification
