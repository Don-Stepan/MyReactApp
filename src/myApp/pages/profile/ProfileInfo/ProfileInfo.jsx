import s from './ProfileInfo.module.css';
import profileImg from './../../../../img/imgProfile.jpg';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <img src={profileImg} alt="Profile Img" />

            <div className={s.customer}>
                <h2 className={s.customerName}>Stepan R.</h2>

                <div className={s.customerInfo}>
                    <span>Date of Birth: 27.09.1993</span>
                    <span>City: Ternopil</span>
                    <span>Tittle: test</span>
                    <span>Tittle: test</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;