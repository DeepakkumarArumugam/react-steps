"use strict";
import React from 'react'
import Radium from 'Radium';

var style = {
    main: {
        display: 'flex',
        flexWrap: 'wrap',
        fontFamily: '"Helvetica Neue", Helvetica, Arial',
        fontWeight: 800,
        color: '#f3f3f3'
    },
    item: {
        display: 'flex',
        justifyContent: 'center',
        margin: '0.5em',
        height: 30,
        lineHeight: '30px',
        borderRadius: '0.4em',
        background: 'linear-gradient(to bottom, #7d7e7d 20%,#565656 100%)',
        boxShadow: '0px 1px 5px rgba(0,0,0,0.2)',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 0px'
    },
    itemFlat: {
        background: '#7d7e7d'
    },
    activeItem: {
        background: 'linear-gradient(to bottom, #f9c667 0%,#f79621 100%)'
    },
    activeFlatItem: {
        background: '#F8A50A'
    },
    doneItem: {
        background: 'linear-gradient(to bottom, #a4b357 0%,#75890c 100%)'
    },
    doneFlatItem: {
        background: '#656565'
    },
    arrow: {
        marginBottom: '-5px'
    },
    number: {
        padding: '0 0.5em 0  0.85em'
    },
    text: {
        fontSize: '0.8em',
        padding: '0 1em'
    }
};

class Arrow extends React.Component {
    render() {
        var {width, height} = this.props;
        return (
            <svg width={width || 14} height={height || 40} viewBox="0 0 14 40">
                <g transform="translate(-19.367715,-906.67177)">
                    <a transform="matrix(0.4059671,0,0,0.43302802,-11.844235,491.13986)">
                        <path style={{ fill:'#eeeeee', fillOpacity:1, fillRule:'evenodd', stroke:'none' }}
                              d="m 85.618002,1052.2217 -8.735048,-0.029 26.205146,-46.2839 -26.205146,-46.31291 8.735048,0 26.205138,46.31291 z"/>
                    </a>
                </g>
            </svg>
        );
    }
}

@Radium.Enhancer
class Steps extends React.Component {
    render() {
        const {flat} = this.props;

        const items = this.props.items.map((item, idx) => {
            return (
                <div key={idx} style={[
                    style.item,
                    flat && style.itemFlat,
                    item.isActive && (flat ? style.activeFlatItem : style.activeItem),
                    item.isDone && (flat ? style.doneFlatItem : style.doneItem)
                ]}>
                    <div style={style.number}>{idx + 1}</div>
                    <Arrow width={14} height={style.item.height}/>

                    <div style={style.text}>{item.text}</div>
                </div>
            );
        });

        return (
            <div style={style.main}>
                {items}
            </div>
        );
    }
}

export default Steps;
