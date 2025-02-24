import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Layout from '../components/Layout';

import IMG_3934 from '../assets/images/gallery/IMG_3934.jpg';
import IMG_6879 from '../assets/images/gallery/IMG_6879.jpg';
import IMG_6880 from '../assets/images/gallery/IMG_6880.jpg';
import IMG_6881 from '../assets/images/gallery/IMG_6881.jpg';
import IMG_6882 from '../assets/images/gallery/IMG_6882.jpg';
import IMG_6884 from '../assets/images/gallery/IMG_6884.jpg';
import IMG_6886 from '../assets/images/gallery/IMG_6886.jpg';
import IMG_6887 from '../assets/images/gallery/IMG_6887.jpg';
import IMG_6888 from '../assets/images/gallery/IMG_6888.jpg';
import IMG_6889 from '../assets/images/gallery/IMG_6889.jpg';
import IMG_6890 from '../assets/images/gallery/IMG_6890.jpg';
import IMG_6891 from '../assets/images/gallery/IMG_6891.jpg';
import IMG_6892 from '../assets/images/gallery/IMG_6892.jpg';
import IMG_6898 from '../assets/images/gallery/IMG_6898.jpg';
import IMG_6899 from '../assets/images/gallery/IMG_6899.jpg';
import IMG_6900 from '../assets/images/gallery/IMG_6900.jpg';
import IMG_6901 from '../assets/images/gallery/IMG_6901.jpg';
import IMG_6902 from '../assets/images/gallery/IMG_6902.jpg';
import IMG_6903 from '../assets/images/gallery/IMG_6903.jpg';
import IMG_6904 from '../assets/images/gallery/IMG_6904.jpg';
import IMG_6905 from '../assets/images/gallery/IMG_6905.jpg';
import IMG_6906 from '../assets/images/gallery/IMG_6906.jpg';
import IMG_6907 from '../assets/images/gallery/IMG_6907.jpg';
import IMG_6908 from '../assets/images/gallery/IMG_6908.jpg';
import IMG_6909 from '../assets/images/gallery/IMG_6909.jpg';
import IMG_6971 from '../assets/images/gallery/IMG_6971.jpg';
import IMG_6972 from '../assets/images/gallery/IMG_6972.jpg';
import IMG_7092 from '../assets/images/gallery/IMG_7092.jpg';
import IMG_7093 from '../assets/images/gallery/IMG_7093.jpg';
import IMG_7094 from '../assets/images/gallery/IMG_7094.jpg';
import IMG_7095 from '../assets/images/gallery/IMG_7095.jpg';
import IMG_7096 from '../assets/images/gallery/IMG_7096.jpg';
import IMG_7097 from '../assets/images/gallery/IMG_7097.jpg';
import IMG_7098 from '../assets/images/gallery/IMG_7098.jpg';
import IMG_7099 from '../assets/images/gallery/IMG_7099.jpg';
import IMG_7100 from '../assets/images/gallery/IMG_7100.jpg';
import IMG_7101 from '../assets/images/gallery/IMG_7101.jpg';
import IMG_7102 from '../assets/images/gallery/IMG_7102.jpg';
import IMG_7103 from '../assets/images/gallery/IMG_7103.jpg';
import IMG_7104 from '../assets/images/gallery/IMG_7104.jpg';
import IMG_7105 from '../assets/images/gallery/IMG_7105.jpg';
import IMG_7106 from '../assets/images/gallery/IMG_7106.jpg';
import IMG_7107 from '../assets/images/gallery/IMG_7107.jpg';
import IMG_7108 from '../assets/images/gallery/IMG_7108.jpg';
import IMG_7109 from '../assets/images/gallery/IMG_7109.jpg';
import IMG_7132 from '../assets/images/gallery/IMG_7132.jpg';
import IMG_7133 from '../assets/images/gallery/IMG_7133.jpg';
import IMG_7134 from '../assets/images/gallery/IMG_7134.jpg';
import IMG_7135 from '../assets/images/gallery/IMG_7135.jpg';
import IMG_7136 from '../assets/images/gallery/IMG_7136.jpg';
import IMG_7138 from '../assets/images/gallery/IMG_7138.jpg';
import IMG_7139 from '../assets/images/gallery/IMG_7139.jpg';
import IMG_7141 from '../assets/images/gallery/IMG_7141.jpg';
import IMG_7142 from '../assets/images/gallery/IMG_7142.jpg';
import IMG_7202 from '../assets/images/gallery/IMG_7202.jpg';
import IMG_7203 from '../assets/images/gallery/IMG_7203.jpg';
import IMG_7204 from '../assets/images/gallery/IMG_7204.jpg';
import IMG_7205 from '../assets/images/gallery/IMG_7205.jpg';
import IMG_7206 from '../assets/images/gallery/IMG_7206.jpg';
import IMG_7207 from '../assets/images/gallery/IMG_7207.jpg';
import IMG_7208 from '../assets/images/gallery/IMG_7208.jpg';
import IMG_7219 from '../assets/images/gallery/IMG_7219.jpg';
import IMG_7220 from '../assets/images/gallery/IMG_7220.jpg';
import IMG_7221 from '../assets/images/gallery/IMG_7221.jpg';
import IMG_7306 from '../assets/images/gallery/IMG_7306.jpg';
import IMG_7307 from '../assets/images/gallery/IMG_7307.jpg';
import IMG_7317 from '../assets/images/gallery/IMG_7317.jpg';
import IMG_7324 from '../assets/images/gallery/IMG_7324.jpg';
import IMG_7325 from '../assets/images/gallery/IMG_7325.jpg';
import IMG_7487 from '../assets/images/gallery/IMG_7487.jpg';
import IMG_7488 from '../assets/images/gallery/IMG_7488.jpg';
import IMG_7489 from '../assets/images/gallery/IMG_7489.jpg';
import IMG_7498 from '../assets/images/gallery/IMG_7498.jpg';
import IMG_7499 from '../assets/images/gallery/IMG_7499.jpg';
import IMG_7500 from '../assets/images/gallery/IMG_7500.jpg';
import IMG_7517 from '../assets/images/gallery/IMG_7517.jpg';
import IMG_7518 from '../assets/images/gallery/IMG_7518.jpg';
import IMG_7521 from '../assets/images/gallery/IMG_7521.jpg';
import IMG_7524 from '../assets/images/gallery/IMG_7524.jpg';
import IMG_7525 from '../assets/images/gallery/IMG_7525.jpg';
import IMG_7526 from '../assets/images/gallery/IMG_7526.jpg';
import IMG_7527 from '../assets/images/gallery/IMG_7527.jpg';
import IMG_7566 from '../assets/images/gallery/IMG_7566.jpg';
import IMG_7571 from '../assets/images/gallery/IMG_7571.jpg';
import IMG_7572 from '../assets/images/gallery/IMG_7572.jpg';
import IMG_7573 from '../assets/images/gallery/IMG_7573.jpg';
import IMG_7590 from '../assets/images/gallery/IMG_7590.jpg';
import banner from '../assets/images/banner.jpg';

