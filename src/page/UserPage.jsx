import MainLayout from '../layout/main/MainLayout';
import User from '../component/user/User';

export default function UserPage() {
  return (
    <MainLayout sidebar={null}>
      <User />
    </MainLayout>
  );
}
