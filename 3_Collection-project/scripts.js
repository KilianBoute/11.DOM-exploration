

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
        title: 'tthe book about my idle plot on a vague anxiety',
        artist: 'Toe',
        cover: 'images/thebook.jpg',
        description: 'A captivating album by Toe, characterized by intricate instrumental compositions that convey a range of emotions, from introspection to catharsis.',
        genres: ['Math Rock', 'Post-Rock'],
        link: 'https://open.spotify.com/album/7x84X6ve0wa2UYckfCm1uV?si=FQYChWQTRteLRTp0k5FY6w'
    },
    {
        title: 'To Pimp A Butterfly',
        artist: 'Kendrick Lamar',
        cover: 'images/tpab.jpeg',
        description: 'An influential hip-hop masterpiece by Kendrick Lamar, known for its profound social commentary, intricate storytelling, and a fusion of jazz and funk elements, challenging listeners to reflect on contemporary issues and personal growth.',
        genres: ["Experimental hip hop",
                "Progressive rap",
                "Conscious hip hop",
                "Jazz rap",
                "G-funk",
                "Neo soul"],
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
        genres: ['Alternative rock', 'Electronic', 'Experimental'],
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
        title: 'Madvillainy',
        artist: 'MF DOOM & Madlib',
        cover: 'images/madvillainy.jpg',
        description: 'Madvillainy is a hip-hop classic, a collaboration between the enigmatic MF DOOM and the innovative producer Madlib. The album is a mind-bending journey through intricate wordplay, abstract beats, and a unique blend of underground hip-hop, earning its place as a cult favorite.',
        genres: ['Hip-hop', 'Underground hip-hop', 'Experimental'],
        link: 'https://open.spotify.com/album/3LGGCoBdE6WdHr3xGlybUx?si=j4PwzluOTbShCFDpUCmTyA'
    },
    {
        title: 'Grey Area',
        artist: 'Little Simz',
        cover: 'images/greyArea.jpg',
        description: "A genre-defying masterpiece that transcends traditional hip-hop, showcasing her raw talent, introspective lyrics, and dynamic production. This album is a testament to Lil Simz's artistry and solidifies her place as a leading voice in contemporary music.",
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
        title: 'Flower Boy',
        artist: 'Tyler, the Creator',
        cover: 'images/flowerBoy.jpg',
        description: "A genre-bending masterpiece that combines elements of hip-hop, R&B, and soul, delivering a deeply personal and introspective journey. The album's lush production and poetic lyrics explore themes of identity, self-discovery, and longing, making it a standout in modern rap.",
        genres: ['Hip-hop', 'R&B', 'Soul'],
        link: 'https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o?si=HnJk-4_vRBW_e-OBCFqVHw'
    },
]


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

function addAlbum(album){
    const newAlbum = document.createElement('div');
    newAlbum.className = 'album';

    const albumCover = document.createElement('img');
    albumCover.src = (album.cover);

    const albumTitle = document.createElement('h2');
    albumTitle.className = 'album-title';
    albumTitle.textContent = album.title;

    const albumArtist = document.createElement('h3');
    albumArtist.className = 'album-artist';
    albumArtist.textContent = album.artist;

    const albumDescr = document.createElement('p');
    albumDescr.className = 'album-description';
    albumDescr.textContent = album.description;
    
    newAlbum.appendChild(albumCover);
    newAlbum.appendChild(albumTitle);
    newAlbum.appendChild(albumArtist);
    newAlbum.appendChild(albumDescr);
    document.querySelector('article').appendChild(newAlbum);
}

collection.forEach(element => {
    addAlbum(element);
});