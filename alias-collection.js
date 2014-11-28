// idea originally from: http://stackoverflow.com/questions/13383886/making-a-short-alias-for-document-queryselectorall/14947838#14947838

/*jshint unused:false */
var query = document.querySelector.bind(document);
var queryAll = document.querySelectorAll.bind(document);
var fromId = document.getElementById.bind(document);
var fromClass = document.getElementsByClassName.bind(document);
var fromTag = document.getElementsByTagName.bind(document);