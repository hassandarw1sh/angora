export class search{
    async searchApi(value) {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              
            }
          };
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`,options);
        let data = await res.json();
        data=data.results;
    
        console.log(data);
        // value="Inside Out 2"
        for( let i = 0; i < data.length; i++){
           
            // if(true){
            //     console.log(data[i].original_title);
            //     this.displayS(data[i]);
            // };
            if(data[i].original_title.toLowerCase().includes(value.toLowerCase())){
                console.log(data[i].original_title);
                this.displayS(data[i]);
            }
    
        }
        
      }
      async displayS(data) {
        const dataResult = await data;
        // console.log(dataResult[0].overview)
        let cartona = "";
    
          // console.log(data[i].backdrop_path)
          let backdrop = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
          console.log(backdrop);
          // Generate HTML code to display movie details here
          cartona += `  
            <div class="w-4/12 z-0 bg-slate-400 overflow-hidden object-fill shadow-md rounded-lg max-w-sm mx-auto dark:bg-gray-800 dark:border-gray-700 relative group">
    
              <img class="rounded-t-lg w-full h-[32rem] object-fill group-hover:skew-y-6  group-hover:blur-lg transition duration-500 ease-in-out"
                src="${backdrop}" alt="product image">
    
              <div class="px-5 pb-5 absolute group-hover:top-3 ">
    
                <h2 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white text-center">${data.original_title} </h2>
                <p class="line-clamp-5 text-white"> "${dataResult.overview}"
                </p>
                <div class="flex items-center mt-2.5 mb-5">
                  <!-- Rating stars -->
                  <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                  </svg>
    
                  <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <span class="text-yellow-700">${data.release_date}</data></span>
    
              </div>
    
          </div>`
    
           
        
        document.getElementById("row").innerHTML += cartona;
      }
}