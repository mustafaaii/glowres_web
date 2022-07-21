const Keywords = ({ value }) => {
    return (
        <>
            <ul className="list-none mt-8">
                {
                    value.map((item, index) => {
                        return (
                            <li key={index} className="inline-block m-2">
                                <div className="px-3 py-1 text-slate-400 hover:text-white dark:hover:text-white bg-gray-50 dark:bg-slate-800 text-sm hover:bg-primary-600 dark:hover:bg-primary-600 rounded-md shadow dark:shadow-gray-700 transition-all duration-500 ease-in-out">
                                    {item}
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Keywords;