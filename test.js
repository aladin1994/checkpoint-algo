function algo(ch) {
  nbrChar = 0;
  nbrEspace = 0;
  nbrWords = [];
  nbrVowels = 0;
  for (let i = 0; i < ch.length; i++) {
    if (ch[i] === " ") {
      nbrEspace++;
    }
  }
  nbrChar = ch.length - nbrEspace;
  nbrWords = ch.split(" ");

  var regex = /[aeyuioAEYUIO]/g;
  nbrVowels = ch.match(regex).length;
  return "nombre des caractéres : "+nbrChar +
  " nombre des mots :" +nbrWords.length+
   " nombre des vowels: " +nbrVowels;
}
algo("aladin aladin aeui");
