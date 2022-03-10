import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionButton = ({ name, onClickAction }) => {
    return (
        <Btn type='button'
        name={name}
        onClick={onClickAction}
        >
            {name}
        </Btn>
    );
};

const Btn = styled.button`
    margin-right: 15px;
    box-shadow: 2px 3px 3px 0px #0B325E;
    &:last-child {
        margin-right: 0;
    }
`;


OptionButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClickAction: PropTypes.func.isRequired,
};

export default OptionButton;