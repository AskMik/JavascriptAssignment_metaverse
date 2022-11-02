let album;

function make_album(artistName, albumTitle, numberOfTracks = NaN){
    let album = {
        'Name' : artistName,
        'Title': albumTitle,
        'numberOfTracks' : numberOfTracks
    }

    return album;
}

function printAlbum(){
album = make_album('Aatka', 'Aatkaa');
console.log(album);
album = make_album('Sharmeen', 'Sharmeenn', 15);
console.log(album);
album = make_album('Khan', 'Khann');
console.log(album);
}

printAlbum();