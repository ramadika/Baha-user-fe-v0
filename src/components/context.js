import React, { Component } from 'react';
export const DataContext = React.createContext();
export const Provider = DataContext.Provider;

export class DataProvider extends Component {
    
    state = {
    }

    render() {
        const contextValue = {
        }

        return (
            <DataContext.Provider value={contextValue}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}
