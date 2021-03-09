import React, { Component } from 'react';
import Web3 from 'web3';
import Navbar from './Navbar';
import Main from './Main';
import Election from '../abis/Election.json';

class App extends Component {
    async componentWillMount() {
        await this.loadWeb3();
        await this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = window.web3;
        const accounts = await web3.eth.getAccounts();

        this.setState({account: accounts[0]});

        // Load Election Contract
        const electionData = Election.networks[5777];   // Here, 5777 is the networkID of Ganache RPC

        if(electionData) {
            const election = new web3.eth.Contract(Election.abi, electionData.address);
            this.setState({election});
      
            const candidatesCount = await election.methods.candidatesCount().call();
            this.setState({candidatesCount});

            const voted = await election.methods.voters(this.state.account).call();
            this.setState({voted});

            for(let i=1; i<=this.state.candidatesCount; i++) {
                let cand = await election.methods.candidates(i).call();
                this.state.candidates.push({id: cand.id.toString(), name: cand.name, votes: cand.votes});
            }
        } else {
            window.alert('Election contract not deployed!');
        }

        this.setState({loading: false});
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            window.alert('Non-Ethereum browser detected. Consider trying Metamask!');
        }
    }

    // Cast vote (YET TO IMPLEMENT)
    // castVote = (candidateId) => {
    //   this.setState({loading: true});
    // }

    constructor(props) {
        super(props);
        this.state = {
            account: '0x0',
            election: {},
            candidatesCount: '0',
            candidates: [],
            voted: false,
            loading: true
        };
    }

    render() {
        let content;
        if(this.state.loading) {
            content = <h3 id="loader" className="text-center">Loading...</h3>
        } else {
            content = <Main 
            candidatesCount = {this.state.candidatesCount}
            candidates = {this.state.candidates}
            castVote = {this.castVote}
        />
        }

        return (
            <div>
                <Navbar account={this.state.account} />
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
                        <div className="content mr-auto ml-auto">
                            {content}
                        </div>
                        </main>
                    </div>
                </div>
        </div>
        );
    }
}

export default App;
