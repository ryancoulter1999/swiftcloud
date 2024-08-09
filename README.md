# SwiftCloud API

SwiftCloud is a web application that provides an API to serve information about songs and their play counts over different months. The frontend consumes this API to display the song data and allows users to search, filter, and sort songs.

## Running Unit Tests

1. Install Jest and Supertest:
   Make sure you have jest and supertest installed as development dependencies in your project: npm install --save-dev jest supertest

2. Add a Test Script to package.json:
   Add a script to your package.json to run the tests using Jest. Open your package.json and add the following under the scripts section:

"scripts": {
"test": "jest"
}

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or higher)

## Installation

### Backend-API

1. Clone the repository:

   ```bash
   git clone https://github.com/ryancoulter1999/SwiftCloud.git
   cd SwiftCloud

   ```

2. Install Backend dependencies:
   cd Backend-API
   npm install
   This will install all the necessary dependencies listed in the package.json file in the backend directory.

3. Make sure you have the songs.csv file in the correct path as specified in the code. Update the CSV_FILE_PATH variable in the code if necessary.

### Frontend

1. Navigate to the 'FrontEnd' directory:
   cd FrontEnd

2. Install FrontEnd Dependencies:
   npm install
   This will install all the necessary dependencies listed in the package.json file in the frontend directory.

## Usage

### Backend

1. Start the backend server:

   ```bash
   cd path/to/SwiftCloud
   node server.js
   ```

   The backend server will run on `http://localhost:3000`.

### Frontend

1. Start the frontend server:

   ```bash
   cd path/to/SwiftCloud/FrontEnd
   npm start
   ```

   The frontend server will run on `http://localhost:3000` by default, which may conflict with the backend server. If so, update the frontend configuration to run on a different port (e.g., `http://localhost:3001`).

## Endpoints

### Backend Endpoints

- **Welcome Message**

  - **URL:** `/`
  - **Method:** `GET`
  - **Description:** Returns a welcome message.

- **List All Songs**

  - **URL:** `/songs`
  - **Method:** `GET`
  - **Description:** Returns a list of all songs.

- **List All Songs with Total Plays**

  - **URL:** `/songs/with-total-plays`
  - **Method:** `GET`
  - **Description:** Returns a list of all songs with the corresponding total plays.

- **List Songs by Year**

  - **URL:** `/songs/year/:year`
  - **Method:** `GET`
  - **Description:** Returns a list of songs released in the specified year.

- **List Most Popular Songs Last Month**

  - **URL:** `/songs/popular/month`
  - **Method:** `GET`
  - **Description:** Returns a list of the most popular songs from the last month.

- **List Most Popular Songs of All Time**

  - **URL:** `/songs/popular/all`
  - **Method:** `GET`
  - **Description:** Returns a list of the most popular songs of all time.

- **Search for Songs**
  - **URL:** `/songs/search?q=searchQuery`
  - **Method:** `GET`
  - **Description:** Returns a list of songs that match the search query.

```

This README.md file includes the necessary steps to install and run both the frontend and the backend, with all dependencies and starting instructions for each part of the application.

```
