import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

//write test here
describe('First test',() => {
  it('passed', () => {
    expect(true).to.equal(true);
  });
});

//test index.html
describe('Test index.html',() => {
  it('h1 has users',(done) => {
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index,function(err,window){
      const h1 = window.document.getElementsByTagName('h1')[0].innerHTML;
      expect(h1).to.equal("Hello World");
      done();
      window.close();
    });

  })
});
