// app.js - High Fidelity Spotify Devotional & Melody Player Logic

// Database combining original 4 Devotional tracks and 49 secular Tamil gold classics
const songsData = [
    // Sabarimala Devotional Playlist (Original 4 Songs)
    {
        id: 0,
        title: "Kattodu Kattumudi",
        artist: "Srihari",
        album: "Lord Ayyappa Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779605778/Kattodu_Kattumudi_-_Srihari_vcu7sc.mp3",
        cover: "assets/kattodu_kattumudi.png",
        duration: "09:59",
        liked: false,
        playlist: "devotional"
    },
    {
        id: 1,
        title: "Enga Karuppasamy",
        artist: "Traditional Folk",
        album: "Karuppasamy Devotional",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779605776/Enga_Karuppasamy_mdqa8k.mp3",
        cover: "assets/enga_karuppasamy.png",
        duration: "06:17",
        liked: false,
        playlist: "devotional"
    },
    {
        id: 2,
        title: "Kannimoola Ganapathiye",
        artist: "Veeramani Kannan & Veeramani Raju",
        album: "Ayyappa Devotional Path",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779605771/Kannimoola_Ganapathiye_-_Veeramani_Kannan_Veeramani_Raju_fybuus.mp3",
        cover: "assets/kannimoola_ganapathi.png",
        duration: "04:14",
        liked: false,
        playlist: "devotional"
    },
    {
        id: 3,
        title: "Onnam Padi",
        artist: "Srihari",
        album: "Padi Paatu 18 Steps",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779605761/Onnam_Padi_-_Srihari_oplbtl.mp3",
        cover: "assets/onnam_padi.png",
        duration: "01:29",
        liked: false,
        playlist: "devotional"
    },

    // Favourite Songs Playlist (49 secular Tamil melody gold)
    {
        id: 4,
        title: "Konji Konji (Male)",
        artist: "S. P. Balasubrahmanyam",
        album: "Veera Melody",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609549/Konji-Konji-Male_sjrgyo.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:36",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 5,
        title: "Innum Oru Iravu",
        artist: "G. V. Prakash Kumar",
        album: "Nedunchalai Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609549/Innum-Oru-Iravu-MassTamilan.com_lugvdw.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:12",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 6,
        title: "Malai Kovil Vaasal",
        artist: "Mano & Swarnalatha",
        album: "Veera Melody Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/q_auto/f_auto/v1779609549/Malai-Kovil-Vaasal_wyc6bx.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:01",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 7,
        title: "Nenjukulle Innarunnu",
        artist: "S. P. B. & S. Janaki",
        album: "Ponnumani Melody",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/q_auto/f_auto/v1779609539/Nenjukulle-Innarunnu_lvu5ct.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:52",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 8,
        title: "Rathiriyil Paadum",
        artist: "S. Janaki",
        album: "Nilaave Vaa Melody",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/q_auto/f_auto/v1779609537/Rathiriyil_Paadum_mhy36t.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:14",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 9,
        title: "Kuyil Paatu (Female)",
        artist: "Swarnalatha",
        album: "En Rasavin Manasile",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/q_auto/f_auto/v1779609534/Kuyil_Paatu_Female_zi7hne.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:21",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 10,
        title: "Chinna Chinna Aasai",
        artist: "Minmini",
        album: "Roja Gold Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/q_auto/f_auto/v1779609533/Chinna_Chinna_l7jpp7.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:55",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 11,
        title: "Pottri Paadadi Ponneh (Bit)",
        artist: "Ilaiyaraaja",
        album: "Thevar Magan Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609531/Pottri_Paadadi_Ponneh_Bit_rhfprt.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "01:10",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 12,
        title: "En Thaayenum Koil",
        artist: "Ilaiyaraaja",
        album: "Aranmanai Kili Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609528/En_Thaayenum_Koil_bzvhqb.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:44",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 13,
        title: "Paravaye Engu Irukirai",
        artist: "Yuvan Shankar Raja",
        album: "Kattradhu Thamizh Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609528/Paravaye-Engu-Irukirai-MassTamilan.com_xnvayp.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "03:45",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 14,
        title: "Oru Pen Pura",
        artist: "S. P. Balasubrahmanyam",
        album: "Dharma Yutham Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609527/Oru-Pen-Pura_axm2ba.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:28",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 15,
        title: "Thendral Vanthu",
        artist: "Ilaiyaraaja & S. Janaki",
        album: "Avatharam Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609520/Thendral_Vanthu_bgzkfh.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:18",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 16,
        title: "Naan Paadum Mouna Raagam",
        artist: "S. P. B.",
        album: "Mouna Ragam Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609518/Naan_Paadum_Mouna_Raagam_r1eonm.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:26",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 17,
        title: "Ye Rasaathi",
        artist: "Ilaiyaraaja",
        album: "En Rasavin Manasile Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609514/Ye_Rasaathi_dzxcsj.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:32",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 18,
        title: "Vaanuyarntha Solaiyile",
        artist: "S. P. B.",
        album: "Idaya Kovil Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609513/Vaanuyarntha_Solaiyile_nlghwl.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:22",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 19,
        title: "Kannadasan Karaikudi",
        artist: "Ilaiyaraaja",
        album: "Karakattakkaran Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609508/Kannadasan-Karaikudi_zhdwao.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:54",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 20,
        title: "Amman Kovil",
        artist: "Ilaiyaraaja",
        album: "Amman Kovil Kizhakale",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609508/Amman_Kovil_krmsxe.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:39",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 21,
        title: "Nila Adhu Vaanathumele",
        artist: "Ilaiyaraaja",
        album: "Nayagan Gold Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609507/Nila_Adhu_Vaanathumele_nwsden.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:33",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 22,
        title: "Engiruntho Azhaikkum",
        artist: "Ilaiyaraaja",
        album: "Enkeyoo Ketta Kural",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609503/Engiruntho_vywh1e.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:18",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 23,
        title: "Pottu Vaitha (Version 2)",
        artist: "S. P. Balasubrahmanyam",
        album: "Idhayam Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609501/Pottu_Vaitha_Version_2_qephxv.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:47",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 24,
        title: "Aasai Athigam Vachu",
        artist: "S. Janaki",
        album: "Marupadiyum Melody",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609497/Aasai-Athigam-Vachu-MassTamilan.com_fn9qem.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:29",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 25,
        title: "Pottu Vaitha (Version 1)",
        artist: "S. P. B.",
        album: "Idhayam Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609497/Pottu_Vaitha_Version_1_h2t1ia.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:04",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 26,
        title: "Poongaatre Ini (Sad)",
        artist: "Ilaiyaraaja",
        album: "Classic Sad Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609496/Poongaatre_Ini_Sad_pcnuqy.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "03:19",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 27,
        title: "Nee Partha Vizhigal",
        artist: "Vijay Yesudas & Shweta Mohan",
        album: "3 (Moonu) Love Album",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609492/Nee-Partha_x95e0x.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "03:51",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 28,
        title: "Nalam Vazha Ennalum",
        artist: "S. P. Balasubrahmanyam",
        album: "Marupadiyum Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609489/Nalam-Vazha-Ennalum-MassTamilan.com_x0fgkv.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:51",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 29,
        title: "Pavazha Malli",
        artist: "Ilaiyaraaja",
        album: "Barathan Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609487/Pavazha_Malli_hbilsp.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:22",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 30,
        title: "Ulaginil Miga",
        artist: "Yuvan Shankar Raja",
        album: "Ram Melody Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609481/Ulaginil-Miga_vaqfet.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:17",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 31,
        title: "Raja Raja Chozhan Naan",
        artist: "S. P. Balasubrahmanyam",
        album: "Rettai Vaal Kuruvi Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609480/Raja_Raja_Chozhan_Naan_xtyuss.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:43",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 32,
        title: "Chittukku Chella Chittuku",
        artist: "S. P. B.",
        album: "Gopura Vasalile Melodies",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609478/Chittukku-Chella-Chittuku-MassTamilan.dev_kgzsiz.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:56",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 33,
        title: "Makkayala (Version 1)",
        artist: "M. S. Viswanathan",
        album: "Senthamizh Paattu Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609477/Makkayala_hlrjrf.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:11",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 34,
        title: "Vechikkava Unna Mattum",
        artist: "S. P. B. & S. Janaki",
        album: "Siva Melody Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609477/Vechikkava-Unna-Mattum-MassTamilan.dev_dbdcd4.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:36",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 35,
        title: "Akkarai Seemai",
        artist: "K. J. Yesudas",
        album: "Priya Retro Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609469/Akkarai-Seemai-MassTamilan.dev_iiiwah.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:24",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 36,
        title: "Thenpaandi Cheemayile",
        artist: "Kamal Haasan & Ilaiyaraaja",
        album: "Nayagan Evergreens",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609468/Thenpaandi_Cheemayile_nayrgf.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:19",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 37,
        title: "Oorum Blood",
        artist: "Ilaiyaraaja",
        album: "Enga Ooru Pattukaran",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609467/Oorum_Blood_rrvcco.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:47",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 38,
        title: "Un Badhil Vendi",
        artist: "Classic Melodies",
        album: "Melody Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609465/Unn-Badhil-Vendi_oxfeph.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:12",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 39,
        title: "Paavangalai",
        artist: "Classic Melodies",
        album: "Melody Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609464/Paavangalai_nxmafl.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:29",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 40,
        title: "Senorita",
        artist: "S. P. Balasubrahmanyam",
        album: "Johnny Evergreens",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609463/Senorita-MassTamilan.com_d4fgez.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:20",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 41,
        title: "Makkayala (Version 2)",
        artist: "M. S. Viswanathan",
        album: "Senthamizh Paattu Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609458/Makkayala_1_uadmxf.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:02",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 42,
        title: "Para Para Pattaampoochi",
        artist: "Yuvan Shankar Raja",
        album: "Kattradhu Thamizh Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609457/Para-Para-Pattaampoochi-MassTamilan.com_gechfa.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "03:49",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 43,
        title: "Thappellam Thappe Illai",
        artist: "Ilaiyaraaja",
        album: "Retro Beat Album",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609454/Thappellam-Thappe-I_q2zqtj.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:08",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 44,
        title: "Kuyil Paatu (Duet)",
        artist: "S. P. B. & Swarnalatha",
        album: "En Rasavin Manasile Gold",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609451/Kuyil_Paatu_Duet_v581to.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:36",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 45,
        title: "Endhan Nenjil",
        artist: "S. Janaki",
        album: "Mellath Thirandhathu Kadhavu",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609450/Endhan-Nenjil-MassTamilan.com_r8mccs.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:22",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 46,
        title: "Oh Vasantha Raja",
        artist: "S. P. B. & S. Janaki",
        album: "Neengal Kettavai Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609448/Oh-Vasantha-Raja-MassTamilan.com_vxlkff.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:31",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 47,
        title: "Kanne Kalaimaane",
        artist: "K. J. Yesudas",
        album: "Moondram Pirai Masterpiece",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609444/Kanne_Kalaimaane_he2pao.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "05:02",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 48,
        title: "Chinna Thayaval",
        artist: "S. Janaki",
        album: "Thalapathi Classic Hits",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609443/Chinna-Thayaval_ftyigb.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:30",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 49,
        title: "Ellorukkum Nalla Kalam",
        artist: "Ilaiyaraaja",
        album: "Classic Melody Album",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609442/Ellorukkum-Nalla-Kalam-MassTamilan.com_zqsdtp.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:14",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 50,
        title: "Unnai Unnai Unnai",
        artist: "Ilaiyaraaja",
        album: "Gold Classics",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609438/Unnai-Unnai-Unnai_m9zzty.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:38",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 51,
        title: "Vaanam Thottu Pona",
        artist: "S. P. Balasubrahmanyam",
        album: "Rajakumaran Evergreens",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609437/Vaanam_Thottu_Pona_euw82r.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:35",
        liked: false,
        playlist: "favourites"
    },
    {
        id: 52,
        title: "Poongaatru Puthithaanathu",
        artist: "K. J. Yesudas",
        album: "Moondram Pirai Evergreens",
        url: "https://res.cloudinary.com/dnwftzabe/video/upload/v1779609435/Poongaatru_Puthithaanathu_cmjauw.mp3",
        cover: "assets/favourite_songs_playlist.png",
        duration: "04:38",
        liked: false,
        playlist: "favourites"
    }
];

