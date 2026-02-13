# Popcorn Time
A  movie discovery platform built with Angular, designed to provide real-time access to the global cinema database using The Movie Database (TMDB) API. Popcorn Time is a specialized frontend application focused on seamless data consumption and intuitive user experience. It centralizes movie metadata, ratings, and genre-based filtering into a single, responsive interface, allowing users to explore the cinematic world with ease.

## Business Rules & Core Logic
### Data Integration (TMDB API)
The application’s core logic is built around a robust integration with the TMDB v3 API, adhering to the following rules:

- **Real-time Synchronization:** Fetches live data for "Now Playing", "Popular", and "Upcoming" titles.
- **Contextual Filtering:** Implements a dynamic genre filtering system that maps API IDs to user-friendly navigation categories.
- **Search Engine:** A centralized search logic that handles asynchronous queries to return accurate results without page reloads.

## Tech Stack
- **Framework:** Angular version 21.1.1.
- **Styling:** SCSS (Modular architecture)
- **API Client:** Angular HttpClient (RxJS Observables)
- **Deployment:** GitHub Pages

## Getting Started
### Prerequisites
- Node.js (LTS version)
- Angular CLI (npm install -g @angular/cli)

### TMDB API Key (v3)

#### Installation & Setup
1. Clone the repository:

```bash
git clone https://github.com/MarleneMoraes/pipocando-em-casa.git
```

2. Install dependencies:

```bash
npm install
```

3. Configure Environments: Update src/environments/environment.ts with your TMDB API credentials:

```TypeScript
export const environment = {
  production: false,
  apiKey: 'YOUR_TMDB_API_KEY_HERE'
};
```

4. Run Development Server:

```bash
ng serve
```

Navigate to `http://localhost:4200/`.
