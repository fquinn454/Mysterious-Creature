# Mysterious-Creature
Simulate the DNA mutation in P. aequor organism

<h3>Instructions</h3>
<p>Run from terminal with the command node main.js</p>
<h3>Features</h3>
<ul>
    <li>
        <p><strong>Factory function</strong> pAequorFactor (specimenNum, dna) that creates P. Aequor objects with unique_specimen numbers and a dna strand</p>
    </li>
    <li>
        <Strong>pAequor object with functions</Strong>
            <ul>
                <li>
                    <p>mutate() changes single base in DNA strand</p>
                </li>
                <li>
                    <p>compareDNA() works out % simalarity in DNA compared to another pAequor object</p>
                </li>
                <li>
                    <p>willLikelySurvive() works out % C or G bases and returns true (will likely survive) for values > 60%</p>
                </li>
                <li>
                    <p>compareDnaPercentage(pAequor) helper function for mostRelated() returns the percentage similarity in the dna between this.paequor and another paequor object</p>
                </li>
            </ul>
    </li>
    <li>
        <p><strong>createSampleArr()</strong> creates an array of 30 pAequor objects that will likely survive</p>
    </li>
    <li>
        <p><strong>EXTENSION complementaryDna(pAequor)</strong> returns a strand of dna complementary 
        to that of the parameter pAequor.dna</p>
    </li>
    <li>
        <p><strong>EXTENSION mostRelated(sampleArr)</strong> returns the two most closely related individuals from a array of p.aequor individuals</p>
    </li>
    
</ul>
