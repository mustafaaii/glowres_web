import Seo from '../components/seo';
import Hero from '../components/hero';
import Pagination from '../components/pagination';

const Blog = () => {





    return (
        <>
            <Seo
                Pagetitle={"Blog | Glowres"}
                Pagedescription={"I do Frontend & Backend Development - Wordpress & Plugin Design. I do custom Wordpress plugins, web design, backend coding"}
                Pagekeywords={"Frontend, Backend, Wordpress, Plugins, Full Stack Developer"}
            />

            <Hero
                description={"See which Platforms I operate on and you can contact me."}
                page={"Blog"}
            />

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">


                        <div className="blog relative rounded-md shadow dark:shadow-gray-700 overflow-hidden">
                            <img src="assets/images/blog/01.jpg" alt="" />
                            <div className="content p-6">
                                <a href="blog-detail.html" className="title h5 text-lg font-medium hover:text-primary-600 transition duration-500">Design your apps in your own way</a>
                                <p className="text-slate-400 mt-3">The phrasal sequence of the is now so that many campaign and benefit</p>
                                <div className="mt-4">
                                    <a href="blog-detail.html" className="btn btn-link font-normal hover:text-primary-600 after:bg-primary-600 transition duration-500">Read More <i className="uil uil-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Pagination />
                </div>
            </section>
        </>
    )
}
export default Blog;