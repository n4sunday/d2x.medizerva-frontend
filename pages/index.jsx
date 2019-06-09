import Layout from '../components/Layout'
import Typed from 'react-typed'
import ServiceContent from '../components/service-content'

const Index = () => (
  <div>
    <Layout>
      <div className="Home">

        <div className="main">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img className="home-picture" src="/static/img/Home.jpg" alt="image" />
                <div class="carousel-caption d-none d-md-block">
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

        <div className="service center">
          <div className="content ">
            <h1 className="f-35">บริการของเรา</h1>
            <div className="row">
              <ServiceContent
                title="วินิจฉัยอาการออนไลน์" 
                content="กรองข้อมูลตอบคำถาม เพื่อวินิจฉัยอาการเบื้องต้น"
                url="/static/img/service/diagnose.svg"
                />
              <ServiceContent
                title="ค้นหาโรงพยาบาลใกล้เคียง"
                content="เปิดเส้นทางเพื่อเข้ารับการรักษาอาการของคุณ"
                url="/static/img/service/hospital.svg"
              />
              <ServiceContent
                title="บริการช่วยเหลือ 24 ชั่วโมง"
                content="ระบบคอยตอบคำถามตลอดเวลา"
                url="/static/img/service/hours24.svg"
              />
              <ServiceContent
                title="บริการจัดส่งยารักษา"
                content="ท่านสามารถสั่งซื้อยาพร้อมบริการจัดส่งถึงที่"
                url="/static/img/service/pills.svg"
              />
            </div>
            <div>
              
            </div>
            

          </div>

        </div>

      </div>


    </Layout>
  </div>
)

export default Index