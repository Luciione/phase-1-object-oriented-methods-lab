// Define the constructor function
function BoardMember(name, homeState, training) {
    // Initialize instance variables
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  
    // Add methods to the constructor function
    this.veto = function() {
      return "No, I must disagree";
    };
  
    this.approve = function() {
      return "You can do that!";
    };
  
    this.doCharity = function() {
      return "I like to help people.";
    };
  
    this.releasePressStatement = function() {
      return "You will see great things from Scuber.";
    };
  
    this.sayHi = function() {
      return "Hi, my name is " + this.name + ". I am from " + this.homeState + ", and I was trained in " + this.training + ".";
    };
  }
  
  // Run the tests
  describe('boardMembers', function() {
    describe('boardMember Constructor Function', function() {
      let polishedBoardMember;
      before(() => {
        polishedBoardMember = new BoardMember("Mr. Polished", "New York", "law")
      })
      it('can create a BoardMember with a name, home state, and training', function() {
        expect(polishedBoardMember).to.be.an.instanceof(BoardMember)
        expect(polishedBoardMember.name).to.equal("Mr. Polished")
        expect(polishedBoardMember.homeState).to.equal("New York")
        expect(polishedBoardMember.training).to.equal("law")
      })
    })
  
    
  
  })
  