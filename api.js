import { createClient } from 'pexels';

const API_KEY = "563492ad6f917000010000019860e65c020a462aa65d9a42642a5d23";

const client = createClient(API_KEY);
const query = 'Nature';

client.photos.search({query, per_page: 1})
    .then((photos) => console.log(photos));