import s from './ProfileMyPost.module.css';
import profileImg from './../../../../img/imgProfile.jpg';

const ProfileMyPost = (props) => {
    return (
        <div className={s.myPost}>
            <img src={profileImg} alt="Profile Img" />
            <span className={s.postText}>{props.message}</span>
            <div>
                <span>like {props.likes}</span>
            </div>
        </div>
    )
}

export default ProfileMyPost;