function TopNav() {
  return (
    <div>
      <div
        id="main-navbar"
        className="navbar is-inline-flex is-transparent no-shadow is-hidden-mobile"
      >
        <div className="container is-fluid">
          <div className="navbar-brand">
            <a href="index.html" className="navbar-item">
              <img
                className="logo light-image"
                src="assets/img/logo/friendkit-bold.svg"
                width="112"
                height="28"
                alt=""
              />
              <img
                className="logo dark-image"
                src="assets/img/logo/friendkit-white.svg"
                width="112"
                height="28"
                alt=""
              />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item is-icon drop-trigger">
                <a className="icon-link is-friends" href="javascript:void(0);">
                  <i data-feather="heart"></i>
                  <span className="indicator"></span>
                </a>

                <div className="nav-drop">
                  <div className="inner">
                    <div className="nav-drop-header">
                      <span>Friend requests</span>
                      <a href="#">
                        <i data-feather="search"></i>
                      </a>
                    </div>
                    <div className="nav-drop-body is-friend-requests">
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/bobby.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Bobby Brown</a>
                          <span>Najeel verwick is a common friend</span>
                        </div>
                        <div className="media-right">
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-plus"></i>
                          </button>
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/dan.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Dan Walker</a>
                          <span>You have 4 common friends</span>
                        </div>
                        <div className="media-right">
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-plus"></i>
                          </button>
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/nelly.png"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            You are now friends with{" "}
                            <a href="#">Nelly Schwartz</a>. Check her{" "}
                            <a href="#">profile</a>.
                          </span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="tag"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/milly.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Milly Augustine</a>
                          <span>You have 8 common friends</span>
                        </div>
                        <div className="media-right">
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-plus"></i>
                          </button>
                          <button className="button icon-button is-solid grey-button raised">
                            <i data-feather="user-minus"></i>
                          </button>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/elise.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            You are now friends with{" "}
                            <a href="#">Elise Walker</a>. Check her{" "}
                            <a href="#">profile</a>.
                          </span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="tag"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/edward.jpeg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            You are now friends with{" "}
                            <a href="#">Edward Mayers</a>. Check his{" "}
                            <a href="#">profile</a>.
                          </span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="tag"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-drop-footer">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item is-icon drop-trigger">
                <a className="icon-link" href="javascript:void(0);">
                  <i data-feather="bell"></i>
                  <span className="indicator"></span>
                </a>

                <div className="nav-drop">
                  <div className="inner">
                    <div className="nav-drop-header">
                      <span>Notifications</span>
                      <a href="#">
                        <i data-feather="bell"></i>
                      </a>
                    </div>
                    <div className="nav-drop-body is-notifications">
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/david.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            <a href="#">David Kim</a> commented on{" "}
                            <a href="#">your post</a>.
                          </span>
                          <span className="time">30 minutes ago</span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="message-square"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/daniel.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            <a href="#">Daniel Wellington</a> liked your{" "}
                            <a href="#">profile.</a>
                          </span>
                          <span className="time">43 minutes ago</span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="heart"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/stella.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            <a href="#">Stella Bergmann</a> shared a{" "}
                            <a href="#">New video</a> on your wall.
                          </span>
                          <span className="time">Yesterday</span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="youtube"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/elise.jpg"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <span>
                            <a href="#">Elise Walker</a> shared an{" "}
                            <a href="#">Image</a> with you an 2 other people.
                          </span>
                          <span className="time">2 days ago</span>
                        </div>
                        <div className="media-right">
                          <div className="added-icon">
                            <i data-feather="image"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-drop-footer">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item is-icon drop-trigger">
                <a className="icon-link is-active" href="javascript:void(0);">
                  <i data-feather="mail"></i>
                  <span className="indicator"></span>
                </a>

                <div className="nav-drop">
                  <div className="inner">
                    <div className="nav-drop-header">
                      <span>Messages</span>
                      <a href="messages-inbox.html">Inbox</a>
                    </div>
                    <div className="nav-drop-body is-friend-requests">
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/nelly.png"
                              data-user-popover="9"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Nelly Schwartz</a>
                          <span>
                            I think we should meet near the Starbucks so we can
                            get...
                          </span>
                          <span className="time">Yesterday</span>
                        </div>
                        <div className="media-right is-centered">
                          <div className="added-icon">
                            <i data-feather="message-square"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/edward.jpeg"
                              data-user-popover="5"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Edward Mayers</a>
                          <span>
                            That was a real pleasure seeing you last time we
                            really should...
                          </span>
                          <span className="time">last week</span>
                        </div>
                        <div className="media-right is-centered">
                          <div className="added-icon">
                            <i data-feather="message-square"></i>
                          </div>
                        </div>
                      </div>
                      <div className="media">
                        <figure className="media-left">
                          <p className="image">
                            <img
                              src="https://via.placeholder.com/150x150"
                              data-demo-src="assets/img/avatars/dan.jpg"
                              data-user-popover="1"
                              alt=""
                            />
                          </p>
                        </figure>
                        <div className="media-content">
                          <a href="#">Dan Walker</a>
                          <span>
                            Hey there, would it be possible to borrow your
                            bicycle, i really need...
                          </span>
                          <span className="time">Jun 03 2018</span>
                        </div>
                        <div className="media-right is-centered">
                          <div className="added-icon">
                            <i data-feather="message-square"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-drop-footer">
                      <a href="#">Clear All</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item is-icon open-chat">
                <a className="icon-link is-primary" href="javascript:void(0);">
                  <i data-feather="message-square"></i>
                  <span className="indicator"></span>
                </a>
              </div>

              <div id="explorer-trigger" className="navbar-item is-icon">
                <a className="icon-link is-primary">
                  <i className="mdi mdi-apps"></i>
                </a>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div id="global-search" className="control">
                  <input
                    id="tipue_drop_input"
                    className="input is-rounded"
                    type="text"
                    placeholder="Search"
                    required
                  />
                  <span id="clear-search" className="reset-search">
                    <i data-feather="x"></i>
                  </span>
                  <span className="search-icon">
                    <i data-feather="search"></i>
                  </span>

                  <div
                    id="tipue_drop_content"
                    className="tipue-drop-content"
                  ></div>
                </div>
              </div>
              <div className="navbar-item is-cart">
                <div className="cart-button">
                  <i data-feather="shopping-cart"></i>
                  <div className="cart-count">
                    <span>3</span>
                  </div>
                </div>

                <div className="shopping-cart">
                  <div className="cart-inner">
                    <div className="navbar-cart-loader is-active">
                      <div className="loader is-loading"></div>
                    </div>

                    <div className="shopping-cart-header">
                      <a href="ecommerce-cart.html" className="cart-link">
                        View Cart
                      </a>
                      <div className="shopping-cart-total">
                        <span className="lighter-text">Total:</span>
                        <span className="main-color-text">$193.00</span>
                      </div>
                    </div>

                    <ul className="shopping-cart-items">
                      <li className="cart-row">
                        <img src="assets/img/products/2.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Cool Shirt</span>
                          <span className="meta-info">
                            <span className="item-price">$29.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>

                      <li className="cart-row">
                        <img src="assets/img/products/3.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Military Short</span>
                          <span className="meta-info">
                            <span className="item-price">$39.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>

                      <li className="cart-row">
                        <img src="assets/img/products/4.svg" alt="" />
                        <span className="item-meta">
                          <span className="item-name">Cool Backpack</span>
                          <span className="meta-info">
                            <span className="item-price">$125.00</span>
                            <span className="item-quantity">Qty: 01</span>
                          </span>
                        </span>
                      </li>
                    </ul>

                    <a href="#" className="button primary-button is-raised">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
              <div
                id="account-dropdown"
                className="navbar-item is-account drop-trigger has-caret"
              >
                <div className="user-image">
                  <img
                    src="https://via.placeholder.com/400x400"
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                  <span className="indicator"></span>
                </div>

                <div className="nav-drop is-account-dropdown">
                  <div className="inner">
                    <div className="nav-drop-header">
                      <span className="username">Jenna Davis</span>
                      <label className="theme-toggle">
                        <input id="toggle-theme" type="checkbox" />
                        <span className="toggler">
                          <span className="dark">
                            <i data-feather="moon"></i>
                          </span>
                          <span className="light">
                            <i data-feather="sun"></i>
                          </span>
                        </span>
                      </label>
                    </div>
                    <div className="nav-drop-body account-items">
                      <a
                        id="profile-link"
                        href="profile-main.html"
                        className="account-item"
                      >
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/400x400"
                                data-demo-src="assets/img/avatars/jenna.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Jenna Davis</h3>
                            <small>Main account</small>
                          </div>
                          <div className="media-right">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="account-divider" />
                      <a href="pages-main.html" className="account-item">
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/hanzo.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Css Ninja</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <a href="pages-main.html" className="account-item">
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/icons/logos/fastpizza.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Fast Pizza</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <a href="pages-main.html" className="account-item">
                        <div className="media">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/icons/logos/slicer.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="media-content">
                            <h3>Slicer</h3>
                            <small>Company page</small>
                          </div>
                          <div className="media-right is-hidden">
                            <i data-feather="check"></i>
                          </div>
                        </div>
                      </a>
                      <hr className="account-divider" />
                      <a href="options-settings.html" className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="settings"></i>
                          </div>
                          <div className="media-content">
                            <h3>Settings</h3>
                            <small>Access widget settings.</small>
                          </div>
                        </div>
                      </a>
                      <a className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="life-buoy"></i>
                          </div>
                          <div className="media-content">
                            <h3>Help</h3>
                            <small>Contact our support.</small>
                          </div>
                        </div>
                      </a>
                      <a className="account-item">
                        <div className="media">
                          <div className="icon-wrap">
                            <i data-feather="power"></i>
                          </div>
                          <div className="media-content">
                            <h3>Log out</h3>
                            <small>Log out from your account.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="navbar-item is-plus-menu is-hidden">
                <a
                  id="plus-menu"
                  className="button action-button is-solid primary-button raised"
                >
                  <i data-feather="plus"></i>
                </a>
                <div className="plus-drop">
                  <div className="drop-content">
                    <a>
                      <i data-feather="book"></i>
                      <div className="meta">
                        <span>Guides</span>
                        <span>Learn everything fast</span>
                      </div>
                    </a>
                    <a>
                      <i data-feather="help-circle"></i>
                      <div className="meta">
                        <span>FAQ</span>
                        <span>Most asked questions</span>
                      </div>
                    </a>
                    <a>
                      <i data-feather="life-buoy"></i>
                      <div className="meta">
                        <span>Assistance</span>
                        <span>Get in touch with support</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar mobile-navbar is-hidden-desktop"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="index.html">
            <img
              className="light-image"
              src="assets/img/logo/friendkit-bold.svg"
              alt=""
            />
            <img
              className="dark-image"
              src="assets/img/logo/friendkit-white.svg"
              alt=""
            />
          </a>

          <div className="navbar-item is-icon drop-trigger">
            <a className="icon-link is-friends" href="javascript:void(0);">
              <i data-feather="heart"></i>
              <span className="indicator"></span>
            </a>

            <div className="nav-drop">
              <div className="inner">
                <div className="nav-drop-header">
                  <span>Friend requests</span>
                  <a href="#">
                    <i data-feather="search"></i>
                  </a>
                </div>
                <div className="nav-drop-body is-friend-requests">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/bobby.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Bobby Brown</a>
                      <span>Najeel verwick is a common friend</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Dan Walker</a>
                      <span>You have 4 common friends</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/nelly.png"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Nelly Schwartz</a>.
                        Check her <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/milly.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Milly Augustine</a>
                      <span>You have 8 common friends</span>
                    </div>
                    <div className="media-right">
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-plus"></i>
                      </button>
                      <button className="button icon-button is-solid grey-button raised">
                        <i data-feather="user-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Elise Walker</a>.
                        Check her <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        You are now friends with <a href="#">Edward Mayers</a>.
                        Check his <a href="#">profile</a>.
                      </span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="tag"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item is-icon drop-trigger">
            <a className="icon-link" href="javascript:void(0);">
              <i data-feather="bell"></i>
              <span className="indicator"></span>
            </a>

            <div className="nav-drop">
              <div className="inner">
                <div className="nav-drop-header">
                  <span>Notifications</span>
                  <a href="#">
                    <i data-feather="bell"></i>
                  </a>
                </div>
                <div className="nav-drop-body is-notifications">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/david.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">David Kim</a> commented on{" "}
                        <a href="#">your post</a>.
                      </span>
                      <span className="time">30 minutes ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/daniel.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Daniel Wellington</a> liked your{" "}
                        <a href="#">profile.</a>
                      </span>
                      <span className="time">43 minutes ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="heart"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/stella.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Stella Bergmann</a> shared a{" "}
                        <a href="#">New video</a> on your wall.
                      </span>
                      <span className="time">Yesterday</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="youtube"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/300x300"
                          data-demo-src="assets/img/avatars/elise.jpg"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <span>
                        <a href="#">Elise Walker</a> shared an{" "}
                        <a href="#">Image</a> with you an 2 other people.
                      </span>
                      <span className="time">2 days ago</span>
                    </div>
                    <div className="media-right">
                      <div className="added-icon">
                        <i data-feather="image"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">View All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item is-icon drop-trigger">
            <a className="icon-link is-active" href="javascript:void(0);">
              <i data-feather="mail"></i>
              <span className="indicator"></span>
            </a>

            <div className="nav-drop">
              <div className="inner">
                <div className="nav-drop-header">
                  <span>Messages</span>
                  <a href="messages-inbox.html">Inbox</a>
                </div>
                <div className="nav-drop-body is-friend-requests">
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/nelly.png"
                          data-user-popover="9"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Nelly Schwartz</a>
                      <span>
                        I think we should meet near the Starbucks so we can
                        get...
                      </span>
                      <span className="time">Yesterday</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/edward.jpeg"
                          data-user-popover="5"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Edward Mayers</a>
                      <span>
                        That was a real pleasure seeing you last time we really
                        should...
                      </span>
                      <span className="time">last week</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image">
                        <img
                          src="https://via.placeholder.com/150x150"
                          data-demo-src="assets/img/avatars/dan.jpg"
                          data-user-popover="1"
                          alt=""
                        />
                      </p>
                    </figure>
                    <div className="media-content">
                      <a href="#">Dan Walker</a>
                      <span>
                        Hey there, would it be possible to borrow your bicycle,
                        i really need...
                      </span>
                      <span className="time">Jun 03 2018</span>
                    </div>
                    <div className="media-right is-centered">
                      <div className="added-icon">
                        <i data-feather="message-square"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-drop-footer">
                  <a href="#">Clear All</a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-item is-icon open-chat">
            <a className="icon-link is-primary" href="javascript:void(0);">
              <i data-feather="message-square"></i>
              <span className="indicator"></span>
            </a>
          </div>

          <div id="mobile-explorer-trigger" className="navbar-item is-icon">
            <a className="icon-link is-primary">
              <i className="mdi mdi-apps"></i>
            </a>
          </div>

          <div className="navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-item has-dropdown is-active">
            <div className="navbar-link">
              <img
                src="https://via.placeholder.com/150x150"
                data-demo-src="assets/img/avatars/jenna.png"
                alt=""
              />
              <span className="is-heading">Jenna</span>
            </div>

            <div className="navbar-dropdown">
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="user"></i>Profile
                </span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="shopping-cart"></i>Cart
                </span>
                <span className="menu-badge">3</span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="activity"></i>Feed
                </span>
                <span className="menu-badge">87</span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="settings"></i>Settings
                </span>
              </a>
              <a href="#" className="navbar-item is-flex is-mobile-icon">
                <span>
                  <i data-feather="hexagon"></i>Logout
                </span>
              </a>
            </div>
          </div>

          <div className="navbar-item has-dropdown">
            <a className="navbar-link">
              <i data-feather="life-buoy"></i>
              <span className="is-heading">Assistance</span>
            </a>

            <div className="navbar-dropdown">
              <a href="#" className="navbar-item">
                Help
              </a>
              <a href="#" className="navbar-item">
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default TopNav;
