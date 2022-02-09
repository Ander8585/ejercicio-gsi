import React from "react";
import "./TrendingCategoriesGrid.css";

const trendingList = [
	"Action Games",
	"Sport Games",
	"Adventure Games",
	"Arcade Games",
	"Fantasy Games",
	"Strategy Games",
	"Shooter Games",
	"All Categories",
];

const TrendingCategiesGrid = () => {
	return (
		<section className="trending-categories">
			{trendingList.map((el, index) =>
				index !== trendingList.length - 1 ? (
					<article className="category-item">
						{`/${index + 1}`}
						<br />
						{el}
						<br />
						{"▶"}
					</article>
				) : (
					<article className="category-item">
						{"VIEW ALL"}
						<br />
						{el}
						<br />
						{"▶"}
					</article>
				)
			)}
		</section>
	);
};

export default TrendingCategiesGrid;
