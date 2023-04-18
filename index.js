const cache = require('arch881010-cache');
cache.add("a", "b"); // Test if the cache adds the key, value pair.
console.log(cache.get("a")); // Test if it actually got the key.
cache.delete("a"); // Test if it deletes the cache.
try { //Forces a check.
    cache.get("a"); 
    throw new ReferenceError
} catch(err) {
    console.log("A has been seleted"); // This should work.
}
cache.add("c","d");
cache.clear();
try{
    cache.get("c");
} catch(err) {
    console.log("Cache was cleared");
}
cache.add("x", "y");
var var1 = cache.get('x');
cache.update('x','a')
var var2 = cache.get('x');
console.log(var1, var2)