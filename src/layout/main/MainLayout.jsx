export default function MainLayout({ children, sidebar }) {
  return (
    <div className='flex'>
      {/* Sidebar */}
      {sidebar && (
        <div className='w-72 h-screen fixed left-0 top-0 mx-4'>{sidebar}</div>
      )}

      {/* Main content */}
      <div className={sidebar ? 'ml-80 flex-1 p-4' : 'flex-1 p-4'}>
        {children}
      </div>
    </div>
  );
}
