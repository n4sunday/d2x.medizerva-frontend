const Doctor = ({ name, position, url }) => {
    return (
        <div className="doctor-component">
            <div className="doctor-content center">

                <img className="doctor-img ma-10" src={url} alt="image" />
                <h1 className="f-25 pl-10 name">{name}</h1>
                <p className="f-14 pl-10">{position}</p>

            </div>
            <style jsx>{`
                .doctor-component {
                    margin: 10px;
                    cursor: pointer;
                    background: #fff;
                    max-width: 270px;
                    border: 1px solid #d1d1d1;
                    
                }
                .doctor-content {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .doctor-img {
                    width: 250px;
                }
                .name:hover {
                    transition: 500ms linear;
                    color: #4dc9ff;
                }
                @media(max-width:1199px) {
                    .doctor-component {
                        max-width: 230px;
                    }
                    .doctor-img {
                        width: 210px;
                    }
                }
                @media(max-width:992px) {
                    .doctor-component {
                        max-width: 300px;
                    }
                    .doctor-img {
                        width: 280px;
                    }
                }

            `}</style>
        </div>
    )
}
export default Doctor