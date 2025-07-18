import React from 'react';
import styled from 'styled-components';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = ({ sortBy }) => {
    const shoeSorted = () => {
        if (sortBy === "price") {
            return SHOES.slice().sort((a, b) => a.price - b.price);
        }
        return SHOES.slice().sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    };
    const sortedShoes = shoeSorted();
    return (
        < Wrapper >
            {
                sortedShoes.map((shoe) => (
                    // <ShoeCard key={shoe.slug} {...shoe} />
                    <ShoeWrapper key={shoe.slug}>
                        <ShoeCard {...shoe} />
                    </ShoeWrapper>
                ))
            }
        </Wrapper >
    );
};

const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 32px;
`;

const ShoeWrapper = styled.div`
min-width: 250px;
flex: 1;
`;

export default ShoeGrid;
