import React from 'react';

import PageBase from '../components/PageBase';

import {grey400} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';
import Divider from 'material-ui/Divider';

class FormPage extends React.Component{
    render(){
        const styles = {
            toggleDiv: {
                maxWidth: 300,
                marginTop: 40,
                marginBottom: 5
            },
            toggleLabel: {
                color: grey400,
                fontWeight: 100
            },
            buttons: {
                marginTop: 30,
                float: 'right'
            },
            saveButton: {
                marginLeft: 5
            }
        };

        return(
            <PageBase title="Form Page"
                            navigation="Application / Form Page">
            <form>
                <TextField
                    hintText="Name"
                    floatingLabelText="Name"
                    fullWidth={true}
                />

                <SelectField
                    floatingLabelText="City"
                    value=""
                    fullWidth={true}>
                    <MenuItem key={0} primaryText="Changigarh"/>
                    <MenuItem key={1} primaryText="London"/>
                    <MenuItem key={2} primaryText="Mohali"/>
                </SelectField>

                <DatePicker
                    hintText="Expiration Date"
                    floatingLabelText="Expiration Date"
                    fullWidth={true}/>

                <div style={styles.toggleDiv}>
                    <Toggle
                        label="Disabled"
                        labelStyle={styles.toggleLabel}
                    />
                </div>

                <Divider/>

                <div style={styles.buttons}>
                    <RaisedButton label="Cancel"/>

                    <RaisedButton label="Save"
                                  style={styles.saveButton}
                                  type="submit"
                                  primary={true}/>
                </div>
            </form>
            </PageBase>
        )
    }
}

export default FormPage;