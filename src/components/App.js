import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput'

class App extends React.Component{
    onSearchSubmit = (entry) => {
        console.log(entry)
        axios.get(`https://pixabay.com/api/?key=24918774-dba2866b16373172219e80803&q=${entry}&image_type=photo`)
    }
    render() {
         return (
               <div className='ui container' style={{marginTop:'30px'}} >
                 <SearchInput
                     onSearchSubmit={this.onSearchSubmit}
                 />
               </div>
    )
    
    }
   
}


export default App;