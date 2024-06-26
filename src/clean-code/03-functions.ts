(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }

    interface Movie{
        cast: string[];
        description: string;
        rating: string;
        title: string;
    }
    
    // Crear una película
    function createMovie({title, description, rating, cast}:Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor

    function checkFullName(fullName:string) {
        console.log({ fullName});
        return true
    }


    function createActorIfNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();


