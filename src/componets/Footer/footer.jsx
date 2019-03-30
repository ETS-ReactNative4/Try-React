import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div>
      <div className="page-footer lighten-4 center-on-small-only pt-0">
        <div className="container">
          <div className="row pt-5 mb-3 text-center d-flex justify-content-center">
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold"><a href="#!">About us</a></h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold"><a href="#!">Products</a></h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold"><a href="#!">Awards</a></h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold"><a href="#!">Help</a></h6>
            </div>
            <div className="col-md-2 mb-3">
              <h6 className="title font-bold"><a href="#!">Contact</a></h6>
            </div>
          </div>
          <hr className="rgba-white-light" style={{ margin: 0 + " " + 15 + '%' }} />
          <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div className="col-md-8 col-12 mt-5">
              <p style={{ lineHeight: 1.7 + 'rem' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur.</p>
            </div>
          </div>
          <hr className="clearfix d-md-none rgba-white-light" style={{ margin: 10 + '% ' + 15 + '% ' + 5 + '%' }} />
          <div className="row pb-3 mb-2">
            <div className="col-md-12">
              <div className="container">
                <div className="text-center center-block">
                  <a><i id="social-fb" className="fa fa-facebook fa-2x mr-4 pointer fa-icon fb"></i></a>
                  <a><i id="social-tw" className="fa fa-twitter fa-2x social mr-4 pointer fa-icon google"></i></a>
                  <a><i id="social-gp" className="fa fa-google-plus fa-2x social mr-4 pointer fa-icon gp"></i></a>
                  <a><i id="social-em" className="fa fa-envelope fa-2x social mr-4 pointer fa-icon github"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-fluid">
            © 2016-2019 Copyright: <a> myapp.com </a>
          </div>
        </div>
      </div>
    </div>
  )
}
