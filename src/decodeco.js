function decodeUTF8(encoded_string) {
  return encoded_string.replace(/(\\xffffff..|\\x..){3}/g, (match)=>{
    return (new TextDecoder).decode(new Uint8Array(
      match.replace(/\\/g, ',0').split(',').splice( 1, 3 )
    ));
  });
}

export function decodeco(string) {
  let result = '';

  // UTF-8 decode
  try {
    result = decodeUTF8(string);
  } catch(error) {
    // console.error(error);
  }

  // URI decode
  try {
    result = decodeURI(result);
    return result;
  } catch(error) {
    // console.error(error);
  }

  // Unicode decode
  try {
    result = unescape(result);
    return result;
  } catch(error) {
    // console.error(error);
  }

  return result;
}
