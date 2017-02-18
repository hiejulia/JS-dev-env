//generate mock api
/* eslint-disable no-console */

import jsonSchemaFaker from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsonSchemaFaker(schema));
fs.writeFile('./src/api/db.json',json,function(err){
  if(err){
    return console.error(chalk.red(err));
  }
  else{
    console.log(chalk.green('Successful! Mock data generated!'));
  }


});
