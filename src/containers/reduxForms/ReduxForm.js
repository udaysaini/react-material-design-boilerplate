import React from 'react';
import PageBase from '../../components/PageBase';

import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

class ReduxForm extends React.Component {

    constructor(){
        super();
        this.state = {
            name : '',
            team : '',
            position: '',
            open: false,
        }
    }

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleTeam = (event) => {
    this.setState({ team: event.target.value })
    console.log('State Changed')
}



    renderText(field) {
        const { meta : { touched , error }} = field; // de structuring the whole meta.touched and meta.error.
        console.log('Field', field);
        return(
            <TextField
                name={field.name}
                hintText={field.floatingLabelText}
                style={{maxWidth: 300, marginRight: 30 }}
                floatingLabelText={field.floatingLabelText}
                onChange={this.handleTeam}
            />
        )

    }


    render(){
        const styles = {
            textField: {
                maxWidth: 400,
                marginRight: 30
            },
            buttonSumbit: {
                margin: 15
            }
        };

        const actions = [
            <RaisedButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <RaisedButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];


        return(
            <div>
                <PageBase title="Redux Form" navigation='Application / Redux Form'>
                    <form>
                        <TextField
                            style={styles.textField}
                            hintText="First Name"
                            floatingLabelText="First Name"
                        />

                        <Field
                            name="footballClub"
                            floatingLabelText="Football Club"
                            component={this.renderText}
                        />

                        <TextField
                            hintText="Last Name"
                            style={styles.textField}
                            floatingLabelText="Last Name"
                        />
                    </form>
                    <div>
                        <RaisedButton label="Submit"
                                      onClick={()=> { this.setState({open: true}, console.log('State',this.state))}}
                                      primary={true}
                                      style={styles.buttonSize}
                        />
                    </div>
                </PageBase>
                <PageBase title ='Values'>
                    <div>
                        Name :
                    </div>
                    <div>
                        Team : {this.state.team}
                    </div>
                    <div>
                        Position :
                    </div>
                </PageBase>

                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    Values of these arrays are : team :{this.state.team}
                </Dialog>

            </div>
        )
    }
}

export default reduxForm({
    form: 'ReduxForm'
})(ReduxForm);
