import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	background-color: black;
	display: flex;
	letter-spacing: -1px;
	align-items: center;
	height: 3rem;
	width: 100%;
`;

const PseudoLink = styled.a`
	padding: 1rem 2rem;
	color: white; 
	text-decoration: none;
`

const RouterLink = PseudoLink.withComponent(Link);

class Header extends Component {
	render(){
		return (
			<HeaderWrapper>
				<RouterLink to="/">LeomarAmiel</RouterLink>
			</HeaderWrapper>
		);
	}
}

export default Header;