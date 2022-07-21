const Pagination = () => {
    return (
        <>
            <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                <div className="md:col-span-12 text-center">
                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex items-center -space-x-px">
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-l-lg hover:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">
                                    <i className="uil uil-angle-left text-[20px]"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">1</a>
                            </li>
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">2</a>
                            </li>
                            <li>
                                <a href="#" aria-current="page" className="z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-primary-600 border border-primary-600">3</a>
                            </li>
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">4</a>
                            </li>
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">5</a>
                            </li>
                            <li>
                                <a href="#" className="w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-r-lg hover:text-white border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600">
                                    <i className="uil uil-angle-right text-[20px]"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default Pagination;