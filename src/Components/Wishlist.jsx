import React from 'react';
import { addtowishlist,removewishlistitem,clearwishlist } from '../Slice/wishlist';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Wishlist() {

    const selectorwishlist = useSelector((state)=>state.wishlist.wishlistitem);
  
  const dispatch= useDispatch()
  const addwishlist=()=>
  {
    dispatch(addtowishlist())
  }
  const removewishlist=()=>
  {
    dispatch(removewishlistitem())
  }
  const clearwishlistitems=()=>
  {
   dispatch( clearwishlist())
  }
  return (
    <div>
  <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
    <div className="container">
      <Link className="navbar-brand" to="/">Furni<span>.</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsFurni">
        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
          <li className="nav-item ">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li><Link className="nav-link" to="/shop">Shop</Link></li>
          <li><Link className="nav-link" to="/about">About us</Link></li>
          <li><Link className="nav-link" to="/service">Services</Link></li>
          <li><a className="nav-link" href="#">Blog</a></li>
          <li><Link className="nav-link" to="/contact">Contact us</Link></li>
        </ul>
        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
          <li><Link className="nav-link" to="/login" style={{display: 'flex', alignItems: 'center'}}><img src="images/user.svg" alt="Login" /></Link></li>
          <li><Link className="nav-link" to="/wishlist" style={{display: 'flex', alignItems: 'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{color: '#fff', pointerEvents: 'none'}}>
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </Link></li>
          <li><Link className="nav-link" to="/cart" style={{display: 'flex', alignItems: 'center'}}><img src="images/cart.svg" alt="Cart" /></Link></li>
        </ul>
      </div>
    </div>
  </nav>
  {/* End Header/Navigation */}
  {/* Start Hero Section */}
  <div className="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <div className="intro-excerpt">
            <h1>Cart</h1>
          </div>
        </div>
        <div className="col-lg-7">
        </div>
      </div>
    </div>
  </div>
  {/* End Hero Section */}
  <div className="untree_co-section before-footer-section">
    <div className="container">
      <div className="row mb-5">
        <form className="col-md-12" method="post">
          <div className="site-blocks-table">
            <table className="table">
              <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-thumbnail">
                    <img src="images/product-1.png" alt="Image" className="img-fluid" />
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black">Product 1</h2>
                  </td>
                  <td>$49.00</td>
                  <td>
                    <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: 120}}>
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-black decrease" type="button">−</button>
                      </div>
                      <input type="text" className="form-control text-center quantity-amount" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-black increase" type="button">+</button>
                      </div>
                    </div>
                  </td>
                  <td>$49.00</td>
                  <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                </tr>
                <tr>
                  <td className="product-thumbnail">
                    <img src="images/product-2.png" alt="Image" className="img-fluid" />
                  </td>
                  <td className="product-name">
                    <h2 className="h5 text-black">Product 2</h2>
                  </td>
                  <td>$49.00</td>
                  <td>
                    <div className="input-group mb-3 d-flex align-items-center quantity-container" style={{maxWidth: 120}}>
                      <div className="input-group-prepend">
                        <button className="btn btn-outline-black decrease" type="button">−</button>
                      </div>
                      <input type="text" className="form-control text-center quantity-amount" defaultValue={1} placeholder aria-label="Example text with button addon" aria-describedby="button-addon1" />
                      <div className="input-group-append">
                        <button className="btn btn-outline-black increase" type="button">+</button>
                      </div>
                    </div>
                  </td>
                  <td>$49.00</td>
                  <td><a href="#" className="btn btn-black btn-sm">X</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="row mb-5">
            <div className="col-md-6 mb-3 mb-md-0">
              <button className="btn btn-black btn-sm btn-block">Update Cart</button>
            </div>
            <div className="col-md-6">
              <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="text-black h4" htmlFor="coupon">Coupon</label>
              <p>Enter your coupon code if you have one.</p>
            </div>
            <div className="col-md-8 mb-3 mb-md-0">
              <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
            </div>
            <div className="col-md-4">
              <button className="btn btn-black">Apply Coupon</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 pl-5">
          <div className="row justify-content-end">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 text-right border-bottom mb-5">
                  <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <span className="text-black">Subtotal</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">$230.00</strong>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-6">
                  <span className="text-black">Total</span>
                </div>
                <div className="col-md-6 text-right">
                  <strong className="text-black">$230.00</strong>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button className="btn btn-black btn-lg py-3 btn-block" onclick="window.location='checkout.html'">Proceed To Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Start Footer Section */}
  <footer className="footer-section">
    <div className="container relative">
      <div className="sofa-img">
        <img src="images/sofa.png" alt="Image" className="img-fluid" />
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="subscription-form">
            <h3 className="d-flex align-items-center"><span className="me-1"><img src="images/envelope-outline.svg" alt="Image" className="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>
            <form action="#" className="row g-3">
              <div className="col-auto">
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-auto">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="col-auto">
                <button className="btn btn-primary">
                  <span className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div className="mb-4 footer-logo-wrap"><a href="#" className="footer-logo">Furni<span>.</span></a></div>
          <p className="mb-4">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <ul className="list-unstyled custom-social">
            <li><a href="#"><span className="fa fa-brands fa-facebook-f" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-twitter" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-instagram" /></a></li>
            <li><a href="#"><span className="fa fa-brands fa-linkedin" /></a></li>
          </ul>
        </div>
        <div className="col-lg-8">
          <div className="row links-wrap">
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">About us</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact us</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Support</a></li>
                <li><a href="#">Knowledge base</a></li>
                <li><a href="#">Live chat</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Our team</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-6 col-sm-6 col-md-3">
              <ul className="list-unstyled">
                <li><a href="#">Nordic Chair</a></li>
                <li><a href="#">Kruzo Aero</a></li>
                <li><a href="#">Ergonomic Chair</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-top copyright">
        <div className="row pt-4">
          <div className="col-lg-6">
            <p className="mb-2 text-center text-lg-start">Copyright ©. All Rights Reserved. — Designed with love by <a href="https://untree.co">Untree.co</a> Distributed By <a hreff="https://themewagon.com">ThemeWagon</a>  {/* License information: https://untree.co/license/ */}
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <ul className="list-unstyled d-inline-flex ms-auto">
              <li className="me-4"><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer Section */}	
</div>
  )
}
