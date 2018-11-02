import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import data from "./../../testData.json";

@inject("store")
@observer
export default class Table extends Component {
	constructor(props) {
		super(props);
        this.store = this.props.store;
        this.chooseId = this.chooseId.bind(this);
    }
    
    chooseId() {
        this.store.id = data.caseUid;
    }

	render() {
        const store = this.store;
        if (this.store.authenticated) {
            return (
                <div className="table">
                    <Header/>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>reference</td>
                                    <td>accountId</td>
                                    <td>caseUid</td>
                                    <td>creationDate</td>
                                    <td>publicId</td>
                                    <td>status</td>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                data.map(function(eachCase){
                                    return (
                                        <tr>
                                            <td>{data.reference}<Link onClick={this.chooseId} to={`${this.props.match.path}/${eachCase.caseUid}`}/></td>
                                            <td>{eachCase.accountId}</td>
                                            <td>{eachCase.caseUid}</td>
                                            <td>{eachCase.creationDate}</td>
                                            <td>{eachCase.publicId}</td>
                                            <td>{eachCase.status}</td>
                                        </tr>
                                    );
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
    
}
