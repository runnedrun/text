getWikiIntro("Bob Dylan", function(text) {
  console.log(text.length);
  // google
  var sentences = text.split(". ");    
  var slice = ["sdfasf", "Asdfas", "asdf"].slice(0, 2)
  // -> ["asdf", "asdf"]
  "David".slice(0,2) // -> "Da"
  console.log(slice)
  return text
})