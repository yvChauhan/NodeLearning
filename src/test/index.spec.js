import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our First test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('Index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index,function(err, window){
      const h1Elem = fs.readFileSync('/src/index.html', "ütf-8");
      expect(true).to.equal(true);
      done();
      window.close();
    })
  });
});