// Application State
let songs = [...songsData];
let currentPlaylistView = 'all'; // 'all' (Devotional Hits), 'favourites' (Favourite songs), 'liked' (Liked songs)
let currentSongIndex = null;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false; // false = no repeat, true = repeat current track
let isMuted = false;
let currentVolume = 0.8;
let previousVolume = 0.8;
let searchQuery = "";
let customPlaylists = []; // for custom playlists if user adds them

// DOM Elements
const audio = document.getElementById("main-audio-element");
const songsListBody = document.getElementById("songs-list-body");
const searchInput = document.getElementById("search-input-el");
const searchClearBtn = document.getElementById("search-clear-btn");
const searchBarContainer = document.getElementById("header-search-bar");
const searchEmptyView = document.getElementById("search-empty-view");
const searchHighlight = document.getElementById("search-query-highlight");

// Navigation Sidebar Buttons
const navHome = document.getElementById("nav-home");
const navSearch = document.getElementById("nav-search");
const libPlaylistAll = document.getElementById("lib-playlist-all");
const libPlaylistFavourites = document.getElementById("lib-playlist-favourites");
const libPlaylistLiked = document.getElementById("lib-playlist-liked");
const sidebarLogo = document.getElementById("sidebar-logo");
const createPlaylistBtn = document.getElementById("create-playlist-btn");
const libraryPlaylistsContainer = document.getElementById("library-playlists");
const likedCountSidebar = document.getElementById("liked-count-sidebar");

