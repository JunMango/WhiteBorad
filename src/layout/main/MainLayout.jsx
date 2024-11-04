export default function MainLayout({ children, sidebar }) {
  return (
    <div>
      {children}
      {sidebar}
    </div>
  );
}
