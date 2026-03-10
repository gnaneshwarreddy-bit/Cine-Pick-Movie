let Movies = [
    { "title": "Avengers: Infinity War", "genre": "Action, Sci-Fi", "imdb": 8.4, "google": "4.7", "collection": 2052, "budget": 325, "currency": "USD", "rate": 85, "id": "6ZfuNTqbHE8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Avengers_Infinity_War_poster.jpg", "cast": "Robert Downey Jr., Chris Hemsworth, Chris Evans", "watchAt": "Disney+ Hotstar", "release_date": "April 27, 2018", "languages": "English,Hindi,Telugu,Tamil", "runtime": "2h 29m", "certificate": "U/A" },
    { "title": "Avengers: Endgame", "genre": "Action, Sci-Fi", "imdb": 8.4, "google": "4.8", "collection": 2799, "budget": 356, "currency": "USD", "rate": 94, "id": "TcMBFSGVi1c", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Avengers_Endgame_poster.jpg", "cast": "Robert Downey Jr., Chris Evans, Mark Ruffalo", "watchAt": "Disney+ Hotstar", "release_date": "April 26, 2019", "languages": "English,Hindi,Telugu,Tamil", "runtime": "3h 1m", "certificate": "U/A" },
    { "title": "John Wick: Chapter 4", "genre": "Action, Thriller", "imdb": 7.7, "google": "4.6", "collection": 440, "budget": 100, "currency": "USD", "rate": 94, "id": "qEVUtrk8_B4", "poster": "https://i.ytimg.com/vi/yjRHZEUamCc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB21Ztb53hAMxhl_0UQA6wrs928fw", "cast": "Keanu Reeves, Donnie Yen, Bill Skarsgård", "watchAt": "Lionsgate Play, Prime Video", "release_date": "March 24, 2023", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 49m", "certificate": "A" },
    { "title": "Top Gun: Maverick", "genre": "Action, Drama", "imdb": 8.3, "google": "4.7", "collection": 1495, "budget": 170, "currency": "USD", "rate": 96, "id": "giXco2jaZ_4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Top_Gun_Maverick_Poster.jpg", "cast": "Tom Cruise, Miles Teller, Jennifer Connelly", "watchAt": "Netflix, Prime Video", "release_date": "May 27, 2022", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 10m", "certificate": "U/A" },
    { "title": "Mad Max: Fury Road", "genre": "Action, Sci-Fi", "imdb": 8.1, "google": "4.5", "collection": 380, "budget": 150, "currency": "USD", "rate": 97, "id": "hEJnMQG9ev8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mad_Max_Fury_Road.jpg", "cast": "Tom Hardy, Charlize Theron, Nicholas Hoult", "watchAt": "Prime Video", "release_date": "May 15, 2015", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 0m", "certificate": "A" },
    { "title": "Mission Impossible - Dead Reckoning", "genre": "Action, Thriller", "imdb": 7.7, "google": "4.4", "collection": 567, "budget": 291, "currency": "USD", "rate": 96, "id": "2m1drlOZSDw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mission-_Impossible_–_Dead_Reckoning_Part_One_poster.jpg", "cast": "Tom Cruise, Hayley Atwell, Ving Rhames", "watchAt": "Prime Video", "release_date": "July 12, 2023", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 43m", "certificate": "U/A" },
    { "title": "Extraction 2", "genre": "Action, Thriller", "imdb": 7.0, "google": "4.3", "collection": 0, "budget": 70, "currency": "USD", "rate": 79, "id": "Y274jZs5s7s", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Extraction_2_poster.jpg", "cast": "Chris Hemsworth, Golshifteh Farahani", "watchAt": "Netflix", "release_date": "June 16, 2023", "languages": "English,Hindi", "runtime": "2h 2m", "certificate": "A" },
    { "title": "Bullet Train", "genre": "Action, Comedy", "imdb": 7.3, "google": "4.4", "collection": 239, "budget": 90, "currency": "USD", "rate": 54, "id": "0IOsk2Vlc4o", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlfTsJIEpggkIgOwR-CZNsHfGU8l6irrrVVAYJpzDFQlj5zioC", "cast": "Brad Pitt, Joey King, Aaron Taylor-Johnson", "watchAt": "Netflix", "release_date": "August 5, 2022", "languages": "English,Hindi", "runtime": "2h 7m", "certificate": "A" },
    { "title": "The Batman", "genre": "Action, Crime", "imdb": 7.8, "google": "4.5", "collection": 772, "budget": 200, "currency": "USD", "rate": 85, "id": "mqqft2x_Aa4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Batman_%28film%29_poster.jpg", "cast": "Robert Pattinson, Zoë Kravitz, Paul Dano", "watchAt": "Netflix, Prime Video", "release_date": "March 4, 2022", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 56m", "certificate": "U/A" },
    { "title": "No Time to Die", "genre": "Action, Thriller", "imdb": 7.3, "google": "4.2", "collection": 774, "budget": 250, "currency": "USD", "rate": 83, "id": "vw2FOYjyz38", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/No_Time_to_Die_poster.jpg", "cast": "Daniel Craig, Rami Malek, Léa Seydoux", "watchAt": "Prime Video", "release_date": "September 30, 2021", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 43m", "certificate": "U/A" },
    { "title": "Gladiator II", "genre": "Action, Drama", "imdb": 6.9, "google": "3.9", "collection": 450, "budget": 250, "currency": "USD", "rate": 72, "id": "4rgYUipGJNo", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95cK2_u19N4OGL7bKovaIOiMgHH25-H0-cJG_plITLBEkV7J6ZyaI7JDDoVytNBy6pfvJ&s=10", "cast": "Paul Mescal, Denzel Washington, Pedro Pascal", "watchAt": "Prime Video", "release_date": "November 22, 2024", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 28m", "certificate": "A" },
    { "title": "Twisters", "genre": "Action, Thriller", "imdb": 7.1, "google": "4.1", "collection": 371, "budget": 155, "currency": "USD", "rate": 75, "id": "wdok0rZdmx4", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KdIddr71ctPZjOt_AJpMLYhJIRhmoKkrQ0zAX4ZYa9T0RPsg-a4dkjuNjPL8rD3QWSF0&s=10", "cast": "Daisy Edgar-Jones, Glen Powell", "watchAt": "JioCinema", "release_date": "July 19, 2024", "languages": "English,Hindi", "runtime": "2h 2m", "certificate": "U/A" },
    { "title": "Tenet", "genre": "Action, Sci-Fi", "imdb": 7.3, "google": "4.3", "collection": 365, "budget": 200, "currency": "USD", "rate": 69, "id": "LdOM0x0ASDE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Tenet_movie_poster.jpg", "cast": "John David Washington, Robert Pattinson", "watchAt": "Netflix", "release_date": "August 26, 2020", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 30m", "certificate": "U/A" },
    { "title": "Deadpool & Wolverine", "genre": "Action, Comedy", "imdb": 7.7, "google": "4.7", "collection": 1338, "budget": 200, "currency": "USD", "rate": 78, "id": "73_1biulkYk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Deadpool_%26_Wolverine_poster.jpg", "cast": "Ryan Reynolds, Hugh Jackman", "watchAt": "Disney+ Hotstar", "release_date": "July 26, 2024", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 8m", "certificate": "A" },
    { "title": "Jawan", "genre": "Action, Thriller", "imdb": 6.9, "google": "4.4", "collection": 1148, "budget": 300, "currency": "INR", "rate": 88, "id": "COv52Qyctws", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jawan_film_poster.jpg", "cast": "Shah Rukh Khan, Nayanthara, Vijay Sethupathi", "watchAt": "Netflix", "release_date": "September 7, 2023", "languages": "Hindi,Tamil,Telugu", "runtime": "2h 49m", "certificate": "U/A" },
    { "title": "Animal", "genre": "Action, Drama", "imdb": 6.3, "google": "4.1", "collection": 917, "budget": 200, "currency": "INR", "rate": 31, "id": "8FkLRUJj-o0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Animal_%282023_film%29_poster.jpg", "cast": "Ranbir Kapoor, Anil Kapoor, Bobby Deol", "watchAt": "Netflix", "release_date": "December 1, 2023", "languages": "Hindi,Telugu,Tamil,Malayalam,Kannada", "runtime": "3h 21m", "certificate": "A" },
    { "title": "Pathaan", "genre": "Action", "imdb": 5.9, "google": "4.0", "collection": 1050, "budget": 225, "currency": "INR", "rate": 84, "id": "vqu4z34wENw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pathaan_film_poster.jpg", "cast": "Shah Rukh Khan, Deepika Padukone, John Abraham", "watchAt": "Prime Video", "release_date": "January 25, 2023", "languages": "Hindi,Tamil,Telugu", "runtime": "2h 26m", "certificate": "U/A" },
    { "title": "Leo", "genre": "Action, Thriller", "imdb": 7.2, "google": "4.4", "collection": 612, "budget": 250, "currency": "INR", "rate": 81, "id": "Po3jStA673E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Leo_%282023_Indian_film%29.jpg", "cast": "Vijay, Sanjay Dutt, Trisha", "watchAt": "Netflix", "release_date": "October 19, 2023", "languages": "Tamil,Hindi,Telugu,Malayalam,Kannada", "runtime": "2h 44m", "certificate": "U/A" },
    { "title": "Vikram", "genre": "Action, Thriller", "imdb": 8.3, "google": "4.8", "collection": 450, "budget": 120, "currency": "INR", "rate": 94, "id": "OKBMCL-f5wU", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Vikram_2022_poster.jpg", "cast": "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil", "watchAt": "Disney+ Hotstar", "release_date": "June 3, 2022", "languages": "Tamil,Hindi,Telugu", "runtime": "2h 54m", "certificate": "U/A" },
    { "title": "KGF: Chapter 2", "genre": "Action, Drama", "imdb": 8.3, "google": "4.7", "collection": 1250, "budget": 100, "currency": "INR", "rate": 90, "id": "t9D7-J-TfN8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/K.G.F_Chapter_2.jpg", "cast": "Yash, Sanjay Dutt, Raveena Tandon", "watchAt": "Prime Video", "release_date": "April 14, 2022", "languages": "Kannada,Hindi,Telugu,Tamil,Malayalam", "runtime": "2h 48m", "certificate": "U/A" },
    { "title": "Singham Again", "genre": "Action, Drama", "imdb": 4.5, "google": "3.2", "collection": 380, "budget": 350, "currency": "INR", "rate": 55, "id": "3KR8_igDs1Y", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Singham_Again_poster.jpg", "cast": "Ajay Devgn, Kareena Kapoor, Akshay Kumar", "watchAt": "Prime Video", "release_date": "November 1, 2024", "languages": "Hindi", "runtime": "2h 24m", "certificate": "U/A" },
    { "title": "Tiger 3", "genre": "Action", "imdb": 7.0, "google": "4.1", "collection": 466, "budget": 300, "currency": "INR", "rate": 56, "id": "vMqsWvA8q3A", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Tiger_3_poster.jpg", "cast": "Salman Khan, Katrina Kaif, Emraan Hashmi", "watchAt": "Prime Video", "release_date": "November 12, 2023", "languages": "Hindi,Tamil,Telugu", "runtime": "2h 34m", "certificate": "U/A" },
    { "title": "War", "genre": "Action, Thriller", "imdb": 6.5, "google": "4.2", "collection": 475, "budget": 150, "currency": "INR", "rate": 71, "id": "tQ0mzHjUvT0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/War_official_poster.jpg", "cast": "Hrithik Roshan, Tiger Shroff, Vaani Kapoor", "watchAt": "Prime Video", "release_date": "October 2, 2019", "languages": "Hindi,Tamil,Telugu", "runtime": "2h 34m", "certificate": "U/A" },
    { "title": "Jailer", "genre": "Action, Comedy", "imdb": 7.1, "google": "4.5", "collection": 605, "budget": 200, "currency": "INR", "rate": 81, "id": "Y5-Jv0J008w", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jailer_2023_Tamil_film_poster.jpg", "cast": "Rajinikanth, Mohanlal, Shiva Rajkumar", "watchAt": "Prime Video", "release_date": "August 10, 2023", "languages": "Tamil,Hindi,Telugu,Malayalam,Kannada", "runtime": "2h 48m", "certificate": "U/A" },
    { "title": "Kill", "genre": "Action, Thriller", "imdb": 7.6, "google": "4.4", "collection": 50, "budget": 20, "currency": "INR", "rate": 88, "id": "nN3O1eBw7y0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kill_film_poster.jpg", "cast": "Lakshya, Raghav Juyal, Tanya Maniktala", "watchAt": "Hotstar", "release_date": "July 5, 2024", "languages": "Hindi", "runtime": "1h 45m", "certificate": "A" },
    { "title": "RRR", "genre": "Action, Drama", "imdb": 7.8, "google": "4.8", "collection": 1387, "budget": 550, "currency": "INR", "rate": 95, "id": "NgBoMJy386M", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/RRR_Poster.jpg", "cast": "N.T. Rama Rao Jr., Ram Charan, Alia Bhatt", "watchAt": "Netflix, Zee5", "release_date": "March 25, 2022", "languages": "Telugu,Hindi,Tamil,Kannada,Malayalam", "runtime": "3h 2m", "certificate": "U/A" },
    { "title": "The Lion King", "genre": "Animation, Adventure", "imdb": 8.5, "google": "4.8", "collection": 968, "budget": 45, "currency": "USD", "rate": 93, "id": "lFzVJEksoDY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Lion_King_poster.jpg", "cast": "Matthew Broderick, Jeremy Irons, James Earl Jones", "watchAt": "Disney+ Hotstar", "release_date": "June 15, 1994", "languages": "English,Hindi,Tamil,Telugu", "runtime": "1h 28m", "certificate": "U" },
    { "title": "Inside Out 2", "genre": "Animation, Comedy", "imdb": 7.7, "google": "4.6", "collection": 1690, "budget": 200, "currency": "USD", "rate": 90, "id": "L4DrolmDxmw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Inside_Out_2_poster.jpg", "cast": "Amy Poehler, Maya Hawke, Kensington Tallman", "watchAt": "Disney+ Hotstar", "release_date": "June 14, 2024", "languages": "English,Hindi", "runtime": "1h 36m", "certificate": "U" },
    { "title": "Spider-Man: Across the Spider-Verse", "genre": "Animation, Adventure", "imdb": 8.6, "google": "4.8", "collection": 690, "budget": 100, "currency": "USD", "rate": 95, "id": "shW9i6k8cB0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Spider-Man-_Across_the_Spider-Verse_poster.jpg", "cast": "Shameik Moore, Hailee Steinfeld, Oscar Isaac", "watchAt": "Netflix", "release_date": "June 2, 2023", "languages": "English,Hindi,Tamil,Telugu", "runtime": "2h 20m", "certificate": "U" },
    { "title": "Coco", "genre": "Animation, Fantasy", "imdb": 8.4, "google": "4.8", "collection": 814, "budget": 175, "currency": "USD", "rate": 97, "id": "xlnPHQ3TLX8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Coco_%282017_film%29_poster.jpg", "cast": "Anthony Gonzalez, Gael García Bernal, Benjamin Bratt", "watchAt": "Disney+ Hotstar", "release_date": "November 22, 2017", "languages": "English,Hindi", "runtime": "1h 45m", "certificate": "U" },
    { "title": "Toy Story 3", "genre": "Animation, Adventure", "imdb": 8.3, "google": "4.7", "collection": 1067, "budget": 200, "currency": "USD", "rate": 98, "id": "JCPXglz6zNI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Toy_Story_3_poster.jpg", "cast": "Tom Hanks, Tim Allen, Joan Cusack", "watchAt": "Disney+ Hotstar", "release_date": "June 18, 2010", "languages": "English,Hindi", "runtime": "1h 43m", "certificate": "U" },
    { "title": "Up", "genre": "Animation, Adventure", "imdb": 8.3, "google": "4.8", "collection": 735, "budget": 175, "currency": "USD", "rate": 98, "id": "ORFWdXl_zJ4", "poster": "https://m.media-amazon.com/images/M/MV5BMTMyODc0ODI2OF5BMl5BanBnXkFtZTcwODQ5OTIzMw@@._V1_.jpg", "cast": "Ed Asner, Christopher Plummer, Jordan Nagai", "watchAt": "Disney+ Hotstar", "release_date": "May 29, 2009", "languages": "English,Hindi", "runtime": "1h 36m", "certificate": "U" },
    { "title": "Spider-Man: Into the Spider-Verse", "genre": "Animation, Adventure", "imdb": 8.4, "google": "4.8", "collection": 384, "budget": 90, "currency": "USD", "rate": 97, "id": "g4Hbz2jLxvQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Spider-Man_Into_the_Spider-Verse_poster.png", "cast": "Shameik Moore, Jake Johnson, Hailee Steinfeld", "watchAt": "Netflix", "release_date": "December 14, 2018", "languages": "English,Hindi", "runtime": "1h 57m", "certificate": "U" },
    { "title": "WALL·E", "genre": "Animation, Sci-Fi", "imdb": 8.4, "google": "4.8", "collection": 521, "budget": 180, "currency": "USD", "rate": 95, "id": "alIq_wG9FNk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/WALL-Eposter.jpg", "cast": "Ben Burtt, Elissa Knight, Jeff Garlin", "watchAt": "Disney+ Hotstar", "release_date": "June 27, 2008", "languages": "English,Hindi", "runtime": "1h 38m", "certificate": "U" },
    { "title": "Finding Nemo", "genre": "Animation, Adventure", "imdb": 8.2, "google": "4.7", "collection": 941, "budget": 94, "currency": "USD", "rate": 99, "id": "wZti8QKBWc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Finding_Nemo.jpg", "cast": "Albert Brooks, Ellen DeGeneres, Alexander Gould", "watchAt": "Disney+ Hotstar", "release_date": "May 30, 2003", "languages": "English,Hindi", "runtime": "1h 40m", "certificate": "U" },
    { "title": "Ratatouille", "genre": "Animation, Comedy", "imdb": 8.1, "google": "4.7", "collection": 623, "budget": 150, "currency": "USD", "rate": 96, "id": "niD-7XnU2R8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/RatatouillePoster.jpg", "cast": "Patton Oswalt, Ian Holm, Lou Romano", "watchAt": "Disney+ Hotstar", "release_date": "June 29, 2007", "languages": "English,Hindi", "runtime": "1h 51m", "certificate": "U" },
    { "title": "The Incredibles", "genre": "Animation, Action", "imdb": 8.0, "google": "4.7", "collection": 631, "budget": 92, "currency": "USD", "rate": 97, "id": "sE11uu6I08g", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VPKVTpvyFOIGjN6G5lEMOoG55nTMQO2OCZRPByGgAU1JkKf_BkOo5ndzhOKvdeomkI4r-z6gYozTHljgFWpJKYsXAU8UFsjDfefHmCI&s=10", "cast": "Craig T. Nelson, Holly Hunter, Samuel L. Jackson", "watchAt": "Disney+ Hotstar", "release_date": "November 5, 2004", "languages": "English,Hindi", "runtime": "1h 55m", "certificate": "U" },
    { "title": "Zootopia", "genre": "Animation, Comedy", "imdb": 8.0, "google": "4.6", "collection": 1023, "budget": 150, "currency": "USD", "rate": 98, "id": "jWM0ct-OLsM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Zootopia.jpg", "cast": "Ginnifer Goodwin, Jason Bateman, Idris Elba", "watchAt": "Disney+ Hotstar", "release_date": "March 4, 2016", "languages": "English,Hindi", "runtime": "1h 48m", "certificate": "U" },
    { "title": "How to Train Your Dragon", "genre": "Animation, Adventure", "imdb": 8.1, "google": "4.8", "collection": 494, "budget": 165, "currency": "USD", "rate": 99, "id": "oKiYuIsPxYk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/How_to_Train_Your_Dragon_Poster.jpg", "cast": "Jay Baruchel, Gerard Butler, Christopher Mintz-Plasse", "watchAt": "Amazon Prime Video", "release_date": "March 26, 2010", "languages": "English,Hindi", "runtime": "1h 38m", "certificate": "U" },
    { "title": "Kung Fu Panda", "genre": "Animation, Comedy", "imdb": 7.6, "google": "4.7", "collection": 631, "budget": 130, "currency": "USD", "rate": 87, "id": "PXi3Mv6KM28", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kungfupanda.jpg", "cast": "Jack Black, Ian McShane, Angelina Jolie", "watchAt": "Netflix", "release_date": "June 6, 2008", "languages": "English,Hindi", "runtime": "1h 32m", "certificate": "U" },
    { "title": "Shrek 2", "genre": "Animation, Comedy", "imdb": 7.3, "google": "4.6", "collection": 928, "budget": 150, "currency": "USD", "rate": 89, "id": "V6X5ti4YlG8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Shrek_2_poster.jpg", "cast": "Mike Myers, Eddie Murphy, Cameron Diaz", "watchAt": "Netflix", "release_date": "May 19, 2004", "languages": "English", "runtime": "1h 33m", "certificate": "U" },
    { "title": "Moana", "genre": "Animation, Adventure", "imdb": 7.6, "google": "4.6", "collection": 643, "budget": 150, "currency": "USD", "rate": 95, "id": "LKFuXETZUsI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Moana_Teaser_Poster.jpg", "cast": "Auli'i Cravalho, Dwayne Johnson, Rachel House", "watchAt": "Disney+ Hotstar", "release_date": "November 23, 2016", "languages": "English,Hindi", "runtime": "1h 47m", "certificate": "U" },
    { "title": "Frozen", "genre": "Animation, Adventure", "imdb": 7.4, "google": "4.5", "collection": 1280, "budget": 150, "currency": "USD", "rate": 90, "id": "TbQm5doF_Uc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Frozen_%282013_film%29_poster.jpg", "cast": "Kristen Bell, Idina Menzel, Jonathan Groff", "watchAt": "Disney+ Hotstar", "release_date": "November 27, 2013", "languages": "English,Hindi,Tamil,Telugu", "runtime": "1h 42m", "certificate": "U" },
    { "title": "The Super Mario Bros. Movie", "genre": "Animation, Adventure", "imdb": 7.0, "google": "4.5", "collection": 1362, "budget": 100, "currency": "USD", "rate": 59, "id": "TnGl01FkMMo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Super_Mario_Bros._Movie_poster.jpg", "cast": "Chris Pratt, Anya Taylor-Joy, Charlie Day", "watchAt": "JioCinema", "release_date": "April 5, 2023", "languages": "English,Hindi", "runtime": "1h 32m", "certificate": "U" },
    { "title": "Minions", "genre": "Animation, Comedy", "imdb": 6.4, "google": "4.2", "collection": 1159, "budget": 74, "currency": "USD", "rate": 55, "id": "P9-FCC6I7u0", "poster": "https://upload.wikimedia.org/wikipedia/en/1/19/Minions_%282015_film%29.jpg", "cast": "Sandra Bullock, Jon Hamm, Michael Keaton", "watchAt": "Netflix", "release_date": "July 10, 2015", "languages": "English,Hindi", "runtime": "1h 31m", "certificate": "U" },
    { "title": "Despicable Me 3", "genre": "Animation, Comedy", "imdb": 6.2, "google": "4.1", "collection": 1034, "budget": 80, "currency": "USD", "rate": 58, "id": "6DBi41ree1I", "poster": "https://m.media-amazon.com/images/M/MV5BNjUyNzQ2MTg3Ml5BMl5BanBnXkFtZTgwNzE4NDM3MTI@._V1_FMjpg_UX1000_.jpg", "cast": "Steve Carell, Kristen Wiig, Trey Parker", "watchAt": "Netflix", "release_date": "June 30, 2017", "languages": "English,Hindi", "runtime": "1h 30m", "certificate": "U" },
    { "title": "Interstellar", "genre": "Sci-Fi, Adventure", "imdb": 8.7, "google": "4.8", "collection": 773, "budget": 165, "currency": "USD", "rate": 73, "id": "zSWdZVtXT7E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Interstellar_film_poster.jpg", "cast": "Matthew McConaughey, Anne Hathaway, Jessica Chastain", "watchAt": "Netflix, Amazon Prime", "release_date": "November 7, 2014", "languages": "English,Hindi", "runtime": "2h 49m", "certificate": "U/A" },
    { "title": "The Matrix", "genre": "Sci-Fi, Action", "imdb": 8.7, "google": "4.8", "collection": 467, "budget": 63, "currency": "USD", "rate": 83, "id": "vKQi3bBA1y8", "poster": "https://www.rogerebert.com/wp-content/uploads/2024/03/The-Matrix.jpg", "cast": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss", "watchAt": "Amazon Prime Video", "release_date": "March 31, 1999", "languages": "English,Hindi", "runtime": "2h 16m", "certificate": "A" },
    { "title": "Dune: Part Two", "genre": "Sci-Fi, Adventure", "imdb": 8.6, "google": "4.8", "collection": 711, "budget": 190, "currency": "USD", "rate": 92, "id": "Way9Dexny3w", "poster": "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "cast": "Timothée Chalamet, Zendaya, Rebecca Ferguson", "watchAt": "JioCinema, Apple TV", "release_date": "March 1, 2024", "languages": "English,Hindi", "runtime": "2h 46m", "certificate": "U/A" },
    { "title": "Avatar: The Way of Water", "genre": "Sci-Fi, Adventure", "imdb": 7.6, "google": "4.5", "collection": 2320, "budget": 350, "currency": "USD", "rate": 76, "id": "d9MyW72ELq0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Avatar_The_Way_of_Water_poster.jpg", "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver", "watchAt": "Disney+ Hotstar", "release_date": "December 16, 2022", "languages": "English,Hindi,Tamil,Telugu", "runtime": "3h 12m", "certificate": "U/A" },
    { "title": "Blade Runner 2049", "genre": "Sci-Fi, Action", "imdb": 8.0, "google": "4.6", "collection": 267, "budget": 150, "currency": "USD", "rate": 88, "id": "gCcx85zbxz4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Blade_Runner_2049_poster.jpg", "cast": "Ryan Gosling, Harrison Ford, Ana de Armas", "watchAt": "Netflix, SonyLiv", "release_date": "October 6, 2017", "languages": "English,Hindi", "runtime": "2h 44m", "certificate": "U/A" },
    { "title": "The Martian", "genre": "Sci-Fi, Adventure", "imdb": 8.0, "google": "4.7", "collection": 630, "budget": 108, "currency": "USD", "rate": 91, "id": "ej3ioOneTy8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Martian_film_poster.jpg", "cast": "Matt Damon, Jessica Chastain, Kristen Wiig", "watchAt": "Disney+ Hotstar", "release_date": "October 2, 2015", "languages": "English,Hindi", "runtime": "2h 24m", "certificate": "U/A" },
    { "title": "Arrival", "genre": "Sci-Fi, Drama", "imdb": 7.9, "google": "4.4", "collection": 203, "budget": 47, "currency": "USD", "rate": 94, "id": "gwq6u6Y6O_8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Arrival%2C_Movie_Poster.jpg", "cast": "Amy Adams, Jeremy Renner, Forest Whitaker", "watchAt": "Netflix", "release_date": "November 11, 2016", "languages": "English,Hindi", "runtime": "1h 56m", "certificate": "U/A" },
    { "title": "Gravity", "genre": "Sci-Fi, Thriller", "imdb": 7.7, "google": "4.3", "collection": 723, "budget": 100, "currency": "USD", "rate": 96, "id": "OiTiKOy59o4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Gravity_Poster.jpg", "cast": "Sandra Bullock, George Clooney", "watchAt": "Amazon Prime Video", "release_date": "October 4, 2013", "languages": "English,Hindi", "runtime": "1h 31m", "certificate": "U/A" },
    { "title": "Edge of Tomorrow", "genre": "Sci-Fi, Action", "imdb": 7.9, "google": "4.6", "collection": 370, "budget": 178, "currency": "USD", "rate": 91, "id": "vw61gCe2p8I", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Edge_of_Tomorrow_Poster.jpg", "cast": "Tom Cruise, Emily Blunt, Bill Paxton", "watchAt": "Netflix", "release_date": "June 6, 2014", "languages": "English,Hindi", "runtime": "1h 53m", "certificate": "U/A" },
    { "title": "Ex Machina", "genre": "Sci-Fi, Drama", "imdb": 7.7, "google": "4.4", "collection": 36, "budget": 15, "currency": "USD", "rate": 92, "id": "bggUmgeMCdc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Ex_Machina_poster.jpg", "cast": "Alicia Vikander, Domhnall Gleeson, Oscar Isaac", "watchAt": "Amazon Prime Video", "release_date": "January 21, 2015", "languages": "English", "runtime": "1h 48m", "certificate": "A" },
    { "title": "Star Wars: A New Hope", "genre": "Sci-Fi, Adventure", "imdb": 8.6, "google": "4.8", "collection": 775, "budget": 11, "currency": "USD", "rate": 93, "id": "vZ734NWnAHA", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/StarWarsMoviePoster1977.jpg", "cast": "Mark Hamill, Harrison Ford, Carrie Fisher", "watchAt": "Disney+ Hotstar", "release_date": "May 25, 1977", "languages": "English,Hindi", "runtime": "2h 1m", "certificate": "U" },
    { "title": "District 9", "genre": "Sci-Fi, Thriller", "imdb": 7.9, "google": "4.5", "collection": 210, "budget": 30, "currency": "USD", "rate": 90, "id": "DyLUwOcR5pk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/District_9_poster.jpg", "cast": "Sharlto Copley, Jason Cope, David James", "watchAt": "Amazon Prime Video", "release_date": "August 14, 2009", "languages": "English", "runtime": "1h 52m", "certificate": "A" },
    { "title": "Jurassic Park", "genre": "Sci-Fi, Adventure", "imdb": 8.2, "google": "4.8", "collection": 1045, "budget": 63, "currency": "USD", "rate": 91, "id": "QWBKEmWWL38", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jurassic_Park_poster.jpg", "cast": "Sam Neill, Laura Dern, Jeff Goldblum", "watchAt": "Netflix, JioCinema", "release_date": "June 11, 1993", "languages": "English,Hindi", "runtime": "2h 7m", "certificate": "U/A" },
    { "title": "Harry Potter: Deathly Hallows 2", "genre": "Fantasy, Adventure", "imdb": 8.1, "google": "4.8", "collection": 1342, "budget": 125, "currency": "USD", "rate": 96, "id": "mObK5XD8udk", "poster": "https://upload.wikimedia.org/wikipedia/en/d/df/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_2.jpg", "cast": "Daniel Radcliffe, Emma Watson, Rupert Grint", "watchAt": "JioCinema", "release_date": "July 15, 2011", "languages": "English,Hindi", "runtime": "2h 10m", "certificate": "U/A" },
    { "title": "The Lord of the Rings: ROTK", "genre": "Fantasy, Adventure", "imdb": 9.0, "google": "4.9", "collection": 1146, "budget": 94, "currency": "USD", "rate": 93, "id": "r5X-hFf6Bwo", "poster": "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg", "cast": "Elijah Wood, Viggo Mortensen, Ian McKellen", "watchAt": "Prime Video", "release_date": "December 17, 2003", "languages": "English,Hindi", "runtime": "3h 21m", "certificate": "U" },
    { "title": "Avatar", "genre": "Fantasy, Sci-Fi", "imdb": 7.9, "google": "4.7", "collection": 2923, "budget": 237, "currency": "USD", "rate": 82, "id": "5PSNL1qE6VY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Avatar_%282009_film%29_poster.jpg", "cast": "Sam Worthington, Zoe Saldana, Sigourney Weaver", "watchAt": "Disney+ Hotstar", "release_date": "December 18, 2009", "languages": "English,Hindi,Tamil", "runtime": "2h 42m", "certificate": "U/A" },
    { "title": "Pirates of the Caribbean: Black Pearl", "genre": "Fantasy, Adventure", "imdb": 8.1, "google": "4.7", "collection": 654, "budget": 140, "currency": "USD", "rate": 80, "id": "naQr0uTrH_s", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pirates_of_the_Caribbean_-_The_Curse_of_the_Black_Pearl.png", "cast": "Johnny Depp, Geoffrey Rush, Orlando Bloom", "watchAt": "Disney+ Hotstar", "release_date": "July 9, 2003", "languages": "English,Hindi", "runtime": "2h 23m", "certificate": "U/A" },
    { "title": "The Hobbit: An Unexpected Journey", "genre": "Fantasy, Adventure", "imdb": 7.8, "google": "4.6", "collection": 1017, "budget": 180, "currency": "USD", "rate": 64, "id": "SDnYMbYB-nU", "poster": "https://m.media-amazon.com/images/S/pv-target-images/126f19834ff54aef5df5f4ad3c23eeb27d5beb1a9acf407204f6739bf67e82c0.jpg", "cast": "Martin Freeman, Ian McKellen, Richard Armitage", "watchAt": "Prime Video", "release_date": "December 14, 2012", "languages": "English,Hindi", "runtime": "2h 49m", "certificate": "U/A" },
    { "title": "Life of Pi", "genre": "Fantasy, Adventure", "imdb": 7.9, "google": "4.6", "collection": 609, "budget": 120, "currency": "USD", "rate": 86, "id": "mZEZ35Fhvuc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Life_of_Pi_2012_Poster.jpg", "cast": "Suraj Sharma, Irrfan Khan, Adil Hussain", "watchAt": "Disney+ Hotstar", "release_date": "November 21, 2012", "languages": "English,Hindi", "runtime": "2h 7m", "certificate": "U/A" },
    { "title": "Maleficent", "genre": "Fantasy, Adventure", "imdb": 6.9, "google": "4.4", "collection": 758, "budget": 180, "currency": "USD", "rate": 54, "id": "wID2z-N-GMM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Maleficent_poster.jpg", "cast": "Angelina Jolie, Elle Fanning, Sharlto Copley", "watchAt": "Disney+ Hotstar", "release_date": "May 30, 2014", "languages": "English,Hindi", "runtime": "1h 37m", "certificate": "U/A" },
    { "title": "Inception", "genre": "Thriller, Sci-Fi", "imdb": 8.8, "google": "4.7", "collection": 836, "budget": 160, "currency": "USD", "rate": 87, "id": "YoHD9XEInc0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Inception_%282010%29_theatrical_poster.jpg", "cast": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page", "watchAt": "Netflix", "release_date": "July 16, 2010", "languages": "English,Hindi", "runtime": "2h 28m", "certificate": "U/A" },
    { "title": "The Silence of the Lambs", "genre": "Thriller, Crime", "imdb": 8.6, "google": "4.8", "collection": 272, "budget": 19, "currency": "USD", "rate": 95, "id": "W6Mm8Sbe__o", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Silence_of_the_Lambs_poster.jpg", "cast": "Jodie Foster, Anthony Hopkins, Scott Glenn", "watchAt": "Amazon Prime Video", "release_date": "February 14, 1991", "languages": "English", "runtime": "1h 58m", "certificate": "A" },
    { "title": "The Departed", "genre": "Thriller, Crime", "imdb": 8.5, "google": "4.6", "collection": 291, "budget": 90, "currency": "USD", "rate": 90, "id": "iojhqm0JTW4", "poster": "https://resizing.flixster.com/SRR1Y1vmMEDjfTaWUbad4ue3WT8=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p162564_p_v8_ag.jpg", "cast": "Leonardo DiCaprio, Matt Damon, Jack Nicholson", "watchAt": "Amazon Prime Video", "release_date": "October 6, 2006", "languages": "English,Hindi", "runtime": "2h 31m", "certificate": "A" },
    { "title": "The Prestige", "genre": "Thriller, Mystery", "imdb": 8.5, "google": "4.7", "collection": 110, "budget": 40, "currency": "USD", "rate": 76, "id": "o4gHCmTQDVI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Prestige_poster.jpg", "cast": "Christian Bale, Hugh Jackman, Scarlett Johansson", "watchAt": "Amazon Prime Video", "release_date": "October 20, 2006", "languages": "English,Hindi", "runtime": "2h 10m", "certificate": "U/A" },
    { "title": "The Sixth Sense", "genre": "Thriller, Mystery", "imdb": 8.2, "google": "4.6", "collection": 672, "budget": 40, "currency": "USD", "rate": 86, "id": "VG9AGf66uyQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Sixth_Sense_poster.png", "cast": "Bruce Willis, Haley Joel Osment, Toni Collette", "watchAt": "Disney+ Hotstar", "release_date": "August 6, 1999", "languages": "English,Hindi", "runtime": "1h 47m", "certificate": "U/A" },
    { "title": "Gone Girl", "genre": "Thriller, Mystery", "imdb": 8.1, "google": "4.4", "collection": 369, "budget": 61, "currency": "USD", "rate": 87, "id": "2-_-1nJf8Vg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Gone_Girl_Poster.jpg", "cast": "Ben Affleck, Rosamund Pike, Neil Patrick Harris", "watchAt": "Netflix", "release_date": "October 3, 2014", "languages": "English,Hindi", "runtime": "2h 29m", "certificate": "A" },
    { "title": "Prisoners", "genre": "Thriller, Crime", "imdb": 8.1, "google": "4.5", "collection": 122, "budget": 46, "currency": "USD", "rate": 81, "id": "bpXfcZ727Sg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Prisoners2013Poster.jpg", "cast": "Hugh Jackman, Jake Gyllenhaal, Viola Davis", "watchAt": "Netflix", "release_date": "September 20, 2013", "languages": "English,Hindi", "runtime": "2h 33m", "certificate": "A" },
    { "title": "Joker", "genre": "Thriller, Drama", "imdb": 8.4, "google": "4.7", "collection": 1074, "budget": 55, "currency": "USD", "rate": 69, "id": "zAGVQLHvwOY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Joker_%282019_film%29_poster.jpg", "cast": "Joaquin Phoenix, Robert De Niro, Zazie Beetz", "watchAt": "Netflix, Prime Video", "release_date": "October 4, 2019", "languages": "English,Hindi", "runtime": "2h 2m", "certificate": "A" },
    { "title": "Parasite", "genre": "Thriller, Drama", "imdb": 8.5, "google": "4.7", "collection": 263, "budget": 11, "currency": "USD", "rate": 99, "id": "5xH0HfJHsaY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Parasite_%282019_film%29.png", "cast": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong", "watchAt": "SonyLiv, Prime Video", "release_date": "May 30, 2019", "languages": "Korean,English,Hindi", "runtime": "2h 12m", "certificate": "A" },
    { "title": "Get Out", "genre": "Thriller, Horror", "imdb": 7.8, "google": "4.3", "collection": 255, "budget": 4.5, "currency": "USD", "rate": 98, "id": "DzfpyW644h8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Get_Out_poster.png", "cast": "Daniel Kaluuya, Allison Williams, Bradley Whitford", "watchAt": "Amazon Prime Video", "release_date": "February 24, 2017", "languages": "English,Hindi", "runtime": "1h 44m", "certificate": "A" },
    { "title": "Nightcrawler", "genre": "Thriller, Crime", "imdb": 7.8, "google": "4.4", "collection": 50, "budget": 8.5, "currency": "USD", "rate": 95, "id": "u1uP_8VJkDQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Nightcrawlerfilm.jpg", "cast": "Jake Gyllenhaal, Rene Russo, Bill Paxton", "watchAt": "Amazon Prime Video", "release_date": "October 31, 2014", "languages": "English", "runtime": "1h 57m", "certificate": "A" },
    { "title": "Zodiac", "genre": "Thriller, Mystery", "imdb": 7.7, "google": "4.3", "collection": 84, "budget": 65, "currency": "USD", "rate": 89, "id": "yNncHPl1UXg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Zodiac2007Poster.jpg", "cast": "Jake Gyllenhaal, Robert Downey Jr, Mark Ruffalo", "watchAt": "Netflix", "release_date": "March 2, 2007", "languages": "English", "runtime": "2h 37m", "certificate": "A" },
    { "title": "The Game", "genre": "Thriller, Mystery", "imdb": 7.7, "google": "4.3", "collection": 109, "budget": 50, "currency": "USD", "rate": 77, "id": "0kqQNBR09Rc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/TheGamePoster1997.jpg", "cast": "Michael Douglas, Sean Penn, Deborah Kara Unger", "watchAt": "Amazon Prime Video", "release_date": "September 12, 1997", "languages": "English", "runtime": "2h 9m", "certificate": "U/A" },
    { "title": "The Shawshank Redemption", "genre": "Drama, Crime", "imdb": 9.3, "google": "4.9", "collection": 73, "budget": 25, "currency": "USD", "rate": 91, "id": "PLl99DlL6b4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/ShawshankRedemptionMoviePoster.jpg", "cast": "Tim Robbins, Morgan Freeman, Bob Gunton", "watchAt": "Amazon Prime Video", "release_date": "September 22, 1994", "languages": "English", "runtime": "2h 22m", "certificate": "U/A" },
    { "title": "Schindler's List", "genre": "Drama, Biography", "imdb": 9.0, "google": "4.8", "collection": 322, "budget": 22, "currency": "USD", "rate": 98, "id": "gG22XNhtnoY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Schindler%27s_List_movie.jpg", "cast": "Liam Neeson, Ralph Fiennes, Ben Kingsley", "watchAt": "Amazon Prime Video", "release_date": "February 4, 1994", "languages": "English", "runtime": "3h 15m", "certificate": "A" },
    { "title": "Forrest Gump", "genre": "Drama, Romance", "imdb": 8.8, "google": "4.8", "collection": 678, "budget": 55, "currency": "USD", "rate": 71, "id": "bLvqoHBptjg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Forrest_Gump_poster.jpg", "cast": "Tom Hanks, Robin Wright, Gary Sinise", "watchAt": "Netflix", "release_date": "July 6, 1994", "languages": "English,Hindi", "runtime": "2h 22m", "certificate": "U/A" },
    { "title": "The Godfather", "genre": "Drama, Crime", "imdb": 9.2, "google": "4.8", "collection": 250, "budget": 6, "currency": "USD", "rate": 97, "id": "UaVTIH8mujA", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Godfather_ver1.jpg", "cast": "Marlon Brando, Al Pacino, James Caan", "watchAt": "Amazon Prime Video", "release_date": "March 24, 1972", "languages": "English", "runtime": "2h 55m", "certificate": "A" },
    { "title": "Fight Club", "genre": "Drama, Thriller", "imdb": 8.8, "google": "4.7", "collection": 101, "budget": 63, "currency": "USD", "rate": 79, "id": "qtRKdVHc-cE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Fight_Club_poster.jpg", "cast": "Brad Pitt, Edward Norton, Helena Bonham Carter", "watchAt": "Amazon Prime Video", "release_date": "October 15, 1999", "languages": "English", "runtime": "2h 19m", "certificate": "A" },
    { "title": "Pulp Fiction", "genre": "Drama, Crime", "imdb": 8.9, "google": "4.7", "collection": 213, "budget": 8.5, "currency": "USD", "rate": 92, "id": "s7EdQ4FqbhY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pulp_Fiction_%281994%29_poster.jpg", "cast": "John Travolta, Uma Thurman, Samuel L. Jackson", "watchAt": "Netflix", "release_date": "October 14, 1994", "languages": "English", "runtime": "2h 34m", "certificate": "A" },
    { "title": "Whiplash", "genre": "Drama", "imdb": 8.5, "google": "4.7", "collection": 49, "budget": 3.3, "currency": "USD", "rate": 94, "id": "7d_jQycdQGo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Whiplash_poster.jpg", "cast": "Miles Teller, J.K. Simmons, Paul Reiser", "watchAt": "Netflix", "release_date": "October 10, 2014", "languages": "English", "runtime": "1h 46m", "certificate": "A" },
    { "title": "Lion", "genre": "Drama, Biography", "imdb": 8.0, "google": "4.6", "collection": 140, "budget": 12, "currency": "USD", "rate": 84, "id": "-RNI9o06vqo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Lion_%282016_film%29_poster.jpg", "cast": "Dev Patel, Nicole Kidman, Rooney Mara", "watchAt": "Netflix", "release_date": "November 25, 2016", "languages": "English,Hindi", "runtime": "1h 58m", "certificate": "U/A" },
    { "title": "The Pursuit of Happyness", "genre": "Drama, Biography", "imdb": 8.0, "google": "4.8", "collection": 307, "budget": 55, "currency": "USD", "rate": 67, "id": "DMOBlEcRuw8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Poster-pursuithappyness.jpg", "cast": "Will Smith, Jaden Smith, Thandiwe Newton", "watchAt": "Netflix", "release_date": "December 15, 2006", "languages": "English,Hindi", "runtime": "1h 57m", "certificate": "U" },
    { "title": "A Beautiful Mind", "genre": "Drama, Biography", "imdb": 8.2, "google": "4.7", "collection": 313, "budget": 58, "currency": "USD", "rate": 74, "id": "aS_d0Ayjw4o", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/A_Beautiful_Mind_Poster.jpg", "cast": "Russell Crowe, Ed Harris, Jennifer Connelly", "watchAt": "Amazon Prime Video", "release_date": "January 4, 2002", "languages": "English", "runtime": "2h 15m", "certificate": "U/A" },
    { "title": "The Social Network", "genre": "Drama, Biography", "imdb": 7.8, "google": "4.3", "collection": 224, "budget": 40, "currency": "USD", "rate": 96, "id": "lB95KLmpLR4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Social_network_film_poster.jpg", "cast": "Jesse Eisenberg, Andrew Garfield, Justin Timberlake", "watchAt": "SonyLiv", "release_date": "October 1, 2010", "languages": "English", "runtime": "2h 0m", "certificate": "U/A" },
    { "title": "Rocky", "genre": "Sports, Drama", "imdb": 8.1, "google": "4.8", "collection": 225, "budget": 1, "currency": "USD", "rate": 92, "id": "3VUblDwa648", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Rocky_poster.jpg", "cast": "Sylvester Stallone, Talia Shire, Burt Young", "watchAt": "Amazon Prime Video", "release_date": "December 3, 1976", "languages": "English,Hindi", "runtime": "2h 0m", "certificate": "U" },
    { "title": "Ford v Ferrari", "genre": "Sports, Drama", "imdb": 8.1, "google": "4.7", "collection": 225, "budget": 97, "currency": "USD", "rate": 92, "id": "zyYgDtY2AMY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Ford_v_Ferrari_poster.jpg", "cast": "Christian Bale, Matt Damon, Caitriona Balfe", "watchAt": "Disney+ Hotstar", "release_date": "November 15, 2019", "languages": "English,Hindi", "runtime": "2h 32m", "certificate": "U" },
    { "title": "Warrior", "genre": "Sports, Drama", "imdb": 8.1, "google": "4.8", "collection": 23, "budget": 25, "currency": "USD", "rate": 84, "id": "I5kzcwcQA1Q", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Warrior_Poster.jpg", "cast": "Tom Hardy, Joel Edgerton, Nick Nolte", "watchAt": "Lionsgate Play", "release_date": "September 9, 2011", "languages": "English,Hindi", "runtime": "2h 20m", "certificate": "U/A" },
    { "title": "Creed", "genre": "Sports, Drama", "imdb": 7.6, "google": "4.6", "collection": 173, "budget": 35, "currency": "USD", "rate": 95, "id": "Uv554B7QHk4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Creed_poster.jpg", "cast": "Michael B. Jordan, Sylvester Stallone, Tessa Thompson", "watchAt": "Amazon Prime Video", "release_date": "November 25, 2015", "languages": "English,Hindi", "runtime": "2h 13m", "certificate": "U/A" },
    { "title": "The Blind Side", "genre": "Sports, Biography", "imdb": 7.6, "google": "4.7", "collection": 309, "budget": 29, "currency": "USD", "rate": 66, "id": "gvqbB6S3vko", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Blind_side_poster.jpg", "cast": "Sandra Bullock, Tim McGraw, Quinton Aaron", "watchAt": "Netflix, Amazon Prime", "release_date": "November 20, 2009", "languages": "English,Hindi", "runtime": "2h 9m", "certificate": "U/A" },
    { "title": "Million Dollar Baby", "genre": "Sports, Drama", "imdb": 8.1, "google": "4.7", "collection": 216, "budget": 30, "currency": "USD", "rate": 90, "id": "5_RsHRmIRBY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Million_Dollar_Baby_poster.jpg", "cast": "Hilary Swank, Clint Eastwood, Morgan Freeman", "watchAt": "Amazon Prime Video", "release_date": "January 28, 2005", "languages": "English", "runtime": "2h 12m", "certificate": "U/A" },
    { "title": "King Richard", "genre": "Sports, Biography", "imdb": 7.5, "google": "4.6", "collection": 39, "budget": 50, "currency": "USD", "rate": 90, "id": "BKP_ppFzVPw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/King_Richard_poster.jpeg", "cast": "Will Smith, Aunjanue Ellis, Saniyya Sidney", "watchAt": "Netflix", "release_date": "November 19, 2021", "languages": "English,Hindi", "runtime": "2h 24m", "certificate": "U/A" },
    { "title": "Hustle", "genre": "Sports, Comedy", "imdb": 7.3, "google": "4.5", "collection": 0, "budget": 21, "currency": "USD", "rate": 93, "id": "9fw8X9V4860", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Hustle_%282022_film%29_poster.png", "cast": "Adam Sandler, Juancho Hernangomez, Queen Latifah", "watchAt": "Netflix", "release_date": "June 3, 2022", "languages": "English,Hindi", "runtime": "1h 57m", "certificate": "U/A" },
    { "title": "Raging Bull", "genre": "Sports, Biography", "imdb": 8.2, "google": "4.6", "collection": 23, "budget": 18, "currency": "USD", "rate": 93, "id": "yUp6d79WRVI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Raging_Bull_poster.jpg", "cast": "Robert De Niro, Cathy Moriarty, Joe Pesci", "watchAt": "Amazon Prime Video", "release_date": "December 19, 1980", "languages": "English", "runtime": "2h 9m", "certificate": "A" },
    { "title": "Coach Carter", "genre": "Sports, Drama", "imdb": 7.3, "google": "4.7", "collection": 76, "budget": 30, "currency": "USD", "rate": 64, "id": "VWcgCdfyOlw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Coach_Carter_poster.jpg", "cast": "Samuel L. Jackson, Rick Gonzalez, Robert Ri'chard", "watchAt": "Netflix", "release_date": "January 14, 2005", "languages": "English,Hindi", "runtime": "2h 16m", "certificate": "U/A" },
    { "title": "The Karate Kid", "genre": "Sports, Action", "imdb": 7.3, "google": "4.5", "collection": 359, "budget": 40, "currency": "USD", "rate": 66, "id": "XY8amUImEu0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Karate_Kid_%282010_film%29_poster.jpg", "cast": "Jaden Smith, Jackie Chan, Taraji P. Henson", "watchAt": "Netflix", "release_date": "June 11, 2010", "languages": "English,Hindi", "runtime": "2h 20m", "certificate": "U/A" },
    { "title": "Bommarillu", "genre": "Romance ", "imdb": 8.2, "google": "4.8", "collection": 25, "budget": 6, "currency": "INR", "rate": 91, "id": "kF8l3Vq2pWs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bommarillu_poster.jpg", "cast": "Siddharth, Genelia D'Souza, Prakash Raj", "watchAt": "Disney+ Hotstar", "release_date": "August 9, 2006", "languages": "Telugu", "runtime": "2h 48m", "certificate": "U" },
    { "title": "Agent Sai Srinivasa Athreya", "genre": "Thriller, Comedy", "imdb": 8.4, "google": "4.7", "collection": 20, "budget": 5, "currency": "INR", "rate": 94, "id": "3nKpL9vQxE7", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Agent_Sai_Srinivasa_Athreya_poster.jpg", "cast": "Naveen Polishetty, Shruti Sharma, Suhas", "watchAt": "Prime Video", "release_date": "June 21, 2019", "languages": "Telugu", "runtime": "2h 28m", "certificate": "U/A" },
    { "title": "Manam", "genre": "Fantasy, Drama", "imdb": 8.0, "google": "4.7", "collection": 62, "budget": 28, "currency": "INR", "rate": 90, "id": "pBk4NYhWNMM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Manam_poster.jpg", "cast": "Nageswara Rao, Nagarjuna, Naga Chaitanya", "watchAt": "Disney+ Hotstar", "release_date": "May 23, 2014", "languages": "Telugu", "runtime": "2h 43m", "certificate": "U/A" },
    { "title": "Kshanam", "genre": "Thriller, Mystery", "imdb": 8.2, "google": "4.6", "collection": 15, "budget": 1, "currency": "INR", "rate": 91, "id": "5pX9lQ3nVkE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kshanam_poster.jpg", "cast": "Adivi Sesh, Adah Sharma, Anasuya Bharadwaj", "watchAt": "Prime Video", "release_date": "February 26, 2016", "languages": "Telugu", "runtime": "1h 58m", "certificate": "U/A" },
    { "title": "Aditya 369", "genre": "Sci-Fi, Adventure", "imdb": 8.1, "google": "4.7", "collection": 9, "budget": 1.5, "currency": "INR", "rate": 93, "id": "v_7y1O_nwH0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Aditya_369_poster.jpg", "cast": "Nandamuri Balakrishna, Mohini, Amrish Puri", "watchAt": "Prime Video", "release_date": "July 18, 1991", "languages": "Telugu", "runtime": "2h 25m", "certificate": "U" },
    { "title": "Eega", "genre": "Fantasy, Action", "imdb": 7.7, "google": "4.7", "collection": 125, "budget": 26, "currency": "INR", "rate": 92, "id": "i8cO0lKz6e0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Eega_poster.jpg", "cast": "Nani, Samantha Ruth Prabhu, Sudeep", "watchAt": "Disney+ Hotstar", "release_date": "July 6, 2012", "languages": "Telugu,Hindi,Tamil", "runtime": "2h 25m", "certificate": "U/A" },
    { "title": "Godavari", "genre": "Adventure, Romance", "imdb": 7.9, "google": "4.6", "collection": 10, "budget": 5, "currency": "INR", "rate": 93, "id": "V28tYtZ5fUE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Godavari_2006_film.jpg", "cast": "Sumanth, Kamalinee Mukherjee, Neetu Chandra", "watchAt": "Prime Video", "release_date": "May 19, 2006", "languages": "Telugu", "runtime": "2h 30m", "certificate": "U" },
    { "title": "Gamyam", "genre": "Adventure, Drama", "imdb": 8.2, "google": "4.6", "collection": 15, "budget": 3, "currency": "INR", "rate": 94, "id": "G7aA9Z6GfR0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Gamyam_poster.jpg", "cast": "Sharwanand, Allari Naresh, Kamalinee Mukherjee", "watchAt": "YouTube", "release_date": "February 29, 2008", "languages": "Telugu", "runtime": "2h 26m", "certificate": "U/A" },
    { "title": "Mayabazar", "genre": "Fantasy, Drama", "imdb": 9.0, "google": "4.9", "collection": 10, "budget": 2, "currency": "INR", "rate": 98, "id": "tas_30CdOss", "poster": "https://m.media-amazon.com/images/M/MV5BNzAxYmQyNGItZTdiZC00MTZhLTgzMDEtOGE2YzQyMmRkNDhlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "cast": "N.T. Rama Rao, Savitri, S.V. Ranga Rao", "watchAt": "Prime Video", "release_date": "March 27, 1957", "languages": "Telugu,Tamil", "runtime": "3h 4m", "certificate": "U" },
    { "title": "C/o Kancharapalem", "genre": "Drama", "imdb": 8.8, "google": "4.8", "collection": 7, "budget": 1, "currency": "INR", "rate": 98, "id": "CM0r9sFQvN0", "poster": "https://i.ytimg.com/vi/-YeQZwlNeaY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgozfrBGwiER_3K6BLVRtxPWzPNQ", "cast": "Subba Rao, Radha Bessy, Kesava Karri", "watchAt": "Netflix", "release_date": "September 7, 2018", "languages": "Telugu", "runtime": "2h 32m", "certificate": "U/A" },
    { "title": "12 Angry Men", "genre": "Drama", "imdb": 9.0, "google": "4.8", "collection": 2, "budget": 0.35, "currency": "USD", "rate": 100, "id": "_13J_9B5jEk", "poster": "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "cast": "Henry Fonda, Lee J. Cobb, Martin Balsam", "watchAt": "Prime Video", "release_date": "April 10, 1957", "languages": "English", "runtime": "1h 36m", "certificate": "U" },
    { "title": "Seven Samurai", "genre": "Action,Adventure", "imdb": 8.6, "google": "4.8", "collection": 0.3, "budget": 2, "currency": "USD", "rate": 100, "id": "wJ1TOratCTo", "poster": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/12/13/1323798199983/Seven-Samurai-group-007.jpg?width=465&dpr=1&s=none&crop=none", "cast": "Toshiro Mifune, Takashi Shimura, Keiko Tsushima", "watchAt": "Prime Video", "release_date": "April 26, 1954", "languages": "Japanese", "runtime": "3h 27m", "certificate": "U" },
    { "title": "The Usual Suspects", "genre": "Crime,Thriller", "imdb": 8.5, "google": "4.7", "collection": 34, "budget": 6, "currency": "USD", "rate": 88, "id": "oiXdPolca5w", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Usual_suspects_ver1.jpg", "cast": "Kevin Spacey, Gabriel Byrne, Chazz Palminteri", "watchAt": "Prime Video", "release_date": "August 16, 1995", "languages": "English", "runtime": "1h 46m", "certificate": "A" },
    { "title": "The Green Mile", "genre": "Fantasy,Drama", "imdb": 8.6, "google": "4.8", "collection": 286, "budget": 60, "currency": "USD", "rate": 79, "id": "Ki4haFrqSrw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Green_Mile_%28movie_poster%29.jpg", "cast": "Tom Hanks, Michael Clarke Duncan, David Morse", "watchAt": "Netflix", "release_date": "December 10, 1999", "languages": "English", "runtime": "3h 9m", "certificate": "A" },
    { "title": "Saving Private Ryan", "genre": "Drama", "imdb": 8.6, "google": "4.8", "collection": 482, "budget": 70, "currency": "USD", "rate": 94, "id": "9CiW_DgxCnQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Saving_Private_Ryan_poster.jpg", "cast": "Tom Hanks, Matt Damon, Tom Sizemore", "watchAt": "Prime Video", "release_date": "July 24, 1998", "languages": "English", "runtime": "2h 49m", "certificate": "A" },
    { "title": "American History X", "genre": "Drama,Crime", "imdb": 8.5, "google": "4.7", "collection": 24, "budget": 20, "currency": "USD", "rate": 83, "id": "XfQYHqsplsg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/American_History_X_poster.png", "cast": "Edward Norton, Edward Furlong, Beverly D'Angelo", "watchAt": "Prime Video", "release_date": "October 30, 1998", "languages": "English", "runtime": "1h 59m", "certificate": "A" },
    { "title": "The Pianist", "genre": "Biography,Drama", "imdb": 8.5, "google": "4.8", "collection": 120, "budget": 35, "currency": "USD", "rate": 95, "id": "BFwGqLa_oAo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Pianist_movie.jpg", "cast": "Adrien Brody, Thomas Kretschmann, Frank Finlay", "watchAt": "Prime Video", "release_date": "March 28, 2003", "languages": "English,German", "runtime": "2h 30m", "certificate": "A" },
    { "title": "Memento", "genre": "Mystery,Thriller", "imdb": 8.4, "google": "4.7", "collection": 40, "budget": 9, "currency": "USD", "rate": 93, "id": "0vS0E9bBSL0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Memento_poster.jpg", "cast": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano", "watchAt": "Prime Video", "release_date": "October 11, 2000", "languages": "English", "runtime": "1h 53m", "certificate": "A" },
    { "title": "The Lives of Others", "genre": "Thriller,Drama", "imdb": 8.4, "google": "4.7", "collection": 77, "budget": 2, "currency": "USD", "rate": 92, "id": "n3_iLOp6IhM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Lives_of_Others.jpg", "cast": "Ulrich Mühe, Martina Gedeck, Sebastian Koch", "watchAt": "Prime Video", "release_date": "March 23, 2006", "languages": "German", "runtime": "2h 17m", "certificate": "A" },
    { "title": "Rear Window", "genre": "Mystery,Thriller", "imdb": 8.5, "google": "4.8", "collection": 37, "budget": 1, "currency": "USD", "rate": 98, "id": "6kCcZCMYw38", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Rear_Window_poster.jpg", "cast": "James Stewart, Grace Kelly, Wendell Corey", "watchAt": "Prime Video", "release_date": "September 1, 1954", "languages": "English", "runtime": "1h 52m", "certificate": "U" },
    { "title": "Psycho", "genre": "Horror,Thriller", "imdb": 8.5, "google": "4.7", "collection": 50, "budget": 0.8, "currency": "USD", "rate": 96, "id": "Wz719b9QUqQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Psycho_%281960%29_theatrical_poster.jpg", "cast": "Anthony Perkins, Janet Leigh, Vera Miles", "watchAt": "Netflix", "release_date": "September 8, 1960", "languages": "English", "runtime": "1h 49m", "certificate": "A" },
    { "title": "Casablanca", "genre": "Romance,Drama", "imdb": 8.5, "google": "4.7", "collection": 4, "budget": 0.9, "currency": "USD", "rate": 99, "id": "BkL9l7qovsE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Casablanca_poster.jpg", "cast": "Humphrey Bogart, Ingrid Bergman, Paul Henreid", "watchAt": "Prime Video", "release_date": "January 23, 1943", "languages": "English", "runtime": "1h 42m", "certificate": "U" },
    { "title": "Modern Times", "genre": "Comedy,Drama", "imdb": 8.5, "google": "4.8", "collection": 1.4, "budget": 1.5, "currency": "USD", "rate": 98, "id": "GLeDdzG82Yg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Modern_Times_poster.jpg", "cast": "Charlie Chaplin, Paulette Goddard, Henry Bergman", "watchAt": "Prime Video", "release_date": "February 5, 1936", "languages": "English", "runtime": "1h 27m", "certificate": "U" },
    { "title": "City Lights", "genre": "Comedy,Romance", "imdb": 8.5, "google": "4.8", "collection": 0.05, "budget": 1.5, "currency": "USD", "rate": 98, "id": "b2NTUnuja1I", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/City_Lights_film_poster.jpg", "cast": "Charlie Chaplin, Virginia Cherrill, Florence Lee", "watchAt": "Prime Video", "release_date": "February 6, 1931", "languages": "English", "runtime": "1h 27m", "certificate": "U" },
    { "title": "The Wolf of Wall Street", "genre": "Biography,Comedy", "imdb": 8.2, "google": "4.7", "collection": 406, "budget": 100, "currency": "USD", "rate": 80, "id": "iszwuX1AK6A", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/WallStreet2013poster.jpg", "cast": "Leonardo DiCaprio, Jonah Hill, Margot Robbie", "watchAt": "Netflix", "release_date": "December 25, 2013", "languages": "English", "runtime": "3h 0m", "certificate": "A" },
    { "title": "Shutter Island", "genre": "Thriller,Mystery", "imdb": 8.2, "google": "4.7", "collection": 294, "budget": 80, "currency": "USD", "rate": 69, "id": "5iaYLCiq5RM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Shutterislandposter.jpg", "cast": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley", "watchAt": "Netflix", "release_date": "February 19, 2010", "languages": "English", "runtime": "2h 18m", "certificate": "A" },
    { "title": "V for Vendetta", "genre": "Action,Sci-Fi", "imdb": 8.1, "google": "4.7", "collection": 132, "budget": 54, "currency": "USD", "rate": 73, "id": "lSA7mAHolAw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/V_for_Vendetta_movie_poster.jpg", "cast": "Hugo Weaving, Natalie Portman, Rupert Graves", "watchAt": "Netflix", "release_date": "March 17, 2006", "languages": "English", "runtime": "2h 12m", "certificate": "U/A" },
    { "title": "The Truman Show", "genre": "Comedy,Drama", "imdb": 8.2, "google": "4.7", "collection": 264, "budget": 60, "currency": "USD", "rate": 94, "id": "dlnmQbPGuls", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Trumanshow.jpg", "cast": "Jim Carrey, Ed Harris, Laura Linney", "watchAt": "Prime Video", "release_date": "June 5, 1998", "languages": "English", "runtime": "1h 43m", "certificate": "U" },
    { "title": "La La Land", "genre": "Comedy,Drama", "imdb": 8.0, "google": "4.7", "collection": 447, "budget": 30, "currency": "USD", "rate": 91, "id": "0pdqf4P9MB8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/La_La_Land_%28film%29.png", "cast": "Ryan Gosling, Emma Stone, John Legend", "watchAt": "Netflix", "release_date": "December 9, 2016", "languages": "English", "runtime": "2h 8m", "certificate": "U/A" },
    { "title": "Spotlight", "genre": "Biography,Crime", "imdb": 8.1, "google": "4.6", "collection": 98, "budget": 20, "currency": "USD", "rate": 97, "id": "Zg5zSVxZ9Io", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Spotlight_2015_film_poster.jpg", "cast": "Mark Ruffalo, Michael Keaton, Rachel McAdams", "watchAt": "Prime Video", "release_date": "November 6, 2015", "languages": "English", "runtime": "2h 9m", "certificate": "A" },
    { "title": "Room", "genre": "Drama,Thriller", "imdb": 8.1, "google": "4.7", "collection": 35, "budget": 13, "currency": "USD", "rate": 93, "id": "E_Ci-pAL4eE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Room_%282015_film%29.png", "cast": "Brie Larson, Jacob Tremblay, Sean Bridgers", "watchAt": "Prime Video", "release_date": "January 22, 2016", "languages": "English", "runtime": "1h 58m", "certificate": "A" },
    { "title": "The Imitation Game", "genre": "Biography,Thriller", "imdb": 8.0, "google": "4.7", "collection": 233, "budget": 14, "currency": "USD", "rate": 90, "id": "S5CjKEFb-sM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Imitation_Game_poster.jpg", "cast": "Benedict Cumberbatch, Keira Knightley, Matthew Goode", "watchAt": "Netflix", "release_date": "November 28, 2014", "languages": "English", "runtime": "1h 54m", "certificate": "U/A" },
    { "title": "Green Book", "genre": "Biography,Comedy", "imdb": 8.2, "google": "4.7", "collection": 321, "budget": 23, "currency": "USD", "rate": 77, "id": "QkZxoko_HC0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Green_Book_poster.jpg", "cast": "Viggo Mortensen, Mahershala Ali, Linda Cardellini", "watchAt": "SonyLIV", "release_date": "November 16, 2018", "languages": "English", "runtime": "2h 10m", "certificate": "U/A" },
    { "title": "12 Years a Slave", "genre": "Biography,Drama", "imdb": 8.1, "google": "4.6", "collection": 187, "budget": 20, "currency": "USD", "rate": 95, "id": "z02Ie8wKKRg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/12_Years_a_Slave_film_poster.jpg", "cast": "Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender", "watchAt": "Netflix", "release_date": "November 8, 2013", "languages": "English", "runtime": "2h 14m", "certificate": "A" },
    { "title": "Birdman", "genre": "Comedy,Drama", "imdb": 7.7, "google": "4.4", "collection": 103, "budget": 18, "currency": "USD", "rate": 91, "id": "uJfLoE6hanc", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Birdman_poster.jpg", "cast": "Michael Keaton, Zach Galifianakis, Edward Norton", "watchAt": "Prime Video", "release_date": "November 14, 2014", "languages": "English", "runtime": "1h 59m", "certificate": "A" },
    { "title": "Catch Me If You Can", "genre": "Biography,Crime", "imdb": 8.1, "google": "4.7", "collection": 352, "budget": 52, "currency": "USD", "rate": 96, "id": "71rD9K20ylY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Catch_Me_If_You_Can_2002_movie.jpg", "cast": "Leonardo DiCaprio, Tom Hanks, Christopher Walken", "watchAt": "Netflix", "release_date": "December 25, 2002", "languages": "English", "runtime": "2h 21m", "certificate": "U/A" },
    { "title": "The Thing", "genre": "Horror,Mystery", "imdb": 8.2, "google": "4.8", "collection": 19, "budget": 15, "currency": "USD", "rate": 85, "id": "5ftmr17M-a4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Thing_%281982_film%29.jpg", "cast": "Kurt Russell, Wilford Brimley, T.K. Carter", "watchAt": "Prime Video", "release_date": "June 25, 1982", "languages": "English", "runtime": "1h 49m", "certificate": "A" },
    { "title": "Hereditary", "genre": "Horror,Drama", "imdb": 7.3, "google": "4.5", "collection": 82, "budget": 10, "currency": "USD", "rate": 90, "id": "V6wWKNij_1M", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Hereditary.png", "cast": "Toni Collette, Alex Wolff, Milly Shapiro", "watchAt": "Prime Video", "release_date": "June 8, 2018", "languages": "English", "runtime": "2h 7m", "certificate": "A" },
    { "title": "The Exorcist", "genre": "Horror,Thriller", "imdb": 8.1, "google": "4.7", "collection": 441, "budget": 12, "currency": "USD", "rate": 83, "id": "YDGw1MTEe9k", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Exorcist_ver2.jpg", "cast": "Ellen Burstyn, Max von Sydow, Linda Blair", "watchAt": "Prime Video", "release_date": "December 26, 1973", "languages": "English", "runtime": "2h 12m", "certificate": "A" },
    { "title": "Soorarai Pottru", "genre": "Action,Drama", "imdb": 8.7, "google": "4.9", "collection": 20, "budget": 2, "currency": "USD", "rate": 93, "id": "fa_DIwRsa9o", "poster": "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg", "cast": "Suriya, Paresh Rawal, Aparna Balamurali", "watchAt": "Prime Video", "release_date": "November 12, 2020", "languages": "Tamil", "runtime": "2h 33m", "certificate": "U" },
    { "title": "Jai Bhim", "genre": "Crime,Drama", "imdb": 8.8, "google": "4.9", "collection": 15, "budget": 1.5, "currency": "USD", "rate": 96, "id": "Gc6dEDnL8JA", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jai_Bhim_film_poster.jpg", "cast": "Suriya, Lijomol Jose, Manikandan", "watchAt": "Prime Video", "release_date": "November 2, 2021", "languages": "Tamil", "runtime": "2h 44m", "certificate": "A" },
    { "title": "Jana Gana Mana", "genre": "Crime,Drama", "imdb": 8.3, "google": "4.8", "collection": 7, "budget": 2, "currency": "USD", "rate": 93, "id": "j7jPnwVGdZ8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jana_Gana_Mana_poster.jpg", "cast": "Prithviraj Sukumaran, Suraj Venjaramoodu, Mamta Mohandas", "watchAt": "Netflix", "release_date": "April 28, 2022", "languages": "Malayalam", "runtime": "2h 42m", "certificate": "U/A" },
    { "title": "Lucia", "genre": "Thriller,Sci-Fi", "imdb": 8.3, "google": "4.8", "collection": 1, "budget": 0.1, "currency": "USD", "rate": 92, "id": "K5Yd6xP2V7E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Lucia_Kannada_Movie_Poster.jpg", "cast": "Sathish Ninasam, Sruthi Hariharan", "watchAt": "Sun NXT", "release_date": "September 6, 2013", "languages": "Kannada", "runtime": "2h 15m", "certificate": "U/A" },
    { "title": "Good Will Hunting", "genre": "Drama,Romance", "imdb": 8.3, "google": "4.8", "collection": 225, "budget": 10, "currency": "USD", "rate": 97, "id": "ReVJRX-xkcQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Good_Will_Hunting_theatrical_poster.jpg", "cast": "Matt Damon, Robin Williams, Ben Affleck", "watchAt": "Netflix", "release_date": "December 5, 1997", "languages": "English", "runtime": "2h 6m", "certificate": "U/A" },
    { "title": "Dead Poets Society", "genre": "Drama,Comedy", "imdb": 8.1, "google": "4.8", "collection": 235, "budget": 16, "currency": "USD", "rate": 84, "id": "wrBk780aOis", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Dead_poets_society.jpg", "cast": "Robin Williams, Ethan Hawke, Robert Sean Leonard", "watchAt": "Disney+ Hotstar", "release_date": "June 2, 1989", "languages": "English", "runtime": "2h 8m", "certificate": "U" },
    { "title": "The Grand Budapest Hotel", "genre": "Comedy,Drama", "imdb": 8.1, "google": "4.7", "collection": 173, "budget": 25, "currency": "USD", "rate": 92, "id": "1Fg5iWmQjwk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Grand_Budapest_Hotel_Poster.jpg", "cast": "Ralph Fiennes, Tony Revolori, F. Murray Abraham", "watchAt": "Disney+ Hotstar", "release_date": "March 28, 2014", "languages": "English", "runtime": "1h 39m", "certificate": "A" },
    { "title": "Eternal Sunshine of the Spotless Mind", "genre": "Romance,Sci-Fi", "imdb": 8.3, "google": "4.7", "collection": 74, "budget": 20, "currency": "USD", "rate": 92, "id": "yE-f1alkq9I", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Eternal_Sunshine_of_the_Spotless_Mind_Ver2.jpg", "cast": "Jim Carrey, Kate Winslet, Tom Wilkinson", "watchAt": "Netflix", "release_date": "March 19, 2004", "languages": "English", "runtime": "1h 48m", "certificate": "A" },
    { "title": "Her", "genre": "Romance,Sci-Fi", "imdb": 8.0, "google": "4.7", "collection": 48, "budget": 23, "currency": "USD", "rate": 94, "id": "dJTU48_yghs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Her2013Poster.jpg", "cast": "Joaquin Phoenix, Scarlett Johansson, Amy Adams", "watchAt": "Netflix", "release_date": "December 18, 2013", "languages": "English", "runtime": "2h 6m", "certificate": "A" },
    { "title": "No Country for Old Men", "genre": "Crime,Thriller", "imdb": 8.2, "google": "4.6", "collection": 171, "budget": 25, "currency": "USD", "rate": 93, "id": "38A__WT3-o0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/No_Country_for_Old_Men_poster.jpg", "cast": "Tommy Lee Jones, Javier Bardem, Josh Brolin", "watchAt": "Prime Video", "release_date": "November 9, 2007", "languages": "English", "runtime": "2h 2m", "certificate": "A" },
    { "title": "There Will Be Blood", "genre": "Drama", "imdb": 8.2, "google": "4.6", "collection": 76, "budget": 25, "currency": "USD", "rate": 91, "id": "FeSLPELpMeM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/There_Will_Be_Blood_Poster.jpg", "cast": "Daniel Day-Lewis, Paul Dano, Ciarán Hinds", "watchAt": "Prime Video", "release_date": "December 26, 2007", "languages": "English", "runtime": "2h 38m", "certificate": "A" },
    { "title": "The Shining", "genre": "Horror,Drama", "imdb": 8.4, "google": "4.7", "collection": 47, "budget": 19, "currency": "USD", "rate": 82, "id": "5Cb3ik6zP2I", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Shining_poster.jpg", "cast": "Jack Nicholson, Shelley Duvall, Danny Lloyd", "watchAt": "Prime Video", "release_date": "May 23, 1980", "languages": "English", "runtime": "2h 26m", "certificate": "A" },
    { "title": "Alien", "genre": "Horror,Sci-Fi", "imdb": 8.5, "google": "4.7", "collection": 106, "budget": 11, "currency": "USD", "rate": 98, "id": "LjLamj-b0I8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Alien_movie_poster.jpg", "cast": "Sigourney Weaver, Tom Skerritt, John Hurt", "watchAt": "Disney+ Hotstar", "release_date": "May 25, 1979", "languages": "English", "runtime": "1h 57m", "certificate": "A" },
    { "title": "Django Unchained", "genre": "Drama", "imdb": 8.5, "google": "4.8", "collection": 425, "budget": 100, "currency": "USD", "rate": 87, "id": "0fUCuvNlOCg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Django_Unchained_Poster.jpg", "cast": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio", "watchAt": "Netflix", "release_date": "December 25, 2012", "languages": "English", "runtime": "2h 45m", "certificate": "A" },
    { "title": "Gangs of Wasseypur", "genre": "Action,Crime", "imdb": 8.2, "google": "4.8", "collection": 10, "budget": 2.5, "currency": "USD", "rate": 97, "id": "j-AkWDkXcMY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Gangs_of_Wasseypur_poster.jpg", "cast": "Manoj Bajpayee, Nawazuddin Siddiqui, Richa Chadda", "watchAt": "Netflix", "release_date": "June 22, 2012", "languages": "Hindi", "runtime": "5h 21m", "certificate": "A" },
    { "title": "Zindagi Na Milegi Dobara", "genre": "Comedy,Drama", "imdb": 8.2, "google": "4.8", "collection": 25, "budget": 7, "currency": "USD", "rate": 93, "id": "FJrcD_i29bw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Zindaginamilegidobara.jpg", "cast": "Hrithik Roshan, Farhan Akhtar, Abhay Deol", "watchAt": "Netflix", "release_date": "July 15, 2011", "languages": "Hindi", "runtime": "2h 35m", "certificate": "U" },
    { "title": "Dil Chahta Hai", "genre": "Comedy,Drama", "imdb": 8.1, "google": "4.8", "collection": 7, "budget": 2, "currency": "USD", "rate": 95, "id": "m1JNCjXx848", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Dil_Chahta_Hai.jpg", "cast": "Aamir Khan, Saif Ali Khan, Akshaye Khanna", "watchAt": "Netflix", "release_date": "August 10, 2001", "languages": "Hindi", "runtime": "3h 3m", "certificate": "U" },
    { "title": "Swades", "genre": "Drama", "imdb": 8.2, "google": "4.8", "collection": 5, "budget": 3, "currency": "USD", "rate": 94, "id": "v3G3K2s8p3c", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Swades_poster.jpg", "cast": "Shah Rukh Khan, Gayatri Joshi, Kishori Ballal", "watchAt": "Netflix", "release_date": "December 17, 2004", "languages": "Hindi", "runtime": "3h 9m", "certificate": "U" },
    { "title": "Chak De! India", "genre": "Sports,Drama", "imdb": 8.1, "google": "4.8", "collection": 22, "budget": 4, "currency": "USD", "rate": 94, "id": "6a0-dSMWm5g", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Chak_De%21_India.jpg", "cast": "Shah Rukh Khan, Vidya Malvade, Shilpa Shukla", "watchAt": "Prime Video", "release_date": "August 10, 2007", "languages": "Hindi", "runtime": "2h 33m", "certificate": "U" },
    { "title": "Queen", "genre": "Comedy,Drama", "imdb": 8.1, "google": "4.7", "collection": 18, "budget": 2, "currency": "USD", "rate": 93, "id": "KGC6vl3lzf0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/QueenMoviePoster7thMarch.jpg", "cast": "Kangana Ranaut, Rajkummar Rao, Lisa Haydon", "watchAt": "Netflix", "release_date": "March 7, 2014", "languages": "Hindi", "runtime": "2h 26m", "certificate": "U/A" },
    { "title": "Kahaani", "genre": "Thriller,Mystery", "imdb": 8.1, "google": "4.7", "collection": 16, "budget": 1, "currency": "USD", "rate": 90, "id": "RS3aHkkfuEI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kahaani_Poster.jpg", "cast": "Vidya Balan, Parambrata Chatterjee, Nawazuddin Siddiqui", "watchAt": "Netflix", "release_date": "March 9, 2012", "languages": "Hindi", "runtime": "2h 2m", "certificate": "U/A" },
    { "title": "Thuppakki", "genre": "Action,Thriller", "imdb": 8.1, "google": "4.7", "collection": 26, "budget": 10, "currency": "USD", "rate": 89, "id": "9fIHHJ1VvVg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Thuppakki_poster.jpg", "cast": "Vijay, Kajal Aggarwal, Vidyut Jammwal", "watchAt": "Disney+ Hotstar", "release_date": "November 13, 2012", "languages": "Tamil", "runtime": "2h 45m", "certificate": "U" },
    { "title": "Kaththi", "genre": "Action,Drama", "imdb": 8.1, "google": "4.7", "collection": 20, "budget": 10, "currency": "USD", "rate": 88, "id": "bMf0IyzyKt4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kaththi_poster.jpg", "cast": "Vijay, Samantha, Neil Nitin Mukesh", "watchAt": "Disney+ Hotstar", "release_date": "October 22, 2014", "languages": "Tamil", "runtime": "2h 46m", "certificate": "U" },
    { "title": "Vada Chennai", "genre": "Crime,Drama", "imdb": 8.4, "google": "4.7", "collection": 10, "budget": 9, "currency": "USD", "rate": 91, "id": "61B6-8h4gq8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Vada_Chennai.jpg", "cast": "Dhanush, Andrea Jeremiah, Aishwarya Rajesh", "watchAt": "Disney+ Hotstar", "release_date": "October 17, 2018", "languages": "Tamil", "runtime": "2h 44m", "certificate": "A" },
    { "title": "Asuran", "genre": "Action,Drama", "imdb": 8.4, "google": "4.7", "collection": 20, "budget": 5, "currency": "USD", "rate": 94, "id": "9C7dG8rjM5U", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Asuran_poster.jpg", "cast": "Dhanush, Manju Warrier, Ken Karunas", "watchAt": "Prime Video", "release_date": "October 4, 2019", "languages": "Tamil", "runtime": "2h 21m", "certificate": "U/A" },
    { "title": "Kumbalangi Nights", "genre": "Drama,Comedy", "imdb": 8.5, "google": "4.8", "collection": 5, "budget": 0.9, "currency": "USD", "rate": 97, "id": "3P4BFBSafF0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kumbalangi_Nights_poster.jpg", "cast": "Fahadh Faasil, Shane Nigam, Soubin Shahir", "watchAt": "Prime Video", "release_date": "February 7, 2019", "languages": "Malayalam", "runtime": "2h 15m", "certificate": "U" },
    { "title": "C U Soon", "genre": "Thriller,Mystery", "imdb": 7.8, "google": "4.6", "collection": 0, "budget": 0.5, "currency": "USD", "rate": 90, "id": "11X3s9jX3g8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/C_U_Soon.jpg", "cast": "Fahadh Faasil, Roshan Mathew, Darshana Rajendran", "watchAt": "Prime Video", "release_date": "September 1, 2020", "languages": "Malayalam", "runtime": "1h 38m", "certificate": "U/A" },
    { "title": "777 Charlie", "genre": "Adventure,Comedy", "imdb": 8.7, "google": "4.9", "collection": 13, "budget": 2.5, "currency": "USD", "rate": 97, "id": "lzr2PJXeHww", "poster": "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/777_Charlie_official_poster.jpg/250px-777_Charlie_official_poster.jpg", "cast": "Rakshit Shetty, Charlie, Sangeetha Sringeri", "watchAt": "Prime Video", "release_date": "June 10, 2022", "languages": "Kannada,Hindi", "runtime": "2h 44m", "certificate": "U" },
    { "title": "Train to Busan", "genre": "Horror,Action", "imdb": 7.6, "google": "4.7", "collection": 98, "budget": 8.5, "currency": "USD", "rate": 94, "id": "pyWuHv2-Abk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Train_to_Busan.jpg", "cast": "Gong Yoo, Ma Dong-seok, Jung Yu-mi", "watchAt": "Prime Video", "release_date": "July 20, 2016", "languages": "Korean,English", "runtime": "1h 58m", "certificate": "A" },
    { "title": "The Handmaiden", "genre": "Thriller,Romance", "imdb": 8.1, "google": "4.7", "collection": 38, "budget": 8.8, "currency": "USD", "rate": 96, "id": "whldChqCsYk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Handmaiden.jpg", "cast": "Kim Min-hee, Kim Tae-ri, Ha Jung-woo", "watchAt": "Prime Video", "release_date": "June 1, 2016", "languages": "Korean", "runtime": "2h 25m", "certificate": "A" },
    { "title": "Memories of Murder", "genre": "Crime,Thriller", "imdb": 8.1, "google": "4.8", "collection": 12, "budget": 2.8, "currency": "USD", "rate": 95, "id": "0n_HQwQU8ls", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Memories_of_Murder_poster.jpg", "cast": "Song Kang-ho, Kim Sang-kyung, Kim Roi-ha", "watchAt": "Prime Video", "release_date": "May 2, 2003", "languages": "Korean", "runtime": "2h 11m", "certificate": "A" },
    { "title": "Godzilla Minus One", "genre": "Action,Sci-Fi", "imdb": 8.3, "google": "4.8", "collection": 116, "budget": 15, "currency": "USD", "rate": 98, "id": "r7DqccP1Q_4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Godzilla_Minus_One_poster.jpg", "cast": "Ryunosuke Kamiki, Minami Hamabe, Yuki Yamada", "watchAt": "Netflix", "release_date": "November 3, 2023", "languages": "Japanese", "runtime": "2h 5m", "certificate": "U/A" },
    { "title": "The Lord of the Rings: The Fellowship of the Ring", "genre": "Fantasy,Adventure", "imdb": 8.9, "google": "4.8", "collection": 898, "budget": 93, "currency": "USD", "rate": 91, "id": "V75dMMIW2B4", "poster": "https://www.rogerebert.com/wp-content/uploads/2024/03/Lord-of-the-Rings-The-Fellowship-of-the-Ring.jpg", "cast": "Elijah Wood, Ian McKellen, Orlando Bloom", "watchAt": "Prime Video", "release_date": "December 19, 2001", "languages": "English,Hindi", "runtime": "2h 58m", "certificate": "U" },
    { "title": "Back to the Future", "genre": "Sci-Fi,Comedy", "imdb": 8.5, "google": "4.8", "collection": 381, "budget": 19, "currency": "USD", "rate": 96, "id": "qvsgGtivCgs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Back_to_the_Future.jpg", "cast": "Michael J. Fox, Christopher Lloyd, Lea Thompson", "watchAt": "Netflix", "release_date": "July 3, 1985", "languages": "English,Hindi", "runtime": "1h 56m", "certificate": "U" },
    { "title": "Terminator 2: Judgment Day", "genre": "Sci-Fi,Action", "imdb": 8.6, "google": "4.8", "collection": 520, "budget": 100, "currency": "USD", "rate": 93, "id": "CRRlbK5w8AE", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ReDCkkcOc4s5F-lcNyqfrpdAxFrJFpfeK02CvaJxeY9Pn9dGF2V3YA6PVTZcbJMD7uKR3zWED_Sx32vUdAUOfRAHOv6F_MHuoi-kYOY&s=10", "cast": "Arnold Schwarzenegger, Linda Hamilton, Edward Furlong", "watchAt": "Prime Video", "release_date": "July 3, 1991", "languages": "English,Hindi", "runtime": "2h 17m", "certificate": "A" },
    { "title": "The Dark Knight Rises", "genre": "Action,Thriller", "imdb": 8.4, "google": "4.7", "collection": 1081, "budget": 250, "currency": "USD", "rate": 87, "id": "g8evyE9TuYk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Dark_knight_rises_poster.jpg", "cast": "Christian Bale, Tom Hardy, Anne Hathaway", "watchAt": "Netflix", "release_date": "July 20, 2012", "languages": "English,Hindi", "runtime": "2h 44m", "certificate": "U/A" },
    { "title": "The Avengers", "genre": "Action,Sci-Fi", "imdb": 8.0, "google": "4.7", "collection": 1518, "budget": 220, "currency": "USD", "rate": 91, "id": "eOrNdBpGMv8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/The_Avengers_%282012_film%29_poster.jpg", "cast": "Robert Downey Jr., Chris Evans, Scarlett Johansson", "watchAt": "Disney+ Hotstar", "release_date": "May 4, 2012", "languages": "English,Hindi", "runtime": "2h 23m", "certificate": "U/A" },
    { "title": "Guardians of the Galaxy", "genre": "Action,Sci-Fi", "imdb": 8.0, "google": "4.7", "collection": 773, "budget": 170, "currency": "USD", "rate": 92, "id": "d96cjJhvlMA", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/GOTG-poster.jpg", "cast": "Chris Pratt, Zoe Saldana, Dave Bautista", "watchAt": "Disney+ Hotstar", "release_date": "August 1, 2014", "languages": "English,Hindi", "runtime": "2h 1m", "certificate": "U/A" },
    { "title": "Deadpool", "genre": "Action,Comedy", "imdb": 8.0, "google": "4.6", "collection": 782, "budget": 58, "currency": "USD", "rate": 85, "id": "ONHBaC-pfsk", "poster": "https://m.media-amazon.com/images/M/MV5BNzY3ZWU5NGQtOTViNC00ZWVmLTliNjAtNzViNzlkZWQ4YzQ4XkEyXkFqcGc@._V1_.jpg", "cast": "Ryan Reynolds, Morena Baccarin, T.J. Miller", "watchAt": "Disney+ Hotstar", "release_date": "February 12, 2016", "languages": "English,Hindi", "runtime": "1h 48m", "certificate": "A" },
    { "title": "Logan", "genre": "Action,Drama", "imdb": 8.1, "google": "4.7", "collection": 619, "budget": 97, "currency": "USD", "rate": 93, "id": "Div0iP65aZo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Logan_2017_poster.jpg", "cast": "Hugh Jackman, Patrick Stewart, Dafne Keen", "watchAt": "Disney+ Hotstar", "release_date": "March 3, 2017", "languages": "English,Hindi", "runtime": "2h 17m", "certificate": "A" },
    { "title": "Bajrangi Bhaijaan", "genre": "Action,Comedy", "imdb": 8.1, "google": "4.8", "collection": 120, "budget": 11, "currency": "USD", "rate": 100, "id": "4nwaraFp5Qo", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bajrangi_Bhaijaan_Poster.jpg", "cast": "Salman Khan, Kareena Kapoor, Nawazuddin Siddiqui", "watchAt": "Disney+ Hotstar", "release_date": "July 17, 2015", "languages": "Hindi", "runtime": "2h 39m", "certificate": "U/A" },
    { "title": "PK", "genre": "Comedy,Drama", "imdb": 8.1, "google": "4.7", "collection": 100, "budget": 10, "currency": "USD", "rate": 77, "id": "82v-JPl5Pqw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/PK_poster.jpg", "cast": "Aamir Khan, Anushka Sharma, Sushant Singh Rajput", "watchAt": "Netflix", "release_date": "December 19, 2014", "languages": "Hindi", "runtime": "2h 33m", "certificate": "U/A" },
    { "title": "Sanju", "genre": "Biography,Drama", "imdb": 7.6, "google": "4.6", "collection": 75, "budget": 13, "currency": "USD", "rate": 40, "id": "1J76wN0TPI4", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Sanju_-_Theatrical_Poster.jpg", "cast": "Ranbir Kapoor, Paresh Rawal, Vicky Kaushal", "watchAt": "Netflix", "release_date": "June 29, 2018", "languages": "Hindi", "runtime": "2h 35m", "certificate": "U/A" },
    { "title": "Sultan", "genre": "Action,Sports", "imdb": 7.0, "google": "4.5", "collection": 80, "budget": 11, "currency": "USD", "rate": 70, "id": "wPxqcq6Byq0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Sultan_film_poster.jpg", "cast": "Salman Khan, Anushka Sharma, Randeep Hooda", "watchAt": "Prime Video", "release_date": "July 6, 2016", "languages": "Hindi", "runtime": "2h 50m", "certificate": "U/A" },
    { "title": "Padmaavat", "genre": "Drama", "imdb": 7.0, "google": "4.5", "collection": 75, "budget": 28, "currency": "USD", "rate": 70, "id": "8YaF2m7sJA0", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Padmaavat_poster.jpg", "cast": "Deepika Padukone, Ranveer Singh, Shahid Kapoor", "watchAt": "Prime Video", "release_date": "January 25, 2018", "languages": "Hindi", "runtime": "2h 44m", "certificate": "U/A" },
    { "title": "Andhadhun", "genre": "Thriller,Comedy", "imdb": 8.2, "google": "4.7", "collection": 60, "budget": 4, "currency": "USD", "rate": 100, "id": "2iVYI99VGaw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Andhadhun_poster.jpg", "cast": "Ayushmann Khurrana, Tabu, Radhika Apte", "watchAt": "Netflix", "release_date": "October 5, 2018", "languages": "Hindi", "runtime": "2h 19m", "certificate": "U/A" },
    { "title": "Ponniyin Selvan: I", "genre": "Action", "imdb": 7.6, "google": "4.6", "collection": 60, "budget": 30, "currency": "USD", "rate": 87, "id": "D4qAOsnU5GI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Ponniyin_Selvan_I_poster.jpg", "cast": "Vikram, Aishwarya Rai Bachchan, Jayam Ravi", "watchAt": "Prime Video", "release_date": "September 30, 2022", "languages": "Tamil,Hindi,Telugu", "runtime": "2h 47m", "certificate": "U/A" },
    { "title": "2.0", "genre": "Sci-Fi,Action", "imdb": 6.1, "google": "4.3", "collection": 90, "budget": 70, "currency": "USD", "rate": 58, "id": "_qOl_7qfPOM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/2.0_film_poster.jpg", "cast": "Rajinikanth, Akshay Kumar, Amy Jackson", "watchAt": "Prime Video", "release_date": "November 29, 2018", "languages": "Tamil,Hindi,Telugu", "runtime": "2h 27m", "certificate": "U/A" },
    { "title": "Mersal", "genre": "Action,Thriller", "imdb": 7.6, "google": "4.7", "collection": 35, "budget": 15, "currency": "USD", "rate": 88, "id": "0_Pq0xK3g_I", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mersal_poster.jpg", "cast": "Vijay, Samantha, Kajal Aggarwal", "watchAt": "Netflix", "release_date": "October 18, 2017", "languages": "Tamil", "runtime": "2h 50m", "certificate": "U/A" },
    { "title": "Kaithi", "genre": "Action,Thriller", "imdb": 8.5, "google": "4.8", "collection": 15, "budget": 3, "currency": "USD", "rate": 95, "id": "gB9G3gM5Nf4", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJKIgZg5fDrV-o-okfgeXBFlTd4jwq1EPV-3LA_z9aH5ZsM_5p9RH0dY6pNNVgeL8Y9gQEQ&s=10", "cast": "Karthi, Narain, Dheena", "watchAt": "Disney+ Hotstar", "release_date": "October 25, 2019", "languages": "Tamil", "runtime": "2h 25m", "certificate": "U/A" },
    { "title": "96", "genre": "Romance,Drama", "imdb": 8.5, "google": "4.8", "collection": 7, "budget": 2, "currency": "USD", "rate": 98, "id": "r0ynrrk_sWg", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/96_film_poster.jpg", "cast": "Vijay Sethupathi, Trisha, Varsha Bollamma", "watchAt": "Sun NXT", "release_date": "October 4, 2018", "languages": "Tamil", "runtime": "2h 38m", "certificate": "U" },
    { "title": "Premam", "genre": "Romance,Comedy", "imdb": 8.3, "google": "4.8", "collection": 8, "budget": 0.5, "currency": "USD", "rate": 95, "id": "0Gj3D0j0G00", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Premam_film_poster.jpg", "cast": "Nivin Pauly, Sai Pallavi, Madonna Sebastian", "watchAt": "Disney+ Hotstar", "release_date": "May 29, 2015", "languages": "Malayalam", "runtime": "2h 36m", "certificate": "U" },
    { "title": "Bangalore Days", "genre": "Comedy,Drama", "imdb": 8.3, "google": "4.8", "collection": 6, "budget": 1, "currency": "USD", "rate": 96, "id": "5gK2G5X9G00", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bangalore_Days_poster.jpg", "cast": "Dulquer Salmaan, Nivin Pauly, Fahadh Faasil", "watchAt": "Disney+ Hotstar", "release_date": "May 30, 2014", "languages": "Malayalam", "runtime": "2h 51m", "certificate": "U" },
    { "title": "Baahubali: The Beginning", "genre": "Action,Drama", "imdb": 8.0, "google": "4.7", "collection": 650, "budget": 180, "currency": "INR", "rate": 89, "id": "sOEg_YZQsTI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Baahubali_The_Beginning_poster.jpg", "cast": "Prabhas, Rana Daggubati, Tamannaah", "watchAt": "Disney+ Hotstar", "release_date": "July 10, 2015", "languages": "Telugu,Hindi,Tamil", "runtime": "2h 39m", "certificate": "U/A" },
    { "title": "Baahubali: The Conclusion", "genre": "Action,Drama", "imdb": 8.2, "google": "4.8", "collection": 1810, "budget": 250, "currency": "INR", "rate": 86, "id": "G62HrubdD6o", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Baahubali_2_The_Conclusion_poster.jpg", "cast": "Prabhas, Anushka Shetty, Rana Daggubati", "watchAt": "Disney+ Hotstar", "release_date": "April 28, 2017", "languages": "Telugu,Hindi,Tamil", "runtime": "2h 47m", "certificate": "U/A" },
    { "title": "Pushpa: The Rise", "genre": "Action,Crime", "imdb": 7.6, "google": "4.6", "collection": 365, "budget": 200, "currency": "INR", "rate": 79, "id": "Q1NKMPhP8PY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pushpa_-_The_Rise_%282021_film%29.jpg", "cast": "Allu Arjun, Rashmika Mandanna, Fahadh Faasil", "watchAt": "Amazon Prime Video", "release_date": "December 17, 2021", "languages": "Telugu,Hindi,Tamil,Malayalam", "runtime": "2h 59m", "certificate": "U/A" },
    { "title": "Magadheera", "genre": "Fantasy,Action", "imdb": 7.7, "google": "4.6", "collection": 150, "budget": 40, "currency": "INR", "rate": 92, "id": "f1b6S6rJ3sE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Magadheera_Poster.jpg", "cast": "Ram Charan, Kajal Aggarwal, Dev Gill", "watchAt": "Sun NXT", "release_date": "July 31, 2009", "languages": "Telugu", "runtime": "2h 46m", "certificate": "U/A" },
    { "title": "Arjun Reddy", "genre": "Romance,Drama", "imdb": 8.0, "google": "4.6", "collection": 51, "budget": 5, "currency": "INR", "rate": 69, "id": "aozErj9NqeE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Arjun_Reddy.jpg", "cast": "Vijay Deverakonda, Shalini Pandey, Rahul Ramakrishna", "watchAt": "Amazon Prime Video", "release_date": "August 25, 2017", "languages": "Telugu", "runtime": "3h 2m", "certificate": "A" },
    { "title": "Ala Vaikunthapurramuloo", "genre": "Drama", "imdb": 7.3, "google": "4.5", "collection": 262, "budget": 100, "currency": "INR", "rate": 91, "id": "SKzS0lUunqE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Ala_Vaikunthapurramuloo.jpeg", "cast": "Allu Arjun, Pooja Hegde, Tabu", "watchAt": "Netflix", "release_date": "January 12, 2020", "languages": "Telugu,Hindi", "runtime": "2h 45m", "certificate": "U/A" },
    { "title": "Rangasthalam", "genre": "Drama", "imdb": 8.2, "google": "4.7", "collection": 216, "budget": 60, "currency": "INR", "rate": 95, "id": "pKqH3eM2uE8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Rangasthalam.jpg", "cast": "Ram Charan, Samantha Ruth Prabhu, Aadhi Pinisetty", "watchAt": "Amazon Prime Video", "release_date": "March 30, 2018", "languages": "Telugu", "runtime": "2h 59m", "certificate": "U/A" },
    { "title": "Kalki 2898 AD", "genre": "Sci-Fi,Action", "imdb": 7.5, "google": "4.6", "collection": 1100, "budget": 600, "currency": "INR", "rate": 83, "id": "kQDd1AhGIHk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Kalki_2898_AD.jpg", "cast": "Prabhas, Deepika Padukone, Amitabh Bachchan", "watchAt": "Netflix", "release_date": "June 27, 2024", "languages": "Telugu,Hindi,Tamil,Malayalam", "runtime": "3h 1m", "certificate": "U/A" },
    { "title": "Jersey", "genre": "Sports,Drama", "imdb": 8.5, "google": "4.8", "collection": 48, "budget": 25, "currency": "INR", "rate": 95, "id": "AjAe_Q1WZ_8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Jersey_2019_poster.jpg", "cast": "Nani, Shraddha Srinath, Sathyaraj", "watchAt": "Amazon Prime Video", "release_date": "April 19, 2019", "languages": "Telugu", "runtime": "2h 40m", "certificate": "U" },
    { "title": "Mahanati", "genre": "Biography,Drama", "imdb": 8.4, "google": "4.8", "collection": 83, "budget": 25, "currency": "INR", "rate": 89, "id": "oXHq3JkzWn8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Mahanati_poster.jpg", "cast": "Keerthy Suresh, Dulquer Salmaan, Samantha Akkineni", "watchAt": "Amazon Prime Video", "release_date": "May 9, 2018", "languages": "Telugu,Tamil", "runtime": "2h 57m", "certificate": "U" },
    { "title": "Bharat Ane Nenu", "genre": "Political,Drama", "imdb": 7.5, "google": "4.6", "collection": 225, "budget": 65, "currency": "INR", "rate": 80, "id": "k9qX8K6kB8I", "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_gv42YvA7O3qAVXJ_Fq0F5oUYLhXdV98IzQyBRhGdPWW4AxMvgoqTp3bf6r6ZHdMmBpgSA&s=10", "cast": "Mahesh Babu, Kiara Advani, Prakash Raj", "watchAt": "Amazon Prime Video", "release_date": "April 20, 2018", "languages": "Telugu", "runtime": "2h 53m", "certificate": "U/A" },
    { "title": "Gabbar Singh", "genre": "Action,Comedy", "imdb": 7.1, "google": "4.5", "collection": 150, "budget": 30, "currency": "INR", "rate": 70, "id": "K5Yd6xP2V7E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Gabbar_Singh_poster.jpg", "cast": "Pawan Kalyan, Shruti Haasan, Abhimanyu Singh", "watchAt": "Disney+ Hotstar", "release_date": "May 11, 2012", "languages": "Telugu", "runtime": "2h 33m", "certificate": "U/A" },
    { "title": "Race Gurram", "genre": "Action,Comedy", "imdb": 7.3, "google": "4.6", "collection": 103, "budget": 50, "currency": "INR", "rate": 91, "id": "rJk4Gv6pP7k", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Race_Gurram.jpg", "cast": "Allu Arjun, Shruti Haasan, Shaam", "watchAt": "Sun NXT", "release_date": "April 11, 2014", "languages": "Telugu", "runtime": "2h 43m", "certificate": "U/A" },
    { "title": "Srimanthudu", "genre": "Action,Drama", "imdb": 7.5, "google": "4.6", "collection": 144, "budget": 40, "currency": "INR", "rate": 85, "id": "mY8n0cG4YbE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Srimanthudu.jpg", "cast": "Mahesh Babu, Shruti Haasan, Jagapathi Babu", "watchAt": "Amazon Prime Video", "release_date": "August 7, 2015", "languages": "Telugu", "runtime": "2h 44m", "certificate": "U" },
    { "title": "Janatha Garage", "genre": "Action,Drama", "imdb": 7.2, "google": "4.5", "collection": 135, "budget": 50, "currency": "INR", "rate": 72, "id": "6QG8sKf8f2Y", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Janatha_Garage_poster.jpg", "cast": "NTR, Mohanlal, Samantha Ruth Prabhu", "watchAt": "Amazon Prime Video", "release_date": "September 1, 2016", "languages": "Telugu", "runtime": "2h 42m", "certificate": "U/A" },
    { "title": "Fidaa", "genre": "Romance,Drama", "imdb": 7.4, "google": "4.6", "collection": 90, "budget": 14, "currency": "INR", "rate": 95, "id": "gk0Kf3L9zvI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Fidaa_poster.jpg", "cast": "Varun Tej, Sai Pallavi, Sai Chand", "watchAt": "Amazon Prime Video", "release_date": "July 21, 2017", "languages": "Telugu", "runtime": "2h 28m", "certificate": "U" },
    { "title": "Geetha Govindam", "genre": "Romance,Comedy", "imdb": 7.7, "google": "4.7", "collection": 130, "budget": 15, "currency": "INR", "rate": 83, "id": "wB3uV7qKf8E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Geetha_Govindam.jpg", "cast": "Vijay Deverakonda, Rashmika Mandanna, Subbaraju", "watchAt": "Amazon Prime Video", "release_date": "August 15, 2018", "languages": "Telugu", "runtime": "2h 28m", "certificate": "U/A" },
    { "title": "Salaar: Part 1 – Ceasefire", "genre": "Action,Thriller", "imdb": 6.6, "google": "4.3", "collection": 715, "budget": 400, "currency": "INR", "rate": 65, "id": "4GPvYMKtrtI", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Salaar_Part_1_%E2%80%93_Ceasefire.jpg", "cast": "Prabhas, Prithviraj Sukumaran, Shruti Haasan", "watchAt": "Netflix", "release_date": "December 22, 2023", "languages": "Telugu,Hindi,Tamil,Malayalam", "runtime": "2h 55m", "certificate": "A" },
    { "title": "Indra", "genre": "Action,Drama", "imdb": 7.5, "google": "4.6", "collection": 55, "budget": 10, "currency": "INR", "rate": 86, "id": "mW2b8l4p9nE", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Indra_film_poster.jpg", "cast": "Chiranjeevi, Sonali Bendre, Arti Agarwal", "watchAt": "Sun NXT", "release_date": "July 24, 2002", "languages": "Telugu", "runtime": "2h 55m", "certificate": "U" },
    { "title": "Simhadri", "genre": "Action,Drama", "imdb": 7.3, "google": "4.5", "collection": 30, "budget": 8, "currency": "INR", "rate": 73, "id": "dK9l2Qx7pHs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Simhadri_poster.jpg", "cast": "NTR, Bhumika Chawla, Ankitha", "watchAt": "Sun NXT", "release_date": "July 9, 2003", "languages": "Telugu", "runtime": "2h 45m", "certificate": "U/A" },
    { "title": "Athadu", "genre": "Action,Thriller", "imdb": 8.2, "google": "4.8", "collection": 23, "budget": 18, "currency": "INR", "rate": 94, "id": "tV3sHk9pLwQ", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Athadu.jpg", "cast": "Mahesh Babu, Trisha, Sonu Sood", "watchAt": "Amazon Prime Video", "release_date": "August 10, 2005", "languages": "Telugu", "runtime": "2h 52m", "certificate": "U/A" },
    { "title": "Pokiri", "genre": "Action,Crime", "imdb": 8.0, "google": "4.7", "collection": 66, "budget": 12, "currency": "INR", "rate": 81, "id": "eQ6k9pLm3xY", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Pokiri.jpg", "cast": "Mahesh Babu, Ileana D'Cruz, Prakash Raj", "watchAt": "Amazon Prime Video", "release_date": "April 28, 2006", "languages": "Telugu", "runtime": "2h 43m", "certificate": "A" },
    { "title": "Leader", "genre": "Political,Drama", "imdb": 8.0, "google": "4.7", "collection": 20, "budget": 12, "currency": "INR", "rate": 80, "id": "pL9sKf7nQwE", "poster": "https://m.media-amazon.com/images/M/MV5BNzYyMzZmY2EtY2Y5ZS00OTQ5LWFhZmUtZTljNDg5NDIzMjJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", "cast": "Rana Daggubati, Richa Gangopadhyay, Priya Anand", "watchAt": "Amazon Prime Video", "release_date": "February 19, 2010", "languages": "Telugu", "runtime": "2h 52m", "certificate": "U" },
    { "title": "Goodachari", "genre": "Thriller", "imdb": 7.8, "google": "4.7", "collection": 25, "budget": 6, "currency": "INR", "rate": 95, "id": "qW7l9pXk3eM", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Goodachari_poster.jpg", "cast": "Adivi Sesh, Sobhita Dhulipala, Jagapathi Babu", "watchAt": "Amazon Prime Video", "release_date": "August 3, 2018", "languages": "Telugu", "runtime": "2h 27m", "certificate": "U/A" },
    { "title": "Hit: The First Case", "genre": "Crime,Thriller", "imdb": 7.6, "google": "4.6", "collection": 18, "budget": 6, "currency": "INR", "rate": 83, "id": "xP9kLm3vQeS", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/HIT_The_First_Case.jpg", "cast": "Vishwak Sen, Ruhani Sharma, Chaitanya Sagiraju", "watchAt": "Amazon Prime Video", "release_date": "February 28, 2020", "languages": "Telugu", "runtime": "2h 5m", "certificate": "U/A" },
    { "title": "Tholi Prema", "genre": "Romance,Drama", "imdb": 8.2, "google": "4.8", "collection": 21, "budget": 3, "currency": "INR", "rate": 92, "id": "kJQP7kiw5Fk", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Tholi_Prema_1998.jpg", "cast": "Pawan Kalyan, Keerthi Reddy, Ali", "watchAt": "Sun NXT", "release_date": "July 24, 1998", "languages": "Telugu", "runtime": "2h 30m", "certificate": "U" },
    { "title": "Nannaku Prematho", "genre": "Action,Thriller", "imdb": 7.6, "google": "4.6", "collection": 85, "budget": 50, "currency": "INR", "rate": 75, "id": "Q9xE1kN4u7M", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Nannaku_Prematho.jpg", "cast": "NTR, Rakul Preet Singh, Jagapathi Babu", "watchAt": "Amazon Prime Video", "release_date": "January 13, 2016", "languages": "Telugu", "runtime": "2h 48m", "certificate": "U/A" },
    { "title": "Sita Ramam", "genre": "Romance,Drama", "imdb": 8.6, "google": "4.9", "collection": 92, "budget": 30, "currency": "INR", "rate": 86, "id": "Ljk6tG2Yp9E", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Sita_Ramam.jpg", "cast": "Dulquer Salmaan, Mrunal Thakur, Rashmika Mandanna", "watchAt": "Amazon Prime Video", "release_date": "August 5, 2022", "languages": "Telugu,Hindi,Tamil", "runtime": "2h 43m", "certificate": "U" },
    { "title": "Major", "genre": "Biography,Drama", "imdb": 8.1, "google": "4.8", "collection": 66, "budget": 25, "currency": "INR", "rate": 81, "id": "o9xV2kL7pQw", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Major_2022_film_poster.jpg", "cast": "Adivi Sesh, Saiee Manjrekar, Sobhita Dhulipala", "watchAt": "Netflix", "release_date": "June 3, 2022", "languages": "Telugu,Hindi", "runtime": "2h 30m", "certificate": "U/A" },
    { "title": "Bheemla Nayak", "genre": "Action,Drama", "imdb": 6.7, "google": "4.3", "collection": 160, "budget": 75, "currency": "INR", "rate": 64, "id": "rX7kP3nLqE8", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Bheemla_Nayak.jpg", "cast": "Pawan Kalyan, Rana Daggubati, Nithya Menen", "watchAt": "Disney+ Hotstar", "release_date": "February 25, 2022", "languages": "Telugu", "runtime": "2h 25m", "certificate": "U/A" },
    { "title": "Akhanda", "genre": "Action,Drama", "imdb": 6.8, "google": "4.4", "collection": 200, "budget": 60, "currency": "INR", "rate": 70, "id": "uK9lQ3pVnXs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Akhanda_film_poster.jpg", "cast": "Nandamuri Balakrishna, Pragya Jaiswal, Srikanth", "watchAt": "Disney+ Hotstar", "release_date": "December 2, 2021", "languages": "Telugu", "runtime": "2h 47m", "certificate": "U/A" },
    { "title": "Sarileru Neekevvaru", "genre": "Action,Comedy", "imdb": 6.5, "google": "4.3", "collection": 260, "budget": 75, "currency": "INR", "rate": 69, "id": "vJ8lP4qXnZs", "poster": "https://en.wikipedia.org/wiki/Special:FilePath/Sarileru_Neekevvaru.jpg", "cast": "Mahesh Babu, Rashmika Mandanna, Vijayashanti", "watchAt": "Amazon Prime Video", "release_date": "January 11, 2020", "languages": "Telugu", "runtime": "2h 49m", "certificate": "U/A" },
    { "title": "Titanic", "genre": "Drama, Romance", "imdb": 8.9, "google": "4.8", "collection": 2264, "budget": 200, "currency": "USD", "rate": 88, "id": "I7c1etV7D7g", "poster": "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png", "cast": "Leonardo DiCaprio, Kate Winslet, Billy Zane", "watchAt": "Amazon Prime Video", "release_date": "December 19, 1997", "languages": "English", "runtime": "3h 14m", "certificate": "U/A" },
    { "title": "Ne Zha 2", "genre": "Animation, Action, Fantasy", "imdb": 7.8, "google": "4.7", "collection": 2259, "budget": 80, "currency": "USD", "rate": 85, "id": "Q0gbqv8_0cc", "poster": "https://m.media-amazon.com/images/M/MV5BOTdkYmE1OGEtODYyYy00N2YwLThiYjUtZGNkMWFmNjdlMzY3XkEyXkFqcGc@._V1_.jpg", "cast": "Joseph Cao, Han Mo, Chen Hao", "watchAt": "Theaters", "release_date": "January 29, 2025", "languages": "Mandarin, English", "runtime": "2h 23m", "certificate": "U/A" },
    { "title": "Star Wars: Episode VII - The Force Awakens", "genre": "Sci-Fi, Action, Adventure", "imdb": 7.8, "google": "4.5", "collection": 2071, "budget": 447, "currency": "USD", "rate": 93, "id": "sGbxmsDFVnE", "poster": "https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg", "cast": "Daisy Ridley, John Boyega, Harrison Ford", "watchAt": "Disney+", "release_date": "December 18, 2015", "languages": "English", "runtime": "2h 18m", "certificate": "U/A" },
    { "title": "Spider-Man: No Way Home", "genre": "Action, Adventure, Sci-Fi", "imdb": 8.2, "google": "4.8", "collection": 1921, "budget": 200, "currency": "USD", "rate": 93, "id": "JfVOs4VSpmA", "poster": "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg", "cast": "Tom Holland, Zendaya, Benedict Cumberbatch", "watchAt": "Netflix", "release_date": "December 17, 2021", "languages": "English", "runtime": "2h 28m", "certificate": "U/A" },
    { "title": "Zootopia 2", "genre": "Animation, Adventure, Comedy", "imdb": 7.5, "google": "4.6", "collection": 1834, "budget": 150, "currency": "USD", "rate": 91, "id": "5AwtptT8X8k", "poster": "https://m.media-amazon.com/images/M/MV5BYjg1Mjc3MjQtMTZjNy00YWVlLWFhMWEtMWI3ZTgxYjJmNmRlXkEyXkFqcGc@._V1_.jpg", "cast": "Ginnifer Goodwin, Jason Bateman, Ke Huy Quan", "watchAt": "Theaters", "release_date": "November 26, 2025", "languages": "English", "runtime": "1h 48m", "certificate": "U" },
    { "title": "Jurassic World", "genre": "Action, Adventure, Sci-Fi", "imdb": 6.9, "google": "4.4", "collection": 1671, "budget": 150, "currency": "USD", "rate": 71, "id": "RFinNxS5PN4", "poster": "https://upload.wikimedia.org/wikipedia/en/6/6e/Jurassic_World_poster.jpg", "cast": "Chris Pratt, Bryce Dallas Howard, Ty Simpkins", "watchAt": "Amazon Prime Video", "release_date": "June 12, 2015", "languages": "English", "runtime": "2h 4m", "certificate": "U/A" },
    { "title": "The Lion King", "genre": "Animation, Adventure, Drama", "imdb": 6.8, "google": "4.4", "collection": 1656, "budget": 260, "currency": "USD", "rate": 52, "id": "7TavVZMewpY", "poster": "https://upload.wikimedia.org/wikipedia/en/9/9d/Disney_The_Lion_King_2019.jpg", "cast": "Donald Glover, Beyoncé, Seth Rogen", "watchAt": "Disney+", "release_date": "July 19, 2019", "languages": "English", "runtime": "1h 58m", "certificate": "U" },
    { "title": "Furious 7", "genre": "Action, Thriller", "imdb": 7.1, "google": "4.6", "collection": 1515, "budget": 190, "currency": "USD", "rate": 81, "id": "Skpu5HaVkOc", "poster": "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg", "cast": "Vin Diesel, Paul Walker, Dwayne Johnson", "watchAt": "Amazon Prime Video", "release_date": "April 3, 2015", "languages": "English", "runtime": "2h 17m", "certificate": "U/A" },
    { "title": "Avatar: Fire and Ash", "genre": "Action, Adventure, Sci-Fi", "imdb": 7.6, "google": "4.5", "collection": 1463, "budget": 400, "currency": "USD", "rate": 75, "id": "nb_fFj_0rq8", "poster": "https://resizing.flixster.com/Pq8B1yv0h4jocOwrukzjlvcdQDQ=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzRlNjBlZDhkLTg3NjItNDgzNy05OWYyLTE4ODI0MjBmMGU0OC5qcGc=", "cast": "Sam Worthington, Zoe Saldaña, Oona Chaplin", "watchAt": "Theaters", "release_date": "December 19, 2025", "languages": "English", "runtime": "3h 15m", "certificate": "U/A" },
    { "title": "The Dark Knight", "genre": "Action, Crime, Drama", "imdb": 9.0, "google": "4.8", "collection": 1006, "budget": 185, "currency": "USD", "rate": 94, "id": "EXeTwQWrcwY", "poster": "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg", "cast": "Christian Bale, Heath Ledger, Aaron Eckhart", "watchAt": "Max", "release_date": "July 18, 2008", "languages": "English", "runtime": "2h 32m", "certificate": "U/A" },
    { "title": "The Godfather Part II", "genre": "Crime, Drama", "imdb": 9.0, "google": "4.8", "collection": 93, "budget": 13, "currency": "USD", "rate": 96, "id": "tF_v4ZZkQWE", "poster": "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg", "cast": "Al Pacino, Robert De Niro, Robert Duvall", "watchAt": "Paramount+", "release_date": "December 20, 1974", "languages": "English", "runtime": "3h 22m", "certificate": "A" },
    { "title": "The Lord of the Rings: The Two Towers", "genre": "Action, Adventure, Drama", "imdb": 8.8, "google": "4.8", "collection": 947, "budget": 94, "currency": "USD", "rate": 95, "id": "LbfMDwc4azU", "poster": "https://m.media-amazon.com/images/M/MV5BMGQxMDdiOWUtYjc1Ni00YzM1LWE2NjMtZTg3Y2JkMjEzMTJjXkEyXkFqcGc@._V1_QL75_UX190_CR0,7,190,281_.jpg", "cast": "Elijah Wood, Ian McKellen, Viggo Mortensen", "watchAt": "Max", "release_date": "December 18, 2002", "languages": "English", "runtime": "2h 59m", "certificate": "U/A" },
    { "title": "Goodfellas", "genre": "Biography, Crime, Drama", "imdb": 8.7, "google": "4.8", "collection": 47, "budget": 25, "currency": "USD", "rate": 96, "id": "2ilzidi_J8Q", "poster": "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg", "cast": "Robert De Niro, Ray Liotta, Joe Pesci", "watchAt": "Max", "release_date": "September 19, 1990", "languages": "English", "runtime": "2h 25m", "certificate": "A" },
    { "title": "Avengers: Age of Ultron", "genre": "Action, Adventure, Sci-Fi", "imdb": 7.3, "google": "4.5", "collection": 1405, "budget": 365, "currency": "USD", "rate": 76, "id": "Cd-slsI7zcU", "poster": "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg", "cast": "Robert Downey Jr., Chris Evans, Mark Ruffalo", "watchAt": "Disney+", "release_date": "May 1, 2015", "languages": "English", "runtime": "2h 21m", "certificate": "U/A" }
];

const upcomingMoviesData = [
    { title: "Varanasi", year: "Apr 7, 2027", cast: "Mahesh Babu, Priyanka Chopra", poster: "https://m.media-amazon.com/images/M/MV5BMjZmZGMyYjgtMGU2Mi00ZGE1LTkwYjEtYzdkYTA0ODI0MDI2XkEyXkFqcGc@._V1_.jpg", id: "odDvRxuP2wQ" },
    { title: "Toxic: A Fairy Tale", year: "March 19, 2026", cast: "Yash, Kiara Advani", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2i5TryCgaNPxDhzf4w7nqku079FJwairD_ysV5jZTSC9eqAqVikl-wNOzlfMTxZVcrdRv8SQExFU-uCxS-W3WtBtFeyQV12I3Qs4dfw&s=10", id: "YOF5BT_lng4" },
    { title: "Michael", year: "April 24, 2026", cast: "Jaafar Jackson", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSOs_n3x3Lb2U3jYDwWv3j_vQcDf36OHcVnF1L9QoX3vEbwUJyW", id: "3zOLzsbOleM" },
    { title: "The Odyssey", year: "July 17, 2026", cast: "Matt Damon, Tom Holland", poster: "https://m.media-amazon.com/images/M/MV5BN2MyYjk2MWMtODMyZS00MDUyLWE0OGQtOTQ3MGY0MDE0ZjVmXkEyXkFqcGc@._V1_.jpg", id: "Mzw2ttJD2qQ" },
    { title: "Spider-Man: Brand New Day", year: "July 31, 2026", cast: "Tom Holland", poster: "https://m.media-amazon.com/images/M/MV5BMTJhZGE3NmYtYTg0Ny00MWUzLWE0MmUtYTZjYTg1ZjVlMWRkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", id: "QOdF1zK4ZkY" },
    { title: "Ramayana: Part 1", year: "Nov 5, 2026", cast: "Ranbir Kapoor, Sai Pallavi", poster: "https://i.ytimg.com/vi/gzUu-FJ7s-Y/maxresdefault.jpg", id: "gzUu-FJ7s-Y" },
    { title: "Avengers: Doomsday", year: "Dec 18, 2026", cast: "Robert Downey Jr", poster: "https://cdn.marvel.com/content/1x/avengersdoomsday_lob_log_def_02.png", id: "399Ez7WHK5s" },
    { title: "Spirit", year: "March 4, 2027", cast: "Prabhas", poster: "https://m.media-amazon.com/images/M/MV5BNzMxMDdiYzAtNGM0Ni00ZWQxLWI0ZTUtMzdkMjBkMzExYWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", id: "_YhSSfXmr9c" },
    { title: "The Paradise", year: "August 21, 2026", cast: "Nani", poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-paradise-et00436621-1741094191.jpg", id: "NkZFnpDhdCk" },
    { title: "Peddi", year: "April 30, 2026", cast: "Ram Charan", poster: "https://upload.wikimedia.org/wikipedia/en/2/26/Peddi_Poster.jpg", id: "2y_DH5gIrCU" },
    { title: "AA22", year: "2026", cast: "Allu Arjun", poster: "https://english.cdn.zeenews.com/sites/default/files/2025/04/08/1721177-aa22.jpg?im=Resize=(1200,900)", id: "SI_PhNII7Mc" },
    { title: "AA23", year: "2027", cast: "Allu Arjun", poster: "https://i.ytimg.com/vi/6hqduA_fUqE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAU69GbyngTQ90anTcd3EvmHSQnHQ", id: "6hqduA_fUqE" },
];
let movies = [];
const seenMovies = new Set();

Movies.forEach(m => {
    const key = m.title.toLowerCase().trim();
    if (!seenMovies.has(key)) {
        seenMovies.add(key);
        movies.push(m);
    }
});
let selectedGenres = [];
const genreDescriptions = {
    Action: "High-energy films centered on stunts, chases, and combat.",
    Adventure: "Stories about journeys and exploration.",
    Animation: "Movies created using animation techniques.",
    Biography: "Life story of a real person.",
    Comedy: "Movies designed to make people laugh.",
    Crime: "Stories about criminals and investigations.",
    Drama: "Serious emotional stories.",
    Fantasy: "Movies with magical or supernatural elements.",
    Horror: "Movies intended to frighten the audience.",
    Mystery: "Stories about solving puzzles or crimes.",
    "Sci-Fi": "Speculative stories involving futuristic technology.",
    "Science Fiction": "Speculative stories involving futuristic technology.",
    Romance: "Love stories and romantic relationships.",
    Thriller: "Suspenseful and tense narratives.",
    Musical: "Integrates songs and dance into the story.",
    Western: "Stories set in the American Old West.",
    Sports: "Movies centered around sports competitions.",
    Documentary: "Non-fiction films documenting reality.",
    War: "Movies based on military conflicts.",
    All: "Show all movies from every category"
};

function init() {
    const container = document.getElementById("genreContainer");

    let allGenres = new Set();
    movies.forEach(m => {
        if (!m.genre) return;
        m.genre.split(',').map(g => g.trim()).forEach(g => allGenres.add(g));
    });

    const genres = ["All", ...Array.from(allGenres).sort()];

    genres.forEach(g => {
        const btn = document.createElement("button");
        btn.className = "genre-btn" + (g === "All" ? " active" : "");
        btn.innerText = g;

        btn.addEventListener("click", (e) => toggleGenre(g, e.target));
        container.appendChild(btn);
    });

    addGenreTooltips();
    updateDisplay();
    renderUpcoming();
}

function addGenreTooltips() {
    document.querySelectorAll(".genre-btn").forEach(btn => {
        let genre = btn.textContent.trim();
        if (genreDescriptions[genre]) {
            let tip = document.createElement("div");
            tip.className = "genre-tooltip";
            tip.textContent = genreDescriptions[genre];
            btn.appendChild(tip);
        }
    });
}


function toggleGenre(genre, btn) {
    if (genre === "All") {
        selectedGenres = [];
        document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    } else {
        document.querySelectorAll(".genre-btn").forEach(b => {
            if (b.innerText === "All") b.classList.remove("active");
        });

        if (selectedGenres.includes(genre)) {
            selectedGenres = selectedGenres.filter(g => g !== genre);
            btn.classList.remove("active");
        } else {
            selectedGenres.push(genre);
            btn.classList.add("active");
            // Show alert only when selecting (not deselecting)
            alert("You selected the " + genre + " genre");
        }

        if (selectedGenres.length === 0) {
            document.querySelectorAll(".genre-btn").forEach(b => {
                if (b.innerText === "All") b.classList.add("active");
            });
        }
    }
    updateDisplay();
}

function updateDisplay() {

    const query = document.getElementById("search").value.toLowerCase().trim();

    if (query) {
        selectedGenres = [];
        document.querySelectorAll(".genre-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".genre-btn")[0].classList.add("active");
    }
    let filtered = movies.filter(m => {

        const title = m.title.toLowerCase();
        const cast = (m.cast || "").toLowerCase();
        const genre = (m.genre || "").toLowerCase();

        const searchMatch =
            query === "" ||
            title.includes(query) ||
            cast.includes(query) ||
            genre.includes(query);


        const genreList = typeof m.genre === "string"
            ? m.genre.split(",").map(g => g.trim().toLowerCase())
            : [];

        const genreMatch =
            selectedGenres.length === 0 ||
            selectedGenres.every(g => genreList.includes(g.toLowerCase()));

        return searchMatch && genreMatch;
    });

    filtered.sort((a, b) => {
        if (currentSort === "collection") {
            const valA = a.currency === "USD" ? (a.collection * 83) / 10 : a.collection;
            const valB = b.currency === "USD" ? (b.collection * 83) / 10 : b.collection;
            return valB - valA;
        }
        return b.imdb - a.imdb;
    });

    const container = document.getElementById("movieList");
    container.innerHTML = "";

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column:1/-1;text-align:center;">
                <h3>No movies found. Try another search</h3>
            </div>`;
        return;
    }
    filtered.forEach(m => createCard(m, container));
}

function createCard(m, container) {
    const isUSD = m.currency === 'USD';
    const symbol = isUSD ? '$' : '₹';
    const unit = isUSD ? 'M' : 'Cr';

    const posterSrc = m.poster ? m.poster : 'https://via.placeholder.com/300x450/111/fff?text=No+Poster';
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openModal(m);
    card.innerHTML = `
      <div class="card-img-wrapper">
          <img src="${posterSrc}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/111/fff?text=No+Poster'">
          ${m.certificate ? `<span class="badge-cert">${m.certificate}</span>` : ''}
          ${m.runtime ? `<span class="badge-time">⏱ ${m.runtime}</span>` : ''}
      </div>
      <div class="card-content">
        <div>
            <h3>${m.title}</h3>
            <div class="stars">⭐ ${m.imdb || 'TBA'} &bull; Google: ${m.google || 'N/A'}</div>
        </div>
        <div>
            <div class="fin-info" style="color:#fbbf24;">Box Office: ${m.collection ? symbol + m.collection + unit : 'N/A'}</div>
            <div class="fin-info" style="color:#4ade80;">Budget: ${m.budget ? symbol + m.budget + unit : 'TBA'}</div>
        </div>
      </div>
    `;
    container.appendChild(card);
}

function openModal(m) {
    document.getElementById("modalTitle").innerText = m.title;
    const trailerDiv = document.getElementById("trailerContainer");
    const metaDiv = document.getElementById("modalMeta");

    let metaHtml = "";
    if (m.certificate) metaHtml += `<span class="tag tag-cert">${m.certificate}</span> `;
    if (m.runtime) metaHtml += `<span class="tag">⏱ ${m.runtime}</span> `;
    metaHtml += `<span class="tag" style="background:#5a698f">${m.genre}</span>`;
    metaDiv.innerHTML = metaHtml;

    if (m.id && m.id.length > 5) {
        trailerDiv.innerHTML =
            `<iframe class="trailer-box" loading="lazy"
 src="https://www.youtube.com/embed/${m.id}?rel=0"
 allowfullscreen></iframe>`;
    } else {
        trailerDiv.innerHTML = `<div class="trailer-box" style="display:flex;align-items:center;justify-content:center;color:#666;border:1px solid #333">
        <div style="text-align:center">
            <div style="font-size:40px;margin-bottom:10px">🎬</div>
            Trailer Unavailable
        </div>
    </div>`;
    }

    const isUpcoming = m.genre === "Upcoming";
    const symbol = m.currency === 'USD' ? '$' : '₹';
    const unit = m.currency === 'USD' ? 'M' : 'Cr';
    const budgetDisplay = isUpcoming || !m.budget ? "TBA" : `<span style="color:#4ade80">${symbol}${m.budget}${unit}</span>`;
    const collectionDisplay = isUpcoming || !m.collection ? "N/A" : `<span style="color:#4ade80">${symbol}${m.collection}${unit}</span>`;

    document.getElementById("modalDetails").innerHTML = `
<div class="imdb-grid">
    <div><b>IMDb Rating:</b> ⭐ ${m.imdb}</div>
     <div><b>Google Rating:</b> ⭐ ${m.google || 'N/A'}</div>
    <div><b>Budget:</b> ${budgetDisplay}</div>
    <div><b>Collection:</b> ${collectionDisplay}</div>
    <div><b>Release:</b> ${m.release_date || m.year}</div>
    <div><b>Runtime:</b> ${m.runtime || 'N/A'}</div>
    <div><b>Watch At:</b> ${m.watchAt || 'N/A'}</div>
    <div><b>Languages:</b> ${m.languages}</div>
    <div><b>Cast:</b> ${m.cast}</div>
    

</div>
`;
    document.getElementById("movieModal").style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeModal() {
    document.getElementById("movieModal").style.display = "none";
    document.getElementById("trailerContainer").innerHTML = "";
    document.body.style.overflow = "auto";   // ⭐ keep this
}
function setSort(type) {
    currentSort = type;
    updateDisplay();
}

function openOverlay(id) {
    document.getElementById(id).style.display = "block";
    document.body.style.overflow = "hidden";
}
function closeOverlay(id) {
    document.getElementById(id).style.display = "none";
    document.body.style.overflow = "auto";   // ⭐ must exist
}
function renderMustWatch() {
    const container = document.getElementById("mustWatchList");
    container.innerHTML = "";
    const topMovies = movies.filter(m => m.imdb >= 8.5);
    topMovies.forEach(m => createCard(m, container));
}
function renderUpcoming() {
    const container = document.getElementById("upcomingList");
    container.innerHTML = "";
    upcomingMoviesData.forEach(m => {
        const card = document.createElement("div");
        card.className = "card";
        const modalObj = {
            ...m, genre: "Upcoming", imdb: "TBA", google: "TBA", watchAt: "In Theaters", budget: null, currency: "USD", release_date: m.year, languages: "Multiple", certificate: "TBA", runtime: "TBA"
        };
        const posterImg = m.poster && m.poster.length > 10 ? m.poster : "https://via.placeholder.com/300x450/161d2f/ffffff?text=Coming+Soon";
        card.onclick = () => openModal(modalObj);
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${posterImg}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x450/111/fff?text=No+Poster'">
            </div>
            <div class="card-content">
                <h3>${m.title}</h3>
                <div class="stars" style="color:var(--primary)">Releasing: ${m.year}</div>
                <div class="fin-info">${m.cast}</div>
            </div>
        `;
        container.appendChild(card);
    });
}
function renderLanguages() {
    let container = document.getElementById("languageContainer");
    container.innerHTML = "";

    let allLanguages = new Set();

    Movies.forEach(m => {
        if (!m.languages) return;
        m.languages.split(",").forEach(lang => {
            allLanguages.add(lang.trim());
        });
    });

    allLanguages.forEach(lang => {
        let btn = document.createElement("button");
        btn.className = "genre-btn";
        btn.innerText = lang;

        btn.onclick = () => {
            document.querySelectorAll("#languageContainer .genre-btn")
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");
            filterByLanguage(lang);
        };

        container.appendChild(btn);
    });
}
function filterByLanguage(lang) {
    let filtered = Movies.filter(m =>
        (m.languages || "").toLowerCase().includes(lang.toLowerCase())
    );
    let container = document.getElementById("languageMovieList");
    container.innerHTML = "";

    filtered.forEach(movie => {
        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${movie.poster}">
                <div class="badge-cert">${movie.certificate}</div>
                <div class="badge-time">${movie.runtime}</div>
            </div>
            <div class="card-content">
                <h3>${movie.title}</h3>
                <div class="stars">⭐ ${movie.imdb} • Google ${movie.google}</div>
            </div>
        `;

        card.onclick = () => {
            closeOverlay('languageOverlay');
            openModal(movie);
        };
        container.appendChild(card);
    });
}
window.onkeydown = (e) => {
    if (e.key === "Escape") {
        closeModal();
        closeOverlay('upcomingOverlay');
        closeOverlay('mustWatchOverlay');
        closeOverlay('languageOverlay');
    }
};
const validUser = "admin";
const validPass = "123";
function login() {
    let u = username.value;
    let p = password.value;

    if (u === "admin" && p === "123") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        loginError.innerText = "Invalid login";
    }
}
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


document.addEventListener("DOMContentLoaded", init);
