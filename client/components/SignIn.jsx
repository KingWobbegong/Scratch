import React from 'react';

const hiddenNukeDevBox = [];
function armZeMissiles(){
    const submittedPassPhrase = document.getElementById('launchCodes').value;

return fetch('http://localhost:3000/api/database/flush', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ passPhrase: submittedPassPhrase }),
  }).then(alert("NEEnoooNEEEnooooNEEEnooooNEEEEnooo \n Submitted:"+submittedPassPhrase))

}
if(process.env.NODE_ENV === 'development'){
hiddenNukeDevBox.push(
<div className="nukeBox">
    Look, I'm not going to give you the passphrase to nuke the pictures table.
    If you can't find it in the SQLController... probably shouldn't be using it.
    <p></p><p></p>
    <form onSubmit={armZeMissiles}>
        <label>
          Passphrase:
          <input type="text" id="launchCodes"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
</div>




)




}
const SignIn= props =>(
    <div className='signInComponent'>
        <h1> Sign in </h1>
       {hiddenNukeDevBox}
    </div>
);

export default SignIn; 