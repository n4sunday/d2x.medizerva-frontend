import Layout from '../components/Layout'
import Link from 'next/link'
import HelpLink from '../components/help-link'

const Help = () => {
    return (
        <div>
            <Layout t="barWhite" c="barWhite">
                <div className="Help pt-50 container-fluid">
                    <div className="row content">
                        <div className="history pa-0 col-xs-12 col-sm-12 col-md-6 col-lg-4">History</div>
                        <div className="help pa-0 col-xs-12 col-sm-12 col-md-6 col-lg-4">Help</div>
                        <div className="hospital-pill pa-0 col-xs-12 col-md-12 col-lg-4">
                            <Link href="/">
                                <HelpLink
                                    title="ซื้อยา"
                                    pathImg="../static/img/help/link-pill.jpg"
                                    pathLogo="../static/img/help/link-pill.svg"
                                /></Link>
                            <Link href="/">
                                <HelpLink
                                    title="ค้นหาโรงพยาบาล"
                                    pathImg="../static/img/help/link-hospital.jpg"
                                    pathLogo="../static/img/help/link-hospital.svg"
                                /></Link>
                        </div>
                    </div>

                </div>
            </Layout>
        </div>
    )
}
export default Help
