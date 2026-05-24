import "./style.css";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="navbar-wrapper">
            <Navbar expand="lg" className="bg-body-tertiary navbar">
                <Container>
                    { /*Logo*/}
                    <Navbar.Brand href="#home">
                        <Link to='/'>
                            {/*<img src={Logo} />*/}
                            <p>Logo</p>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="navbar-items">
                            {/*<Link to="/">Home</Link>*/}
                            <Nav.Link as={Link} to='/' onClick={handleLinkClick}>Home</Nav.Link>
                            <Nav.Link as={Link} to='/teste' onClick={handleLinkClick}>Teste</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        //<div className="navbar-wrapper">
        //    <Navbar expand="lg" className="bg-body-tertiary navbar">
        //        {/*<Link to="/">Home</Link> |{' '}*/}
        //        {/*<Link to="/teste">Teste</Link> |{' '}*/}


        //        <Navbar.Collapse className="justify-content-end">
        //            <Nav className="navbar-items">
        //                <Nav.Link as={Link} to='/' onClick={handleLinkClick}>INÍCIO</Nav.Link>
        //                <Nav.Link as={Link} to='/produtos' onClick={handleLinkClick}>NOSSOS PRODUTOS</Nav.Link>
        //                <Nav.Link as={Link} to='/sobre' onClick={handleLinkClick}>SOBRE NÓS</Nav.Link>
        //                <Nav.Link as={Link} to='/contato' onClick={handleLinkClick}>CONTATO</Nav.Link>
        //                <Nav.Link as={Link} to='/politica' onClick={handleLinkClick}>POLÍTICAS DE PRIVACIDADE</Nav.Link>
        //                <Nav.Link target='blank' href='https://github.com/GustavoMacrini/Dall_React' className='repositorio'>REPOSITÓRIO</Nav.Link>
        //            </Nav>
        //        </Navbar.Collapse>
        //    </Navbar>
        //</div>
    );
}

export default Header;