const Predicate = () => {
    return (
        <div className="Predicate">
            <div className="box">
                <div className="box-content">
                    <div className="box-message nurse">
                        <img className="nurse-icon" src='../static/img/help/predicate-nurse.svg' alt="image" />
                        <div className="message"></div>
                    </div>
                    <div className="box-message user">
                        <div className="message"></div>
                        <img className="nurse-icon" src='../static/img/help/predicate-user.svg' alt="image" />
                        <div className="message"></div>
                        <div className="nullbox"></div>
                    </div>
                    <div className="btn-group">
                        <div className="btn-blur-radius">
                        <img className="bnt-icon" src='../static/img/help/button-history.svg' alt="image" />
                            กรอกประวัติ</div>
                        <div className="btn-blur-radius">
                        <img className="bnt-icon" src='../static/img/help/button-again.svg' alt="image" />

                            วินิจฉัยอีกครั้ง</div>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .Predicate {
                user-select: none;
                cursor: pointer;
                height: 100%;
                display: flex;
            }
            .box {
                border-radius: 20px;
                border: 6px solid #EBEBEB;
                display:flex;
                margin: 20px 10px 20px 10px;
                background-color: #fff;
                width: 100%;
            }
            .box-content {
                margin: 5px;
                width: 100%;
            }
            .box-message {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                height: 130px;
                align-items:center;
                margin: 10px 0 20px 0;
            }
            .nurse {
                justify-content: flex-start;
            }
            .user {
                justify-content: flex-end;
            }
            .nullbox {
                height: 130px;
                width: 130px;
            }
            .nurse-icon {
                width: 130px;                
            }
            .message {
                display: flex;
                overflow-wrap: break-word;
                background-color: #EBEBEB;
                border-radius: 10px;
                padding: 10px;
                height: 90%;
                width: 280px;
                z-index: 2;
            }
            .message:hover {
                transition: 200ms linear;
                background-color: #99e0ff;
                border: 4px solid #4a8bc2;
            }
            .btn-group {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                height: 50%;
                align-items:center;
                padding-bottom: 40px;
            }
            .btn-blur-radius {
                color:#64d0ff;
                border-radius: 25px;
                font: 20px  'Prompt', sans-serif;
                display:flex;
                justify-content: flex-start;
                align-items:center;
                margin-top: 10px;
                height: 50px;
                width: 200px;
                border: 3px solid #64d0ff;
            }
            .btn-blur-radius:hover {
                transition: 300ms linear;
                background-color: #64d0ff;
                color:#fff;
            }
            .bnt-icon {
                margin: 0 10px 0 10px;
                width: 35px;                
            }

           
            `}</style>
        </div>
    )
}
export default Predicate