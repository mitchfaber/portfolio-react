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

	useEffect(() => {
		const fetchPageData = async () => {
			const response = await Client.query([Prismic.Predicates.at("document.id", id)]);
			if (response) {
				console.log(response.results[0]);
				setPageInfo(response.results[0]);
			}
		};
		fetchPageData();
	}, []);

	return <div className="container">{pageInfo.data.title[0].text}</div>;
}
