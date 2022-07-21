import { Helmet } from "react-helmet";
const Seo = ({ Pagetitle, Pagedescription, Pagekeywords }) => {
    return (
        <Helmet>
            <title>{Pagetitle}</title>
            <meta name="keywords" content={Pagekeywords} />
            <meta name="description" content={Pagedescription} />
            <meta name="author" content="Mustafa Işık" />
            <meta property="og:image" content="https://glowres.com/img/logo.svg" />
        </Helmet>
    )
}
export default Seo;
