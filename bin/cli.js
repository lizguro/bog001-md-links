#!/usr/bin/env node
// *--the firts line is importan for the correct operation to the app, don't delete it ---*//

const chalk = require('chalk');
const mdLinks = require('../index.js');
const functions = require('../lib/functions');
const statsLinks = require('../lib/stats');
const validateLinks = require('../lib/validate.js');

const argv = require('minimist')(process.argv.slice(2));
const pathUser = argv._[0];

/**Obtener solo links */
if (!argv.validate && !argv.stats) {
    console.log(chalk.bold.cyan(" ------getting links, wait !! ------\n"));
    const pathResolved = mdLinks(pathUser);
    functions.getLinks(pathResolved)
    .then((links)=>{
        links.forEach((infoLink, i)=>{
            console.log(`
            ------link ${i+1}------\n
            - Link: ${chalk.blue.bold(infoLink.href)}\n
            - Text: ${chalk.blue.bold(infoLink.text.slice(0, 49))}\n
            - Path: ${chalk.blue.bold(infoLink.pathFile)}\n
            ----------------------------------\n
          `);            
        });
    
});
}

/**---Mostrar stats y validate--- */
if (argv.validate && argv.stats) {
    console.log(chalk.bold.cyan(" ------Validate and stats links ------\n"));
    const pathResolved = mdLinks(pathUser);
    functions.getLinks(pathResolved)
    .then((links)=>{
        validateLinks(links)
        .then((validLinks)=>{
            const arrayStats = statsLinks(validLinks);
            console.log( chalk.white(`Total Links: ${arrayStats[0]}`) );
            console.log( chalk.underline.blue(`Unique: ${arrayStats[1]}`) );
            console.log( chalk.red(`Broken: ${arrayStats[2]}\n`) );
        });
    });
   
}

/**---Mostrar solo validate ---*/
if (argv.validate && !argv.stats) {
    console.log(chalk.bold.cyan(" -----Validating links, wait!!------\n"));
    const a = mdLinks(pathUser,{ validate: true })
    functions.getLinks(a)
    .then((links)=>{
        validateLinks(links)
        .then((validLinks)=>{
            validLinks.forEach((infoLink, i)=>{
                console.log(`------link ${i+1}------`)
                console.log(chalk.blue(`href: ${infoLink.href}`));
                console.log(chalk.cyan(`Text: ${infoLink.text.slice(0, 49)}`));
                console.log(chalk.cyan(`path: ${infoLink.pathFile}`));
                if(infoLink.statusCode == 200 && infoLink.status == 'OK'){
                    console.log(chalk.green(`statusCode: ${infoLink.statusCode}`));
                    console.log(chalk.green(`status: ${infoLink.status}\n`));
                }
                else{
                    console.log(chalk.red(`statusCode: ${infoLink.statusCode}`));
                    console.log(chalk.red(`status: ${infoLink.status}\n`));
                }    
            })
        })
    })
}

/**---Mostrar solo stats--- */
if (!argv.validate && argv.stats) {
    const a = mdLinks(pathUser);
    functions.getLinks(a)
    .then((links)=>{
        const arrStats = statsLinks(links);
        console.log(chalk.bold.cyan("----Stats links----\n"));
        console.log( chalk.white(`Total Links: ${arrStats[0]}`) );
        console.log( chalk.underline.blue(`Unique Links: ${arrStats[1]}\n`) );
    })
}