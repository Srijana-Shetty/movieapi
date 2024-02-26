/*import React, { useEffect, useState } from 'react'
import './Search.css'
import axios from 'axios';

function Search() {


    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=62c53076')
        .then(res => {
           // res.json()
        //.then(data => {
            console.log(res.data)
            
            setFilter(res.data)
    })
    .catch(err => console.log(err))
},[])
  
    

    const handleFilter =(value) => {
        const res = filterData.filter(f => f.Title.toLowerCase().includes(value))
           setData(res)
    }
  return (
    <div className='search-top'>
    <div className='search'>
        <input type="text" paceholder="Search here." onChange={e => handleFilter( e.target.value)}/>
        </div>
    
         <div className='search-result'>
              {data.map((d,i) => (
                <div key={i}>
                    {d.Title}
                    </div>
              ))}
         </div>

        </div>
    
    
    
    
  )
}

export default Search  */

//import { useState } from "react";

/*import React, { useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';

function Search() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
       movie()
    }, []);
   

    function movie() {

    axios.get('http://www.omdbapi.com/?apikey=62c53076&type=movie&s=') // Added parameters for movies and empty search query
    .then(res => {
        console.log(res.data);
        if (res.data && res.data.Search) {
            setFilter(res.data.Search); 
        }
    })
    .catch(err => console.log(err));

}

    const handleFilter = (value) => {
        const res = filter.filter(f => f.Title.toLowerCase().includes(value.toLowerCase()));
        setData(res);
    };

    return (
        
        <div className='search-top'>
            <div className='search'>
                <input type="text" placeholder="Search here." onChange={e => handleFilter(e.target.value)} />
            </div>

            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.Title} ({d.Year})
                    </div>
                ))}
                
            </div>
            <div>
                <button onClick={movie}>Search</button>
            </div>
        </div>
    );
}

export default Search;  */



/*
import React, { useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';

function Search() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: '62c53076',
                type: 'movie',
                s: '' // Empty search query to get all movies
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data && res.data.Response === "True") {
                    setFilter(res.data.Search); // Assuming response data has a 'Search' property containing an array of movies
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleFilter = (value) => {
        const res = filter.filter(f => f.Title.toLowerCase().includes(value.toLowerCase()));
        setData(res);
    };

    return (
        <div className='search-top'>
            <div className='search'>
                <input type="text" placeholder="Search here." onChange={e => handleFilter(e.target.value)} />
            </div>

            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.Title} ({d.Year})
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;  */

/*
import React, { useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';
import { useImperativeHandle } from 'react';

function Search() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search) {
            axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: '62c53076',
                    type: 'movie',
                    s: search
                }
            })
                .then(res => {
                    console.log(res.data);
                    if (res.data && res.data.Response === "True") {
                        setFilter(res.data.Search); // Assuming response data has a 'Search' property containing an array of movies
                    }
                })
                .catch(err => console.log(err));
        }
    }, [search]);

    const handleFilter = (value) => {
        setSearch(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (search.trim() !== '') {
            setSearch(search.trim());
        }
    };

    return (
        <div className='search-top'>
            <form onSubmit={handleSubmit}>
                <div className='search'>
                    <input type="text" placeholder="Search here." value={search} onChange={e => handleFilter(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Search</button>
                </div>
            </form>

            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.Title} ({d.Year})
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;  */


// using button

import React, {  useState } from 'react';
import './Search.css';
import axios from 'axios';

function Search() {
    //const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState('');

    const fetchMovies = () => {
        if (search.trim() !== '') {
            axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey: '62c53076',
                    type: 'movie',       //movie ,series , episode
                    s: search,     //movie title
                    
                }
            })

           /* useEffect(() => {
    
                const timer=setTimeout(()=>{
                    fetchMovie();
                },1000)
                return ()=>clearTimeout(timer);
                },[searchInput]);
                */
                .then(res => {
                    console.log(res.data);
                    if (res.data && res.data.Response === "True") {
                        setFilterData(res.data.Search); 
                    }
                })
                .catch(err => console.log(err));
        }
    };

    const handleFilter = (event) => {
        setSearch(event);
    };

    return (
        <div className='search-top'>
            <div className='search'>
                <input type="text" placeholder="Search here." value={search} onChange={e => handleFilter(e.target.value)} />
                <button onClick={fetchMovies}>Search</button>
            
            </div>

            <div className='search-result'>
                {filterData.map((d, i) => (      //d is current movie 
                                             // i is the index
                    <div key={i}>
                        {d.Title} ({d.Year})
                      <img src={d.Poster} alt ='movie'/>     
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;




//without using button
/*
import React, {  useEffect, useState } from 'react';
import './Search.css';
import axios from 'axios';

function Search() {
    //const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://www.omdbapi.com/', {
            params: {
                apikey: '62c53076',
                type: 'movie',       //movie ,series , episode
                s: search,     //movie title
                
            }
        })
            .then(res => {
                console.log(res.data);
                if (res.data && res.data.Response === "True") {
                    setFilterData(res.data.Search); 
                }
            })
            .catch(err => console.log(err));
    
    },[search])
        
          
    const handleFilter = (event) => {
        setSearch(event);
    };

    return (

        <div className='search-top'>
    
            <div className='search'>
               
            <input type="text" placeholder="Search here." value={search} onChange={e => handleFilter(e.target.value)} />
            
            </div>

            <div className='search-result'>
                {filterData.map((d, i) => (      //d is current movie 
                                             // i is the index
                    <div key={i}>
                        {d.Title} ({d.Year})
                      <img src={d.Poster} alt ='movie'/>     
                    </div>
                ))}
            </div>
        </div>
    );
    }

export default Search;
*/

//using fetch()
 /*
function Search() {
    
    const [filterData, setFilterData] = useState([]);
    const [search, setSearch] = useState('');

    
    const fetchMovies = () => {
        if (search.trim() !== '') {
            fetch(`http://www.omdbapi.com/?apikey=62c53076&type=movie&s=${search}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data && data.Response === "True") {
                    setFilterData(data.Search); 
                }
            })
            .catch(err => console.log(err));
        }
    };


    const handleFilter = (value) => {
        setSearch(value);
    };

    
    return (
        <div className='search-top'>
            <div className='search'>
                <input type="text" placeholder="Search here." value={search} onChange={(e) => handleFilter(e.target.value)} />
                <button onClick={fetchMovies}>Search</button>
            </div>
            <div className='search-result'>
                {filterData.map((d, i) => (
                    <div key={i}>
                        {d.Title} ({d.Year})
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Search;  */


 