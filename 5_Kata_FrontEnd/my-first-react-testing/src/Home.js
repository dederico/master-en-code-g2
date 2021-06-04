import React,{ useState} from 'react';
import Search from './Search'

const Home = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <>
            <h1>Hola Mundo desde Home</h1>
            <p>{ searchText}</p>
            <Search
                title={'Mi busqueda'}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            
    </>
)
}

export default Home;