import MainLayout from "../../layout/main/MainLayout";
import Whiteboard from "../../component/WhiteBoard/Whiteboard";
import FolderTree from "../../component/folderTree/FolderTree";

export default function Note() {
    return (
        <MainLayout content={<Whiteboard/>} sidebar={<FolderTree/>} >
        </MainLayout>
    )
}
