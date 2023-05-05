const initialState={
    videogames:[
        {
          "id": "fa9e3e00-347a-47ae-ade5-19ae88f199db",
          "name": "Mario",
          "description": "Arcade",
          "platforms": [
            "snes"
          ],
          "background_image": "Imagen",
          "released": "2023-04-20",
          "rating": 4.25,
          "Genres": [
            {
              "name": "Action"
            },
            {
              "name": "Adventure"
            },
            {
              "name": "Strategy"
            }
          ]
        },
        {
          "id": "335ffab0-fabc-4f6a-a3c0-7af3df7cb391",
          "name": "Pacman",
          "description": "Arcade",
          "platforms": [
            "snes"
          ],
          "background_image": "Imagen",
          "released": "2023-04-20",
          "rating": 4.01,
          "Genres": [
            {
              "name": "RPG"
            },
            {
              "name": "Adventure"
            }
          ]
        },
        {
          "id": "f0258041-cff0-4225-8af3-7dd81fea8af2",
          "name": "Uno",
          "description": "Mesa",
          "platforms": [
            "Casa"
          ],
          "background_image": "Imagen",
          "released": "2023-04-20",
          "rating": 4.8,
          "Genres": [
            {
              "name": "Action"
            },
            {
              "name": "Adventure"
            }
          ]
        },
        {
          "id": 3498,
          "name": "Grand Theft Auto V",
          "released": "2013-09-17",
          "rating": 4.47,
          "background_image": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            }
          ]
        },
        {
          "id": 3328,
          "name": "The Witcher 3: Wild Hunt",
          "released": "2015-05-18",
          "rating": 4.66,
          "background_image": "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            },
            {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 52219,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            }
          ]
        },
        {
          "id": 4200,
          "name": "Portal 2",
          "released": "2011-04-18",
          "rating": 4.62,
          "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
          "genres": [
            {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59312,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
              "id": 7,
              "name": "Puzzle",
              "slug": "puzzle",
              "games_count": 97068,
              "image_background": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
            }
          ]
        },
        {
          "id": 5286,
          "name": "Tomb Raider (2013)",
          "released": "2013-03-05",
          "rating": 4.05,
          "background_image": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            }
          ]
        },
        {
          "id": 4291,
          "name": "Counter-Strike: Global Offensive",
          "released": "2012-08-21",
          "rating": 3.57,
          "background_image": "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59312,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            }
          ]
        },
        {
          "id": 13536,
          "name": "Portal",
          "released": "2007-10-09",
          "rating": 4.51,
          "background_image": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
          "genres": [
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            },
            {
              "id": 7,
              "name": "Puzzle",
              "slug": "puzzle",
              "games_count": 97068,
              "image_background": "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
            }
          ]
        },
        {
          "id": 12020,
          "name": "Left 4 Dead 2",
          "released": "2009-11-17",
          "rating": 4.09,
          "background_image": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59312,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            }
          ]
        },
        {
          "id": 5679,
          "name": "The Elder Scrolls V: Skyrim",
          "released": "2011-11-11",
          "rating": 4.42,
          "background_image": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 52219,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            }
          ]
        },
        {
          "id": 4062,
          "name": "BioShock Infinite",
          "released": "2013-03-26",
          "rating": 4.39,
          "background_image": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59312,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            }
          ]
        },
        {
          "id": 28,
          "name": "Red Dead Redemption 2",
          "released": "2018-10-26",
          "rating": 4.59,
          "background_image": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            }
          ]
        },
        {
          "id": 3439,
          "name": "Life is Strange",
          "released": "2015-01-29",
          "rating": 4.11,
          "background_image": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          "genres": [
            {
              "id": 3,
              "name": "Adventure",
              "slug": "adventure",
              "games_count": 131999,
              "image_background": "https://media.rawg.io/media/games/d69/d69810315bd7e226ea2d21f9156af629.jpg"
            }
          ]
        },
        {
          "id": 802,
          "name": "Borderlands 2",
          "released": "2012-09-18",
          "rating": 4.02,
          "background_image": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          "genres": [
            {
              "id": 4,
              "name": "Action",
              "slug": "action",
              "games_count": 172235,
              "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
            },
            {
              "id": 2,
              "name": "Shooter",
              "slug": "shooter",
              "games_count": 59312,
              "image_background": "https://media.rawg.io/media/games/7a2/7a2500ee8b2c0e1ff268bb4479463dea.jpg"
            },
            {
              "id": 5,
              "name": "RPG",
              "slug": "role-playing-games-rpg",
              "games_count": 52219,
              "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            }
          ]
        }
      ],
}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        
        default:
            return {...state};
    }

}
export default rootReducer;