const Spinner = () => {
    return (
        <div className=" fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" w-16 h-16 border-8 border-white border-t-blue-600 rounded-full animate-spin "></div>
        </div>
    );
}

export default Spinner;