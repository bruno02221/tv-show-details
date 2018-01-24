// "https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json"
// "https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json"

export function getTvShowDetails(showId) {
  return fetch(
    `https://sample-api-78c77.firebaseio.com/tv-shows/SHOW${showId}.json`
  )
    .then(resp => resp.json())
    .then(normalize);
}

export function getTvShowEpisodes(showId) {
  return fetch(
    `https://sample-api-78c77.firebaseio.com/episodes/SHOW${showId}.json`
  )
    .then(resp => resp.json())
    .then(normalize)
    .then(groupBySeason);
}

function groupBySeason(episodes) {
  const seasons = {};

  episodes.forEach(ep => {
    if (ep) {
      if (seasons.hasOwnProperty(ep.seasonNumber)) {
        seasons[ep.seasonNumber].push(ep);
      } else {
        seasons[ep.seasonNumber] = [ep];
      }
    }
  });

  return Object.keys(seasons).map(key => {
    return {
      seasonNumber: key,
      episodes: seasons[key]
    }
  });
}

function normalize(data) {
  if (typeof data === "object" && data !== null) {
    if (Array.isArray(data)) {
      return data.map(normalize);
    } else {
      const obj = {};
      Object.keys(data).forEach(key => {
        const newKey = normalizeKey(key);
        obj[newKey] = normalize(data[key]);
      });
      return obj;
    }
  }
  return data;
}

function normalizeKey(key) {
  return (
    key.charAt(0).toLowerCase() +
    key.substring(1, key.length - 1) +
    key.charAt(key.length - 1).toLowerCase()
  );
}