// Hero Banner Elements
const heroBanner = document.getElementById("playlist-hero-banner");
const bannerCoverImage = document.getElementById("banner-cover-image");
const bannerTitle = document.getElementById("banner-playlist-title");
const bannerDesc = document.getElementById("banner-playlist-desc");
const bannerPlaylistType = document.getElementById("banner-playlist-type");
const bannerSongCount = document.getElementById("banner-song-count");
const bannerTotalDuration = document.getElementById("banner-total-duration");
const bannerPlayBtn = document.getElementById("banner-play-btn");
const bannerPlayIcon = document.getElementById("banner-play-icon");
const bannerFavBtn = document.getElementById("banner-fav-btn");

// Footer Player Controls Elements
const footerCover = document.getElementById("footer-player-cover");
const footerTitle = document.getElementById("footer-player-title");
const footerArtist = document.getElementById("footer-player-artist");
const footerLikeBtn = document.getElementById("footer-player-like-btn");

const ctrlPlayPause = document.getElementById("ctrl-play-pause");
const footerPlayIcon = document.getElementById("footer-play-icon");
const ctrlPrev = document.getElementById("ctrl-prev");
const ctrlNext = document.getElementById("ctrl-next");
const ctrlShuffle = document.getElementById("ctrl-shuffle");
const ctrlRepeat = document.getElementById("ctrl-repeat");

