import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { v4 as uuidv4 } from "uuid";

export default function Experience() {
	const apiEndpoint = "https://portfolio-reactmf.prismic.io/api/v2";
	const accessToken =
		"MC5ZYXZRVmhNQUFDQUExaFZD.77-9JELvv71bbO-_ve-_vUrvv73vv71I77-977-977-977-977-977-9Cu-_vXl1ATvvv73vv73vv73vv73vv73vv73vv73vv70";
	const Client = Prismic.client(apiEndpoint, { accessToken });

	const [exp, setExp] = useState([]);
	const [pageInfo, setPageInfo] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(true);
		const fetchPageData = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.type", "experience")]);
			if (response) {
				console.log(response.results[0]);
				setPageInfo(response.results[0].data);
				setExp(response.results[0].data.experience);
				setLoading(false);
			}
		};
		fetchPageData();
	}, []);
	function checkDate(start, end) {
		if (start == undefined) {
			return "";
		} else if (end == undefined) {
			return `${start} to present`;
		} else {
			return `${start} to ${end}`;
		}
	}
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
				<div className="row ">
					<h1>{pageInfo.title[0].text}</h1>
					<hr />
					{exp.map((e) => {
						return (
							<div className="col-xs-1 col-md-6 justify-content-center my-4">
								<div className="h-100 p-5 bg-light border rounded-3">
									<div className="text-center">
										<h3>{e.company[0].text}</h3>
										<p className="h6 text-muted">
											<i>{checkDate(e.datestart, e.dateend)}</i>
										</p>
									</div>
									<p>{e.experiencedesc[0].text}</p>
									<small>Skills used/learned: {e.skills[0].text}</small>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
