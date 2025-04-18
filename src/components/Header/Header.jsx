import { React, useEffect, useState } from 'react';
import logo from "../../styles/images/logo.png";
import { Link, useParams, useLocation, useMatch } from 'react-router-dom';

const Header = () => {
    const [isSolid, setIsSolid] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeSubDropdowns, setActiveSubDropdowns] = useState({});

    const isProductDetail = useMatch("/products/:id");
    const isCart = useMatch("/cart");

    let isBlackText = false

    if (isCart || isProductDetail) {
        isBlackText = true
    }

    const location = useLocation()

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    const openMenu = () => {
        setIsOpen(!isOpen);
        setActiveDropdown(null);
    };

    const handleDropdown = (index) => {
        setActiveDropdown(prev => prev === index ? null : index);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSolid(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        if (isDesktop) {
            if (isOpen) {
                document.body.style.overflow = "hidden";
                document.body.style.paddingRight = "15.5px";
                document.querySelector('.header').style.paddingRight = "15.5px";
                document.querySelector('.header-nav').style.display = "none";
            } else {
                document.body.style.overflow = "auto";
                document.body.style.paddingRight = "0";
                document.querySelector('.header').style.paddingRight = "0";
                document.querySelector('.header-nav').style.display = "flex";
            }
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdowns(null);
    }, [location.pathname]);

    const menuItems = [
        {
            label: 'Standardpaneeli süsteemid →',
            dropdown: [
                {
                    label: '-Viilkatustele',
                    children: ['-Trapetsprofiilplekile', '-Valtsplekile', '-Kivikatusele']
                },
                { label: '-Lamekatustele' },
                { label: '-Maapaigaldis' }
            ]
        },
        {
            label: 'Integreeritav päikesekatus →',
            dropdown: ['-Täiskatuse süsteem', '-In-Roof süsteem']
        },
        {
            label: 'Seadmed →',
            dropdown: [
                {
                    label: '-Solax',
                    children: ['-Hübriidinverter', '-Akusüsteem', '-Lisaseadmed']
                },
                {
                    label: '-Huawei',
                    children: ['-Akuinverter', '-Akusüsteem', '-Lisaseadmed']
                },
                {
                    label: '-Tigo',
                    children: ['-Akuinverter', '-Akusüsteem', '-Lisaseadmed']
                },
                {
                    label: '-Victron Energy',
                    children: ['-Inverter', '-Akusüsteemid', '-Lisaseadmed']
                },
                {
                    label: '-Vaata kõiki tooteid',
                    link: '/products'
                }

            ]
        },
        {
            label: 'Päikeseparkide kontroll ja hooldus →',
            dropdown: ['-Päikeseparkide kontroll ja diagnostika (Termokontroll ja andmete analüüs)', '-Hooldus (Paneelipargi pesu jms)']
        },
        {
            label: 'Kasulikku →',
            dropdown: ['-KKK', '-Miks otsustada akusüsteemi kasuks', '-Erinevad artiklid ja kirjatükid üldiselt roheenergeetika ja päikeseparkide kohta']
        },
        {
            label: 'Pildigalerii →',
            dropdown: ['-Päikesepaneelide paigaldused', '-Akusüsteemide paigaldused', '-Erilahendused']
        },
    ];

    return (
        <>
            <header className={isSolid ? "header solid" : "header"}>
                <div data-aos="fade-up" className="__container header__container">
                    <div className="header-logo">
                        <Link to="/"><img src={logo} alt="Voltamp Logo" /></Link>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-list-item">
                                <Link to="/products" className='link header-nav-list-item-link' style={{ color: location.pathname === '/products' ? '#FFAC12' : isBlackText ? '#000' : undefined }}>Seadmed</Link>
                            </li>
                            <li className="header-nav-list-item">
                                <Link className='link header-nav-list-item-link' style={{ color: location.pathname === '/galery' ? '#FFAC12' : isBlackText ? '#000' : undefined }}>Pildigalerii</Link>
                            </li>
                            <li className="header-nav-list-item">
                                <Link to="/kasulikku" className='link header-nav-list-item-link' style={{ color: location.pathname === '/kasulikku' ? '#FFAC12' : isBlackText ? '#000' : undefined }}>Kasulikku</Link>
                            </li>
                            <li className="header-nav-list-item">
                                <Link className='link header-nav-list-item-link' style={{ color: location.pathname === '/contact' ? '#FFAC12' : isBlackText ? '#000' : undefined }}>Kontakt</Link>
                            </li>
                        </ul>

                        <div className="header-nav-btn-block">
                            <div className="header-nav-btn">
                                Teha tellimus →
                            </div>
                        </div>
                    </nav>
                    <div className="header-nav-menu-btn" onClick={openMenu}>
                        <div className={`menu-btn ${isOpen ? "active" : ""}`}>
                            {isBlackText && (
                                <style>
                                    {`
                                        .menu-btn::before,
                                        .menu-btn::after,
                                        .menu-btn {
                                            background-color: #000;
                                        }
                                    `}
                                </style>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
                <div className="burger-menu__container __container">
                    <nav className="burger-menu-sidebar">
                        <ul className="burger-menu-sidebar-list">
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="burger-menu-sidebar-list-item"
                                    onClick={() => handleDropdown(index)}
                                >
                                    <span className={`link burger-menu-sidebar-list-item-link ${activeDropdown === index ? 'active' : ''}`}>
                                        {item.label}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="burger-menu-dropdown-block">
                        {activeDropdown !== null && (
                            <ul className="dropdown-list">
                                {menuItems[activeDropdown].dropdown.map((item, i) => {
                                    const hasChildren = item.children && item.children.length > 0;
                                    const isSubOpen = activeSubDropdowns === i;

                                    return (
                                        <li key={i} className="dropdown-list-item">
                                            {hasChildren ? (
                                                <span
                                                    onClick={() => {
                                                        setActiveSubDropdowns(isSubOpen ? null : i);
                                                    }}
                                                    className={`dropdown-link ${isSubOpen ? 'active' : ''}`}
                                                >
                                                    {item.label || item}
                                                    <span style={{ marginLeft: 4 }}>→</span>
                                                </span>
                                            ) : (
                                                <Link to={item.link || '#'} className="dropdown-link">
                                                    {item.label || item}
                                                </Link>
                                            )}
                                            {hasChildren && isSubOpen && (
                                                <ul className="sub-dropdown-list">
                                                    {item.children.map((sub, subIndex) => (
                                                        <li key={subIndex} className="sub-dropdown-list-item">
                                                            {sub}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>


                    <div className="burger-menu-phone-nav">
                        <ul className="burger-menu-phone-nav-list">
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Standardpaneeli süsteemid</Link>
                            </li>
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Integreeritav päikesekatus</Link>
                            </li>
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Päikeseparkide kontroll ja hooldus</Link>
                            </li>
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Kasulikku</Link>
                            </li>
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Pildigalerii</Link>
                            </li>
                            <li className="burger-menu-phone-nav-list-item">
                                <Link className='link burger-menu-phone-nav-list-item-link'>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="burger-menu-social-media">
                    <ul className="burger-menu-social-media-list">
                        <li className="burger-menu-social-media-list-item">
                            <Link>Facebook</Link>
                        </li>
                        <li className="burger-menu-social-media-list-item">
                            <Link>Twitter</Link>
                        </li>
                        <li className="burger-menu-social-media-list-item uhendus">
                            Võta ühendust: Info@voltamp.ee, või tel: +372 555 343 14
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;
