import s from './Profile.module.css';
import ProfileHeaderImg from './ProfileTopImg/ProfileTopImg';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileMyPosts from './ProfileMyPosts/ProfileMyPosts';

const Profile = (props) => {
    return (
        <div className={s.myAppProfilePage}>

            <ProfileHeaderImg />

            <ProfileInfo /> 

            <ProfileMyPosts profileMyPosts={props.state.profileMyPosts} /> 
            
        </div>
    )
}

export default Profile;