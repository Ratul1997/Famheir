import TopNav from "../../Layout/TopNav";
function UserTimeLinePanelIndex() {
  return (
    <div className="view-wrapper">
    {/* <TopNav/> */}
      <div className="container is-custom">
        <div id="profile-main" className="view-wrap is-headless">
          <div className="columns is-multiline no-margin">
            <div className="column is-paddingless">
              <div className="cover-bg">
                <img
                  className="cover-image"
                  src="https://via.placeholder.com/1600x460"
                  data-demo-src="assets/img/demo/bg/4.png"
                  alt=""
                />
                <div className="avatar">
                  <img
                    id="user-avatar"
                    className="avatar-image"
                    src="https://via.placeholder.com/300x300"
                    data-demo-src="assets/img/avatars/jenna.png"
                    alt=""
                  />
                  <div className="avatar-button">
                    <i data-feather="plus"></i>
                  </div>
                  <div
                    className="pop-button is-far-left has-tooltip modal-trigger"
                    data-modal="change-profile-pic-modal"
                    data-placement="right"
                    data-title="Change profile picture"
                  >
                    <a className="inner">
                      <i data-feather="camera"></i>
                    </a>
                  </div>
                  <div
                    id="follow-pop"
                    className="pop-button pop-shift is-left has-tooltip"
                    data-placement="top"
                    data-title="Subscription"
                  >
                    <a className="inner">
                      <i className="inactive-icon" data-feather="bell"></i>
                      <i className="active-icon" data-feather="bell-off"></i>
                    </a>
                  </div>
                  <div
                    id="invite-pop"
                    className="pop-button pop-shift is-center has-tooltip"
                    data-placement="top"
                    data-title="Relationship"
                  >
                    <a href="#" className="inner">
                      <i className="inactive-icon" data-feather="plus"></i>
                      <i className="active-icon" data-feather="minus"></i>
                    </a>
                  </div>
                  <div
                    id="chat-pop"
                    className="pop-button is-right has-tooltip"
                    data-placement="top"
                    data-title="Chat"
                  >
                    <a className="inner">
                      <i data-feather="message-circle"></i>
                    </a>
                  </div>
                  <div
                    className="pop-button is-far-right has-tooltip"
                    data-placement="right"
                    data-title="Send message"
                  >
                    <a href="messages-inbox.html" className="inner">
                      <i data-feather="mail"></i>
                    </a>
                  </div>
                </div>
                <div className="cover-overlay"></div>
                <div
                  className="cover-edit modal-trigger"
                  data-modal="change-cover-modal"
                >
                  <i className="mdi mdi-camera"></i>
                  <span>Edit cover image</span>
                </div>
                <div className="dropdown is-spaced is-right is-accent dropdown-trigger timeline-mobile-dropdown is-hidden-desktop">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="profile-main.html" className="dropdown-item">
                        <div className="media">
                          <i data-feather="activity"></i>
                          <div className="media-content">
                            <h3>Timeline</h3>
                            <small>Open Timeline.</small>
                          </div>
                        </div>
                      </a>
                      <a href="profile-about.html" className="dropdown-item">
                        <div className="media">
                          <i data-feather="align-right"></i>
                          <div className="media-content">
                            <h3>About</h3>
                            <small>See about info.</small>
                          </div>
                        </div>
                      </a>
                      <a href="profile-friends.html" className="dropdown-item">
                        <div className="media">
                          <i data-feather="heart"></i>
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>See friends.</small>
                          </div>
                        </div>
                      </a>
                      <a href="profile-photos.html" className="dropdown-item">
                        <div className="media">
                          <i data-feather="image"></i>
                          <div className="media-content">
                            <h3>Photos</h3>
                            <small>See all photos.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="profile-menu is-hidden-mobile">
                <div className="menu-start">
                  <a href="profile-main.html" className="button has-min-width">
                    Timeline
                  </a>
                  <a href="profile-about.html" className="button has-min-width">
                    About
                  </a>
                </div>
                <div className="menu-end">
                  <a
                    id="profile-friends-link"
                    href="profile-friends.html"
                    className="button has-min-width"
                  >
                    Friends
                  </a>
                  <a href="profile-photos.html" className="button has-min-width">
                    Photos
                  </a>
                </div>
              </div>

              <div className="profile-subheader">
                <div className="subheader-start is-hidden-mobile">
                  <span>3.4K</span>
                  <span>Friends</span>
                </div>
                <div className="subheader-middle">
                  <h2>Jenna Davis</h2>
                  <span>Media Influencer</span>
                </div>
                <div className="subheader-end is-hidden-mobile">
                  <a className="button has-icon is-bold">
                    <i data-feather="clock"></i>
                    History
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="columns">
            <div id="profile-timeline-widgets" className="column is-4">
              <div className="box-heading">
                <h4>Basic Infos</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="profile-about.html" className="dropdown-item">
                        <div className="media">
                          <i data-feather="eye"></i>
                          <div className="media-content">
                            <h3>View</h3>
                            <small>View user details.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="search"></i>
                          <div className="media-content">
                            <h3>Related</h3>
                            <small>Search for related users.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basic-infos-wrapper">
                <div className="card is-profile-info">
                  <div className="info-row">
                    <div>
                      <span>Studied at</span>
                      <a className="is-inverted">Georgetown University</a>
                    </div>
                    <i className="mdi mdi-school"></i>
                  </div>
                  <div className="info-row">
                    <div>
                      <span>Married to</span>
                      <a className="is-inverted">Dan Walker</a>
                    </div>
                    <i className="mdi mdi-heart"></i>
                  </div>
                  <div className="info-row">
                    <div>
                      <span>From</span>
                      <a className="is-inverted">Melbourne, AU</a>
                    </div>
                    <i className="mdi mdi-earth"></i>
                  </div>
                  <div className="info-row">
                    <div>
                      <span>Lives in</span>
                      <a className="is-inverted">Los Angeles, CA</a>
                    </div>
                    <i className="mdi mdi-map-marker"></i>
                  </div>
                  <div className="info-row">
                    <div>
                      <span>Followers</span>
                      <a className="is-muted">258 followers</a>
                    </div>
                    <i className="mdi mdi-bell-ring"></i>
                  </div>
                </div>
              </div>

              <div className="box-heading">
                <h4>Photos</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="image"></i>
                          <div className="media-content">
                            <h3>View Photos</h3>
                            <small>View all your photos</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="tag"></i>
                          <div className="media-content">
                            <h3>Tagged</h3>
                            <small>View photos you are tagged in.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="folder"></i>
                          <div className="media-content">
                            <h3>Albums</h3>
                            <small>Open my albums.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-photos-widget">
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/1.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/2.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/3.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/4.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/5.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/6.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/7.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/8.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/9.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/10.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/11.jpg"
                  alt=""
                />
                <img
                  src="https://via.placeholder.com/200x200"
                  data-demo-src="assets/img/demo/widgets/photos/12.jpg"
                  alt=""
                />
              </div>

              <div className="box-heading">
                <h4>Friends</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="users"></i>
                          <div className="media-content">
                            <h3>All Friends</h3>
                            <small>View all friends.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="heart"></i>
                          <div className="media-content">
                            <h3>Family</h3>
                            <small>View family members.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="briefcase"></i>
                          <div className="media-content">
                            <h3>Work Relations</h3>
                            <small>View work related friends.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="friend-cards-list">
                <div className="card is-friend-card">
                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/dan.jpg"
                      alt=""
                      data-user-popover="1"
                    />
                    <div className="text-content">
                      <a>Dan Walker</a>
                      <span>4 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                      <i data-feather="star"></i>
                    </div>
                  </div>

                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/milly.jpg"
                      alt=""
                      data-user-popover="7"
                    />
                    <div className="text-content">
                      <a>Milly Augustine</a>
                      <span>3 mutual friend(s)</span>
                    </div>
                    <div className="star-friend is-active">
                      <i data-feather="star"></i>
                    </div>
                  </div>

                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/edward.jpeg"
                      alt=""
                      data-user-popover="5"
                    />
                    <div className="text-content">
                      <a>Edward Mayers</a>
                      <span>35 mutual friend(s)</span>
                    </div>
                    <div className="star-friend is-active">
                      <i data-feather="star"></i>
                    </div>
                  </div>

                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/stella.jpg"
                      alt=""
                      data-user-popover="2"
                    />
                    <div className="text-content">
                      <a>Stella Bergmann</a>
                      <span>48 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                      <i data-feather="star"></i>
                    </div>
                  </div>

                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/elise.jpg"
                      alt=""
                      data-user-popover="6"
                    />
                    <div className="text-content">
                      <a>Elise Walker</a>
                      <span>1 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                      <i data-feather="star"></i>
                    </div>
                  </div>

                  <div className="friend-item">
                    <img
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/nelly.png"
                      alt=""
                      data-user-popover="9"
                    />
                    <div className="text-content">
                      <a>Nelly Schwartz</a>
                      <span>11 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                      <i data-feather="star"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box-heading">
                <h4>Videos</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="video"></i>
                          <div className="media-content">
                            <h3>View Videos</h3>
                            <small>View all your videos</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="tag"></i>
                          <div className="media-content">
                            <h3>Tagged</h3>
                            <small>View videos you are tagged in.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="is-videos-widget">
                <div className="video-container">
                  <img
                    src="https://via.placeholder.com/200x200"
                    data-demo-src="assets/img/demo/widgets/videos/1.jpg"
                    alt=""
                  />
                  <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt="" />
                  </div>
                  <div className="video-overlay"></div>
                </div>

                <div className="video-container">
                  <img
                    src="https://via.placeholder.com/200x200"
                    data-demo-src="assets/img/demo/widgets/videos/2.jpg"
                    alt=""
                  />
                  <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt="" />
                  </div>
                  <div className="video-overlay"></div>
                </div>

                <div className="video-container">
                  <img
                    src="https://via.placeholder.com/200x200"
                    data-demo-src="assets/img/demo/widgets/videos/3.jpg"
                    alt=""
                  />
                  <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt="" />
                  </div>
                  <div className="video-overlay"></div>
                </div>
              </div>

              <div className="box-heading">
                <h4>Trips</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="globe"></i>
                          <div className="media-content">
                            <h3>View my Trips</h3>
                            <small>View all your trips</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="compass"></i>
                          <div className="media-content">
                            <h3>Suggestions</h3>
                            <small>View trendy suggestions.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="trip-cards-list">
                <div className="card is-trip-card">
                  <div className="trip-item">
                    <img
                      src="https://via.placeholder.com/200x200"
                      data-demo-src="assets/img/demo/widgets/trips/1.jpg"
                      alt=""
                    />
                    <div className="text-content">
                      <a>New York, NY, USA</a>
                      <span>4 months ago</span>
                    </div>
                  </div>
                  <div className="trip-item">
                    <img
                      src="https://via.placeholder.com/200x200"
                      data-demo-src="assets/img/demo/widgets/trips/2.jpg"
                      alt=""
                    />
                    <div className="text-content">
                      <a>Paris, France</a>
                      <span>8 months ago</span>
                    </div>
                  </div>
                  <div className="trip-item">
                    <img
                      src="https://via.placeholder.com/200x200"
                      data-demo-src="assets/img/demo/widgets/trips/3.jpg"
                      alt=""
                    />
                    <div className="text-content">
                      <a>Madrid, Spain</a>
                      <span>a year ago</span>
                    </div>
                  </div>
                  <div className="trip-item">
                    <img
                      src="https://via.placeholder.com/200x200"
                      data-demo-src="assets/img/demo/widgets/trips/4.jpg"
                      alt=""
                    />
                    <div className="text-content">
                      <a>Marrakech, Morocco</a>
                      <span>a year ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-heading">
                <h4>Events</h4>
                <div className="dropdown is-neutral is-spaced is-right dropdown-trigger">
                  <div>
                    <div className="button">
                      <i data-feather="more-vertical"></i>
                    </div>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="calendar"></i>
                          <div className="media-content">
                            <h3>All Events</h3>
                            <small>View all your events</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="search"></i>
                          <div className="media-content">
                            <h3>Search</h3>
                            <small>Search for events.</small>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="compass"></i>
                          <div className="media-content">
                            <h3>Suggestions</h3>
                            <small>View trendy suggestions.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="schedule">
                <div className="schedule-day-container hidden">
                  <div className="day-header day-header--large">
                    <div className="day-header-bg"></div>
                    <div className="day-header-close">
                      <i data-feather="x"></i>
                    </div>
                    <div className="day-header-content">
                      <div className="day-header-title">
                        <div className="day-header-title-day">24</div>
                        <div className="day-header-title-month">October</div>
                      </div>
                      <div className="day-header-event">Workout Session</div>
                    </div>
                  </div>
                  <div className="day-content has-slimscroll">
                    <div id="event-1" className="event-details-wrap">
                      <div className="meta-block">
                        <i className="mdi mdi-lock"></i>
                        <div className="meta">
                          <span>Private</span>
                          <span>This is a private event</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-map-marker"></i>
                        <div className="meta">
                          <span>Where</span>
                          <span>@ Mom and Dad's house</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-progress-clock"></i>
                        <div className="meta">
                          <span>When</span>
                          <span>02:00pm - 03:30pm</span>
                        </div>
                      </div>
                      <div className="participants-wrap">
                        <label>4 Participants</label>
                        <div className="participants">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                            data-user-popover="0"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/nelly.png"
                            alt=""
                            data-user-popover="9"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/stella.jpg"
                            alt=""
                            data-user-popover="2"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/milly.jpg"
                            alt=""
                            data-user-popover="7"
                          />
                        </div>
                      </div>
                      <div className="event-description">
                        <label>Description</label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Adipisci blanditiis commodi accusamus dolores
                          itaque repudiandae.
                        </p>
                      </div>
                      <hr />
                      <div className="button-wrap">
                        <a className="button is-bold">Participating</a>
                        <a className="button is-bold">Details</a>
                      </div>
                    </div>
                    <div id="event-2" className="event-details-wrap">
                      <div className="meta-block">
                        <i className="mdi mdi-lock"></i>
                        <div className="meta">
                          <span>Private</span>
                          <span>This is a private event</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-map-marker"></i>
                        <div className="meta">
                          <span>Where</span>
                          <span>
                            @ <a className="is-inverted">Wayne's Coffeeshop</a>, LA
                          </span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-progress-clock"></i>
                        <div className="meta">
                          <span>When</span>
                          <span>11:00am - 12:30pm</span>
                        </div>
                      </div>
                      <div className="participants-wrap">
                        <label>3 Participants</label>
                        <div className="participants">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                            data-user-popover="0"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/edward.jpeg"
                            alt=""
                            data-user-popover="4"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            alt=""
                            data-user-popover="13"
                          />
                        </div>
                      </div>
                      <div className="event-description">
                        <label>Description</label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Adipisci blanditiis commodi accusamus dolores
                          itaque repudiandae.
                        </p>
                      </div>
                      <hr />
                      <div className="button-wrap">
                        <a className="button is-bold">Participating</a>
                        <a className="button is-bold">Details</a>
                      </div>
                    </div>
                    <div id="event-3" className="event-details-wrap">
                      <div className="meta-block">
                        <i className="mdi mdi-earth"></i>
                        <div className="meta">
                          <span>Public</span>
                          <span>This is a public event</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-map-marker"></i>
                        <div className="meta">
                          <span>Where</span>
                          <span>@ Frank's appartment</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-progress-clock"></i>
                        <div className="meta">
                          <span>When</span>
                          <span>08:00pm - 02:00am</span>
                        </div>
                      </div>
                      <div className="participants-wrap">
                        <label>29 Participants</label>
                        <div className="participants">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                            data-user-popover="0"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            alt=""
                            data-user-popover="6"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/daniel.jpg"
                            alt=""
                            data-user-popover="3"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            alt=""
                            data-user-popover="13"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/milly.jpg"
                            alt=""
                            data-user-popover="7"
                          />
                          <div className="is-more">+24</div>
                        </div>
                      </div>
                      <div className="event-description">
                        <label>Description</label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Adipisci blanditiis commodi accusamus dolores
                          itaque repudiandae.
                        </p>
                      </div>
                      <hr />
                      <div className="button-wrap">
                        <a className="button is-bold">Participating</a>
                        <a className="button is-bold">Details</a>
                      </div>
                    </div>
                    <div id="event-4" className="event-details-wrap">
                      <div className="meta-block">
                        <i className="mdi mdi-lock"></i>
                        <div className="meta">
                          <span>Private</span>
                          <span>This is a private event</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-map-marker"></i>
                        <div className="meta">
                          <span>Where</span>
                          <span>
                            @ <a className="is-inverted">Gold Gym</a>, LA
                          </span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-progress-clock"></i>
                        <div className="meta">
                          <span>When</span>
                          <span>05:00pm - 07:00pm</span>
                        </div>
                      </div>
                      <div className="participants-wrap">
                        <label>2 Participants</label>
                        <div className="participants">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                            data-user-popover="0"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/lana.jpeg"
                            alt=""
                            data-user-popover="10"
                          />
                        </div>
                      </div>
                      <div className="event-description">
                        <label>Description</label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Adipisci blanditiis commodi accusamus dolores
                          itaque repudiandae.
                        </p>
                      </div>
                      <hr />
                      <div className="button-wrap">
                        <a className="button is-bold">Participating</a>
                        <a className="button is-bold">Details</a>
                      </div>
                    </div>
                    <div id="event-5" className="event-details-wrap">
                      <div className="meta-block">
                        <i className="mdi mdi-lock"></i>
                        <div className="meta">
                          <span>Private</span>
                          <span>This is a private event</span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-map-marker"></i>
                        <div className="meta">
                          <span>Where</span>
                          <span>
                            @ <a className="is-inverted">Massive Dynamics Office</a>
                            , LA
                          </span>
                        </div>
                      </div>
                      <div className="meta-block">
                        <i className="mdi mdi-progress-clock"></i>
                        <div className="meta">
                          <span>When</span>
                          <span>08:30am - 10:00am</span>
                        </div>
                      </div>
                      <div className="participants-wrap">
                        <label>29 Participants</label>
                        <div className="participants">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            alt=""
                            data-user-popover="0"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/dan.jpg"
                            alt=""
                            data-user-popover="1"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/edward.jpeg"
                            alt=""
                            data-user-popover="5"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/mike.jpg"
                            alt=""
                            data-user-popover="12"
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/gaelle.jpeg"
                            alt=""
                            data-user-popover="11"
                          />
                          <div className="is-more">+4</div>
                        </div>
                      </div>
                      <div className="event-description">
                        <label>Description</label>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Adipisci blanditiis commodi accusamus dolores
                          itaque repudiandae.
                        </p>
                      </div>
                      <hr />
                      <div className="button-wrap">
                        <a className="button is-bold">Participating</a>
                        <a className="button is-bold">Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule-header">
                  <div className="nav-icon">
                    <i data-feather="chevron-left"></i>
                  </div>
                  <div className="month">October</div>
                  <div className="nav-icon">
                    <i data-feather="chevron-right"></i>
                  </div>
                </div>
                <div className="schedule-calendar">
                  <div className="calendar-row day-row">
                    <div className="day day-name">M</div>
                    <div className="day day-name">T</div>
                    <div className="day day-name">W</div>
                    <div className="day day-name">T</div>
                    <div className="day day-name">F</div>
                    <div className="day day-name">S</div>
                    <div className="day day-name">S</div>
                  </div>
                  <div className="calendar-row">
                    <div className="day">&nbsp;</div>
                    <div className="day">&nbsp;</div>
                    <div className="day">1</div>
                    <div
                      className="day event green"
                      data-content="1"
                      data-day="2"
                      data-event="Eat at mom and dad's"
                    >
                      2
                    </div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                  </div>
                  <div className="calendar-row">
                    <div className="day">6</div>
                    <div
                      className="day event purple"
                      data-content="2"
                      data-day="7"
                      data-event="Meet customer in LA"
                    >
                      7
                    </div>
                    <div className="day">8</div>
                    <div className="day">9</div>
                    <div className="day">10</div>
                    <div className="day">11</div>
                    <div className="day">12</div>
                  </div>
                  <div className="calendar-row">
                    <div className="day">13</div>
                    <div className="day">14</div>
                    <div className="day">15</div>
                    <div className="day">16</div>
                    <div className="day">17</div>
                    <div className="day">18</div>
                    <div className="day">19</div>
                  </div>
                  <div className="calendar-row">
                    <div className="day">20</div>
                    <div className="day">21</div>
                    <div
                      className="day event green"
                      data-content="3"
                      data-day="22"
                      data-event="Frank's birthday"
                    >
                      22
                    </div>
                    <div className="day">23</div>
                    <div
                      className="day event primary"
                      data-content="4"
                      data-day="24"
                      data-event="Workout Session"
                    >
                      24
                    </div>
                    <div className="day">25</div>
                    <div
                      className="day event purple"
                      data-content="5"
                      data-day="26"
                      data-event="Project review"
                    >
                      26
                    </div>
                  </div>
                  <div className="calendar-row">
                    <div className="day">27</div>
                    <div className="day">28</div>
                    <div className="day">29</div>
                    <div className="day">30</div>
                    <div className="day"></div>
                    <div className="day"></div>
                    <div className="day"></div>
                  </div>
                  <div className="next-fab">
                    <i data-feather="chevron-down"></i>
                  </div>
                </div>
                <div className="schedule-divider"></div>
                <div className="schedule-events">
                  <div className="schedule-events-title">Upcoming events</div>
                  <div className="schedule-event">
                    <div className="event-date green">2</div>
                    <div className="event-title">
                      <span>Eat at mom and dad's</span>
                      <span>07:30pm | Home</span>
                    </div>
                  </div>
                  <div className="schedule-event">
                    <div className="event-date purple">7</div>
                    <div className="event-title">
                      <span>Meet customer in LA</span>
                      <span>11:00am | St Luc Café</span>
                    </div>
                  </div>
                  <div className="schedule-event">
                    <div className="event-date green">22</div>
                    <div className="event-title">
                      <span>Frank's birthday</span>
                      <span>03:00pm | Frank's home</span>
                    </div>
                  </div>
                  <div className="schedule-event">
                    <div className="event-date primary">24</div>
                    <div className="event-title">
                      <span>Workout session</span>
                      <span>07:00am | Gold Gym</span>
                    </div>
                  </div>
                  <div className="schedule-event">
                    <div className="event-date purple">26</div>
                    <div className="event-title">
                      <span>Project review</span>
                      <span>08:00am | Office</span>
                    </div>
                  </div>
                  <div className="button-wrap">
                    <a className="button is-fullwidth has-icon">
                      <i data-feather="plus"></i>New Event
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-8">
              <div id="profile-timeline-posts" className="box-heading">
                <h4>Posts</h4>
                <div className="button-wrap">
                  <button type="button" className="button is-active">
                    Recent
                  </button>
                  <button type="button" className="button">
                    Popular
                  </button>
                </div>
              </div>

              <div className="profile-timeline">
                <div className="profile-post">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">Jenna Davis</a>
                            <span className="time">October 17 2018, 11:03am</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Today i visited this amazing little fashion store in
                            Church street. Everything is handmade, from skirts
                            to bags. Their products really have an outstanding
                            quality. If you don't know them already, well it's
                            time to make your move!
                          </p>
                        </div>

                        <div className="post-image">
                          <a
                            data-fancybox="profile-post1"
                            data-lightbox-type="comments"
                            data-thumb="assets/img/demo/unsplash/8.jpg"
                            href="https://via.placeholder.com/1600x900"
                            data-demo-href="assets/img/demo/unsplash/8.jpg"
                          >
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/8.jpg"
                              alt=""
                            />
                          </a>

                          <div className="like-wrapper">
                            <a href="javascript:void(0);" className="like-button">
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/milly.jpg"
                            data-user-popover="7"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/david.jpg"
                            data-user-popover="4"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/nelly.png"
                            data-user-popover="9"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Milly</a>,<a href="#">David</a>
                          </p>
                          <p>and 1 more liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>32</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>4</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>5</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments
                          <small>(5)</small>
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/bobby.jpg"
                                data-user-popover="8"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Bobby Brown</a>
                            <span className="time">1 hour ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/daniel.jpg"
                                    data-user-popover="3"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Daniel Wellington</a>
                                <span className="time">3 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>4</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/mike.jpg"
                                data-user-popover="12"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Mike Lasalle</a>
                            <span className="time">Yesterday</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>3</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/lana.jpeg"
                                    data-user-popover="10"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Lana Henrikssen</a>
                                <span className="time">3 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>4</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/nelly.png"
                                data-user-popover="9"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Nelly Schwartz</a>
                            <span className="time">2 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-post">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/elise.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post has-nested">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/elise.jpg"
                              data-user-popover="6"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">
                              Elise Walker shared
                              <span>Dan Walker's post</span> on your feed
                            </a>
                            <span className="time">July 19 2018, 19:42pm</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            My brother went to their concert last night, and
                            looks like he had tons of fun. We should really do
                            things like this together.
                          </p>
                        </div>

                        <div className="card is-post is-nested">
                          <div className="content-wrap">
                            <div className="card-heading">
                              <div className="user-block">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/dan.jpg"
                                    data-user-popover="1"
                                    alt=""
                                  />
                                </div>
                                <div className="user-info">
                                  <a href="#">Dan Walker</a>
                                  <span className="time">
                                    July 26 2018, 01:03pm
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="card-body">
                              <div className="post-text">
                                <p>
                                  Yesterday with
                                  <a href="#">@Karen Miller</a> and
                                  <a href="#">@Marvin Stemperd</a> at the
                                  <a href="#">#Rock'n'Rolla</a> concert in LA.
                                  Was totally fantastic! People were really
                                  excited about this one!
                                </p>
                              </div>

                              <div className="post-image">
                                <a
                                  data-fancybox="profile-post2"
                                  data-lightbox-type="comments"
                                  data-thumb="assets/img/demo/unsplash/1.jpg"
                                  href="https://via.placeholder.com/1600x900"
                                  data-demo-href="assets/img/demo/unsplash/1.jpg"
                                >
                                  <img
                                    src="https://via.placeholder.com/1600x900"
                                    data-demo-src="assets/img/demo/unsplash/1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="action-wrap">
                          <div className="like-wrapper">
                            <a href="javascript:void(0);" className="like-button">
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/jenna.png"
                            data-user-popover="0"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/edward.jpeg"
                            data-user-popover="5"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/nelly.png"
                            data-user-popover="9"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/stella.jpg"
                            data-user-popover="2"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            data-user-popover="13"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Jenna</a>,<a href="#">Edward</a>
                          </p>
                          <p>and 3 more liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>5</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>0</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments
                          <small>(4)</small>
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/david.jpg"
                                data-user-popover="4"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">David Kim</a>
                            <span className="time">5 hours ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/daniel.jpg"
                                    data-user-popover="3"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Daniel Wellington</a>
                                <span className="time">3 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>4</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/edward.jpeg"
                                data-user-popover="5"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Edward Mayers</a>
                            <span className="time">Yesterday</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>3</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/nelly.png"
                                data-user-popover="9"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Nelly Schwartz</a>
                            <span className="time">2 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-post">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">Jenna Davis</a>
                            <span className="time">October 09 2018, 11:03am</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Today i visited this amazing little fashion store in
                            Church street. Everything is handmade, from skirts
                            to bags. Their products really have an outstanding
                            quality. If you don't know them already, well it's
                            time to make your move!
                          </p>
                        </div>

                        <div className="post-image">
                          <a
                            data-fancybox="profile-post3"
                            data-lightbox-type="comments"
                            data-thumb="/assets/img/demo/video/dress.jpg"
                            href="#myVideo"
                          >
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="/assets/img/demo/video/dress.jpg"
                              alt=""
                            />
                          </a>

                          <div className="like-wrapper">
                            <a href="javascript:void(0);" className="like-button">
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/dan.jpg"
                            data-user-popover="1"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/stella.jpg"
                            data-user-popover="2"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/edward.jpeg"
                            data-user-popover="5"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/milly.jpg"
                            data-user-popover="7"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/nelly.png"
                            data-user-popover="9"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Milly</a>,<a href="#">David</a>
                          </p>
                          <p>and 56 more liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>58</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>12</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>9</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments
                          <small>(9)</small>
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/milly.jpg"
                                data-user-popover="7"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Milly Augustine</a>
                            <span className="time">1 hour ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/edward.jpeg"
                                    data-user-popover="5"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Edward Mayers</a>
                                <span className="time">30 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>3</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/elise.jpg"
                                    data-user-popover="6"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Elise Walker</a>
                                <span className="time">15 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>0</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                data-user-popover="2"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Stella Bergmann</a>
                            <span className="time">1 hour ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    data-user-popover="0"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Jenna Davis</a>
                                <span className="time">30 minutes ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>0</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/edward.jpeg"
                                data-user-popover="5"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Edward Mayers</a>
                            <span className="time">Yesterday</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>3</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/nelly.png"
                                data-user-popover="9"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Nelly Schwartz</a>
                            <span className="time">2 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    data-user-popover="0"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Jenna Davis</a>
                                <span className="time">2 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>3</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/elise.jpg"
                                    data-user-popover="6"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Elise Walker</a>
                                <span className="time">2 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>0</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <video
                  width="800"
                  height="450"
                  controls
                  id="myVideo"
                  styles="display:none;"
                >
                  <source
                    src="assets/img/demo/video/source/dress.mp4"
                    type="video/mp4"
                  />
                  <source
                    src="assets/img/demo/video/source/dress.webm"
                    type="video/webm"
                  />
                  <source
                    src="assets/img/demo/video/source/dress.ogg"
                    type="video/ogg"
                  />
                  Your browser doesn't support HTML5 video tag.
                </video>

                <div className="profile-post">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">Jenna Davis</a>
                            <span className="time">September 26 2018, 11:18am</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Hello everyone! Today iam posting a review of the
                            latest shoe trends. I tried for you more than 30
                            pairs of shoes. I had some crushes and some
                            deceptions, However, it was a great experience i
                            would like to share with you.
                          </p>
                        </div>

                        <div className="post-image">
                          <div className="masonry-grid">
                            <div className="masonry-column-left">
                              <a
                                data-fancybox="profile-post4"
                                data-lightbox-type="comments"
                                data-thumb="assets/img/demo/unsplash/9.jpg"
                                href="https://via.placeholder.com/1600x900"
                                data-demo-href="assets/img/demo/unsplash/9.jpg"
                              >
                                <img
                                  src="https://via.placeholder.com/1600x900"
                                  data-demo-src="assets/img/demo/unsplash/9.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                data-fancybox="profile-post4"
                                data-lightbox-type="comments"
                                data-thumb="assets/img/demo/unsplash/10.jpg"
                                href="https://via.placeholder.com/1600x900"
                                data-demo-href="assets/img/demo/unsplash/10.jpg"
                              >
                                <img
                                  src="https://via.placeholder.com/1600x900"
                                  data-demo-src="assets/img/demo/unsplash/10.jpg"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div className="masonry-column-right">
                              <a
                                data-fancybox="profile-post4"
                                data-lightbox-type="comments"
                                data-thumb="assets/img/demo/unsplash/11.jpg"
                                href="https://via.placeholder.com/1600x900"
                                data-demo-href="assets/img/demo/unsplash/11.jpg"
                              >
                                <img
                                  src="https://via.placeholder.com/1600x900"
                                  data-demo-src="assets/img/demo/unsplash/11.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                data-fancybox="profile-post4"
                                data-lightbox-type="comments"
                                data-thumb="assets/img/demo/unsplash/12.jpg"
                                href="https://via.placeholder.com/1600x900"
                                data-demo-href="assets/img/demo/unsplash/12.jpg"
                              >
                                <img
                                  src="https://via.placeholder.com/1600x900"
                                  data-demo-src="assets/img/demo/unsplash/12.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                data-fancybox="profile-post4"
                                data-lightbox-type="comments"
                                data-thumb="assets/img/demo/unsplash/13.jpg"
                                href="https://via.placeholder.com/1600x900"
                                data-demo-href="assets/img/demo/unsplash/13.jpg"
                              >
                                <img
                                  src="https://via.placeholder.com/1600x900"
                                  data-demo-src="assets/img/demo/unsplash/13.jpg"
                                  alt=""
                                />
                              </a>
                            </div>

                            <div className="like-wrapper">
                              <a href="javascript:void(0);" className="like-button">
                                <i className="mdi mdi-heart not-liked bouncy"></i>
                                <i className="mdi mdi-heart is-liked bouncy"></i>
                                <span className="like-overlay"></span>
                              </a>
                            </div>

                            <div className="fab-wrapper is-share">
                              <a
                                href="javascript:void(0);"
                                className="small-fab share-fab modal-trigger"
                                data-modal="share-modal"
                              >
                                <i data-feather="link-2"></i>
                              </a>
                            </div>

                            <div className="fab-wrapper is-comment">
                              <a href="javascript:void(0);" className="small-fab">
                                <i data-feather="message-circle"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            data-user-popover="13"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/mike.jpg"
                            data-user-popover="12"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/daniel.jpg"
                            data-user-popover="3"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            data-user-popover="6"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/david.jpg"
                            data-user-popover="4"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Mike</a>,<a href="#">Rolf</a>
                          </p>
                          <p>and 31 more liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>33</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>3</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments
                          <small>(8)</small>
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                data-user-popover="2"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Stella Bergmann</a>
                            <span className="time">17 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>0</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    data-user-popover="0"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Jenna Davis</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>4</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/david.jpg"
                                    data-user-popover="4"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">David Kim</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>1</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/milly.jpg"
                                    data-user-popover="7"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Milly Augustine</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>1</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/daniel.jpg"
                                data-user-popover="3"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Daniel Wellington</a>
                            <span className="time">17 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>6</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/david.jpg"
                                data-user-popover="4"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">David Kim</a>
                            <span className="time">18 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/stella.jpg"
                                    data-user-popover="2"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Stella Bergmann</a>
                                <span className="time">18 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>7</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/mike.jpg"
                                data-user-popover="12"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Mike Lasalle</a>
                            <span className="time">20 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="load-more has-text-centered">
                          <button className="load-more-button">
                            <i data-feather="more-horizontal"></i>
                          </button>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-post is-simple">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">Jenna Davis</a>
                            <span className="time">September 17 2018, 10:23am</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Hello guys, I need a ride because I need to go to{" "}
                            <a href="#">#Los Angeles</a> to see a customer. I
                            didn't have time to buy a train ticket so can anyone
                            pick me up in the morning if he is going there too ?
                          </p>
                        </div>

                        <div className="post-actions">
                          <div className="like-wrapper">
                            <a href="javascript:void(0);" className="like-button">
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/daniel.jpg"
                            data-user-popover="3"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            data-user-popover="6"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Daniel</a> and <a href="#">Elise</a>
                          </p>
                          <p>liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>2</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>0</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments (<small>2</small>)
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/elise.jpg"
                                data-user-popover="6"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Elise Walker</a>
                            <span className="time">2 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    data-user-popover="0"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Jenna Davis</a>
                                <span className="time">2 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>0</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-post is-simple">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/stella.jpg"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/stella.jpg"
                              data-user-popover="2"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">
                              Stella Bergmann shared a status on your feed
                            </a>
                            <span className="time">September 12 2018, 05:49pm</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Are we going to see a movie tonight ? From what i
                            can tell, that's what you said last week.
                          </p>
                        </div>

                        <div className="post-actions">
                          <div className="like-wrapper">
                            <a href="javascript:void(0);" className="like-button">
                              <i className="mdi mdi-heart not-liked bouncy"></i>
                              <i className="mdi mdi-heart is-liked bouncy"></i>
                              <span className="like-overlay"></span>
                            </a>
                          </div>

                          <div className="fab-wrapper is-share">
                            <a
                              href="javascript:void(0);"
                              className="small-fab share-fab modal-trigger"
                              data-modal="share-modal"
                            >
                              <i data-feather="link-2"></i>
                            </a>
                          </div>

                          <div className="fab-wrapper is-comment">
                            <a href="javascript:void(0);" className="small-fab">
                              <i data-feather="message-circle"></i>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/daniel.jpg"
                            data-user-popover="3"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            data-user-popover="6"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Daniel</a> and <a href="#">Elise</a>
                          </p>
                          <p>liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>2</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>0</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments (<small>2</small>)
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body">
                        <div className="media is-comment has-slimscroll">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/jenna.png"
                                data-user-popover="0"
                                alt=""
                              />
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Jenna Davis</a>
                            <span className="time">sep 12</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>1</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/stella.jpg"
                                    data-user-popover="2"
                                    alt=""
                                  />
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Stella Bergmann</a>
                                <span className="time">sep 12</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>
                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>0</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="profile-post">
                  <div className="time is-hidden-mobile">
                    <div className="img-container">
                      <img
                        src="https://via.placeholder.com/300x300"
                        data-demo-src="assets/img/avatars/jenna.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="card is-post">
                    <div className="content-wrap">
                      <div className="card-heading">
                        <div className="user-block">
                          <div className="image">
                            <img
                              src="https://via.placeholder.com/300x300"
                              data-demo-src="assets/img/avatars/jenna.png"
                              data-user-popover="0"
                              alt=""
                            />
                          </div>
                          <div className="user-info">
                            <a href="#">Jenna Davis</a>
                            <span className="time">September 26 2018, 11:18am</span>
                          </div>
                        </div>

                        <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                          <div>
                            <div className="button">
                              <i data-feather="more-vertical"></i>
                            </div>
                          </div>
                          <div className="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bookmark"></i>
                                  <div className="media-content">
                                    <h3>Bookmark</h3>
                                    <small>
                                      Add this post to your bookmarks.
                                    </small>
                                  </div>
                                </div>
                              </a>
                              <a className="dropdown-item">
                                <div className="media">
                                  <i data-feather="bell"></i>
                                  <div className="media-content">
                                    <h3>Notify me</h3>
                                    <small>Send me the updates.</small>
                                  </div>
                                </div>
                              </a>
                              <hr className="dropdown-divider" />
                              <a href="#" className="dropdown-item">
                                <div className="media">
                                  <i data-feather="flag"></i>
                                  <div className="media-content">
                                    <h3>Flag</h3>
                                    <small>
                                      In case of inappropriate content.
                                    </small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <div className="post-text">
                          <p>
                            Hello everyone! Today iam posting a review of the
                            latest shoe trends. I tried for you more than 30
                            pairs of shoes. I had some crushes and some
                            deceptions, However, it was a great experience i
                            would like to share with you.
                          </p>
                        </div>

                        <div className="post-image">
                          <div className="triple-grid">
                            <a
                              data-fancybox="profile-post4"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/16.jpg"
                              href="https://via.placeholder.com/1600x900"
                              data-demo-href="assets/img/demo/unsplash/16.jpg"
                            >
                              <img
                                src="https://via.placeholder.com/1600x900"
                                data-demo-src="assets/img/demo/unsplash/16.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="is-half"
                              data-fancybox="profile-post4"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/14.jpg"
                              href="https://via.placeholder.com/1600x900"
                              data-demo-href="assets/img/demo/unsplash/14.jpg"
                            >
                              <img
                                src="https://via.placeholder.com/1600x900"
                                data-demo-src="assets/img/demo/unsplash/14.jpg"
                                alt=""
                              />
                            </a>
                            <a
                              className="is-half"
                              data-fancybox="profile-post4"
                              data-lightbox-type="comments"
                              data-thumb="assets/img/demo/unsplash/15.jpg"
                              href="https://via.placeholder.com/1600x900"
                              data-demo-href="assets/img/demo/unsplash/15.jpg"
                            >
                              <img
                                src="https://via.placeholder.com/1600x900"
                                data-demo-src="assets/img/demo/unsplash/15.jpg"
                                alt=""
                              />
                            </a>

                            <div className="like-wrapper">
                              <a href="javascript:void(0);" className="like-button">
                                <i className="mdi mdi-heart not-liked bouncy"></i>
                                <i className="mdi mdi-heart is-liked bouncy"></i>
                                <span className="like-overlay"></span>
                              </a>
                            </div>

                            <div className="fab-wrapper is-share">
                              <a
                                href="javascript:void(0);"
                                className="small-fab share-fab modal-trigger"
                                data-modal="share-modal"
                              >
                                <i data-feather="link-2"></i>
                              </a>
                            </div>

                            <div className="fab-wrapper is-comment">
                              <a href="javascript:void(0);" className="small-fab">
                                <i data-feather="message-circle"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="likers-group">
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/rolf.jpg"
                            data-user-popover="13"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/mike.jpg"
                            data-user-popover="12"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/daniel.jpg"
                            data-user-popover="3"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/elise.jpg"
                            data-user-popover="6"
                            alt=""
                          />
                          <img
                            src="https://via.placeholder.com/300x300"
                            data-demo-src="assets/img/avatars/david.jpg"
                            data-user-popover="4"
                            alt=""
                          />
                        </div>
                        <div className="likers-text">
                          <p>
                            <a href="#">Mike</a>,<a href="#">Rolf</a>
                          </p>
                          <p>and 31 more liked this</p>
                        </div>

                        <div className="social-count">
                          <div className="likes-count">
                            <i data-feather="heart"></i>
                            <span>33</span>
                          </div>
                          <div className="shares-count">
                            <i data-feather="link-2"></i>
                            <span>3</span>
                          </div>
                          <div className="comments-count">
                            <i data-feather="message-circle"></i>
                            <span>8</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-wrap is-hidden">
                      <div className="comments-heading">
                        <h4>
                          Comments
                          <small>(8)</small>
                        </h4>
                        <div className="close-comments">
                          <i data-feather="x"></i>
                        </div>
                      </div>

                      <div className="comments-body has-slimscroll">
                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/stella.jpg"
                                data-user-popover="4"
                                alt=""
                              />{" "}
                              data-user-popover="2" alt=""/>
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Stella Bergmann</a>
                            <span className="time">17 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris
                              consequat.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>0</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/jenna.png"
                                    data-user-popover="4"
                                    alt=""
                                  />{" "}
                                  data-user-popover="0" alt=""/>
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Jenna Davis</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>4</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/david.jpg"
                                    data-user-popover="4"
                                    alt=""
                                  />{" "}
                                  data-user-popover="4" alt=""/>
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">David Kim</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>1</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/milly.jpg"
                                    data-user-popover="4"
                                    alt=""
                                  />{" "}
                                  data-user-popover="7" alt=""/>
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Milly Augustine</a>
                                <span className="time">17 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>1</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/daniel.jpg"
                                data-user-popover="4"
                                alt=""
                              />{" "}
                              data-user-popover="3" alt=""/>
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Daniel Wellington</a>
                            <span className="time">17 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo.
                            </p>

                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>6</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/david.jpg"
                                data-user-popover="4"
                                alt=""
                              />{" "}
                              data-user-popover="4" alt=""/>
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">David Kim</a>
                            <span className="time">18 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>

                            <div className="media is-comment">
                              <div className="media-left">
                                <div className="image">
                                  <img
                                    src="https://via.placeholder.com/300x300"
                                    data-demo-src="assets/img/avatars/stella.jpg"
                                    data-user-popover="4"
                                    alt=""
                                  />{" "}
                                  data-user-popover="2" alt=""/>
                                </div>
                              </div>

                              <div className="media-content">
                                <a href="#">Stella Bergmann</a>
                                <span className="time">18 days ago</span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod tempo
                                  incididunt ut labore et dolore magna aliqua.
                                </p>

                                <div className="controls">
                                  <div className="like-count">
                                    <i data-feather="thumbs-up"></i>
                                    <span>7</span>
                                  </div>
                                  <div className="reply">
                                    <a href="#">Reply</a>
                                  </div>
                                </div>
                              </div>

                              <div className="media-right">
                                <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                                  <div>
                                    <div className="button">
                                      <i data-feather="more-vertical"></i>
                                    </div>
                                  </div>
                                  <div className="dropdown-menu" role="menu">
                                    <div className="dropdown-content">
                                      <a className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="x"></i>
                                          <div className="media-content">
                                            <h3>Hide</h3>
                                            <small>Hide this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                      <div className="dropdown-divider"></div>
                                      <a href="#" className="dropdown-item">
                                        <div className="media">
                                          <i data-feather="flag"></i>
                                          <div className="media-content">
                                            <h3>Report</h3>
                                            <small>Report this comment.</small>
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="media is-comment">
                          <div className="media-left">
                            <div className="image">
                              <img
                                src="https://via.placeholder.com/300x300"
                                data-demo-src="assets/img/avatars/mike.jpg"
                                data-user-popover="4"
                                alt=""
                              />{" "}
                              data-user-popover="12" alt=""/>
                            </div>
                          </div>

                          <div className="media-content">
                            <a href="#">Mike Lasalle</a>
                            <span className="time">20 days ago</span>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempo incididunt.
                            </p>
                            <div className="controls">
                              <div className="like-count">
                                <i data-feather="thumbs-up"></i>
                                <span>5</span>
                              </div>
                              <div className="reply">
                                <a href="#">Reply</a>
                              </div>
                            </div>
                          </div>

                          <div className="media-right">
                            <div className="dropdown is-spaced is-right is-neutral dropdown-trigger">
                              <div>
                                <div className="button">
                                  <i data-feather="more-vertical"></i>
                                </div>
                              </div>
                              <div className="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                  <a className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="x"></i>
                                      <div className="media-content">
                                        <h3>Hide</h3>
                                        <small>Hide this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className="dropdown-item">
                                    <div className="media">
                                      <i data-feather="flag"></i>
                                      <div className="media-content">
                                        <h3>Report</h3>
                                        <small>Report this comment.</small>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="load-more has-text-centered">
                          <button className="load-more-button">
                            <i data-feather="more-horizontal"></i>
                          </button>
                        </div>
                      </div>

                      <div className="card-footer">
                        <div className="media post-comment has-emojis">
                          <div className="media-content">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  className="textarea comment-textarea"
                                  rows="5"
                                  placeholder="Write a comment..."
                                ></textarea>
                              </p>
                            </div>

                            <div className="actions">
                              <div className="image is-32x32">
                                <img
                                  className="is-rounded"
                                  src="https://via.placeholder.com/300x300"
                                  data-demo-src="assets/img/avatars/jenna.png"
                                  data-user-popover="0"
                                  alt=""
                                />
                              </div>
                              <div className="toolbar">
                                <div className="action is-auto">
                                  <i data-feather="at-sign"></i>
                                </div>
                                <div className="action is-emoji">
                                  <i data-feather="smile"></i>
                                </div>
                                <div className="action is-upload">
                                  <i data-feather="camera"></i>
                                  <input type="file" />
                                </div>
                                <a className="button is-solid primary-button raised">
                                  Post Comment
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="change-cover-modal"
        className="modal change-cover-modal is-medium has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Update Cover</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="selection-placeholder">
                <div className="columns">
                  <div className="column is-6">
                    <div
                      className="selection-box modal-trigger"
                      data-modal="upload-crop-cover-modal"
                    >
                      <div className="box-content">
                        <img
                          src="assets/img/illustrations/profile/upload-cover.svg"
                          alt=""
                        />
                        <div className="box-text">
                          <span>Upload</span>
                          <span>From your computer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div
                      className="selection-box modal-trigger"
                      data-modal="user-photos-modal"
                    >
                      <div className="box-content">
                        <img
                          src="assets/img/illustrations/profile/change-cover.svg"
                          alt=""
                        />
                        <div className="box-text">
                          <span>Choose</span>
                          <span>From your photos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="change-profile-pic-modal"
        className="modal change-profile-pic-modal is-medium has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Update Profile Picture</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="selection-placeholder">
                <div className="columns">
                  <div className="column is-6">
                    <div
                      className="selection-box modal-trigger"
                      data-modal="upload-crop-profile-modal"
                    >
                      <div className="box-content">
                        <img
                          src="assets/img/illustrations/profile/change-profile.svg"
                          alt=""
                        />
                        <div className="box-text">
                          <span>Upload</span>
                          <span>From your computer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column is-6">
                    <div
                      className="selection-box modal-trigger"
                      data-modal="user-photos-modal"
                    >
                      <div className="box-content">
                        <img
                          src="assets/img/illustrations/profile/upload-profile.svg"
                          alt=""
                        />
                        <div className="box-text">
                          <span>Choose</span>
                          <span>From your photos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="user-photos-modal"
        className="modal user-photos-modal is-medium has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Choose a picture</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>

            <div className="card-body">
              <div className="nav-tabs-wrapper">
                <div className="tabs">
                  <ul className="is-faded">
                    <li className="is-active" data-tab="recent-photos">
                      <a>Recent</a>
                    </li>
                    <li data-tab="all-photos">
                      <a>Photos</a>
                    </li>
                    <li data-tab="photo-albums">
                      <a>Albums</a>
                    </li>
                  </ul>
                </div>

                <div
                  id="recent-photos"
                  className="tab-content has-slimscroll-md is-active"
                >
                  <div className="image-grid">
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/3.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/4.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/9.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/2.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/13.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/11.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/17.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/22.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/8.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/18.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/20.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/21.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="all-photos" className="tab-content has-slimscroll-md">
                  <div className="image-grid">
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/25.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/23.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/28.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/34.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/27.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/18.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/30.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/26.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/29.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/20.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/17.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/11.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/24.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/32.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/31.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/33.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/35.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" load-more-wrap has-text-centered">
                    <a href="#" className="load-more-button">
                      Load More
                    </a>
                  </div>
                </div>

                <div id="photo-albums" className="tab-content has-slimscroll-md">
                  <div className="albums-grid">
                    <div className="columns is-multiline">
                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-1">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/35.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Design and Colors</span>
                              <span>Added on sep 06 2018</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>8</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-2">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Friends and Family</span>
                              <span>Added on jun 10 2016</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>29</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-3">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Trips and Travel</span>
                              <span>Added on feb 14 2017</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>12</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-4">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Summer 2017</span>
                              <span>Added on aug 23 2017</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>32</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-5">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/20.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Winter 2017</span>
                              <span>Added on jan 07 2017</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>7</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-6">
                        <div className="album-wrapper" data-album="album-photos-6">
                          <div className="album-image">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="album-meta">
                            <div className="album-title">
                              <span>Thanksgiving 2017</span>
                              <span>Added on nov 30 2017</span>
                            </div>
                            <div className="image-count">
                              <i data-feather="image"></i>
                              <span>6</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="album-photos-1" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Design and Colors | <small>8 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/35.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/17.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/30.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/28.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/32.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/27.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/18.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/26.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" load-more-wrap has-text-centered">
                      <a href="#" className="load-more-button">
                        Load More
                      </a>
                    </div>
                  </div>

                  <div id="album-photos-2" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Friends and Family | <small>29 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/23.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/22.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/20.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/2.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/21.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/38.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/36.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/37.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" load-more-wrap has-text-centered">
                      <a href="#" className="load-more-button">
                        Load More
                      </a>
                    </div>
                  </div>

                  <div id="album-photos-3" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Trips and Travel | <small>12 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/4.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/6.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/5.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/38.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/37.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/18.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/3.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/32.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="album-photos-4" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Summer 2017 | <small>32 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/4.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/6.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/5.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/38.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/37.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/18.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/3.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/32.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className=" load-more-wrap has-text-centered">
                      <a href="#" className="load-more-button">
                        Load More
                      </a>
                    </div>
                  </div>

                  <div id="album-photos-5" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Winter 2017 | <small>7 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/22.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/24.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/36.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/25.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/2.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/8.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/12.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="album-photos-6" className="album-image-grid is-hidden">
                    <div className="album-info">
                      <h4>
                        Thanksgiving 2017 | <small>6 photo(s)</small>
                      </h4>
                      <a className="close-nested-photos">Go Back</a>
                    </div>
                    <div className="columns is-multiline">
                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/23.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/22.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/19.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/20.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/2.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="column is-4">
                        <div className="grid-image">
                          <input type="radio" name="selected_photos" />
                          <div className="inner">
                            <img
                              src="https://via.placeholder.com/1600x900"
                              data-demo-src="assets/img/demo/unsplash/21.jpg"
                              alt=""
                            />
                            <div className="inner-overlay"></div>
                            <div className="indicator gelatine">
                              <i data-feather="check"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button className="button is-solid accent-button replace-button is-disabled">
                Use Picture
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="upload-crop-profile-modal"
        className="modal upload-crop-profile-modal is-xsmall has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Upload Picture</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <label className="profile-uploader-box" for="upload-profile-picture">
                <span className="inner-content">
                  <img
                    src="assets/img/illustrations/profile/add-profile.svg"
                    alt=""
                  />
                  <span>
                    Click here to <br></br>upload a profile picture
                  </span>
                </span>
                <input
                  type="file"
                  id="upload-profile-picture"
                  accept="image/*"
                />
              </label>
              <div className="upload-demo-wrap is-hidden">
                <div id="upload-profile"></div>
                <div className="upload-help">
                  <a id="profile-upload-reset" className="profile-reset is-hidden">
                    Reset Picture
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                id="submit-profile-picture"
                className="button is-solid accent-button is-fullwidth raised is-disabled"
              >
                Use Picture
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="upload-crop-cover-modal"
        className="modal upload-crop-cover-modal is-large has-light-bg"
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <h3>Upload Cover</h3>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="card-body">
              <label className="cover-uploader-box" for="upload-cover-picture">
                <span className="inner-content">
                  <img
                    src="assets/img/illustrations/profile/add-cover.svg"
                    alt=""
                  />
                  <span>
                    Click here to <br></br>upload a cover image
                  </span>
                </span>
                <input type="file" id="upload-cover-picture" accept="image/*" />
              </label>
              <div className="upload-demo-wrap is-hidden">
                <div id="upload-cover"></div>
                <div className="upload-help">
                  <a id="cover-upload-reset" className="cover-reset is-hidden">
                    Reset Picture
                  </a>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <button
                id="submit-cover-picture"
                className="button is-solid accent-button is-fullwidth raised is-disabled"
              >
                Use Picture
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="share-modal" className="modal share-modal is-xsmall has-light-bg">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="card">
            <div className="card-heading">
              <div className="dropdown is-primary share-dropdown">
                <div>
                  <div className="button">
                    <i className="mdi mdi-format-float-left"></i>{" "}
                    <span>Share in your feed</span>{" "}
                    <i data-feather="chevron-down"></i>
                  </div>
                </div>
                <div className="dropdown-menu" role="menu">
                  <div className="dropdown-content">
                    <div className="dropdown-item" data-target-channel="feed">
                      <div className="media">
                        <i className="mdi mdi-format-float-left"></i>
                        <div className="media-content">
                          <h3>Share in your feed</h3>
                          <small>Share this publication on your feed.</small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="friend">
                      <div className="media">
                        <i className="mdi mdi-account-heart"></i>
                        <div className="media-content">
                          <h3>Share in a friend's feed</h3>
                          <small>
                            Share this publication on a friend's feed.
                          </small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="group">
                      <div className="media">
                        <i className="mdi mdi-account-group"></i>
                        <div className="media-content">
                          <h3>Share in a group</h3>
                          <small>Share this publication in a group.</small>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown-item" data-target-channel="page">
                      <div className="media">
                        <i className="mdi mdi-file-document-box"></i>
                        <div className="media-content">
                          <h3>Share in a page</h3>
                          <small>Share this publication in a page.</small>
                        </div>
                      </div>
                    </div>
                    <hr className="dropdown-divider" />
                    <div
                      className="dropdown-item"
                      data-target-channel="private-message"
                    >
                      <div className="media">
                        <i className="mdi mdi-email-plus"></i>
                        <div className="media-content">
                          <h3>Share in message</h3>
                          <small>
                            Share this publication in a private message.
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="close-wrap">
                <span className="close-modal">
                  <i data-feather="x"></i>
                </span>
              </div>
            </div>
            <div className="share-inputs">
              <div className="field is-autocomplete">
                <div
                  id="share-to-friend"
                  className="control share-channel-control is-hidden"
                >
                  <input
                    id="share-with-friend"
                    type="text"
                    className="input is-sm no-radius share-input simple-users-autocpl"
                    placeholder="Your friend's name"
                  />
                  <div className="input-heading">Friend :</div>
                </div>
              </div>

              <div className="field is-autocomplete">
                <div
                  id="share-to-group"
                  className="control share-channel-control is-hidden"
                >
                  <input
                    id="share-with-group"
                    type="text"
                    className="input is-sm no-radius share-input simple-groups-autocpl"
                    placeholder="Your group's name"
                  />
                  <div className="input-heading">Group :</div>
                </div>
              </div>

              <div
                id="share-to-page"
                className="control share-channel-control no-border is-hidden"
              >
                <div className="page-controls">
                  <div className="page-selection">
                    <div className="dropdown is-accent page-dropdown">
                      <div>
                        <div className="button page-selector">
                          <img
                            src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/img/avatars/hanzo.svg"
                            alt=""
                          />{" "}
                          <span>Css Ninja</span>{" "}
                          <i data-feather="chevron-down"></i>
                        </div>
                      </div>
                      <div className="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                          <div className="dropdown-item">
                            <div className="media">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/avatars/hanzo.svg"
                                alt=""
                              />
                              <div className="media-content">
                                <h3>Css Ninja</h3>
                                <small>Share on Css Ninja.</small>
                              </div>
                            </div>
                          </div>

                          <div className="dropdown-item">
                            <div className="media">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/icons/logos/nuclearjs.svg"
                                alt=""
                              />
                              <div className="media-content">
                                <h3>NuclearJs</h3>
                                <small>Share on NuclearJs.</small>
                              </div>
                            </div>
                          </div>

                          <div className="dropdown-item">
                            <div className="media">
                              <img
                                src="https://via.placeholder.com/150x150"
                                data-demo-src="assets/img/icons/logos/slicer.svg"
                                alt=""
                              />
                              <div className="media-content">
                                <h3>Slicer</h3>
                                <small>Share on Slicer.</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="alias">
                    <img
                      src="https://via.placeholder.com/150x150"
                      data-demo-src="assets/img/avatars/jenna.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="field is-autocomplete">
                <div
                  id="share-to-private-message"
                  className="control share-channel-control is-hidden"
                >
                  <input
                    id="share-with-private-message"
                    type="text"
                    className="input is-sm no-radius share-input simple-users-autocpl"
                    placeholder="Message a friend"
                  />
                  <div className="input-heading">To :</div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="control">
                <textarea
                  className="textarea comment-textarea"
                  rows="1"
                  placeholder="Say something about this ..."
                ></textarea>
                <button className="emoji-button">
                  <i data-feather="smile"></i>
                </button>
              </div>
              <div className="shared-publication">
                <div className="featured-image">
                  <img
                    id="share-modal-image"
                    src="https://via.placeholder.com/1600x900"
                    data-demo-src="assets/img/demo/unsplash/1.jpg"
                    alt=""
                  />
                </div>
                <div className="publication-meta">
                  <div className="inner-flex">
                    <img
                      id="share-modal-avatar"
                      src="https://via.placeholder.com/300x300"
                      data-demo-src="assets/img/avatars/dan.jpg"
                      data-user-popover="1"
                      alt=""
                    />
                    <p id="share-modal-text">
                      Yesterday with <a href="#">@Karen Miller</a> and{" "}
                      <a href="#">@Marvin Stemperd</a> at the
                      <a href="#">#Rock'n'Rolla</a> concert in LA. Was totally
                      fantastic! People were really excited about this one!
                    </p>
                  </div>
                  <div className="publication-footer">
                    <div className="stats">
                      <div className="stat-block">
                        <i className="mdi mdi-earth"></i>
                        <small>Public</small>
                      </div>
                      <div className="stat-block">
                        <i className="mdi mdi-eye"></i>
                        <small>163 views</small>
                      </div>
                    </div>
                    <div className="publication-origin">
                      <small>Friendkit.io</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-share-inputs">
              <div
                id="action-place"
                className="field is-autocomplete is-dropup is-hidden"
              >
                <div
                  id="share-place"
                  className="control share-bottom-channel-control"
                >
                  <input
                    type="text"
                    className="input is-sm no-radius share-input simple-locations-autocpl"
                    placeholder="Where are you?"
                  />
                  <div className="input-heading">Location :</div>
                </div>
              </div>

              <div
                id="action-tag"
                className="field is-autocomplete is-dropup is-hidden"
              >
                <div
                  id="share-tags"
                  className="control share-bottom-channel-control"
                >
                  <input
                    id="share-friend-tags-autocpl"
                    type="text"
                    className="input is-sm no-radius share-input"
                    placeholder="Who are you with"
                  />
                  <div className="input-heading">Friends :</div>
                </div>
                <div id="share-modal-tag-list" className="tag-list no-margin"></div>
              </div>
            </div>
            <div className="card-footer">
              <div className="action-wrap">
                <div className="footer-action" data-target-action="tag">
                  <i className="mdi mdi-account-plus"></i>
                </div>
                <div className="footer-action" data-target-action="place">
                  <i className="mdi mdi-map-marker"></i>
                </div>
                <div
                  className="footer-action dropdown is-spaced is-neutral dropdown-trigger is-up"
                  data-target-action="permissions"
                >
                  <div>
                    <i className="mdi mdi-lock-clock"></i>
                  </div>
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a href="#" className="dropdown-item">
                        <div className="media">
                          <i data-feather="globe"></i>
                          <div className="media-content">
                            <h3>Public</h3>
                            <small>Anyone can see this publication.</small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="users"></i>
                          <div className="media-content">
                            <h3>Friends</h3>
                            <small>
                              only friends can see this publication.
                            </small>
                          </div>
                        </div>
                      </a>
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="user"></i>
                          <div className="media-content">
                            <h3>Specific friends</h3>
                            <small>Don't show it to some friends.</small>
                          </div>
                        </div>
                      </a>
                      <hr className="dropdown-divider" />
                      <a className="dropdown-item">
                        <div className="media">
                          <i data-feather="lock"></i>
                          <div className="media-content">
                            <h3>Only me</h3>
                            <small>Only me can see this publication.</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-wrap">
                <button
                  type="button"
                  className="button is-solid dark-grey-button close-modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="button is-solid primary-button close-modal"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserTimeLinePanelIndex;
