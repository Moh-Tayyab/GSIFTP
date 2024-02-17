"use strict";
function album(artist, title, score) {
    let album_1 = { artist: artist, title: title, score };
    if (score !== undefined) {
        album_1.score = score;
    }
    return album_1;
}
let music_artist = album("Atif Aslam", "Singer", 8.5);
let music_artist1 = album("Ali Zafar", "Singer", 7.8);
let music_artist2 = album("Rahat Fateh Ali Khan", "Singer", 9.2);
console.log(music_artist);
console.log(music_artist1);
console.log(music_artist2);
