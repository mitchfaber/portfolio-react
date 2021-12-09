import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Prismic from "@prismicio/client";
import { v4 as uuidv4 } from "uuid";

export default function Sample() {
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
				console.log(response.results[0]);
				setPageInfo(response.results[0]);
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
				<h1>{pageInfo.data.title[0].text}</h1>
				<div className="row">
					{pageInfo.tags.map((t) => {
						return (
							<div className="col">
								<p className="tag p-1">{t}</p>
							</div>
						);
					})}
				</div>
				<hr />
				{pageInfo.data.article.map((a) => {
					return (
						<div key={uuidv4()}>
							{a.image.src !== undefined ? <img className="img-fluid" alt="section" src="" /> : ""}
							{a.subtitle[0] !== undefined ? <h2>{a.subtitle[0].text}</h2> : ""}
							{a.paragraph[0] !== undefined ? <p>{a.paragraph[0].text}</p> : ""}
							{a.quote[0] !== undefined ? (
								<blockquote className="blockquote text-center">
									"<p className="mb-0">{a.quote[0].text}</p>"
								</blockquote>
							) : (
								""
							)}
						</div>
					);
				})}
				<div className="btn-toolbar">
					{pageInfo.data.github.url !== undefined ? (
						<div className="btn-group m-1">
							<a target={pageInfo.data.github.target} className="btn btn-secondary" href={pageInfo.data.github.url}>
								Github
							</a>
						</div>
					) : (
						""
					)}

					{pageInfo.data.live.url !== undefined ? (
						<div className="btn-group m-1">
							<a target={pageInfo.data.live.target} className="btn btn-secondary" href={pageInfo.data.live.url}>
								Live Site
							</a>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}
