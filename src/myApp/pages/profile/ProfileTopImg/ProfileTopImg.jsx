import s from './ProfileTopImg.module.css';
import profileTopImg from './../../../../img/profilePageTopImg.jpg';

const ProfileHeaderImg = () => {
    return (
        <div className={s.profileHeaderImg}>
            <img src={profileTopImg} alt="Profile Top Img" />
        </div>
    )
}

export default ProfileHeaderImg;