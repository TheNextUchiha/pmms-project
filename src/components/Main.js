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

export default Main;