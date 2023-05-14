import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { getTimelineList } from "../../services/timeline";
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby, faGraduationCap, faLightbulb, faBriefcase, faFlask, faJedi } from '@fortawesome/free-solid-svg-icons';

export default function FirstSection() {
    const [list, setList] = useState([]);
    const { i18n } = useTranslation('home')

    useEffect(() => {
        let mounted = true;
        getTimelineList(i18n.language)
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [i18n.language])


    return (
        <div id="journey" className="bg-light inset-shadow">
            <Container className="py-5">
                <h2 className="h1 fw-bold mb-5 mt-lg-5 mt-md-4 mt-3 text-center">{i18n.t('navbar.journey')}</h2>

                <Row>
                    <Col xs={12} className="position-relative">

                        <TimeLine />

                        {
                            list.map((item, index) => {

                                if (item.type === "note") {
                                    return (
                                        <TimeLineElement
                                            key={"timeline-item-" + index}
                                            className={index > 0 ? "mt-4" : ""}
                                            date={item.date} title={item.title}
                                            variant={index % 2 === 0 ? "left" : "right"}
                                            icon={item.icon}
                                            techs={item.techs}
                                        >
                                            {item.content}
                                        </TimeLineElement>
                                    )
                                } else {
                                    return (
                                        <TimeLineSeparator key={"timeline-item-" + index} className="my-4" variant={index % 2 === 0 ? "left" : "right"}>
                                            {item.content}
                                        </TimeLineSeparator>
                                    )
                                }
                            })
                        }

                    </Col>
                    <Col xs={12} className="position-relative">
                        <TimeLineEnd />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function TimeLine() {
    return (
        <div className="timeline">
        </div>
    )
}

function TimeLineEnd() {
    return (
        <div className="timeline-end">
            <div className="timeline-fade"></div>
        </div>
    )
}

function TimeLineElement(props) {

    let bubbleSideClass = "";
    let colSpecs = {}
    let colSpecsXs = {};
    let colSpecsMd = {};
    let colSpecsLg = {};
    let colSpecsXl = {};

    if (props.variant === "right") {
        bubbleSideClass = "timeline-bubble-left"
        colSpecs = { span: 6, offset: 6 }
        colSpecsXs = { span: 12 };
        colSpecsMd = { span: 12 };
        colSpecsLg = { span: 11 };
        colSpecsXl = { span: 9 };
    } else {
        bubbleSideClass = "timeline-bubble-right"
        colSpecs = { span: 6 }
        colSpecsXs = { span: 12 };
        colSpecsMd = { span: 12 };
        colSpecsLg = { span: 11, offset: 1 };
        colSpecsXl = { span: 9, offset: 3 };
    }

    return (
        <Row className={"timeline-content " + props.className}>
            <Col lg={colSpecs} className={"position-relative timeline-item-" + props.variant}>
                <div className={props.variant === "right" ? "ps-lg-4" : "pe-lg-4"}>
                    <p className="timeline-date mb-0">{props.date}</p>
                    <Row>
                        <Col xs={colSpecsXs} md={colSpecsMd} lg={colSpecsLg} xl={colSpecsXl}>
                            <Card className="shadow border-0">
                                <Card.Body>
                                    <h5 dangerouslySetInnerHTML={{ __html: props.title }}></h5>
                                    <p className="mb-0" dangerouslySetInnerHTML={{ __html: props.children }}>
                                    </p>
                                    <TechsBlock techs={props.techs}></TechsBlock>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
                <Bubble className={bubbleSideClass} icon={props.icon} />
            </Col>
        </Row>
    )
}

function Bubble(props) {

    const myIcons = {
        baby: faBaby,
        graduation: faGraduationCap,
        skill: faLightbulb,
        work: faBriefcase,
        experience: faFlask,
        jedi: faJedi
    }

    return (
        <div className={props.className}>
            <span className="rounded-circle border border-warning timeline-bubble d-flex justify-content-center align-items-center ">
                <FontAwesomeIcon icon={myIcons[props.icon]} className="text-warning" />
            </span>
        </div>
    )
}

function TimeLineSeparator(props) {

    let colSpecs = {}

    if (props.variant === "right") {
        colSpecs = { span: 6, offset: 6 }
    } else {
        colSpecs = { span: 6 }
    }

    return (
        <Row className={"timeline-content timeline-bubble-" + props.variant + " timeline-wraper " + props.className}>
            <Col lg={colSpecs} className={"position-relative timeline-item-" + props.variant}>
                <div className={props.variant === "right" ? "ps-lg-4" : "pe-lg-4"}>
                    <p className="timeline-date mb-0" dangerouslySetInnerHTML={{ __html: props.children }}></p>
                </div>
                <div className={"timeline-separator-right"}>
                    <span className="timeline-separator d-flex justify-content-center align-items-center ">
                        <span className="d-block timeline-separator-icon"></span>
                    </span>
                </div>
            </Col>
        </Row>
    )
}

function TechsBlock(props) {

    return (
        <div className="mt-2">
            {
                props.techs.map((item, index) => {


                    const renderTooltip = (props) => (
                        <Tooltip id="button-tooltip" {...props} placement="bottom">
                            {item}
                        </Tooltip>
                    );

                    return (
                        <OverlayTrigger
                            key={index}
                            placement="bottom"
                            delay={{ show: 0, hide: 150 }}
                            overlay={renderTooltip}>
                            <img src={"assets/img/techs/" + item + ".png"} height={40} alt="" className="me-2 mb-2" />
                        </OverlayTrigger>
                    )
                })
            }
        </div>
    )
}