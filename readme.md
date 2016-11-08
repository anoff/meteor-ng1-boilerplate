meteor-ng1-boilerplate
===

> Basic boilerplate with meteor, angular and ngMaterial

Inspired by the awesome tutorials on [angular-meteor.com](https://www.angular-meteor.com/tutorials/socially/angular1).

# included packages
## meteor
This should just give an overview of available features not the full list of packages. For a complete list of packages just use `meteor list`.

* less support
* account handling (google, twitter, facebook, password)
* dev mode: insecure, autopublish
* publish count

## angular
* accounts-ui-angular
* ui-router
* component templates as content instead of file

# things you might want to change
Before going to production make sure you remove some packages that shouldn't be there.

```sh
meteor remove insecure autopublish
```

# license
MIT © [anoff](http://anoff.io)
