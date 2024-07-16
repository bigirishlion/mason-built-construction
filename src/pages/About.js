import React from 'react';

import Layout from '../components/Layout';
import family from '../assets/images/family.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About Us</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
            <span className="image left">
              <img src={family} alt="" />
            </span>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
            tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
            quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
            Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien. Morbi mattis mi consectetur tortor
            elementum, varius pellentesque velit convallis. Aenean tincidunt
            lectus auctor mauris maximus, ac scelerisque ipsum tempor. Duis
            vulputate ex et ex tincidunt, quis lacinia velit aliquet. Duis non
            efficitur nisi, id malesuada justo. Maecenas sagittis felis ac
            sagittis semper. Curabitur purus leo, tempus sed finibus eget,
            fringilla quis risus. Maecenas et lorem quis sem varius sagittis et
            a est. Maecenas iaculis iaculis sem. Donec vel dolor at arcu
            tincidunt bibendum. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Fusce ut aliquet justo. Donec id neque ipsum. Integer
            eget ultricies odio. Nam vel ex a orci fringilla tincidunt. Aliquam
            eleifend ligula non velit accumsan cursus. Etiam ut gravida sapien.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
