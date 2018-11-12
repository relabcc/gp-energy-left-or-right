const fs = require('fs');
const glob = require('glob');

glob('public/**/*.map', (err, list) => Promise.all(list.map((src) => fs.unlinkSync(src))));
