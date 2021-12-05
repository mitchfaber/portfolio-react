import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";

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
				setFeatured((prevFeatured) => {
					return [
						...prevFeatured,
						{ title: response.results[0].data.title[0].text, category: response.results[0].data.category.id },
					];
				});
			}
		};
		fetchFeatured();
	}, []);

	function getCategory(catID) {
		const fetchCat = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.id", catID)]);
			if (response) {
				console.log(response.results[0].data.category[0].text);
				return `"${response.results[0].data.category[0].text}"`;
			}
		};
		fetchCat();
	}

	return (
		<div className="container">
			<h1>{title}</h1>
			<p>{paragraph}</p>
			<div className="row">
				{featured.map((f) => {
					return (
						<div className="col">
							<div className="card">
								<div className="card-title">{f.title}</div>
								<div className="card-text">{getCategory(f.category)}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