const timeCurrent = document.getElementById("time-current");
const timeTotal = document.getElementById("time-total");
const playbackSlider = document.getElementById("playback-slider");
const playbackProgress = document.getElementById("playback-progress");
const playbackHandle = document.getElementById("playback-handle");

const btnMute = document.getElementById("btn-mute");
const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume-slider");
const volumeProgress = document.getElementById("volume-progress");
const volumeHandle = document.getElementById("volume-handle");
const btnFullscreen = document.getElementById("btn-fullscreen");
const btnQueue = document.getElementById("btn-queue");

// SVG definitions for reuse in play/pause toggles
const SVG_PLAY = `<path d="M7.05 3.606l13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"/>`;
const SVG_PAUSE = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

const SVG_VOLUME_HIGH = `<path d="M16.617 1.956a1 1 0 0 0-1.242.418L8.685 11H3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.185l6.69 8.626A1 1 0 0 0 17 23V2a1 1 0 0 0-.383-.804zM15 20.354L9.805 13.66A1 1 0 0 0 9 13H4.5v-1H9a1 1 0 0 0 .805-.66L15 4.646v15.708zM22.023 6.953a1 1 0 1 0-1.414 1.414 6 6 0 0 1 0 8.486 1 1 0 1 0 1.414 1.414 8 8 0 0 0 0-11.314z"/>`;
const SVG_VOLUME_MUTED = `<path d="M16.617 1.956a1 1 0 0 0-1.242.418L8.685 11H3.5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h5.185l6.69 8.626A1 1 0 0 0 17 23V2a1 1 0 0 0-.383-.804zM15 20.354L9.805 13.66A1 1 0 0 0 9 13H4.5v-1H9a1 1 0 0 0 .805-.66L15 4.646v15.708zM19.586 12l2.293-2.293a1 1 0 0 0-1.414-1.414L18.172 10.586l-2.293-2.293a1 1 0 1 0-1.414 1.414L16.758 12l-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414L19.586 12z"/>`;

// Initialize Application
function init() {
    renderSongList();
    updateSidebarCounts();
    setupEventListeners();
    
    // Set default volume
    audio.volume = currentVolume;
    updateVolumeSlider(currentVolume);
    
    // Select first song of the initial active playlist view but don't play it yet
    const activeList = getActiveSongs();
    if (activeList.length > 0) {
        const baseIndex = songs.findIndex(s => s.id === activeList[0].id);
        selectSong(baseIndex, false);
    }
}

// Format duration: seconds -> MM:SS
function formatTime(secs) {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Get the active array of songs based on current playlist view and search query
function getActiveSongs() {
    let list = songs;
    
    if (currentPlaylistView === 'all') {
        list = songs.filter(s => s.playlist === 'devotional');
    } else if (currentPlaylistView === 'favourites') {
        list = songs.filter(s => s.playlist === 'favourites');
    } else if (currentPlaylistView === 'liked') {
        list = songs.filter(s => s.liked);
    }
    
    if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        list = list.filter(s => 
            s.title.toLowerCase().includes(query) || 
            s.artist.toLowerCase().includes(query) ||
            s.album.toLowerCase().includes(query)
        );
    }
    return list;
}

