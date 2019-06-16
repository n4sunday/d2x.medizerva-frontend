import Layout from '../components/Layout'
import Typed from 'react-typed'
import ServiceContent from '../components/service-content'
import DoctorTeam from '../components/doctor-team'

const Index = () => (
  <div>
    <Layout t="barTransparent" c="barWhite">
      <div className="Home">

        <div className="main">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="home-picture" src="/static/img/Home.jpg" alt="image" />
                <div className="carousel-caption d-none d-md-block">
                  <div className="home-text">
                    <section>
                      <h1 className="font-weigth-bold "><Typed
                        strings={[
                          'ให้คำปรึกษาวินิจฉัยอาการ',
                          'บริการ 24 ชั่วโมง',
                          'T-D2X',
                          'Tummy Diarrhea Delivery Express',
                          'บริการเพื่อคุณ'
                        ]}
                        typeSpeed={40}
                      />
                      </h1>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid service">
          <div className="row d-block">
            <h1 className="f-35 center title py-30">บริการของเรา</h1>
          </div>

          <div className="row pb-30">

            <div className="col-xs-16 col-md-6 col-lg-3 pa-0">
              <ServiceContent
                title="วินิจฉัยอาการออนไลน์"
                content="กรองข้อมูลตอบคำถาม เพื่อวินิจฉัยอาการเบื้องต้น"
                url="/static/img/service/diagnose.svg"
              />
            </div>
            <div className="col-xs-16 col-md-6 col-lg-3 pa-0">
              <ServiceContent
                title="ค้นหาโรงพยาบาลใกล้เคียง"
                content="เปิดเส้นทางเพื่อเข้ารับการรักษาอาการของคุณ"
                url="/static/img/service/hospital.svg"
              />
            </div>
            <div className="col-xs-16 col-md-6 col-lg-3 pa-0">
              <ServiceContent
                title="บริการช่วยเหลือ 24 ชั่วโมง"
                content="ระบบคอยตอบคำถามตลอดเวลา"
                url="/static/img/service/hours24.svg"
              />
            </div>
            <div className="col-xs-16 col-md-6 col-lg-3 pa-0">
              <ServiceContent
                title="บริการจัดส่งยารักษา"
                content="ท่านสามารถสั่งซื้อยาพร้อมบริการจัดส่งถึงที่"
                url="/static/img/service/pills.svg"
              />
            </div>


          </div>
          <div>
          </div>
        </div>

        <div className="container doctor-team">
          <div className="row d-block">
            <h1 className="f-35 center title py-30">พบกับทีมแพทย์ของเรา</h1>
          </div>

          <div className="row pb-30">

            <div className="col-xs-12 col-md-6 col-lg-3 center">
              <DoctorTeam name="Jessica Wally" position="Doctor" url="/static/img/doctor/doctor1.jpg" />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-3 center">
              <DoctorTeam name="Iai Donas" position="Doctor" url="/static/img/doctor/doctor2.jpg" />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-3 center">
              <DoctorTeam name="Amanda Denyl" position="Doctor" url="/static/img/doctor/doctor3.jpg" />
            </div>

            <div className="col-xs-12 col-md-6 col-lg-3 center">
              <DoctorTeam name="Jason Davis" position="Doctor" url="/static/img/doctor/doctor4.jpg" />
            </div>

          </div>
          

        </div>
      </div>
    </Layout>
  </div>
)

export default Index