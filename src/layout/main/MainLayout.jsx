export default function MainLayout({ content, sidebar }) {
        return (
            <div>
                <div>{content}</div>
                {sidebar}
            </div>
        );
}
