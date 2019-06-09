class ServiceContent extends React.Component {
    render() {
        return (
            <div className="service-component ma-15 bdr-4">
                <div className="service-content">
                    <div className="center">
                        <img className="icon ma-30" src={this.props.url} alt="image" />
                    </div>
                    <div className="center">
                        <div className="title f-24">{this.props.title}</div>
                    </div>
                    <div className="center py-10 px-55">
                        <div className="content f-16 center">{this.props.content}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ServiceContent