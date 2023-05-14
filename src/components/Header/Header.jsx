import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { useTranslation, Trans } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
    const { t } = useTranslation('home')
    const birth = Date.parse("1994-05-31")

    let ageDiffMs = Date.now() - birth;
    let ageDate = new Date(ageDiffMs)
    let yearsOld = Math.abs(ageDate.getUTCFullYear() - 1970)

    let backgroundUrl = process.env.PUBLIC_URL + '/assets/img/background.jpeg';
    let profileUrl = process.env.PUBLIC_URL + '/assets/img/profile.jpeg';

    return (
        <div id="presentation" className="pt-5 pb-5 pb-lg-0" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url('${backgroundUrl}')`, backgroundSize: "cover", backgroundReapeat: "no-repeat" }}>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <Card className="shadow border-0 mb-4 d-sm-none">
                            <Card.Img variant="top" src={profileUrl} className="d-block d-sm-none" />
                            <div className="position-absolute pt-3 ps-3 d-block d-sm-none">
                                <p className="display-6 mb-md-4"><span className="badge bg-warning">{t('header.greatings')}</span></p>
                            </div>
                            <Card.Body>
                                <Row className="">
                                    <Col xs={3} sm={4} className="d-none d-sm-block d-lg-none">
                                        <div className="h-100" style={{ background: `url('${profileUrl}')`, backgroundPosition: "center", backgroundSize: "cover", backgroundReapeat: "no-repeat" }}></div>
                                    </Col>
                                    <Col xs={12} sm={8} lg={12}>
                                        <p className="display-6 mb-md-4 d-none d-sm-block"><span className="badge bg-warning">{t('header.greatings')}</span></p>
                                        <h1 className="display-5 mb-1">
                                            <Trans i18nKey="header.title" ns="home" components={{ 1: <span className="fw-bold" /> }} />
                                        </h1>
                                        <p className="h6 text-warning">{t('header.subtitle')}</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="shadow mb-4 border-0 d-sm-none">

                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }} className="d-none d-lg-flex pe-0" style={{ background: `url('${profileUrl}')`, backgroundPosition: "center", backgroundSize: "cover", backgroundReapeat: "no-repeat" }}>
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }} className="align-items-center">
                                    <Card.Body>
                                        <ListItem title={t('header.age')}>
                                            {yearsOld}
                                        </ListItem>
                                        <ListItem title={t('header.email')}>
                                            <a href={"mailto:" + t('header.email_text')} className="text-warning">{t('header.email_text')}</a>
                                        </ListItem>
                                        <ListItem title={t('header.work')}>
                                            <Trans i18nKey="header.work_text" default="" ns="home">
                                                Desarrollador Rails y Android en <a href="https://isee-u.fr/" rel="noreferrer" className="text-warning" target={"_blank"}> Isee U </a>
                                            </Trans>
                                        </ListItem>
                                        <ListItem title={t('header.address')}>
                                            {t('header.address_text')}
                                        </ListItem>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>

                        <Card className="shadow mb-lg-n5 border-0">

                            <Row>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }} className="d-none d-lg-flex pe-0" style={{ background: `url('${profileUrl}')`, backgroundPosition: "center", backgroundSize: "cover", backgroundReapeat: "no-repeat" }}>
                                </Col>
                                <Col xs={{ span: 12 }} lg={{ span: 6 }} className="align-items-center">
                                    <Card.Body>
                                        <Row className="d-none d-sm-flex">
                                            <Col sm={4}>
                                                <div className="h-100" style={{ background: `url('${profileUrl}')`, backgroundSize: "cover", backgroundReapeat: "no-repeat" }}></div>
                                            </Col>
                                            <Col sm={8} lg={12}>
                                                <p className="display-6 mb-md-4"><span className="badge bg-warning">{t('header.greatings')}</span></p>
                                                <h1 className="display-5 mb-1">
                                                    <Trans i18nKey="header.title" ns="home" components={{ 1: <span className="fw-bold" /> }} />
                                                </h1>
                                                <p className="h6 text-warning">{t('header.subtitle')}</p>
                                            </Col>
                                        </Row>
                                        <hr className="d-none d-sm-block" />

                                        <div className="d-none d-md-block mb-4">
                                            <ListItem title={t('header.age')}>
                                                {yearsOld}
                                            </ListItem>
                                            <ListItem title={t('header.email')}>
                                                <a href={"mailto:" + t('header.email_text')} className="text-warning">{t('header.email_text')}</a>
                                            </ListItem>
                                            <ListItem title={t('header.work')}>
                                                <Trans i18nKey="header.work_text" default="" ns="home">
                                                    Desarrollador Rails y Android en <a href="https://isee-u.fr/" rel="noreferrer" className="text-warning" target={"_blank"}> Isee U </a>
                                                </Trans>
                                            </ListItem>
                                            <ListItem title={t('header.address')}>
                                                {t('header.address_text')}
                                            </ListItem>
                                        </div>

                                        <Row className="">
                                            <Col>
                                                <p className="fw-bold mb-1">{t('header.about_me')}</p>
                                                <div dangerouslySetInnerHTML={{ __html: t('header.about_me_content') }}></div>
                                            </Col>
                                        </Row>

                                        <Row className="mt-2 mt-md-3 mb-lg-3">
                                            <Col className="d-flex justify-content-center">
                                                <Button href="/assets/pdf/Eloi-Riera-Lanau.pdf" download="Eloi_Riera_Lanau.pdf" variant="outline-dark">
                                                    <FontAwesomeIcon icon={solid('file-download')} className="me-2" />
                                                    {t('header.download_vc')}
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function ListItem(props) {
    return (
        <Row className="mb-2">
            <Col xs={12} sm={4} className="fw-bold">{props.title}</Col>
            <Col xs={12} sm={8} className="fw-light">{props.children}</Col>
        </Row>
    )
}