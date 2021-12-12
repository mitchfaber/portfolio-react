import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Prismic from "@prismicio/client";
import { v4 as uuidv4 } from "uuid";

export default function Homepage() {
	const apiEndpoint = "https://portfolio-reactmf.prismic.io/api/v2";
	const accessToken =
		"MC5ZYXZRVmhNQUFDQUExaFZD.77-9JELvv71bbO-_ve-_vUrvv73vv71I77-977-977-977-977-977-9Cu-_vXl1ATvvv73vv73vv73vv73vv73vv73vv73vv70";
	const Client = Prismic.client(apiEndpoint, { accessToken });
	const [paragraph, setParagraph] = useState();
	const [title, setTitle] = useState();
	const [featured, setFeatured] = useState([]);

	useEffect(() => {
		const fetchPageData = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.type", "homepage")]);
			if (response) {
				setParagraph(response.results[0].data.paragraph[0].text);
				setTitle(response.results[0].data.title[0].text);
			}
		};
		fetchPageData();

		const fetchFeatured = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.tags", ["Featured"])]);
			if (response) {
				console.log(response.results);
				response.results.forEach((result) => {
					setFeatured((prevFeatured) => {
						return [
							...prevFeatured,
							{ id: result.id, title: result.data.title[0].text, teaser: result.data.teaser[0].text },
						];
					});
				});
			}
		};
		fetchFeatured();
	}, []);

	return (
		<div className="container">
			<h1>{title}</h1>
			<hr />
			<p>{paragraph}</p>
			<div className="row">
				<h3>Featured</h3>
				{featured.map((f) => {
					return (
						<div key={uuidv4()} className="col-lg-3">
							<div className="card">
								<div className="card-body">
									<h3 className="card-title">{f.title}</h3>
									<div className="card-text">{f.teaser}</div>
									<Link to={`/samples/${f.id}`} className="btn btn-primary">
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
