import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/logo.svg';
import LogoMobile from '../assets/img/logoMobile.svg';
import { onClickModal } from '../redux/slice/profileSlice';
import { useAppDispatch } from '../redux/store';
import { selectAuth, selectIsAuth } from '../redux/slice/authSlice';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const authUser = useSelector(selectAuth);

  const onClickExit = () => dispatch(onClickModal(true));
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <div className="header__logo-desktop">
              <Logo />
            </div>
            <div className="header__logo-mobile">
              <img src={LogoMobile} />
            </div>
          </div>
        </Link>
        <div className="header__login">
          {isAuth && (
            <>
              <span>
                {authUser.user?.name} {authUser.user?.surname}
              </span>
              <button onClick={onClickExit} className="button">
                <span>Выйти</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_11147_476)">
                    <path
                      d="M15.2195 6.11396L12.6335 3.52796C12.5078 3.40652 12.3394 3.33933 12.1646 3.34085C11.9898 3.34236 11.8226 3.41248 11.699 3.53608C11.5754 3.65969 11.5052 3.8269 11.5037 4.00169C11.5022 4.17649 11.5694 4.34489 11.6908 4.47063L14.2768 7.05663C14.3537 7.13498 14.4208 7.22227 14.4768 7.31663C14.4668 7.31663 14.4588 7.3113 14.4488 7.3113L3.99284 7.33263C3.81603 7.33263 3.64646 7.40287 3.52143 7.52789C3.39641 7.65291 3.32617 7.82248 3.32617 7.99929C3.32617 8.17611 3.39641 8.34567 3.52143 8.4707C3.64646 8.59572 3.81603 8.66596 3.99284 8.66596L14.4448 8.64463C14.4635 8.64463 14.4788 8.63529 14.4968 8.63396C14.4377 8.74673 14.3627 8.85045 14.2742 8.94196L11.6882 11.528C11.6245 11.5895 11.5737 11.663 11.5388 11.7444C11.5038 11.8257 11.4854 11.9132 11.4847 12.0017C11.4839 12.0902 11.5008 12.178 11.5343 12.2599C11.5678 12.3419 11.6173 12.4163 11.6799 12.4789C11.7425 12.5415 11.8169 12.591 11.8989 12.6245C11.9808 12.658 12.0686 12.6749 12.1571 12.6741C12.2456 12.6734 12.3331 12.655 12.4144 12.62C12.4958 12.5851 12.5693 12.5343 12.6308 12.4706L15.2168 9.88463C15.7168 9.38455 15.9976 8.7064 15.9976 7.99929C15.9976 7.29219 15.7168 6.61404 15.2168 6.11396H15.2195Z"
                      fill="#466EFA"
                    />
                    <path
                      d="M4.66667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333H4.66667C4.84348 1.33333 5.01305 1.2631 5.13807 1.13807C5.2631 1.01305 5.33333 0.843478 5.33333 0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0L3.33333 0C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H4.66667C4.84348 16 5.01305 15.9298 5.13807 15.8047C5.2631 15.6797 5.33333 15.5101 5.33333 15.3333C5.33333 15.1565 5.2631 14.987 5.13807 14.8619C5.01305 14.7369 4.84348 14.6667 4.66667 14.6667Z"
                      fill="#466EFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_11147_476">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
