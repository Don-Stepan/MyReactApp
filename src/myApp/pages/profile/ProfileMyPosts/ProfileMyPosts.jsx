import s from './ProfileMyPosts.module.css';
import ProfileMyPost from './../ProfileMyPost/ProfileMyPost';

const ProfileMyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div className={s.myPostsTittle}>
                <span className={s.tittle}>My Posts</span>
            </div>
            <div className={s.myPostsTextarea}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div className={s.myPostsButton}>
                    <input type="Submit" />
                </div>
            </div>

            <ProfileMyPost message="Post 1" likes="3" /> 
            <ProfileMyPost message="Post 2" likes="5" />

        </div> 
    )
}

export default ProfileMyPosts;