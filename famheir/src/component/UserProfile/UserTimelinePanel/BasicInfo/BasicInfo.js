function BasicInfo(){

    return (
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
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/1.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/2.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/3.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/4.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/5.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/6.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/7.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/8.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/9.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/10.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/11.jpg" alt=""/>
            <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/photos/12.jpg" alt=""/>
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
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1"/>
                    <div className="text-content">
                        <a>Dan Walker</a>
                        <span>4 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                        <i data-feather="star"></i>
                    </div>
                </div>

                <div className="friend-item">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" data-user-popover="7"/>
                    <div className="text-content">
                        <a>Milly Augustine</a>
                        <span>3 mutual friend(s)</span>
                    </div>
                    <div className="star-friend is-active">
                        <i data-feather="star"></i>
                    </div>
                </div>

                <div className="friend-item">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" data-user-popover="5"/>
                    <div className="text-content">
                        <a>Edward Mayers</a>
                        <span>35 mutual friend(s)</span>
                    </div>
                    <div className="star-friend is-active">
                        <i data-feather="star"></i>
                    </div>
                </div>

                <div className="friend-item">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" data-user-popover="2"/>
                    <div className="text-content">
                        <a>Stella Bergmann</a>
                        <span>48 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                        <i data-feather="star"></i>
                    </div>
                </div>

                <div className="friend-item">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6"/>
                    <div className="text-content">
                        <a>Elise Walker</a>
                        <span>1 mutual friend(s)</span>
                    </div>
                    <div className="star-friend">
                        <i data-feather="star"></i>
                    </div>
                </div>

                <div className="friend-item">
                    <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" data-user-popover="9"/>
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
                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/1.jpg" alt=""/>
                <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt=""/>
                </div>
                <div className="video-overlay"></div>
            </div>

            <div className="video-container">
                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/2.jpg" alt=""/>
                <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt=""/>
                </div>
                <div className="video-overlay"></div>
            </div>

            <div className="video-container">
                <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/videos/3.jpg" alt=""/>
                <div className="video-button">
                    <img src="assets/img/icons/video/play.svg" alt=""/>
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
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/1.jpg" alt=""/>
                    <div className="text-content">
                        <a>New York, NY, USA</a>
                        <span>4 months ago</span>
                    </div>
                </div>
                <div className="trip-item">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/2.jpg" alt=""/>
                    <div className="text-content">
                        <a>Paris, France</a>
                        <span>8 months ago</span>
                    </div>
                </div>
                <div className="trip-item">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/3.jpg" alt=""/>
                    <div className="text-content">
                        <a>Madrid, Spain</a>
                        <span>a year ago</span>
                    </div>
                </div>
                <div className="trip-item">
                    <img src="https://via.placeholder.com/200x200" data-demo-src="assets/img/demo/widgets/trips/4.jpg" alt=""/>
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
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" data-user-popover="0"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/nelly.png" alt="" data-user-popover="9"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/stella.jpg" alt="" data-user-popover="2"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" data-user-popover="7"/>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr/>
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
                                <span>@ <a className="is-inverted">Wayne's Coffeeshop</a>, LA</span>
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
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" data-user-popover="0"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" data-user-popover="4"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="13"/>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr/>
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
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" data-user-popover="0"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/elise.jpg" alt="" data-user-popover="6"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/daniel.jpg" alt="" data-user-popover="3"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/rolf.jpg" alt="" data-user-popover="13"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/milly.jpg" alt="" data-user-popover="7"/>
                                <div className="is-more">+24</div>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr/>
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
                                <span>@ <a className="is-inverted">Gold Gym</a>, LA</span>
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
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" data-user-popover="0"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/lana.jpeg" alt="" data-user-popover="10"/>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr/>
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
                                <span>@ <a className="is-inverted">Massive Dynamics Office</a>, LA</span>
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
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/jenna.png" alt="" data-user-popover="0"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/dan.jpg" alt="" data-user-popover="1"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/edward.jpeg" alt="" data-user-popover="5"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/mike.jpg" alt="" data-user-popover="12"/>
                                <img src="https://via.placeholder.com/300x300" data-demo-src="assets/img/avatars/gaelle.jpeg" alt="" data-user-popover="11"/>
                                <div className="is-more">+4</div>
                            </div>
                        </div>
                        <div className="event-description">
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis commodi accusamus dolores itaque repudiandae.</p>
                        </div>
                        <hr/>
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
                    <div className="day event green" data-content="1" data-day="2" data-event="Eat at mom and dad's">2</div>
                    <div className="day">3</div>
                    <div className="day">4</div>
                    <div className="day">5</div>
                </div>
                <div className="calendar-row">
                    <div className="day">6</div>
                    <div className="day event purple" data-content="2" data-day="7" data-event="Meet customer in LA">7</div>
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
                    <div className="day event green" data-content="3" data-day="22" data-event="Frank's birthday">22</div>
                    <div className="day">23</div>
                    <div className="day event primary" data-content="4" data-day="24" data-event="Workout Session">24</div>
                    <div className="day">25</div>
                    <div className="day event purple" data-content="5" data-day="26" data-event="Project review">26</div>
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
                <div className="schedule-events-title">
                    Upcoming events
                </div>
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
                    <a className="button is-fullwidth has-icon"><i data-feather="plus"></i>New Event</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default BasicInfo;