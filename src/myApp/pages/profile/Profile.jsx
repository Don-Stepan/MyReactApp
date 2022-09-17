import s from './Profile.module.css';
import ProfileHeaderImg from './ProfileTopImg/ProfileTopImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileMyPosts from './ProfileMyPosts/ProfileMyPosts';

const Profile = () => {
    return (
        <div className={s.myAppProfilePage}>

            <ProfileHeaderImg />

            <ProfileInfo /> 

            <ProfileMyPosts /> 
            
        </div>
    )
}

export default Profile;