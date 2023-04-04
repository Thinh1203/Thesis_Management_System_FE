const LockComponent = ({ isVisible, children }) => {
    if ( !isVisible ) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
            <div className="w-auto">
                <div className="bg-white p-2 rounded">
                    <div className="bg-white p-2 rounded">{children}</div>
                    
                </div>
            </div>
        </div>
    );
}
 
export default LockComponent;