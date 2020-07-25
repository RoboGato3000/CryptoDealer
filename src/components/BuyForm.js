import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FormControl from '@material-ui/core/FormControl';
import TextField from 'material-ui/TextField';
import Input from '@material-ui/core/Input';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

import Recaptcha from 'react-google-invisible-recaptcha';

class BuyForm extends Component {

    state = {
        coin: '',
        amount: 1,
        email: 'ejemplo@gmail.com',
        verified: false,

        coinError: "Ingresar una criptomoneda  valida",
        amountError: "Ingresar un monto valido",
        emailError: "Ingresar correo valido",
    }


    handleChange = input => e => {
        this.setState(
            {
                [input]: e.target.value
            }
        )
    }

    sendMessage = () => {
        this.recaptcha.execute();
    }

    onResolved = () => {
        this.setState({verified: true})
        console.log(this.state);
    }

    render() {

        let confirm = this.state.verified ?
            (<div>Message Sent!</div>) : null;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Compra Criptomonedas"/>
                        {confirm}
                        <br/>
                    <Input
                        required={true}
                        hintText="Ingresa Monto"
                        floatingLabelFixed="BTC"
                        onChange={this.handleChange('amount')}
                        errorText={this.state.amountError}
                    />
                    <br/>
                    <TextField
                        hintText="Correo"
                        floatingLabelFixed="ejemplo@gmail.com"
                        onChange={this.handleChange('email')}
                        errorText={this.state.emailError}
                    />
                    <br/>
                    <RaisedButton
                        label="comprar"
                        style={StyleSheet.button}
                        onClick={this.sendMessage}
                    />
                    <br/>
                    <Recaptcha
                        ref = { ref => this.recaptcha = ref }
                        sitekey="6LfJ7LUZAAAAAFZVy7nDyAuVHnV5BkxONWJDcIEL"
                        onResolved={ this.onResolved }
                    />
                </React.Fragment>
            </MuiThemeProvider>

        )
    }


}

export default BuyForm;