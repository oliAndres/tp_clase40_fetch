window.onload = async () => {

    let query = new URLSearchParams(location.search)

    console.log(query.get('movie'));

    try {
        const response = await fetch(`http://localhost:3031/api/movies/${query.get('movie')}`);

        const {meta, data} = await response.json();

       const title = document.getElementById("title");
       title.setAttribute("value",`${data.title}`);
       
       const rating = document.getElementById('rating');
       rating.setAttribute('value', `${data.rating}`);

       const awards = document.getElementById('awards');
       awards.setAttribute('value', `${data.awards}`);

              
       const releaseDate = data.release_date.split('T')[0];
       const release_date = document.getElementById('release_date');
       release_date.setAttribute('value', `${releaseDate}`);

       const length = document.getElementById('length');
       length.setAttribute('value', `${data.length}`);
        
    } catch (error) {
        console.log(error)
    }
}