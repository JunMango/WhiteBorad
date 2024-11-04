import Whiteboard from '../component/whiteBoard/Whiteboard';
import FolderTree from '../component/folderTree/FolderTree';
import MainLayout from '../layout/main/MainLayout';

export default function NotePage() {
  return (
    <MainLayout sidebar={<FolderTree />}>
      <Whiteboard />
    </MainLayout>
  );
}
