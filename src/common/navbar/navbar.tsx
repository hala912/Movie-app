import { Search, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useAppDispatch } from '../../store/hooks';
import fetchSearchMovies from '../../store/movieslice/actions/searchformovie';

const navItems = [
  { id: 'movies', label: 'Movies',path:'/' },
  { id: 'trending', label: 'Trending', path:'/trending' },
  { id: 'drama', label: 'Drama', path:'/genres' },
  { id: 'mylist', label: 'My List', path:'/mylist' },
]; 

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('movies');
  const dispatch = useAppDispatch()

  const [searchquery,setsearchquery] = useState('')
  const navigate = useNavigate()
  useEffect(()=>{
  const timer = setTimeout(()=>{
    if(searchquery.trim()){
      dispatch(fetchSearchMovies(searchquery))
      navigate('/search')
    }
  }, 500)

  return () => clearTimeout(timer)
  },[searchquery])

  return (
    <header className="navbar-top">
      <div className="logo">CINEPLEX</div>
      <nav className="nav-links">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={activeTab === item.id ? 'active' : ''}
            onClick={() =>{ setActiveTab(item.id)}}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="nav-actions">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Search movies..." value={searchquery} onChange={(e)=>setsearchquery(e.target.value)}/>
        </div>
        <Bell size={20} />
        <img src="" alt="User" className="avatar" />
      </div>
    </header>
  );
};

export default Navbar;