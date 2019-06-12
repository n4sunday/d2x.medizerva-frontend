const ServiceContent = ({ title, content, url }) => {
    return (
        <div className="service-component ma-15 bdr-4">
            <div className="service-content">
                <div className="center">
                    <img className="icon ma-30" src={url} alt="image" />
                </div>
                <div className="center">
                    <div className="title f-22">{title}</div>
                </div>
                <div className="center py-10 px-55">
                    <p className="content f-14 center">{content}</p>
                </div>
            </div>

            <style jsx>{`
                .service-component {
                    background: #fff;
                    min-width: 250px;
                    height: 340px;
                    border: 0.5px solid #d1d1d1;
                    transition: 500ms linear;
                }
                .service-component:hover {
                    box-shadow: 0px 0px 2px 0.5px rgba(0,0,0,0.1);
                }
                .icon {
                    width: 140px;
                    transition: 500ms linear;
                }
                .icon:hover {
                    opacity: 0.7;
                    transition: 500ms linear;
                }
                .title {
                    transition: 500ms linear;
                }
                .title:hover {
                    color: #4dc9ff;
                    transition: 500ms linear;
                }
                @media(max-width:1199px) {
                    .service-component {
                        background: #fff;
                        min-width: 240px;
                        margin-left: 0 !important;
                        margin-right: 0 !important;
                        height: 340px;
                        border: 0.5px solid #d1d1d1;
                    }
                    .title {
                        font-size: 18px;
                    }
                }
                @media(max-width:992px) {
                    .service-component {
                        max-height: 260px;
                    }
                    .icon {
                        margin: 20px!important;
                        width: 100px;
                    }
                    .title {
                        transition: 500ms linear;
                    }
                }
            `}</style>
        </div>
    )
}
export default ServiceContent