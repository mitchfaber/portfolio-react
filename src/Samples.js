import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Prismic from "@prismicio/client";
import { v4 as uuidv4 } from "uuid";

export default function Samples() {
	const apiEndpoint = "https://portfolio-reactmf.prismic.io/api/v2";
	const accessToken =
		"MC5ZYXZRVmhNQUFDQUExaFZD.77-9JELvv71bbO-_ve-_vUrvv73vv71I77-977-977-977-977-977-9Cu-_vXl1ATvvv73vv73vv73vv73vv73vv73vv73vv70";
	const Client = Prismic.client(apiEndpoint, { accessToken });

	const [samples, setSamples] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchPageData = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.type", "sample")]);
			if (response) {
				console.log(response.results);
				setSamples(response.results);
				setLoading(false);
			}
		};
		fetchPageData();
	}, []);
	if (loading) {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border" role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<div className="row">
					{samples.map((s) => {
						return (
							<div key={uuidv4()} className="col-lg-3">
								<div className="card m-3">
									<div className="card-body">
										<div className="card-title">{s.data.title[0].text}</div>
										<div className="card-text">{s.data.teaser[0].text}</div>
										<div className="row">
											{s.tags.map((t) => {
												return <div className="col">{t}</div>;
											})}
										</div>
										<Link to={`/samples/${s.id}`} className="btn btn-primary">
											Read More
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
