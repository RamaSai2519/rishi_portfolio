const Page = ({ children, customClass }) => {
    return (
        <div className={`page-container ${customClass}`}>
            <div className="page-content">
                {children}
            </div>
        </div>
    );
};

export default Page;