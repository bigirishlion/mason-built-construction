import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact Us</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <p>
            Ready to start your next project? Reach out to us today to discuss
            your ideas and get a free consultation. Let’s build something great
            together!
          </p>

          <hr />

          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email"
                />
              </div>
              {/* <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value="">- Category -</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div> */}
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
