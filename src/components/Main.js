import React, { Component } from 'react';

class Main extends Component {
  render() {
    let status, classname;
    if(this.props.voted) {
        status = <span className="badge badge-success" style={{fontSize: "14px"}}>Vote Casted</span>;
        classname = 'd-none';
    } else {
        status = <span className="badge badge-danger" style={{fontSize: "14px"}}>Yet to Vote</span>;
    }

    return (
      <div id="content" className="mt-3">
      <h2 className="text-center">Your Vote matters, so do You.</h2>
        <div className="card">
            <div className="card-header" style={{background: "#D3E0EA"}}>
                <strong>Voter's Status: </strong> {status}
            </div>    
            <div className="card-body">
                <table className="table table-sm table-bordered">
                    <thead className="thead-light text-center">
                        <tr>
                            <th>Candidates</th>
                            <th>Votes</th>
                        </tr>
                    </thead>
                    {this.props.candidates.map((candidate) => {
                        return (
                            <tbody>
                                <td>{candidate.name}</td>
                                <td className="text-center">{candidate.votes}</td>
                            </tbody>
                        );
                    })}
                </table>
                <div className={classname} id="vote-form">
                    <form className="d-flex flex-column align-item-center" onSubmit={
                        (event) => {
                            event.preventDefault();
                            let option;
                            
                            let radio = document.getElementsByName('candidate');
                            
                            for(let i=0; i<radio.length; i++) {
                                if(radio[i].checked) {
                                    option = radio[i].id;
                                }
                            }
                            
                            this.props.castVote(option);
                        }
                    }>
                        <h5 className="text-center">Vote Here</h5>
                        <div className="container border">
                            <div className="row">
                                <div className="col-2 border"><strong>Sr. No.</strong></div>
                                <div className="col-5 border"><strong>Candidate Name</strong></div>
                                <div className="col-3 border"><strong>Party</strong></div>
                                <div className="col-2 border"><strong>Option</strong></div>
                            </div>
                            {this.props.candidates.map((candidate) => {
                                return (
                                <div className="row">
                                    <div className="col-2 border text-center">{candidate.id}</div>
                                    <div className="col-5 border"><label for={candidate.id}>{candidate.name}</label></div>
                                    <div className="col-3 border">{candidate.party}</div>
                                    <div className="col-2 border text-center">
                                        <input type="radio" id={candidate.id} name="candidate"></input>
                                    </div>
                                </div>
                                );
                            })}
                        </div><br/>
                        <button className="btn btn-primary w-25" type="submit">Vote!</button>
                    </form>
                </div>
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