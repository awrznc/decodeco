function decodeUTF8(encoded_string) {
  return encoded_string.replace(/(\\xffffff..|\\x..){3}/g, (match)=>{
    return (new TextDecoder).decode(new Uint8Array(
      match.replace(/\\/g, ',0').split(',').splice( 1, 3 )
    ));
  });
}

export function decodeco(string) {
  let result = string;

  // URI decode
  try {
    result = decodeURI(result);
  } catch(error) {
    // console.error(error);
  }

  // UTF-8 decode
  try {
    result = decodeUTF8(result);
  } catch(error) {
    // console.error(error);
  }

  // Unicode decode
  try {
    result = unescape(result);
  } catch(error) {
    // console.error(error);
  }

  return result;
}

