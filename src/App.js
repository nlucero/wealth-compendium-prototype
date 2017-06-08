import React, { Component } from 'react';
import CompendiumTab from './tabs/compendium/compendiumTab';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import './App.css';

injectTapEventPlugin();

const EmptyTab = () => {
    return (
        <div className="work-in-progress">
            <img src="/content/Work_In_Progress.png" alt="" />
        </div>
    );
};

const TabContent = ({ tabName }) => {
    switch (tabName) {
        case 'compendium':
            return <CompendiumTab />;

        default:
            return <EmptyTab />;
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentTab: 'compendium'
        }
    }

    getClass(tabName) {
        if (this.state.currentTab === tabName) {
            return 'nav-tab active';
        }

        return 'nav-tab inactive';
    }

    navigate(tabName) {
        this.setState({
            currentTab: tabName
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="Wealth Compendium" showMenuIconButton={false}></AppBar>
                    <Toolbar>
                        <ToolbarGroup>
                            <ToolbarTitle text="Compendium" className={this.getClass('compendium')} onClick={() => this.navigate('compendium')} />
                            <ToolbarTitle text="Document Library" className={this.getClass('document')} onClick={() => this.navigate('document')} />
                            <ToolbarTitle text="Calendar" className={this.getClass('calendar')} onClick={() => this.navigate('calendar')} />
                        </ToolbarGroup>
                    </Toolbar>
                    <TabContent tabName={this.state.currentTab} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
