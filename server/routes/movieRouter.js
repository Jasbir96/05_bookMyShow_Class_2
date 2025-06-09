


const { updateMovie,
    createMovie,
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovie } = require("../controllers/movieController")

const MovieRouter = require("express").Router();

// access all the movies -> getAll
MovieRouter.get("/", getAllMovies);
// access a single movie -> getSingle -> READ
MovieRouter.get("/:movieId", getMovie);
// update a movie -> updateMovie -> UPDATE
MovieRouter.patch("/:movieId", updateMovie);
// delete a movie -> deleteMovie-> DELETE
MovieRouter.delete("/:movieId", deleteMovie);
// add a movie -> addMovie -> CREATE
MovieRouter.post("/", createMovie);






module.exports = MovieRouter;

//  async function createUser(req, res) {
//     try {
//         const user = await UserModel.create(req.body);
//     } catch (err) {

//     }
// }
// async function createMovie(req, res) {
//     try {
//         const movie = await MovieModel.create(req.body);
//     } catch (err) {
//     }
// }


function createFactory(model) {
    return async function () {
        try {
            const entity = await model.create(req.body);
            return entity;
        } catch (err) {
        }
    }

}

// userRouter.post("/", createUser);
// movieRouter.post("/" , createMOvie);

userRouter.post("/", createFactory(userModel));

movieRouter.post("/", createFactory(MovieModel));



// singleton -> loggin
// factory
// decorator
// observer



// authentication  -> login ,password
// authorization -> roles 



