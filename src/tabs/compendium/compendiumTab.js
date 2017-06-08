import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Overview from './overview';
import Insurance from './insurance';
import StockOptions from './stockOptions';
import WealthAllocation from './wealthAllocation';
import './compendiumTab.css';

const CompendiumMenu = ({ onMenuItemClicked }) => {
    return (
        <Menu>
            <MenuItem primaryText="Overview" onTouchTap={() => onMenuItemClicked('overview')} />
            <MenuItem primaryText="Insurance" onTouchTap={() => onMenuItemClicked('insurance')} />
            <MenuItem primaryText="Wealth Alocation" onTouchTap={() => onMenuItemClicked('wealth_allocation')} />
            <MenuItem primaryText="Stock Options" onTouchTap={() => onMenuItemClicked('stock_options')} />
        </Menu>
    );
};

class CompendiumTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selectedMenuItem: 'overview'
        }

        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    }

    componentDidMount() {
        this.setState({ open: true });
    }

    onMenuItemClicked(menuItem) {
        this.setState({
            open: false,
            selectedMenuItem: menuItem
        });
    }

    renderContent() {
        switch (this.state.selectedMenuItem) {
            case 'overview':
                return <Overview />;
            case 'insurance':
                return <Insurance />;
            case 'wealth_allocation':
                return <WealthAllocation />;
            case 'stock_options':
                return <StockOptions />;
        }
    }

    render() {
        return (
            <div>
                <Drawer
                    children={<CompendiumMenu onMenuItemClicked={this.onMenuItemClicked} />}
                    open={this.state.open}
                    docked={false}
                    containerStyle={{ height: 'calc(100% - 120px)', top: 120 }}
                    overlayStyle={{ opacity: 0 }}
                    onRequestChange={(open) => this.setState({ open })} />
                {this.renderContent()}
            </div>
        );
    }
};

export default CompendiumTab;