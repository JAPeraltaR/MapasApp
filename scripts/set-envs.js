const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const tagerPath='./src/environments/environments.ts'
const envFileContent= `
export const environments = {
  mapbox_key: '${process.env['MAPBOX_KEY']}'
};
`;
mkdirSync('./src/environments', { recursive: true });

writeFileSync('./.env.template', `'${process.env['MAPBOX_KEY']}=` )

writeFileSync( tagerPath, envFileContent)
