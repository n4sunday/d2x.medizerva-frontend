import Layout from '../components/Layout'

const Help = () => {
    return (
        <div>
            <Layout t="barWhite" c="barWhite">
                <div className="Help pt-50">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="history pa-0 col-xs-12 col-sm-12 col-md-6 col-lg-4">History</div>
                            <div className="help pa-0 col-xs-12 col-sm-12 col-md-6 col-lg-4">Help</div>
                            <div className="hospital-pill pa-0 col-xs-12 col-md-12 col-lg-4">Hospital-Pill</div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
export default Help
