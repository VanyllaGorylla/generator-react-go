# Changelog
## 0.1.5
+ Changes *todoItem.cmp.jsx* to *TodoItem.cmp.jsx* - linux fix

## 0.1.4
+ After putting *npm start* browser will open
+ Adds information about application port
+ Adds support for **Redux Devtools**
+ Switch from *babel-preset-2015* to *babel-preset-env*
+ Makes simplier to modify *MaterializeCss*

## 0.1.3
+ Fixes **build-prod** command
+ Removes unnecessary reference to *main.css* file in *index.html*
+ Adds **[chunkhash]** into webpack's result files

## 0.1.2
+ Adds Modules, now there is no need to import files like *../../../../../*. You can **ExampleModule/file.js**. (Remember to put then into *wepack.config.js* -> *resolve.alias* and *package.json* -> *jest section*)
+ Adds *pre-commit* with triggered *eslint*. Now before *git commit* eslint will be triggered and you will be forced to improve your code.

## 0.1.1
+ Solves windows components issue

## 0.1.0
+ Adds redux forms
+ Fixes some bugs
+ Adds loading indicator in **POSTS** feature
+ Removes *redux-promise* and *redux-promise-loading* in favour of *redux-promise-middleware* and *redux-thunk*
+ Adds *react-toastify* - rly cool notification
