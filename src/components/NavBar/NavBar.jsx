import { Navbar, Container, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';


export default function NavBar() {

    const { t } = useTranslation('common')
    const navigation = [
        { name: t('navbar.presentation'), href: '#presentation' },
        { name: t('navbar.journey'), href: '#journey' },
        { name: t('navbar.summary'), href: '#summary' },
    ]

    return (
        <>
            <Navbar className='py-2 shadow' bg="dark" variant='dark' expand="lg" fixed="top">{/* navbarScroll */}
                <Container>
                    <Navbar.Brand href="/">Eloi Riera Lanau</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {navigation.map((item) => (
                                <Nav.Link key={item.name} href={item.href}>{item.name}</Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}