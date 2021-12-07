import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Prismic from "@prismicio/client";

export default function Samples() {
	const apiEndpoint = "https://portfolio-reactmf.prismic.io/api/v2";
	const accessToken =
		"MC5ZYXZRVmhNQUFDQUExaFZD.77-9JELvv71bbO-_ve-_vUrvv73vv71I77-977-977-977-977-977-9Cu-_vXl1ATvvv73vv73vv73vv73vv73vv73vv73vv70";
	const Client = Prismic.client(apiEndpoint, { accessToken });

	let { id } = useParams();
	const [pageInfo, setPageInfo] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPageData = async () => {
			setLoading(true);
			const response = await Client.query([Prismic.Predicates.at("document.id", id)]);
			if (response) {
				console.log(response.results[0].data);
				setPageInfo(response.results[0]);
				setLoading(false);
			}
		};
		fetchPageData();
	}, []);
	if (loading) {
		return (
			<div class="d-flex justify-content-center">
				<div class="spinner-border" role="status">
					<span class="sr-only"></span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container">
				<h1>{pageInfo.data.title[0].text}</h1>
				<hr />
				{pageInfo.data.article.map((a) => {
					return (
						<div>
							{/* <img className="img" src=""/> */}
							<p>{a.paragraph[0].text}</p>
						</div>
					);
				})}
			</div>
		);
	}
}
