#!/usr/bin/env node

// console.log("hello Node");

// console.log(args.value);

// import ora from "ora";
const chalk = require("chalk");
const ora = require("ora");
const spinner = ora(" Loading ").start();
spinner.color = "yellow";
setTimeout(() => {
    spinner.text = "Loading rainbows";
    spinner.succeed("Loaded");
}, 1000);

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
            // console.log(res.data);
            for (let i = 0; i < res.data.length; i++) {
                console.log(
                    "\n" +
                        chalk.blue.italic(
                            `${res.data[i].date} -> ${res.data[i].name}`
                        )
                );
            }
        })
        .catch((err) => {
            console.log("error");
            spinner.fail("error");
        });
};
let country = process.argv.slice(2);
country = country[0];

holidays(country);
module.exports = holidays;
