const fs = require('fs');
const path = require('path');
const template = require('lodash/template');

const scenes = require('../src/scenes');

const readTemplate = new Promise((res) => {
  fs.readFile(path.resolve(__dirname, 'template.html'), (err, data) => {
    if (err) throw err;
    res(data.toString());
  })
});

// const ensureDirExist = (id) => {
//   const dir = path.resolve(__dirname, `htmls/${id}`);
//   if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);
//   }
//   return Promise.resolve();
// };

const writeHtml = (id, html) => new Promise((res) => {
  fs.writeFile(path.resolve(__dirname, `htmls/${id}.html`), html, 'utf8', (err) => {
    if (err) throw err;
    res();
  })
});

// const copyOg = (id) => () => new Promise((res) => {
//   fs.copyFile(path.resolve(__dirname, `covers/${id}.jpg`), path.resolve(__dirname, `htmls/${id}/og.jpg`), (err) => {
//     if (err) throw err;
//     res();
//   });
// });

readTemplate.then((source) => {
  const compiled = template(source);
  return Promise.all(scenes.map((scene, index) => {
    const id = index + 1;
    return writeHtml(id, compiled({
      id,
      title: scene.title,
      description: `${scene.sub}的時候想一想`,
    }));
  }));
}).then(process.exit);
