# hello_npm_package
Hello World NPM Package 

Getting Started with NPM (as a developer)
===

If you haven't already set your NPM author info, now you should:

    npm set init.author.name "Your Name"
    npm set init.author.email "you@example.com"
    npm set init.author.url "http://yourblog.com"

    npm adduser

	
Note : npm adduser will create a NPM registry account for you.
you have to enter new username.password,email.

After user creation you got email verification and all set.

	
Then create a `package.json` and publish it:

    cd /path/to/your-project
    npm init

    npm publish --access=public

	
RePublish new version to NPM Registry

You have to change version number as verion symentic manner

Old version :- 1.0.0
update to new version :- 1.0.1
	
	npm version 1.0.1

After updating version, publish the package.

Beta and Release versions
---

If you don't want something to install by default

```bash
npm publish ./ --tag beta
```
   
If you published a bugfix as v1.0.7 and need to set v1.1.3 back to latest

```bash
git checkout v1.0.7
npm publish ./
   
git checkout v1.1.3
npm tag foobar@1.1.3 latest
```
