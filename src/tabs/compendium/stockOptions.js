import React, { Component } from 'react';
import ApiFetch from '../../libraries/apiFetch';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

const StockOptionRow = ({ stockOption }) => {
    return (
        <TableRow>
            <TableRowColumn>{stockOption.owner}</TableRowColumn>
            <TableRowColumn>{stockOption.name}</TableRowColumn>
            <TableRowColumn>{stockOption.symbol}</TableRowColumn>
            <TableRowColumn>{stockOption.grantDate}</TableRowColumn>
            <TableRowColumn>{stockOption.numberOfGrantedShares}</TableRowColumn>
            <TableRowColumn>{stockOption.currentMarketValue}</TableRowColumn>
            <TableRowColumn>{stockOption.updatedOn}</TableRowColumn>
            <TableRowColumn>{stockOption.strikePrice}</TableRowColumn>
            <TableRowColumn>{stockOption.stockOptionValue}</TableRowColumn>
            <TableRowColumn>{stockOption.expirationDate}</TableRowColumn>
            <TableRowColumn>{stockOption.qualified}</TableRowColumn>
        </TableRow>
    );
};

class StockOptions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stockOptions: []
        }
    }

    componentDidMount() {
        ApiFetch.get('stock-options').then((result) => this.setState({ stockOptions: result }));
    }

    render() {
        return (
            <Table>
                <TableHeader className={'no-wrap-header'} displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Owner</TableHeaderColumn>
                        <TableHeaderColumn>Stock Name</TableHeaderColumn>
                        <TableHeaderColumn>Stock Symbol</TableHeaderColumn>
                        <TableHeaderColumn>Grant Date</TableHeaderColumn>
                        <TableHeaderColumn style={ {whiteSpace: 'normal'} }>Number of Shares Granted</TableHeaderColumn>
                        <TableHeaderColumn>Current Market Value</TableHeaderColumn>
                        <TableHeaderColumn>Date Updated</TableHeaderColumn>
                        <TableHeaderColumn>Strike Price</TableHeaderColumn>
                        <TableHeaderColumn style={ {whiteSpace: 'normal'} }>Current Market Value of Stock Option</TableHeaderColumn>
                        <TableHeaderColumn>Expiration Date</TableHeaderColumn>
                        <TableHeaderColumn>Qualified or Nonqualified</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.state.stockOptions.map(stockOption => <StockOptionRow  key={stockOption._id} stockOption={stockOption} />)}
                </TableBody>
            </Table>
        );
    }
}

export default StockOptions;