const images = [
  { img: IMG_3934 },
  { img: IMG_6879 },
  { img: IMG_6880 },
  { img: IMG_6881 },
  { img: IMG_6882 },
  { img: IMG_6884 },
  { img: IMG_6886 },
  { img: IMG_6887 },
  { img: IMG_6888 },
  { img: IMG_6889 },
  { img: IMG_6890 },
  { img: IMG_6891 },
  { img: IMG_6892 },
  { img: IMG_6898 },
  { img: IMG_6899 },
  { img: IMG_6900 },
  { img: IMG_6901 },
  { img: IMG_6902 },
  { img: IMG_6903 },
  { img: IMG_6904 },
  { img: IMG_6905 },
  { img: IMG_6906 },
  { img: IMG_6907 },
  { img: IMG_6908 },
  { img: IMG_6909 },
  { img: IMG_6971 },
  { img: IMG_6972 },
  { img: IMG_7092 },
  { img: IMG_7093 },
  { img: IMG_7094 },
  { img: IMG_7095 },
  { img: IMG_7096 },
  { img: IMG_7097 },
  { img: IMG_7098 },
  { img: IMG_7099 },
  { img: IMG_7100 },
  { img: IMG_7101 },
  { img: IMG_7102 },
  { img: IMG_7103 },
  { img: IMG_7104 },
  { img: IMG_7105 },
  { img: IMG_7106 },
  { img: IMG_7107 },
  { img: IMG_7108 },
  { img: IMG_7109 },
  { img: IMG_7132 },
  { img: IMG_7133 },
  { img: IMG_7134 },
  { img: IMG_7135 },
  { img: IMG_7136 },
  { img: IMG_7138 },
  { img: IMG_7139 },
  { img: IMG_7141 },
  { img: IMG_7142 },
  { img: IMG_7202 },
  { img: IMG_7203 },
  { img: IMG_7204 },
  { img: IMG_7205 },
  { img: IMG_7206 },
  { img: IMG_7207 },
  { img: IMG_7208 },
  { img: IMG_7219 },
  { img: IMG_7220 },
  { img: IMG_7221 },
  { img: IMG_7306 },
  { img: IMG_7307 },
  { img: IMG_7317 },
  { img: IMG_7324 },
  { img: IMG_7325 },
  { img: IMG_7487 },
  { img: IMG_7488 },
  { img: IMG_7489 },
  { img: IMG_7498 },
  { img: IMG_7499 },
  { img: IMG_7500 },
  { img: IMG_7517 },
  { img: IMG_7518 },
  { img: IMG_7521 },
  { img: IMG_7524 },
  { img: IMG_7590 },
  { img: IMG_7525 },
  { img: IMG_7526 },
  { img: IMG_7527 },
  { img: IMG_7566 },
  { img: IMG_7571 },
  { img: IMG_7572 },
  { img: IMG_7573 },
];

const IndexPage = () => (
  <Layout>
    <article id="main">
      <header>
        <h2>Gallery</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            {/* <div className="box alt">
              <div className="row gtr-50 gtr-uniform">
                <div className="col-12">
                  <span className="image fit">
                    <img src={banner} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_3934} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6879} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6880} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6881} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6882} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6884} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6886} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6887} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6888} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6889} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6890} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6891} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6892} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6898} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6899} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6900} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6901} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6902} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6903} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6904} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6905} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6906} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6907} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6908} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6909} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6971} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_6972} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7092} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7093} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7094} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7095} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7096} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7097} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7098} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7099} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7100} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7101} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7102} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7103} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7104} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7105} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7106} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7107} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7108} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7109} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7132} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7133} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7134} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7135} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7136} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7138} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7139} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7141} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7142} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7202} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7203} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7204} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7205} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7206} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7207} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7208} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7219} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7220} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7221} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7306} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7307} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7317} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7324} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7325} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7487} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7488} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7489} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7498} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7499} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7500} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7517} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7518} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7521} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7524} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7525} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7526} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7527} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7566} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7571} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7572} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7573} alt="" />
                  </span>
                </div>
                <div className="col-4">
                  <span className="image fit">
                    <img src={IMG_7590} alt="" />
                  </span>
                </div>
              </div>
            </div> */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              gutterBreakpoints={{ 350: '12px', 750: '16px', 900: '24px' }}
            >
              <Masonry>
                {images.map((image, i) => (
                  <img
                    key={i}
                    src={image.img}
                    style={{ width: '100%', display: 'block' }}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
