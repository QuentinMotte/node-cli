#!/usr/bin/env node

console.log("hello Node");

// console.log(args.value);

let holidays = (country) => {
    const axios = require("axios").default;
    const { getCode } = require("country-list");
    let currentYear = new Date().getFullYear();
    country = getCode(country);
    axios
        .get(
            `https://date.nager.at/api/v3/publicholidays/${currentYear}/${country}`
        )
        .then((res) => {
            console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                console.log(res.data[i].date);
                console.log(res.data[i].name);
            }
        })
        .catch((err) => {
            console.log("error");
        });
};
let country = process.argv.slice(2);
country = country[0];

holidays(country);
module.exports = holidays;
