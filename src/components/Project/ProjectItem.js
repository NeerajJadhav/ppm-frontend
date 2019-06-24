import React, { Component } from 'react'

export default class ProjectItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row">
                        <div className="col-2">
                            <span className="mx-auto">REACT</span>
                        </div>
                        <div className="col-lg-6 col-md-4 col-8">
                            <h3>Spring / React Project</h3>
                            <p>Project to create a Kanban Board with Spring Boot and React</p>
                        </div>
                        <div className="col-md-4 d-none d-lg-block">
                            <ul className="list-group">
                                <a href="#">
                                    <li className="list-group-item board">
                                        <span className="float-left"><i className="fa fa-flag-checkered pr-1" /></span>Project Board
                                    </li>
                                </a>
                                <a href="#">
                                    <li className="list-group-item update">
                                        <span className="float-left"><i className="fa fa-edit pr-1" /></span>Update Project Info
                                    </li>
                                </a>
                                <a href="#">

                                    <li className="list-group-item delete">
                                        <span className="float-left"><i className="fa fa-trash pr-1" /></span>Delete Project
                                    </li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
