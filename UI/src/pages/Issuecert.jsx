import React from 'react'

const Issuecert = () => {
  return (
<>
        <div class="ml-1 p-3">
            <h3>Issue New Certificate</h3>
            <form action="submit"  />
                <label for="course">Select course*</label><br/>
                <select name="course" id="course" class="border rounded mt-1 p-2 w-full">
                    <option value="cba" selected>Certified Blockchain Associate</option>
                    <option value="CED">Certified Ethereum Developer</option>
                    <option value="CHF">Certified Hyperledger Fabric Developer</option>
                </select><br/><br/>
                <label for="certificate-id">Certificate ID*</label><br/>
                <input type="password" name="certificate-id" id="certificate-id" placeholder="Certificate ID" class="border rounded mt-1 p-2 w-full"/><br/><br/>
                <label for="candidate-name">Candidate Name*</label><br/>
                <input type="text" name="candidate-name" id="candidate-name" placeholder="Name" class="border rounded mt-1 p-2 w-full"/><br/><br/>
                <label for="grade">Select Grade*</label><br/>
                <select name="grade" id="grade" class="border rounded mt-1 p-2 w-full">
                    <option value="S" selected>S</option>
                    <option value="A">AHBFHBFAHBFBFBABBFB</option>
                    <option value="B">B</option>
                </select><br/><br/>
                <label for="issue-date">Issue Date *</label><br/>
                <input type="text" name="issue-date" id="issue-date" placeholder="dd/mm/yyyy" class="border rounded mt-1 p-2 w-full"/><br/><br/><br/>
                <a href='/download'><input type="button" value="Issue Certificate" class="bg-green-300 p-2 border-none rounded"/></a>
            
        </div>
    
    </>


  )
}

export default Issuecert