// "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
// "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"

export function getTvShowDetails(showId) {
  return fetch(
    `https://sample-api-78c77.firebaseio.com/tv-shows/SHOW${showId}.json`
  );
}

export function getTvShowEpisodes(showId) {
  return fetch(
    `https://sample-api-78c77.firebaseio.com/episodes/SHOW${showId}.json`
  )
}
