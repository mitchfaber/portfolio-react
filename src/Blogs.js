import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

export default function Blogs() {
	const apiEndpoint = "https://portfolio-reactmf.prismic.io/api/v2";
	const accessToken =
		"MC5ZYXZRVmhNQUFDQUExaFZD.77-9JELvv71bbO-_ve-_vUrvv73vv71I77-977-977-977-977-977-9Cu-_vXl1ATvvv73vv73vv73vv73vv73vv73vv73vv70";
	const Client = Prismic.client(apiEndpoint, { accessToken });

	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchPageData = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.type", "category")]);
			if (response) {
				console.log(response.results[0]);
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
				<h1>Samples</h1>
				<hr />
				<div className="row">
					{blogs.map((s) => {
						return (
							<div key={uuidv4()} className="col-lg-3">
								<div className="card m-3">
									<div className="card-body">
										<h3 className="card-title">{s.data.title[0].text}</h3>
										<div className="card-text">{s.data.teaser[0].text}</div>
										<div className="row">
											{s.tags.map((t) => {
												return <div className="tag col">{t}</div>;
											})}
										</div>
										<Link to={`/blogs/${s.id}`} className="btn btn-primary">
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
