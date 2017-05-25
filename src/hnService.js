const baseUrl = 'https://hn.algolia.com/api/v1';
export default {
  getPopular: (count = 40, minPoints = 0) =>
    global.fetch(`${baseUrl}/search?tags=front_page&numericFilters=points>${minPoints}&hitsPerPage=${count}`)
};
