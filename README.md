# My First-package-NPM

## intro

In our training @Becode we had to create our first NPM package who will show the results (a list of holidays dates for the current year) in a readable way in the terminal.

We use the API [nager.date](https://date.nager.at/) and some NPN package ([country-list](https://www.npmjs.com/package/country-list) ; [axios](https://www.npmjs.com/package/axios) ; [ora](https://www.npmjs.com/package/ora) ; [chalk](https://www.npmjs.com/package/chalk))

## Installation

You just need to put these command in the terminal  
For the package ->

-   "npm init"
-   "npm install cli-holidates-cli"  
    For execute the package ->
-   "npx holidates {country}"  
    The country need to be in english ! --> for exemple " npx holidates ireland "

### What else should I do ?

-   Add more style
-   Add the possibility to choose the year and put the current year by default
