# MERN Stack Project - Detective Conan Movie Wiki

This project is my personal exploration of building a comprehensive **MERN stack website** that provides information about all Detective Conan movies, including plot summaries, character details, release dates, and more. This project serves as my introduction to full-stack development, combining both **web design** and **backend functionality**.

### Live demo: 
https://detective-conan-movie.netlify.app/

### Backend server (API and status): 
https://detective-conan-movie-1.onrender.com/

**API endpoint**: 
- `/api/movies`: movies list
- `/api/characters`: characters list
- `/api/movie/movie_ID`: specific movie detail
- `/api/character/character_ID`: specific character detail

## Key Features
- **Display movies**: Display all Detective Conan movies with comprehensive details for each film, such as summaries, posters, casts, links to trailers and soundtracks, and many more.
- **Display characters**: Display all characters appearing in the movies with comprehensive details for each character, such as names, aliases, age, occupations, movie appearances, and many more.
- **Search**: Users can search for movies or characters by entering any part of the name. The search works as long as the input matches the sequence of characters in order, regardless of whether it starts with the first letter. Characters can be searched by their names or aliases. Movies can be searched by title and ID.
- **Filter**: Users can filter the movies and characters based on types.
- **Sort**: Characters can be sorted by the number of gender, status and movie appearances.
- **Scroll to top**: When scrolling down, users can use the button to quickly navigate back to the top of the page.

## Tools + reference for this project
- MongoDB
- Express.js
- ReactJS
- Node.js
- Material UI
- Detective Conan World (https://www.detectiveconanworld.com/wiki/Main_Page)
- The Movie Database (TMDB)
  
## Screenshots
<img src="https://github.com/user-attachments/assets/a85c5637-b3c9-404f-a28d-e04d386a93c9" alt="Homepage" width="32%" />&nbsp;&nbsp;<img src="https://github.com/user-attachments/assets/988b786f-866c-44e0-af8c-bd8ca5a35b16" alt="Movie detail" width="32%" />&nbsp;&nbsp;<img src="https://github.com/user-attachments/assets/359d5a17-1963-4c1c-a588-bb19fb86a184" alt="Cast" width="32%" />

<img src="https://github.com/user-attachments/assets/87568490-9250-43fa-bc89-7d0ad2e9ffa7" alt="Character list" width="32%" />&nbsp;&nbsp;<img src="https://github.com/user-attachments/assets/7fc1c859-7a43-42cf-a27f-bd2a4a2e7e0b" alt="Character detail" width="32%" />&nbsp;&nbsp;<img src="https://github.com/user-attachments/assets/f3877199-6bc1-414f-afd8-b20497997de4" alt="Movie featured" width="32%" />
