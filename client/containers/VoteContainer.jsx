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
        // let randomArr = this.props.photos;
        // function shuffleArray(array) {
        //     for (let i = array.length - 1; i > 0; i--) {
        //         const j = Math.floor(Math.random() * (i + 1));
        //         [array[i], array[j]] = [array[j], array[i]];
        //     }
        // }
        // shuffleArray(randomArr);
        if(!this.props.photos[0]) {
            return (
                <div className='spinner'>
                    
                </div>
            );
        }
       else {
        console.log("this.props.photos[0]", this.props.photos[0])

    return(
        
        <div className='voteContainer'>
        <div className='voteComponent'>
            <Vote photo={this.props.photos[1].filepath}/>
        </div>
    </div>
    )
    }
}
}



export default connect(mapStateToProps, mapDispatchToProps)(VoteContainer);