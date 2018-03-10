import React from 'react';
import styled from 'styled-components';

const FirstSectionWrapper = styled.div`
	height: calc(100vh - 3rem);
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	background: linear-gradient(transparent 10%, rgba(46, 46, 46, .7), rgba(23, 23, 23, 1)), url('./assets/mlk-march-on-dc.jpg') right no-repeat fixed;
	background-size: cover;
`;

const Overlay = styled.span`
	background-color: black;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-flow: column nowrap;
    width: 15rem;
    height: 20rem;
`;

const HeadingWrapper = styled.div`
	flex: 2;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-flow: column nowrap;
`

const ExploreButtonWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
`
const LineBreak = styled.br`
	line-height: 160%;
`;

const Heading = styled.h1`
    color: white;
    font-weight: 800;
	letter-spacing: .3em;
    padding-left: .5em;
	text-align: center;
`;

const ExploreButton = styled.button`
	color: white;
	background-color: transparent;
	border: 2px solid white;
	border-radius: 5px;
	letter-spacing: .2em;
	height: 40px;
	width: 100px;
	font-size: 14px;
	font-weight: 600;
`;

const FirstSection = (props) => (
	<FirstSectionWrapper>
		<Overlay>
			<HeadingWrapper>
				<Heading>Black<LineBreak/>History<LineBreak/>Month</Heading>
			</HeadingWrapper>
			<ExploreButtonWrapper>
				<ExploreButton>
					Explore
				</ExploreButton>
			</ExploreButtonWrapper>
		</Overlay>
	</FirstSectionWrapper>
)

export {FirstSection};