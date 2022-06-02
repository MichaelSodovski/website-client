import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

    // getLayoutOptions = (): JSX.Element[] => {
    //     const optionsArray = [];
    //     this.state.layoutChoiceList.map((val, index) => {
    //       optionsArray.push(<option key={index} value={val}>{val}</option>);
    //     });
    //     return optionsArray;
    //   }

    return (
        <React.Fragment>
            <div>
                <p>{arrayMethods()}</p>
            </div>
        </React.Fragment>
    );
}