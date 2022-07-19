import React, { Fragment, useState , useEffect } from 'react';
import { Navbar, List } from './components';
import { list } from './data';
import './style/App.css';

const SideMenu = ({loadCategory, category}) => {
    const links = ['Expresso', 'Lungo', 'Ristretto'];
    return(
        <div className='col-sm-2 sidebar'>
            <ul>
                {links.map((link, index) => {
                    return(<li className={category === index && 'active'} key={index} onClick={() => loadCategory(index)}>{link}</li>)
                })}
            </ul>
        </div>
    );
};

const App = () => {
    const [category, setCategory] = useState(0);
    const [isFiltering, setFiltering] = useState(false);
    const [filtered, setFiltered] = useState(false);
    const loadCategory = i  => { setCategory(i) };
    const filterResults = (input) => {
        let fullList = list.flat()
        let results = fullList.filter(item => {
            const name = item.name.toLowerCase()
            const term = input.toLowerCase()
            return name.indexOf(term) > -1
        })
        setFiltered(results)
    }
    useEffect(() => {
        console.log(isFiltering)
    })

    return (
        <Fragment>
            <Navbar filter={filterResults} setFiltering={setFiltering} />
            <div className='container'>
                <div className='row'>
                    <SideMenu loadCategory={loadCategory} category={category}/>
                    <div className='col-sm'>
                        <div className='row'>
                            <List data={isFiltering ? filtered : list[category]} category={category} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default App;