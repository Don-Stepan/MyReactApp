import s from './Pages.module.css';
import News from './news/News';
import Music from './music/Music';
import Settings from './settings/Settings';
import Dialogs from './dialogs/Dialogs';
import Profile from './profile/Profile';
import { Routes, Route } from 'react-router-dom';


const Pages = () => {
    return (
            
        <div className={s.myAppPages}>
            <Routes>
                <Route element={<Profile />} path='/profile' />
                <Route element={<Dialogs />} path='/dialogs/*' />
                <Route element={<News />} path='/news'/>
                <Route element={<Music />} path='/music'/>
                <Route element={<Settings />} path='/settings'/>
            </Routes>
        </div>
            
    )
}

export default Pages;