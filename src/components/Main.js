import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <div id="content" className="mt-3">
      <h2 className="text-center">Your Vote matters, so do You.</h2>
        <div className="card">
            <div className="card-header">
                <strong>Voter's Status: </strong>
            </div>    
            <div className="card-body">    
                THE FORM GOES HERE....
            </div>
        </div>
    </div>
    );
  }
}

/*
<table className="table table-borderless text-muted text-center">
            <thead>
                <tr>
                    <th scope="col">Staking Balance</th>
                    <th scope="col">Reward Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} mDai</td>
                    <td>{window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')} DAPP</td>
                </tr>
            </tbody>
        </table>
        <form className="mb-3" onSubmit={
                    (event) => {
                        event.preventDefault();
                        let amount;
                        amount = this.input.value.toString();
                        amount = window.web3.utils.toWei(amount, 'Ether');
                        this.props.stakeTokens(amount);
                    }
                }>
                    <div>
                        <label className="float-left"><strong>Stake Tokens</strong></label>
                        <span className="float-right text-muted">
                            Balance: {window.web3.utils.fromWei(this.props.daiTokenBalance, 'Ether')}
                        </span>
                    </div>
                    <div className="input-group mb-4">
                        <input type="text" 
                            className="form-control form-control-lg" 
                            ref={(input) => {this.input = input}}
                            placeholder="0" 
                            required 
                        />
                        <div className="input-group-append">
                            <div className="input-group-text">
                                
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block btn-lg">Stake!</button>
                </form>
                <button
                    type="submt"
                    className="btn btn-link btn-block btn-sm"
                    onClick={(event) => {
                        event.preventDefault()
                        this.props.unstakeTokens()
                    }}
                >
                    Unstake!
                </button>

<img src={dai} height="32" alt="" /> &nbsp;&nbsp;&nbsp; mDAI
*/

export default Main;