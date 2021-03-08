pragma solidity ^0.5.0;

contract Election {
    // Model a Candidate
    struct Candidate {
        int id;
        string name;
        uint voteCount;
    }

    // Store accounts that have voted
    mapping(address => bool) public voters;
    // Store & Fetch Candidates
    mapping(int => Candidate) public candidates;
    // Store Candidates Count
    int public candidatesCount=0;

    // voted event
    event votedEvent (
        int indexed _candidateId
    );

    constructor() public {
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
    }

    function addCandidate(string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }

    function getCandidatesCount() view public returns(int) {
        return candidatesCount;
    }

    // function getCandidate(candidateId) public view returns(uint, string, uint) {
    //     return ()
    // }

    function vote(int _candidateId) public {
        // require that they haven't voted before
        require(!voters[msg.sender]);

        // require a valid candidate
        require(_candidateId > 0 && _candidateId <= candidatesCount);

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote Count
        candidates[_candidateId].voteCount ++;

        // trigger voted event
        emit votedEvent(_candidateId);
    }
}