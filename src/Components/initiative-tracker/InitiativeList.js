import React from 'react';
import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as initiativeActions from '../../actions/initiativeActions';

//Initiative List mapping all characters passed in
class InitiativeList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    render() {
        const {characters} = this.props;

        return (
            <div className="initList col row align-items-center">
                <div className="col-1" onClick={() => this.props.updateCharList('back')}>
                    <i className="fa fa-arrow-circle-left fa-2x col btn" aria-hidden="true"></i>
                </div>
                <div className="col-10 row">
                    {
                        (!Array.isArray(characters) || !characters.length) ?

                            <div className="jumbotron">
                                <h1 className="display-4">Please add a character</h1>
                                <hr className="my-4" />
                                <p className="lead">Once you add a character the tracker will be active</p>
                            </div> :
                            characters.map((char, i) => <CharacterCard key={i} {...char} index={i} />)
                    }

                </div>
                <div className="col-1" onClick={() => this.props.updateCharList('forward')}>
                    <i className="fa fa-arrow-circle-right fa-2x col btn" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        characters: state.InitiativeList
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(initiativeActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeList);