//Leah Danny
//Web Programming
//8/3/2016
//Lab 9: Messages Part 2

I have been able to open the given JSON file using XMLHttpRequest and successfully parsed the JSON data.  I've made some styling changes to the messages output using the given CSS file.  

Additionally, I opened the index.html on a couple of web browsers.  I was given the phrase "Something has gone terribly wrong" when I opened it in chrome and safari but it worked when I opened it in firefox.  

When I loaded the JSON data from a URI I got "Something has gone terribly wrong" on all three web browsers.

I didn't discuss this assignment with anyone.

I spent approximately 2 hours on this assignment.  Most of my time was spent trying to understand same-origin policy.  

It isn't possible to request data from a different origin when it is from a different domain using XMLHttpRequest.  It would need to make a cross-origin HTTPRequest.  If they were from the same domain we could use XMLHttpRequest.  Essentially, XMLHttpRequest can only make requests to its own domain.  We wouldn't want to be able to request data from a different origin using XMLHttpRequest because we only want to deal with JavaScript resources that are trusted.

It isn't possible to request data from local files using XMLHttpRequest because it would have to cross domains.  We wouldn't want a malicious website to be able to have access to local files, so we would want XMLHttpRequest to do it's job and stop this from happening.  If this was attempted, we should get an error "XMLHttpRequest cannot load ... No 'Access-Control-Allow-Origin' header is present on the requested resource."
