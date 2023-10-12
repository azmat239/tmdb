export const fetcher = (
  ...args: any //@ts-ignore
) => fetch(...args).then((res) => res.json());

export const baseApiUrl = "https://api.themoviedb.org";
export const apiKey = "945747413f8ed82865430ae895bdf874";
export const imgUrl = "https://image.tmdb.org/t/p/original";
