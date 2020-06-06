import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<div
			className="footer"
			style={{
				position: "absolute",
        bottom: 0,
        width: "100%",
				padding: "32px",
				backgroundColor: "#66ffe0"
			}}
		>
			<Container>
				<Row>
					<Col sm={12} md={4}>
						<div>
							<h3>Sitemap</h3>
						</div>
						<ul>
							<li>
								<a
									href="https://www.facebook.com/soompi"
									title="Facebook"
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/soompi"
									title="Twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/user/soompi"
									title="Youtube"
									target="_blank"
									rel="noopener noreferrer"
								>
									Youtube
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/soompi"
									title="Instagram"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://soompi.tumblr.com/"
									title="Tumblr"
									target="_blank"
									rel="noopener noreferrer"
								>
									Tumblr
								</a>
							</li>
							<li>
								<a
									href="https://plus.google.com/+SoompiKpop"
									title="Google+"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google+
								</a>
							</li>
						</ul>
					</Col>
					<Col sm={12} md={4}>
          <div>
							<h3>Follow Us</h3>
						</div>
						<ul>
							<li>
								<a
									href="https://www.facebook.com/soompi"
									title="Facebook"
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/soompi"
									title="Twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/user/soompi"
									title="Youtube"
									target="_blank"
									rel="noopener noreferrer"
								>
									Youtube
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/soompi"
									title="Instagram"
									target="_blank"
									rel="noopener noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									href="https://soompi.tumblr.com/"
									title="Tumblr"
									target="_blank"
									rel="noopener noreferrer"
								>
									Tumblr
								</a>
							</li>
							<li>
								<a
									href="https://plus.google.com/+SoompiKpop"
									title="Google+"
									target="_blank"
									rel="noopener noreferrer"
								>
									Google+
								</a>
							</li>
						</ul>
          </Col>
					<Col sm={12} md={4}>
          <div>
							<h3>Language</h3>
						</div>
						<ul>
							<li>
								<a
									href="https://www.facebook.com/soompi"
									title="Facebook"
									target="_blank"
									rel="noopener noreferrer"
								>
									Facebook
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/soompi"
									title="Twitter"
									target="_blank"
									rel="noopener noreferrer"
								>
									Twitter
								</a>
							</li>

						</ul>
          </Col>
				</Row>
			</Container>
		</div>
	);
};

export default Footer;
