# Changelog
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
