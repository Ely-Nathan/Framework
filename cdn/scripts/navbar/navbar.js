!function i(u,c,f){function l(t,e){if(!c[t]){if(!u[t]){var r="function"==typeof require&&require;if(!e&&r)return r(t,!0);if(a)return a(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var o=c[t]={exports:{}};u[t][0].call(o.exports,function(e){var r=u[t][1][e];return l(r||e)},o,o.exports,i,u,c,f)}return c[t].exports}for(var a="function"==typeof require&&require,e=0;e<f.length;e++)l(f[e]);return l}({1:[function(e,r,t){"use strict";var n=document.querySelector(".toggle"),o=document.querySelector(".nav--top");n.addEventListener("click",function(){console.log("toggle clicked"),o.classList.toggle("active")},!1)},{}]},{},[1]);