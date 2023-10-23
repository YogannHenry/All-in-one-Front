import {
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';

import ThemeButton from '../ThemeButton/ThemeButton';
import Footer from '../../Footer/MenuRightButtonFooter';
import { useAppDispatch } from '../../../../hooks/redux';
import { logout } from '../../../../store/reducers/user';

function DrawerButtonRight() {
  const dispatch = useAppDispatch();

  function handleLogout() {
    dispatch(logout());
  }
  const pseudo = localStorage.getItem('pseudo');

  return (
    <div className=" drawer-end z-50 ">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="flex items-center">
          <p className='pr-2 text-[var(--color-primary-500)]'>{pseudo}</p>
          <UserCircleIcon className="h-10 w-10 text-[var(--color-primary-500)]" />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <ul className="p-4  h-full bg-base-200 flex flex-col items-center justify-between">
          <li>
            <button onClick={handleLogout}>
              <ArrowRightOnRectangleIcon
                className={`h-8 w-8 stroke-[var(--color-primary-300)] hover:stroke-[var(--color-primary-500)]`}
              />
            </button>
          </li>
          <li>
            <ThemeButton />
          </li>
          <li>
            <Footer />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DrawerButtonRight;
