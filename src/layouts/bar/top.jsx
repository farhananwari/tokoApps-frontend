import ProPic from "../../assets/avatars/avatar.jpg"
console.log(ProPic)
export const TopBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </a>
                <div className="navbar-collapse collapse">
                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                                data-bs-toggle="dropdown">
                                <i className="align-middle" data-feather="settings"></i>
                            </a>

                            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                                data-bs-toggle="dropdown">
                                <img src={ProPic} className="avatar img-fluid rounded me-1"
                                    alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end mt-3">
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Log out</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}