

const collection = [
    {
        title: 'Ants from up here',
        artist: 'Black Country, New Road',
        cover: 'images/antsFromUpHere.jpg',
        description: 'A compelling and innovative album that blends post-punk and experimental rock, offering listeners a complex sonic journey with poetic and thought-provoking lyrics.',
        genres: ['Post-rock', 'chamber pop', 'art rock'],
        link: 'https://open.spotify.com/album/21xp7NdU1ajmO1CX0w2Egd?si=D_1WccaYTTCqcAFTTFEEnA'
    },
    {
        title: 'Madvillainy',
        artist: 'MF DOOM & Madlib',
        cover: 'images/madvillainy.jpg',
        description: 'Madvillainy is a hip-hop classic, a collaboration between the enigmatic MF DOOM and the innovative producer Madlib. The album is a mind-bending journey through intricate wordplay, abstract beats, and a unique blend of underground hip-hop.',
        genres: ['Hip-hop', 'Experimental'],
        link: 'https://open.spotify.com/album/3LGGCoBdE6WdHr3xGlybUx?si=j4PwzluOTbShCFDpUCmTyA'
    },
    {
        title: 'To Pimp A Butterfly',
        artist: 'Kendrick Lamar',
        cover: 'images/tpab.jpeg',
        description: 'An influential hip-hop masterpiece by Kendrick Lamar, known for its profound social commentary, intricate storytelling, and a fusion of jazz and funk elements, challenging listeners to reflect on contemporary issues and personal growth.',
        genres: ["Experimental",
                "rap"],
        link: 'https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=_L4Zqv0rROK2pP9cTx-4pw'
    },
    {
        title: 'Saturation',
        artist: 'Brockhampton',
        cover: 'images/saturation.jpg',
        description: 'Brockhampton\'s groundbreaking "Saturation" trilogy introduces a refreshing blend of rap, R&B, and experimental sounds with raw and introspective lyrics, redefining the hip-hop landscape.',
        genres: ['Hip-hop', 'Rap', 'Experimental'],
        link: 'https://open.spotify.com/album/5h4W3OpuEblCcwrHY5DxKZ?si=KFFpl5G4Qqah9pOzD_1yJA'
    },
    {
        title: 'OK Computer',
        artist: 'Radiohead',
        cover: 'images/okComputer.jpg',
        description: 'Radiohead\'s "OK Computer" is a groundbreaking and iconic album that blends alternative rock with electronic elements, offering a hauntingly beautiful and thought-provoking sonic experience that has left a lasting impact on the music industry.',
        genres: ['Alternative rock', 'Electronic'],
        link: 'https://open.spotify.com/album/7dxKtc08dYeRVHt3p9CZJn?si=XTgOum19Rc-x-owXUVGmOg'
    },
    {
        title: 'Blonde',
        artist: 'Frank Ocean',
        cover: 'images/blonde.jpg',
        description: 'Frank Ocean\'s "Blonde" is a genre-defying masterpiece that blends elements of R&B, soul, and avant-garde pop, delivering a deeply introspective and emotionally resonant journey that pushes the boundaries of contemporary music.',
        genres: ['R&B', 'Soul', 'Experimental'],
        link: 'https://open.spotify.com/album/4k1ELeJKT1ISyDvWzr7bF3?si=8IQ1QgYaSs-Ix-Qihxncvg'
    },
    {
        title: 'Flower Boy',
        artist: 'Tyler, the Creator',
        cover: 'images/flowerBoy.jpg',
        description: "A deeply personal and introspective journey. The album's lush production and poetic lyrics explore themes of identity, self-discovery, and longing, making it a standout in modern rap.",
        genres: ['Hip-hop', 'R&B', 'Soul'],
        link: 'https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o?si=HnJk-4_vRBW_e-OBCFqVHw'
    },
    {
        title: 'Grey Area',
        artist: 'Little Simz',
        cover: 'images/greyArea.jpg',
        description: "A genre-defying masterpiece that transcends traditional hip-hop, showcasing her raw talent, introspective lyrics, and dynamic production.",
        genres: ['Hip-hop', 'Rap', 'Experimental'],
        link: 'https://open.spotify.com/album/7HtPBw5F3aXiwnWJ5ejFBd?si=44gArYODRe-N7GhLsbdfZw'
    },
    {
        title: 'how i\'m feeling now',
        artist: 'Charli XCX',
        cover: 'images/howImFeelingNow.jpg',
        description: "A groundbreaking album created during the COVID-19 pandemic, reflecting the raw and emotional experiences of quarantine life. The album captures the essence of isolation, resilience, and creative expression through a unique blend of pop and electronic music.",
        genres: ['Pop', 'Electronic', 'Experimental'],
        link: 'https://open.spotify.com/album/39zBcfC7zL6xX2z3hfZ5ds?si=rfj-xR9lSpO5-v0lfsRrHA'
    },
    {
        title: 'The book about my idle plot on a vague anxiety',
        artist: 'Toe',
        cover: 'images/thebook.jpg',
        description: 'A captivating album by Toe, characterized by intricate instrumental compositions that convey a range of emotions, from introspection to catharsis.',
        genres: ['Math Rock', 'Post-Rock'],
        link: 'https://open.spotify.com/album/7x84X6ve0wa2UYckfCm1uV?si=FQYChWQTRteLRTp0k5FY6w'
    },
    {
        title: 'into lake griffy',
        artist: 'Good Luck',
        cover: 'images/intoLakeGriffy.jpg',
        description: 'A blend of indie rock and pop-punk, offering catchy melodies and heartfelt lyrics that resonate with a sense of nostalgia and youthful energy.',
        genres: ['Indie Rock', 'Pop-Punk'],
        link: 'https://open.spotify.com/album/your-spotify-link-here'
    },
    {
        title: 'The Black Parade',
        artist: 'My Chemical Romance',
        cover: 'images/theBlackParade.jpg',
        description: 'A rock opera concept album known for its theatricality and emotional intensity. It takes listeners on a journey through themes of life, death, and identity.',
        genres: ['Alternative Rock', 'Emo'],
        link: 'https://open.spotify.com/album/your-spotify-link-here'
    },
    {
        title: 'Malibu',
        artist: 'Anderson .Paak',
        cover: 'images/malibu.jpg',
        description: "A soulful and groovy album, featuring a fusion of R&B, hip-hop, and funk. It's known for its smooth vocals, impressive instrumentation, and reflective storytelling.",
        genres: ['R&B', 'Hip-hop', 'Funk'],
        link: 'https://open.spotify.com/album/your-spotify-link-here'
    },
    {
        title: 'Live at the House of Blues',
        artist: 'Thrice',
        cover: 'images/liveAtHouseOfBlues.jpg',
        description: "Thrice\'s \"Live from the House of Blues\" captures the band's powerful live performance and raw energy. It's a testament to their post-hardcore and alternative rock sound, showcasing their intense stage presence.",
        genres: ['Post-hardcore', 'Live Album'],
        link: 'https://open.spotify.com/album/your-spotify-link-here'
    }
]

