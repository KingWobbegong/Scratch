import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Vote from '../components/Vote';



const mapStateToProps = (state) => ({
    photos: state.photo.photoArray,
});


    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    
    
    const mapDispatchToProps = dispatch => ({
        getPicture: () => dispatch(actions.getPicture()),
        addVote: (e) => dispatch(actions.addVote(e)),
        downVote: () => dispatch(actions.downVote())
    /*key:value pairs like: 
    doAThing: ()=> dispatch(actions.doAThing()), 
    or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
    
    */
    });


class VoteContainer extends React.Component {
    constructor(props) {
        super(props);
        
    }
   
    componentWillMount() {
        this.props.getPicture();
        
    }
      

    render() {        
        const randomPhoto = this.props.photos[Math.floor(this.props.photos.length*Math.random())];
        if(!randomPhoto) {
            return (
                <div className='spinner'>
                </div>
            );
        }
        
       else {
        console.log("randomPhoto", randomPhoto)
    
    //     function shuffleArray(array) {
    //         for (let i = array.length - 1; i > 0; i--) {
    //             const j = Math.floor(Math.random() * (i + 1));
    //             [array[i], array[j]] = [array[j], array[i]];

    //         }
    //         return array
    //     }
    //     shuffleArray(this.props.photos);
    //     //randomArr = shuffleArray(randomArr)
    //     if(!this.props.photos[0]) {
    //         return (
    //             <div className='spinner'>
    //             </div>
    //         );
    //     }
        
    //    else {
    //     console.log("this.props.photos", this.props.photos)
    //     console.log('shuffleArray')
        
    return(
        
    <div className='voteContainer'>
        <div className='voteComponent'>
            <Vote photo={randomPhoto.filepath} addVote={this.props.addVote} _id={randomPhoto._id} downVote={this.props.downVote}/>
        </div>
    </div>
    )
    }
}
}



export default connect(mapStateToProps, mapDispatchToProps)(VoteContainer);