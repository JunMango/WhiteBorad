import { StickyNavbar } from '../../component/Nav/StickyNavbar';
import styles from './main-layout.module.css';
export default function MainLayout({ children, sidebar }) {
  return (
    <div>
      {/* Navbar */}
      <StickyNavbar />
      <div className='flex bg-amber-50'>
        {/* Sidebar */}
        {sidebar && (
          <div className='w-80 p-4 h-screen sticky left-0 top-20 mx-4'>
            {sidebar}
          </div>
        )}
        {/* Main content */}
        <div className={sidebar ? ' flex-1 pr-4' : 'flex-1 p-4'}>
          {children}
        </div>
      </div>
    </div>
  );
}
