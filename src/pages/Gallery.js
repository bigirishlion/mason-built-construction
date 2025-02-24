import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import windowTreatment from '../assets/images/window-treatment.jpg';
import banner from '../assets/images/banner.jpg';
const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Gallery</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <img src={banner} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={windowTreatment} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic2} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic3} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic3} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic2} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic1} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic2} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic1} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={pic3} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
