export type Ratings = {
    source: string
    value: string
}

export interface Movie {
    Ratings: Ratings[]
    actors: string
    awards: string
    box_office: string
    country: string
    director: string
    dvd: string
    genre: string[]
    imdb_id: string
    imdb_rating: string
    imdb_votes: string
    language: string
    meta_score: string
    plot: string
    poster: string
    production: string
    rated: string
    released: string
    runtime: string
    title: string
    type: string
    website: string
    writer: string
    year: string
}