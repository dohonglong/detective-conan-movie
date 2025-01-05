# MERN Stack Project - Detective Conan Movie Wiki

This project is my personal exploration of building a comprehensive **MERN stack website** that provides information about all Detective Conan movies, including plot summaries, character details, release dates, and more. This project serves as my introduction to full-stack development, combining both **web design** and **backend functionality**.

## Live demo:

- **Frontend**: https://detective-conan-movie.netlify.app/
- **Backend (API and status)**: https://detective-conan-movie-1.onrender.com/

**API endpoint**:

- `/api/movies`: movies list
- `/api/characters`: characters list
- `/api/movie/movie_ID`: specific movie detail
- `/api/character/character_ID`: specific character detail

## Key Features

- **Display movies**: View all Detective Conan movies with detailed summaries, posters, casts, trailers, soundtracks, and more.
- **Display characters**: Explore details about characters appearing in the movies, including names, aliases, occupations, and movie appearances.
- **Search**: Search for movies or characters by entering any part of the name. The search supports partial and case-insensitive matches. Characters can be searched by their names or aliases. Movies can be searched by title and ID.
- **Filter**: Filter movies and characters based on types.
- **Sort**: Sort characters by gender, status, and number of movie appearances.
- **Scroll to top**: Quickly navigate back to the top of the page with a button.

## Tools + References

- **MERN Stack**: MongoDB, Express.js, React.js, Node.js
- **Material UI**: For styling and UI components
- **References**:
  - [Detective Conan World Wiki](https://www.detectiveconanworld.com/wiki/Main_Page)
  - [The Movie Database (TMDB)](https://www.themoviedb.org/?language=en)

## Screenshots

<img src="https://github.com/user-attachments/assets/a85c5637-b3c9-404f-a28d-e04d386a93c9" alt="Homepage" width="32%" />&nbsp;<img src="https://github.com/user-attachments/assets/988b786f-866c-44e0-af8c-bd8ca5a35b16" alt="Movie detail" width="32%" />&nbsp;<img src="https://github.com/user-attachments/assets/359d5a17-1963-4c1c-a588-bb19fb86a184" alt="Cast" width="32%" />

<img src="https://github.com/user-attachments/assets/87568490-9250-43fa-bc89-7d0ad2e9ffa7" alt="Character list" width="32%" />&nbsp;<img src="https://github.com/user-attachments/assets/7fc1c859-7a43-42cf-a27f-bd2a4a2e7e0b" alt="Character detail" width="32%" />&nbsp;<img src="https://github.com/user-attachments/assets/f3877199-6bc1-414f-afd8-b20497997de4" alt="Movie featured" width="32%" />

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local instance or MongoDB Atlas)

---

### Installation and Setup

1. **Clone the Repository**:

   ```
   git clone https://github.com/dohonglong/detective-conan-movie
   cd detective-conan-movie
   ```

2. **Install Dependencies**:

   Navigate to each folder and install dependencies:

   - Backend:

   ```
   cd server
   npm install
   ```

   - Frontend:

   ```
   cd ../client
   npm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the `server` folder with the following content:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

   Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual values.

4. **Run MongoDB**:

   Ensure MongoDB is running locally or that you have a valid MongoDB Atlas connection string.

---

### Running the Project

1. **Start the Backend**:

   - Navigate to the `server` folder:

   ```
   cd server
   ```

   - Start the server:

   ```
   node index.js
   ```

   - Backend will run on `http://localhost:5000` by default.

2. **Start the Frontend**:

   - Open a new terminal and navigate to the `client` folder:

   ```
   cd client
   ```

   - Start the frontend:

   ```
   npm start
   ```

   - Frontend will run on `http://localhost:3000` by default.

## Environment Variables

Make sure to set up the following environment variables:

- **MONGO_URI**: MongoDB connection string
- **PORT**: Server port (default: 5000)
- **JWT_SECRET**: A secret key for signing JSON Web Tokens

## FAQ

### Why isn't the backend starting?

- Ensure MongoDB is running and the `MONGO_URI` is correctly set in your `.env` file.

### Why isn't the frontend connecting to the backend?

- Check if the backend is running on the correct port (`http://localhost:5000`) and that API endpoints are configured properly.

## Support

If you encounter any issues, feel free to contact me at [dohonglong1998@gmail.com].
