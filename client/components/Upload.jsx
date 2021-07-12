import React from 'react';


const Upload = props => (
    <div className='uploadComponentHead'>
        <div className='upload'>
            <h1>Hello Upload</h1>
            <input 
            type="file" 
            onChange={
                
/*THIS IS THE (anonymous) FUNCTION THAT WILL, ON CHANGE 
(AKA USER SELECTS A PICTURE, HITS OK)
SEND THIS PHOTO TO THE BACKEND API IN THE CORRECT FORMAT 
FOR IT TO BE SAVED INTO OUR IMAGES FOLDER!!!!

NOTE HOW I'M SUPER COOL AND THE SERVER RESPONDS WITH
THE RESULTANT FILEPATH (SUPER IMPORTANT: IT'S IN TEXT, NOT JSON!!!)
WE NEED TO GET ALL OF THIS STUFF OUT OF HERE AND INTO ACTIONS, CREATE APPROPRIATE DISPATCHES,
ALL OF THAT, BUT THIS FUNCTION AND THE BACKEND FUNCTIONALITY NOW EXIST!

Also note that the parameter for this function ("e") is the event that triggered
the onChange event listener.  


!!!!!!!!!!!!!!!!IMPORTANT!!!!!!!!!!!!!!!!!!!
!! !! e.target.value = a string that refers to the file name,
!! !! e.target.files[0] = the file itself 
(we're not dealing with multiple files: THIS IS BEST SHOT!)
THESE FACTS ARE TRUE BECAUSE EVENTS ARE WEIRD AND THEY JUST ARE! THEY ARE NOT ARBITRARY
(except for me calling the event 'e', you can call it whatever you like), I DID NOT COME UP
WITH THE EVENT RESPONSE OBJECT STRUCTURE, ASSUME AT THIS POINT IT IS WHAT IT IS!
!!!!!!!!!!!!!!!!!!!!!!!

Also to do: we're going to want to set an initial 'value' for this input in state,
that initial value has to be null (otherwise it won't work.  it would be a security risk to allow
websites to automagically target files on someone's computer)
and on completion of all the work, have the reducer set it equal to null again.

--Mike
*/
                
            e=>{
                const filename = e.target.value;
                const formData = new FormData();
                formData.append(filename, e.target.files[0])
                fetch('http://localhost:3000/api/upload', {
                    method: 'POST',
                    body: formData
                })
                .then(response=>response.text())
                .then(response=>{
                    /*
                    NOTE:
                    response has now been processed and is a string that is equal to the new
                    filepath of the file you just uploaded to the server. So, you know,
                    shove it into state or something? Add it to the array of filepaths we have?
                    Send it to the database? I have faith, you'll kick ass
                    */
                    console.log("this is gonna be your filepath: ",response)})
                .catch(err=>console.log('whoops: ', err));
            }
        
        
        }
            accept="image/png, image/jpeg"
            />
        </div>
    </div>
)

export default Upload;