const genreList = [];

const randomRGB = () => {
    let red = Math.floor(Math.random() * 100);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 100);

    return  "rgb(" + red + ", " + green + ", " + blue + ")";
}

/*
<div class="album">
    <div class="album-cover">

    </div>
    <h2 class="album-title">

    </h2>
    <h3 class="album-artist">

    </h3>
    <p class="album-description">

    </p>
    <ul class="album-genres">

    </ul>
</div> */

const dim = document.querySelector('.dim');

const hoverDim = () => {
    dim.style.visibility = "visible";
}

const hoverOut = () => {
    dim.style.visibility = "hidden";
}

function addAlbum(album){
    const newAlbum = document.createElement('div');
    newAlbum.className = 'album';

    const cardHeader = document.createElement('div');
        cardHeader.className = 'card-header';       
    const cardMain = document.createElement('div');
        cardMain.className = 'card-main';  
    const cardFooter = document.createElement('div');
        cardFooter.className = 'card-footer';  

    const albumCover = document.createElement('img');
        albumCover.className = "album-cover"
        albumCover.src = (album.cover);
        albumCover.alt = 'album cover image';

    const albumTitle = document.createElement('h2');
        albumTitle.className = 'album-title';
        albumTitle.textContent = album.title;

    const albumArtist = document.createElement('h3');
        albumArtist.className = 'album-artist';
        albumArtist.textContent = album.artist;

    const albumDescr = document.createElement('p');
        albumDescr.className = 'album-description';
        albumDescr.textContent = album.description;

    const albumGenres = document.createElement('ul');
        albumGenres.className = 'album-genres';
        album.genres.forEach(element => {
        const genre = document.createElement('li');
        const searchGenre = genreList.find((findThisGenre) => findThisGenre.genreName === element);
            genre.className = 'genre';
            if(!searchGenre){
                const newGenre = {genreName: element, genreColor: randomRGB()};
                genreList.push(newGenre);
                genre.style.backgroundColor = newGenre.genreColor;
            } else {
                genre.style.backgroundColor = searchGenre.genreColor;
            }
            genre.textContent = element;
            albumGenres.appendChild(genre);
        });

    console.log(genreList);

    const albumLink = document.createElement('a');
        albumLink.className = 'album-link';
        albumLink.ariaLabel = 'spotify link to album';

        albumLink.href = album.link;
    
    const spotifyLink = document.createElement('img');
        spotifyLink.className = "logo-spotify";
        spotifyLink.src = 'images/spotify.png';
        spotifyLink.alt = "spotify logo";

    albumLink.appendChild(spotifyLink);

    cardHeader.appendChild(albumCover);

    cardMain.appendChild(albumTitle);
    cardMain.appendChild(albumArtist);
    cardMain.appendChild(albumDescr);
    cardMain.appendChild(albumGenres);

    cardFooter.appendChild(albumLink);

    newAlbum.appendChild(cardHeader);
    newAlbum.appendChild(cardMain);
    newAlbum.appendChild(cardFooter);

    newAlbum.addEventListener("mouseover", hoverDim);
    newAlbum.addEventListener("mouseout", hoverOut);

    document.querySelector('article').appendChild(newAlbum);
}

const fillALbums = () => {
    collection.forEach(element => {
        addAlbum(element);
    });
}

fillALbums();

const searchBar = document.querySelector('#searchBar');
searchBar.addEventListener('keyup', () => {
    document.querySelector("article").innerHTML = "";
    document.querySelector(".dim").style.visibility = "hidden";
    collection.forEach(element => {
        if(element.title.toLowerCase().includes(searchBar.value) 
        || element.artist.toLowerCase().includes(searchBar.value) ){
            addAlbum(element);
        }
    });
});