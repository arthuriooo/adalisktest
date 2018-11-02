import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import data from "./../../testData.json";

@inject("store")
@observer
export default class Case extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		if (this.store.authenticated) {
			return (
				<div className="case">
					<Header/>
						{
							data.find(function(eachCase){
								for (var n = 0; n < data.length; n++) {
									if (data[n].caseUid == this.store.id) {
										return (
											<ul>
												<li>{data.reference}</li>
												<li>{eachCase.accountId}</li>
												<li>{eachCase.caseUid}</li>
												<li>{eachCase.creationDate}</li>
												<li>{eachCase.publicId}</li>
												<li>{eachCase.status}</li>
											</ul>
										);
									}
								}
							})
						}
				</div>
			);
		}
	}
}

