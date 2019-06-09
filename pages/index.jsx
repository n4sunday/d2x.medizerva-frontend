import Layout from '../components/Layout'
import Typed from 'react-typed'

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

      </div>
    </Layout>
  </div>
)

export default Index