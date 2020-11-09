import { decodeco } from './decodeco.js';

function assert(expect, got) {
  if (expect !== got) {
    throw `Failed: expect !== got\n\n    expect: ${expect}\n       got: ${got}`;
  }
}

function describe(string, lambda){
  console.log(string);
  lambda();
}

const it = describe;

function expect(expect, got) {
  try {
    assert(expect, got);
  } catch(error) {
    console.error(error);
  }
}

function test() {
  const original = 'でこ₍₍(ง˘ω˘)ว⁾⁾でこ'

  describe('#decodeco', () => {
    it('  デコード済みの文字列を渡した場合同じ文字列が返る', () =>{
      expect(original, decodeco(original));
    });
    it('  URLエンコード済みの文字列を渡した場合decodeされる', () =>{
      expect(original, decodeco(encodeURI(original)));
    });
    it('  Unicodeエンコード済みの文字列を渡した場合decodeされる', () =>{
      expect(original, decodeco(escape(original)));
    });
    it('  UTF-8のバイト文字列を渡した場合decodeされる', () =>{
      expect('でこ', decodeco("\\xe3\\x81\\xa7\\xe3\\x81\\x93"));
      expect('でこ', decodeco("で\\xe3\\x81\\x93"));
      expect('でこ', decodeco("で%5Cxe3%5Cx81%5Cx93"));
    });
    // it('  URLエンコード済みの文字列かつ、Unicodeエンコード済みの文字列を渡した場合エラーが発生する', () =>{
    //   expect(original, decodeco(`${encodeURI(original)}${escape(original)}`));
    // });
  });
}

test();

