const fs = require('fs');
const path = require('path');
const glob = require('glob');
const Inkscape = require('inkscape');
const Readable = require('stream').Readable

const ensureDirExist = (dir) => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  return Promise.resolve();
};

const readSVG = (src) => new Promise((res) => {
  fs.readFile(src, (err, data) => {
    if (err) {
      throw err;
    }
    res(data.toString());
  })
});

const saveSVG = (dest, svg) => new Promise((res) => {
  fs.writeFile(dest, svg, (err) => {
    if (err) {
      throw(err);
    }
    res()
  })
});

const saveAsPng = (dest, svg) => {
  const s = new Readable();
  const w = dest.includes('-dt') ? 1920 : 800;
  const pngConverter = new Inkscape(['--export-png', `--export-width=${w}`]);
  const destinationStream = fs.createWriteStream(dest);

  s.pipe(pngConverter).pipe(destinationStream);

  s.push(svg);
  s.push(null);
};

const headPttn = /<svg[^<]+/;
const textPttn = /<text(.*?)text>/g;

const retriveSVGhead = (svg) => {
  const [head] = headPttn.exec(svg);
  return head;
};

const retriveText = (svg) => {
  const texts = [];
  let text;
  while ((text = textPttn.exec(svg)) !== null) {
    texts.push(text[0]);
  }
  return texts;
}

const base = path.resolve(__dirname, '../src/containers/Sections');

glob(base + '/*/*.svg', (err, paths) => {
  if (!err) {
    Promise.all(paths.map((src) => readSVG(src).then((svg) => {
      const [dest] = src.split('.');
      const head = retriveSVGhead(svg);
      const texts = retriveText(svg);
      return ensureDirExist(dest).then(() => Promise.all([
        saveSVG(dest + '/text.svg', head + texts.join('') + '</svg>'),
        saveSVG(dest + '/image.svg', svg.replace(textPttn, '')),
      ]));
    })));
  }
});
