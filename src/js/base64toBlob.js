export const base64toBlob = (data) => {
  // Cut the prefix `data:application/pdf;base64` from the raw base 64
  // const base64WithoutPrefix = data.substr(
  //   "data:application/pdf;base64,".length
  // );

  const bytes = atob(data);

  let length = bytes.length;
  let out = new Uint8Array(length);

  while (length--) {
    out[length] = bytes.charCodeAt(length);
  }

  return new Blob([out], { type: "application/pdf" });
};

// var BASE64_MARKER = ";base64,";

// function convertDataURIToBinary(dataURI) {
//   var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
//   var base64 = dataURI.substring(base64Index);
//   var raw = window.atob(base64);
//   var rawLength = raw.length;
//   var array = new Uint8Array(new ArrayBuffer(rawLength));

//   for (let i = 0; i < rawLength; i++) {
//     array[i] = raw.charCodeAt(i);
//   }
//   return array;
// }

// const url = convertDataURIToBinary(pdf);
