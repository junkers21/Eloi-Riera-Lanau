import React from 'react';
import '@fortawesome/fontawesome-free-brands';
import '@fortawesome/fontawesome-free-regular';
import { Container, Col, Row, Card } from 'react-bootstrap';
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import * as Constants from '../../utils/Constants/TechsConstants';
import { useTranslation } from 'react-i18next';

export default function Summary() {
    const {t} = useTranslation()
    return (
        <section id="summary" className="bg-dark py-5">

            <h2 className="h1 text-white fw-bold mb-5 text-center">{t('navbar.summary', { ns: 'common' })}</h2>
            
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={3} className="mb-3">
                        <SummaryCard title={t('summary.want_to_learn', { ns: 'home' })}>
                            <TechBlockList items={Constants.TECHS_WANT_TO_LEARN}/>
                        </SummaryCard>
                    </Col>
                    <Col xs={12} md={6} xl={3} className="mb-3">
                        <SummaryCard title={t('summary.tested', { ns: 'home' })}>
                            <TechBlockList items={Constants.TECHS_TESTED}/>
                        </SummaryCard>
                    </Col>
                    <Col xs={12} md={6} xl={3} className="mb-3">
                        <SummaryCard title={t('summary.worked_with', { ns: 'home' })}>
                            <TechBlockList items={Constants.TECHS_WORKED_WITH}/>
                        </SummaryCard>
                    </Col>
                    <Col xs={12} md={6} xl={3} className="mb-3">
                        <SummaryCard title={t('summary.work_with', { ns: 'home' })}>
                            <TechBlockList items={Constants.TECHS_WORK_WITH}/>
                        </SummaryCard>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}


function SummaryCard(props) {
    return (
        <Card className='border-0 shadow h-100'>
            <Card.Header className='border-0 bg-warning text-white'>
                {props.title}
            </Card.Header>
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    )
}

function TechBlockList(props) {
    return (
        <div className='d-flex justify-content-center flex-wrap'>
            {props.items.map((item) => (
                <TechBlock key={item.name} name={item.name}/>
            ))}
        </div>
    )
}

function TechBlock(props) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props} placement="bottom">
            {props.name}
        </Tooltip>
    );

    return (

        <OverlayTrigger
            placement="bottom"
            delay={{ show: 0, hide: 150 }}
            overlay={renderTooltip(props)}>
            <img src={"assets/img/techs/" + props.name + ".png"} height={40} alt="" className="me-2 mb-2" />
        </OverlayTrigger>
    )
}