const data = require('./movies.json');
for(const movie of data){
    console.log(`${movie.Title} directed by ${movie.Director}`)
}