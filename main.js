// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


/* Each P.aequor individual has a unique specimen number
this should not be changed or reset.
*/
let _individualCount = 1; 

// Factory Function to create new P.aequor individuals
function pAequorFactory(_individualCount, arr){
  return {
    _specimenNumber: _individualCount += 1, 
    dna: arr,
    mutate(){
      // Generate random number between 0 - 14
      const baseNumber = Math.floor(Math.random() * 15);
      // Record the original value of the base that will change during mutation
      const baseToChange = this.dna[baseNumber];
      // Choose a random base (different from original) to replace base to change
      while(this.dna[baseNumber ] === baseToChange){
        this.dna[baseNumber] = returnRandBase();
      }
    }
  };
};









