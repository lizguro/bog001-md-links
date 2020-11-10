// *--Función para obtener los archivos de un directorio--
const fs = require('fs');
const path = require('path');
const marked = require('marked'); //*--Converte texto del archivo en texto HTML
const jsdom = require('jsdom');  //*--para crear un DOM
const {JSDOM} = jsdom;
const arrayLinks = [];

//*--Escrita forma de promesa
const getFilesMd = (pathUser) =>{
  return new Promise((resolve,reject)=>{
    fs.promises.readdir(pathUser)
    .then((files)=>{
      let arrayFilesMd = [];
      files.forEach(element => {
        let fileMd = path.join(pathUser, element);
        if(path.extname(element) === '.md' ){
          arrayFilesMd.push(fileMd)
        }
      });
      resolve((arrayFilesMd))   
    })
    .catch((error) => reject (error))
  });
}

//*--Función para leer el contenido de los archivos MD ---*/
const readFilesMd = (filesmd) => {
  filesmd.forEach((file) => {
    const route = path.dirname(file);
    const filesRead = fs.readFileSync(file, 'UTF-8');
    const fileHtml = marked(filesRead);
    const dom = new JSDOM(`<!DOCTYPE html> ${fileHtml}`);
      dom.window.document.querySelectorAll('a').forEach((linkText)=>{
        const href = linkText.getAttribute('href');
        const text = linkText.innerHTML;
        const pathFile = route;
        arrayLinks.push({href, text, pathFile})
      }); 
      
  });
  return arrayLinks;

}

const getLinks = (pathResolved) => {
    const linksFound = getFilesMd(pathResolved)
    .then((files)=> (readFilesMd(files)))
    .then((LinksFiles)=>{
        return LinksFiles;
    })
    .catch((err)=>(err))
return linksFound; 
}

module.exports = {getLinks};

//*--Notas---------
//*--El método getAttribute () devuelve el valor del atributo con el nombre especificado, de un elemento.
//*La <a>etiqueta define un hipervínculo. El href atributo especifica la URL de la página a la que va el enlace: