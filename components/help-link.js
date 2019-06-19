import Link from 'next/link'
const HelpLink = ({ title, pathImg, pathLogo,link }) => {
    return (
        <Link href={link}>
            <div className="helplink ">
                <div className="box-img">
                    <div className="title">{title}</div>
                    <img className="logo" src={pathLogo} alt="image" />
                </div>
                <img className="imglink" src={pathImg} alt="image" />

                <style jsx>{`
                .helplink {
                    cursor: pointer;
                    margin: 15px;
                    position: relative;
                    user-select: none;
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px;
                }
                .box-img {
                    color: #fff;
                    border: 0 solid transparent;
                    font: 35px 'Prompt', sans-serif;
                    width: 400px;
                    height: 271px;
                    position: absolute;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1;
                }
                .box-img:hover{
                    transition: 300ms linear;
                    border: 8px solid #fff;

                }
                .box-img:hover .title{
                    opacity 0;
                    font-size: 0px;
                }
                .box-img:hover .logo { 
                    width: 150px;
              
                }
                .imglink {
                    filter: brightness(70%);
                    width: 400px;
                }
                .logo {
                    width: 0px;
                }
                
            `}</style>
            </div>
        </Link>
    )
}
export default HelpLink