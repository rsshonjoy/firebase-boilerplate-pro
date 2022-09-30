import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Theme from '../../Theme';
import UserDisplayName from '../../UserInfo/UserDisplayName';
import UserPhoto from '../../UserInfo/UserPhoto';

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FontAwesomeIcon icon={faSearch} className='my-auto dark:text-secondary text-secondary-50' />
  </div>
);

const BellIcon = () => <FontAwesomeIcon icon={faBell} className='h-5 mb-3 top-navigation-icon' />;

const TopNavigation = () => (
  <div className='top-navigation'>
    <span className='ml-20'>
      <UserDisplayName />
    </span>
    <Search />
    <div className='flex items-end justify-center mr-4'>
      <BellIcon />
      <Theme className='dark:hover:bg-gray-600' />
      <UserPhoto />
    </div>
  </div>
);

export default TopNavigation;
