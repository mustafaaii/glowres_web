const Breadcrumb = ({ Breadcrumimage, Breadcrumicon, Breadcrumdescription, Breadcrumpage }) => {
    return (
        <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require({ Breadcrumimage })}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
            <div class="container">
                <div class="grid grid-cols-1 pb-2 text-center mt-2">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-white text-2xl leading-normal font-semibold">{Breadcrumpage}</h3>
                    <p className="max-w-xl mx-auto text-white">{Breadcrumdescription}</p>
                </div>
            </div>
            <div class="mb-8 text-center z-10 mt-5 pb-5 bottom-5 right-0 left-0 mx-3">
                <ul class="breadcrumb breadcrumb-light mb-0 inline-block">
                    <li class="inline breadcrumb-item capitalize"><a href='/'>Glowres</a></li>
                    <li class="inline breadcrumb-item"><a >{Breadcrumicon}</a></li>
                    <li class="inline breadcrumb-item active capitalize " aria-current="page">{Breadcrumpage}</li>
                </ul>
            </div>
        </section>
    )
}
export default Breadcrumb;
