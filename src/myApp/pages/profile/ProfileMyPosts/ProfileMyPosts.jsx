import s from './ProfileMyPosts.module.css';
import ProfileMyPost from './../ProfileMyPost/ProfileMyPost';

const ProfileMyPosts = (props) => {

    let profileMyPostElement = props.profileMyPosts.map( (e) => <ProfileMyPost key={e.id} message={e.message} likes={e.likes} id={e.id} /> );

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

            { profileMyPostElement }

        </div> 
    )
}

export default ProfileMyPosts;