// Render the main song list table
function renderSongList() {
    const activeList = getActiveSongs();
    songsListBody.innerHTML = "";
    
    if (activeList.length === 0) {
        if (searchQuery !== "") {
            // Show empty search state
            searchEmptyView.style.display = "flex";
            searchHighlight.textContent = searchQuery;
            document.querySelector(".song-table").style.display = "none";
        } else if (currentPlaylistView === 'liked') {
            // Empty liked songs state
            songsListBody.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-secondary);">
                        <div style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--text-primary);">Songs you like will appear here</div>
                        <div>Save songs by clicking the heart icon.</div>
                    </td>
                </tr>
            `;
            document.querySelector(".song-table").style.display = "table";
            searchEmptyView.style.display = "none";
        }
        return;
    }

    searchEmptyView.style.display = "none";
    document.querySelector(".song-table").style.display = "table";

    activeList.forEach((song, idx) => {
        const isCurrent = currentSongIndex !== null && songs[currentSongIndex].id === song.id;
        const tr = document.createElement("tr");
        tr.className = isCurrent ? "active-song" : "";
        if (isCurrent && isPlaying) {
            tr.classList.add("playing-row");
        }
        
        // Find if this specific song is liked
        const isLiked = song.liked;
        
        // Render Columns
        // Col 1: Index / Play Icon / Equalizer
        let indexColContent = `<span class="index-num">${idx + 1}</span>`;
        if (isCurrent && isPlaying) {
            indexColContent = `
                <div class="equalizer">
                    <div class="equalizer-bar"></div>
                    <div class="equalizer-bar"></div>
                    <div class="equalizer-bar"></div>
                </div>
            `;
        }
        
        tr.innerHTML = `
            <td class="col-index">
                ${indexColContent}
                <button class="index-play-btn" onclick="handleRowPlayClick(event, ${song.id})" title="Play ${song.title}">
                    <svg viewBox="0 0 24 24">
                        ${isCurrent && isPlaying ? SVG_PAUSE : SVG_PLAY}
                    </svg>
                </button>
            </td>
            <td>
                <div class="col-title">
                    <img src="${song.cover}" alt="${song.title}" class="song-thumbnail">
                    <div class="song-title-info">
                        <span class="song-title">${song.title}</span>
                        <span class="song-artist">${song.artist}</span>
                    </div>
                </div>
            </td>
            <td class="col-album">${song.album}</td>
            <td>
                <div class="col-duration">
                    <button class="heart-icon-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeSong(event, ${song.id})" title="${isLiked ? 'Remove from library' : 'Save to library'}">
                        <svg viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </button>
                    <span>${song.duration}</span>
                </div>
            </td>
        `;
        
        // Double click to play
        tr.addEventListener("dblclick", () => {
            const songIndexInBase = songs.findIndex(s => s.id === song.id);
            if (songIndexInBase !== -1) {
                selectSong(songIndexInBase, true);
            }
        });
        
        songsListBody.appendChild(tr);
    });
}

// Update Sidebar and metadata counters
function updateSidebarCounts() {
    const likedCount = songs.filter(s => s.liked).length;
    likedCountSidebar.textContent = likedCount;
    
    // Calculate total duration of active view list
    const activeList = getActiveSongs();
    bannerSongCount.textContent = activeList.length;
    
    let totalSecs = 0;
    activeList.forEach(s => {
        const parts = s.duration.split(":");
        totalSecs += parseInt(parts[0]) * 60 + parseInt(parts[1]);
    });
    
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    
    let durStr = "";
    if (h > 0) durStr += `${h} hr `;
    if (m > 0 || h > 0) durStr += `${m} min `;
    durStr += `${s} sec`;
    
    bannerTotalDuration.textContent = `about ${durStr}`;
}

// Select a song and optionally play it
function selectSong(index, shouldPlay = true) {
    if (index < 0 || index >= songs.length) return;
    
    currentSongIndex = index;
    const song = songs[currentSongIndex];
    
    // Set Audio Source
    audio.src = song.url;
    audio.load();
    
    // Update player footer metadata
    footerCover.src = song.cover;
    footerTitle.textContent = song.title;
    footerArtist.textContent = song.artist;
    
    // Update footer heart active state
    if (song.liked) {
        footerLikeBtn.classList.add("liked");
        footerLikeBtn.setAttribute("title", "Remove from Liked Songs");
    } else {
        footerLikeBtn.classList.remove("liked");
        footerLikeBtn.setAttribute("title", "Save to Liked Songs");
    }
    
    // Reset Progress
    playbackProgress.style.width = "0%";
    playbackHandle.style.left = "0%";
    timeCurrent.textContent = "0:00";
    timeTotal.textContent = song.duration;
    
    // Sync table highlight
    renderSongList();
    
    if (shouldPlay) {
        playAudio();
    } else {
        pauseAudio();
    }
}

// Play Audio
function playAudio() {
    if (currentSongIndex === null) {
        const activeList = getActiveSongs();
        if (activeList.length > 0) {
            selectSong(songs.findIndex(s => s.id === activeList[0].id), true);
        }
        return;
    }
    
    isPlaying = true;
    audio.play().then(() => {
        // Sync Buttons
        ctrlPlayPause.classList.add("active");
        footerPlayIcon.innerHTML = SVG_PAUSE;
        bannerPlayIcon.innerHTML = SVG_PAUSE;
        
        // Re-render table to trigger dynamic equalizer animations on active row
        renderSongList();
    }).catch(err => {
        console.error("Audio playback error:", err);
        isPlaying = false;
    });
}

// Pause Audio
function pauseAudio() {
    isPlaying = false;
    audio.pause();
    
    ctrlPlayPause.classList.remove("active");
    footerPlayIcon.innerHTML = SVG_PLAY;
    bannerPlayIcon.innerHTML = SVG_PLAY;
    
    renderSongList();
}

// Play / Pause Toggle
function togglePlayPause() {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
}

// Handle Play / Pause inside Row
window.handleRowPlayClick = function(event, songId) {
    event.stopPropagation();
    const songIndex = songs.findIndex(s => s.id === songId);
    
    if (currentSongIndex === songIndex) {
        togglePlayPause();
    } else {
        selectSong(songIndex, true);
    }
};

// Play previous song
function playPrevious() {
    if (songs.length === 0) return;
    
    // If repeat is active, replay current song from beginning
    if (isRepeat) {
        audio.currentTime = 0;
        playAudio();
        return;
    }
    
    const activeList = getActiveSongs();
    if (activeList.length === 0) return;
    
    // Find current song in active view index
    const currentActiveSong = songs[currentSongIndex];
    let activeIdx = activeList.findIndex(s => s.id === currentActiveSong.id);
    
    let targetSong;
    if (isShuffle) {
        const randIdx = Math.floor(Math.random() * activeList.length);
        targetSong = activeList[randIdx];
    } else {
        if (activeIdx === -1) {
            targetSong = activeList[0];
        } else {
            activeIdx = (activeIdx - 1 + activeList.length) % activeList.length;
            targetSong = activeList[activeIdx];
        }
    }
    
    const newBaseIdx = songs.findIndex(s => s.id === targetSong.id);
    selectSong(newBaseIdx, true);
}

// Play next song
function playNext() {
    if (songs.length === 0) return;
    
    // If repeat is active, replay current song from beginning
    if (isRepeat) {
        audio.currentTime = 0;
        playAudio();
        return;
    }
    
    const activeList = getActiveSongs();
    if (activeList.length === 0) return;
    
    const currentActiveSong = songs[currentSongIndex];
    let activeIdx = activeList.findIndex(s => s.id === currentActiveSong.id);
    
    let targetSong;
    if (isShuffle) {
        const randIdx = Math.floor(Math.random() * activeList.length);
        targetSong = activeList[randIdx];
    } else {
        if (activeIdx === -1) {
            targetSong = activeList[0];
        } else {
            activeIdx = (activeIdx + 1) % activeList.length;
            targetSong = activeList[activeIdx];
        }
    }
    
    const newBaseIdx = songs.findIndex(s => s.id === targetSong.id);
    selectSong(newBaseIdx, true);
}

// Toggle Liked Songs
window.toggleLikeSong = function(event, songId) {
    if (event) event.stopPropagation();
    const songIndex = songs.findIndex(s => s.id === songId);
    if (songIndex === -1) return;
    
    songs[songIndex].liked = !songs[songIndex].liked;
    
    // If we are currently in Liked Songs view, and we unliked the song, re-render
    if (currentPlaylistView === 'liked' && !songs[songIndex].liked) {
        renderSongList();
    } else {
        renderSongList();
    }
    
    updateSidebarCounts();
    
    // Update footer player like state if it's the current song
    if (currentSongIndex === songIndex) {
        if (songs[songIndex].liked) {
            footerLikeBtn.classList.add("liked");
            footerLikeBtn.setAttribute("title", "Remove from Liked Songs");
        } else {
            footerLikeBtn.classList.remove("liked");
            footerLikeBtn.setAttribute("title", "Save to Liked Songs");
        }
    }
};

// Toggle current playlist liked status from footer or banner button
function toggleLikeCurrentSong() {
    if (currentSongIndex !== null) {
        toggleLikeSong(null, songs[currentSongIndex].id);
    }
}

// Switch Playlist Views
function setPlaylistView(view) {
    if (currentPlaylistView === view) return;
    currentPlaylistView = view;
    
    // Reset search when switching playlist view
    searchQuery = "";
    searchInput.value = "";
    searchClearBtn.style.display = "none";
    
    // Manage Sidebar highlighting and Banner Details
    if (view === 'all') {
        libPlaylistAll.classList.add("active");
        libPlaylistFavourites.classList.remove("active");
        libPlaylistLiked.classList.remove("active");
        navHome.classList.add("active");
        navSearch.classList.remove("active");
        searchBarContainer.style.display = "none";
        
        // Update Banner UI
        heroBanner.style.background = "var(--gradient-sabarimala)";
        bannerCoverImage.src = "assets/sabarimala_playlist.png";
        bannerPlaylistType.textContent = "Public Playlist";
        bannerTitle.textContent = "Sabarimala Devotional Hits";
        bannerDesc.textContent = "Lord Ayyappan, Karuppasamy and Ganapathi devotional masterpieces. Exact Spotify experience with full audio controls, dynamic search, and interactive libraries.";
        bannerFavBtn.style.display = "flex";
    } else if (view === 'favourites') {
        libPlaylistAll.classList.remove("active");
        libPlaylistFavourites.classList.add("active");
        libPlaylistLiked.classList.remove("active");
        navHome.classList.remove("active");
        navSearch.classList.remove("active");
        searchBarContainer.style.display = "none";
        
        // Update Banner UI for Favourite Melodies
        heroBanner.style.background = "linear-gradient(180deg, #0e7490 0%, #121212 100%)";
        bannerCoverImage.src = "assets/favourite_songs_playlist.png";
        bannerPlaylistType.textContent = "Public Playlist";
        bannerTitle.textContent = "Favourite songs";
        bannerDesc.textContent = "Your ultimate selection of golden evergreen melody classics, romantic Tamil hits, and orchestral gems by legendary composers.";
        bannerFavBtn.style.display = "flex";
    } else if (view === 'liked') {
        libPlaylistAll.classList.remove("active");
        libPlaylistFavourites.classList.remove("active");
        libPlaylistLiked.classList.add("active");
        navHome.classList.remove("active");
        navSearch.classList.remove("active");
        searchBarContainer.style.display = "none";
        
        // Update Banner UI for Liked Songs
        heroBanner.style.background = "linear-gradient(180deg, #450af5 0%, #121212 100%)";
        bannerCoverImage.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='232' height='232'><rect width='100%' height='100%' fill='%23450af5'/><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' fill='white' transform='scale(0.6) translate(8, 8)'/></svg>";
        bannerPlaylistType.textContent = "Playlist";
        bannerTitle.textContent = "Liked Songs";
        bannerDesc.textContent = "Your personal library of saved melodies and devotional tracks.";
        bannerFavBtn.style.display = "none";
    }
    
    // Select first song of the newly opened playlist view (without autoplaying)
    const activeList = getActiveSongs();
    if (activeList.length > 0) {
        const baseIndex = songs.findIndex(s => s.id === activeList[0].id);
        selectSong(baseIndex, false);
    }
    
    renderSongList();
    updateSidebarCounts();
}

// Volume Bar adjustments
function updateVolumeSlider(volumePercent) {
    volumeProgress.style.width = `${volumePercent * 100}%`;
    volumeHandle.style.left = `${volumePercent * 100}%`;
    
    // Update icons
    if (volumePercent === 0 || isMuted) {
        volumeIcon.innerHTML = SVG_VOLUME_MUTED;
        btnMute.setAttribute("title", "Unmute");
    } else {
        volumeIcon.innerHTML = SVG_VOLUME_HIGH;
        btnMute.setAttribute("title", "Mute");
    }
}

// Set Audio volume
function setVolume(vol) {
    currentVolume = Math.max(0, Math.min(1, vol));
    audio.volume = isMuted ? 0 : currentVolume;
    updateVolumeSlider(isMuted ? 0 : currentVolume);
}

// Toggle Mute
function toggleMute() {
    isMuted = !isMuted;
    if (isMuted) {
        previousVolume = currentVolume;
        audio.volume = 0;
        updateVolumeSlider(0);
    } else {
        currentVolume = previousVolume;
        audio.volume = currentVolume;
        updateVolumeSlider(currentVolume);
    }
}

// Set up Event Listeners
function setupEventListeners() {
    // Audio elements events
    audio.addEventListener("timeupdate", () => {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            playbackProgress.style.width = `${percent}%`;
            playbackHandle.style.left = `${percent}%`;
            timeCurrent.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener("loadedmetadata", () => {
        timeTotal.textContent = formatTime(audio.duration);
        
        // Dynamically overwrite hardcoded duration in playlist songs on metadata load
        if (currentSongIndex !== null) {
            const durationFormatted = formatTime(audio.duration);
            songs[currentSongIndex].duration = durationFormatted;
            renderSongList();
            updateSidebarCounts();
        }
    });

    audio.addEventListener("ended", () => {
        if (isRepeat) {
            audio.currentTime = 0;
            playAudio();
        } else {
            playNext();
        }
    });

    // Control buttons events
    ctrlPlayPause.addEventListener("click", togglePlayPause);
    bannerPlayBtn.addEventListener("click", () => {
        if (currentSongIndex === null) {
            const activeList = getActiveSongs();
            if (activeList.length > 0) {
                const baseIndex = songs.findIndex(s => s.id === activeList[0].id);
                selectSong(baseIndex, true);
            }
        } else {
            togglePlayPause();
        }
    });
    
    ctrlPrev.addEventListener("click", playPrevious);
    ctrlNext.addEventListener("click", playNext);

    // Shuffle toggle
    ctrlShuffle.addEventListener("click", () => {
        isShuffle = !isShuffle;
        ctrlShuffle.classList.toggle("active", isShuffle);
        ctrlShuffle.setAttribute("title", isShuffle ? "Disable shuffle" : "Enable shuffle");
    });

    // Repeat toggle
    ctrlRepeat.addEventListener("click", () => {
        isRepeat = !isRepeat;
        ctrlRepeat.classList.toggle("active", isRepeat);
        ctrlRepeat.setAttribute("title", isRepeat ? "Disable repeat" : "Enable repeat");
    });

    // Likes toggles
    footerLikeBtn.addEventListener("click", toggleLikeCurrentSong);
    bannerFavBtn.addEventListener("click", () => {
        bannerFavBtn.classList.toggle("active");
        const isActive = bannerFavBtn.classList.contains("active");
        if (isActive) {
            bannerFavBtn.setAttribute("title", "Remove from library");
            bannerFavBtn.style.color = "var(--spotify-green)";
        } else {
            bannerFavBtn.setAttribute("title", "Add to Your Library");
            bannerFavBtn.style.color = "var(--text-secondary)";
        }
    });

    // Sidebar navigation clicks
    navHome.addEventListener("click", (e) => {
        e.preventDefault();
        setPlaylistView('all');
    });

    sidebarLogo.addEventListener("click", () => {
        setPlaylistView('all');
    });

    libPlaylistAll.addEventListener("click", () => {
        setPlaylistView('all');
    });

    libPlaylistFavourites.addEventListener("click", () => {
        setPlaylistView('favourites');
    });

    libPlaylistLiked.addEventListener("click", () => {
        setPlaylistView('liked');
    });

    // Search activation
    navSearch.addEventListener("click", (e) => {
        e.preventDefault();
        navHome.classList.remove("active");
        navSearch.classList.add("active");
        
        // Show Search input in top header
        searchBarContainer.style.display = "block";
        searchInput.focus();
    });

    // Search typing filter
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim() !== "") {
            searchClearBtn.style.display = "block";
        } else {
            searchClearBtn.style.display = "none";
        }
        renderSongList();
        updateSidebarCounts();
    });

    searchClearBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        searchClearBtn.style.display = "none";
        renderSongList();
        updateSidebarCounts();
        searchInput.focus();
    });

    // Custom Scrubbing controls - Playback bar
    let isDraggingPlayback = false;

    playbackSlider.addEventListener("mousedown", (e) => {
        isDraggingPlayback = true;
        handleScrub(e);
    });

    window.addEventListener("mousemove", (e) => {
        if (isDraggingPlayback) {
            handleScrub(e);
        }
    });

    window.addEventListener("mouseup", () => {
        isDraggingPlayback = false;
    });

    function handleScrub(e) {
        if (!audio.duration) return;
        const rect = playbackSlider.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
        
        playbackProgress.style.width = `${percentage * 100}%`;
        playbackHandle.style.left = `${percentage * 100}%`;
        
        audio.currentTime = percentage * audio.duration;
        timeCurrent.textContent = formatTime(audio.currentTime);
    }

    // Volume controls slider
    let isDraggingVolume = false;

    volumeSlider.addEventListener("mousedown", (e) => {
        isDraggingVolume = true;
        handleVolumeDrag(e);
    });

    window.addEventListener("mousemove", (e) => {
        if (isDraggingVolume) {
            handleVolumeDrag(e);
        }
    });

    window.addEventListener("mouseup", () => {
        isDraggingVolume = false;
    });

    function handleVolumeDrag(e) {
        const rect = volumeSlider.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(1, offsetX / rect.width));
        isMuted = false;
        setVolume(percentage);
    }

    btnMute.addEventListener("click", toggleMute);

    // Create custom playlist interaction
    createPlaylistBtn.addEventListener("click", () => {
        const name = prompt("Enter a name for your new playlist:");
        if (name && name.trim() !== "") {
            const cleanName = name.trim();
            const id = `custom-playlist-${Date.now()}`;
            
            // Add custom list to sidebar
            const div = document.createElement("div");
            div.className = "playlist-item";
            div.id = id;
            div.innerHTML = `
                <div class="playlist-img" style="background: linear-gradient(135deg, #1db954, #121212); display: flex; align-items: center; justify-content: center; font-weight: 700; color: white;">
                    ${cleanName.charAt(0).toUpperCase()}
                </div>
                <div class="playlist-info">
                    <span class="playlist-name">${cleanName}</span>
                    <span class="playlist-desc">Playlist • Custom</span>
                </div>
            `;
            
            // Event listener for custom playlist
            div.addEventListener("click", () => {
                document.querySelectorAll(".playlist-item").forEach(el => el.classList.remove("active"));
                div.classList.add("active");
                
                currentPlaylistView = 'custom';
                heroBanner.style.background = "linear-gradient(180deg, #1db954 0%, #121212 100%)";
                bannerCoverImage.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='232' height='232'><rect width='100%' height='100%' fill='%231db954'/><path d='M15 15H3v2h12v-2zm0-8H3v2h12V7zm9 4H3v2h21v-2zm-3-4h-3v2h3V7zm0 8h-3v2h3v-2z' fill='white' transform='scale(0.6) translate(8, 8)'/></svg>";
                bannerPlaylistType.textContent = "Playlist";
                bannerTitle.textContent = cleanName;
                bannerDesc.textContent = `A custom devotion list: "${cleanName}". Select songs below.`;
                bannerFavBtn.style.display = "none";
                
                renderSongList();
                updateSidebarCounts();
            });
            
            libraryPlaylistsContainer.appendChild(div);
        }
    });

    // Fullscreen view trigger
    btnFullscreen.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message}`);
            });
            btnFullscreen.setAttribute("title", "Exit Fullscreen");
        } else {
            document.exitFullscreen();
            btnFullscreen.setAttribute("title", "Fullscreen");
        }
    });

    // Play Queue popup trigger
    btnQueue.addEventListener("click", () => {
        alert("Play Queue: Up Next -\n" + getActiveSongs().slice(0, 15).map((s, i) => `${i + 1}. ${s.title}`).join("\n") + (getActiveSongs().length > 15 ? `\n...and ${getActiveSongs().length - 15} more songs` : ""));
    });

    document.getElementById("btn-back").addEventListener("click", () => {
        setPlaylistView('all');
    });

    document.getElementById("btn-forward").addEventListener("click", () => {
        setPlaylistView('favourites');
    });
}

// Run Initializer
window.onload = init;
