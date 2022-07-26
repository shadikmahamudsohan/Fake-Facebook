import React from 'react';

const Footer = () => {
    return (
        <footer class="page-footer font-small mdb-color lighten-3 pt-4 bg-primary text-light">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 class="font-weight-bold text-uppercase mb-4">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                            esse
                            quasi, veritatis totam voluptas nostrum.</p>

                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

                        <h5 class="font-weight-bold text-uppercase mb-4">About</h5>

                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <a href="#!">PROJECTS</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">ABOUT US</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">BLOG</a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <a href="#!">AWARDS</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />
                    <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
                        <h5 class="font-weight-bold text-uppercase mb-4">Address</h5>
                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-envelope mr-3"></i> info@example.com</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                            </li>
                            <li>
                                <p>
                                    <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none" />

                    <div class="col-md-2 col-lg-2 text-center mx-auto my-4">

                        <h5 class="font-weight-bold text-uppercase mb-4">Follow Us</h5>

                        <a className="text-light" type="button" class="btn-floating btn-fb">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-light" type="button" class="btn-floating btn-tw">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a className="text-light" type="button" class="btn-floating btn-gplus">
                            <i class="fab fa-google-plus-g"></i>
                        </a>
                        <a className="text-light" type="button" class="btn-floating btn-dribbble">
                            <i class="fab fa-dribbble"></i>
                        </a>

                    </div>
                </div>
            </div>

            <div class="footer-copyright text-center py-3">© 2022 Copyright:
                <a className="text-light" href="https://mdbootstrap.com/"> Fake-FaceBook.com</a>
            </div>
        </footer>
    );
};

export default Footer;;