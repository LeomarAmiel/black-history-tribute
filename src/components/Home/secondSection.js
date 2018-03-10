import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	background-color: rgb(23, 23, 23);
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-flow: row nowrap;
`;

const Overlay = styled.div`
    border: 10px solid white;
    background: url(./assets/CarterGWoodson.png);
    background-repeat:  no-repeat;
    background-position: 50% 100%;
    background-size: contain;
    display: flex;
    align-items: center;
    height: 17.5rem;
    width: 12rem;
	@media(max-width: 600px) {
		height: 350px
		width: 250px;
	}
`;

const OverlayText = styled.p`
    color: rgba(255, 255, 255, .8);
    font-size: 2rem;
    font-weight: 900;
	letter-spacing: 2px;
    margin: 1rem;
    line-height: 4rem;
    text-align: center;
    width: fit-content;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    width: 28rem;
`;
const Heading = styled.h3`
    color: white;
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 2rem;
    margin: 0;
    margin: 2rem;
    `;
    
const SecondHeading = styled.h4`
    color: white;
    margin: 0;
    margin-right: 2rem;
    font-family: Playfair Display;
    font-size: 1.25rem;
    font-weight: 400;
`;
    
const Description = styled.p`
    font-weight: 100;
    color: white;
    margin-top: 0;
    margin-right: 2rem;
`;

const SecondSection = (props) => (
	<Wrapper>
        <TextWrapper>
            <Heading>
                Carter G. Woodson
            </Heading>
            <SecondHeading>
                The Father of Black History
            </SecondHeading>
            <Description>
                <br/>
                <br/>
                In 1915, he founded the Association for the Study of Negro Life and History. An organization dedicated to the study and appreciation of African-American History.
                <br/>
                In February 1926, he launched the celebration of Negro History Week, a precursor to Black History Month.
            </Description>
        </TextWrapper>
		<Overlay>
            <OverlayText>
                The Mis-Education of the Negro
            </OverlayText>
		</Overlay>
	</Wrapper>
);

export {SecondSection};