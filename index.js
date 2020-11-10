const functions = require('./lib/functions');
const validateLinks = require('./lib/validate');

const { resolve } = require('path');
const path = require('path');
const fs = require('fs');

// *---Validar si ruta existe y es absoluta----
const validateRoute = ((pathUser) => {
  if (fs.existsSync(pathUser)) {
    if (!path.isAbsolute(pathUser)) {
      const pathResolved = resolve(pathUser);
      return pathResolved;
    }
  } 
});

//**--Función principal MDLINKS----- */
const mdLinks = (pathUser,options={})=> {
  return new Promise((resolve, reject) => {
    const validPath = validateRoute(pathUser);
    functions.getLinks(validPath)
    .then((links)=>{
      if (options.validate) {
        resolve(validateLinks(links));
      }
      else {
       console.log("respueta de getlinks");
       console.log(links);
        resolve(links);
       }
     
    })
    .catch((err)=>{
      console.log(err.message);
      reject(err)
    });
    
  });
}

module.exports = mdLinks;
module.exports = validateRoute;
