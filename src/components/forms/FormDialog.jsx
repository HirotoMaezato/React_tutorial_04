import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput';


export default class FormDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            discription: ""
        }

        this.inputName = this.inputName.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputDiscription = this.inputDiscription.bind(this);
    }

    inputName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    inputEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    inputDiscription = (event) => {
        this.setState({
            discription: event.target.value
        })
    }

    submitForm = () => {
        const name = this.state.name;
        const email = this.state.email;
        const discription = this.state.discription;

        const paylode = {
            text: 'お問い合わせがありました\n' + 
                    'お名前：' + name + '\n' + 
                    'Email：' + email + '\n' + 
                    '内容：\n' + discription 
        }

        const url = 'https://hooks.slack.com/services/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'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(paylode)
        }).then(() => {
            alert('送信が完了したっぜぇぇ！')
            this.setState({
                name: "",
                email: "",
                discription: "",
            })
            return this.props.handleClose()
        })
    }

    render() {
        return(
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
             >
            <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
            <DialogContent>
              <TextInput
                label={"お名前(必須)"}
                multiLine={false}
                rows={1}
                value={this.state.name}
                type={"text"}
                onChange={this.inputName}
              />
              <TextInput
                label={"メールアドレス(必須)"}
                multiLine={false}
                rows={1}
                value={this.state.email}
                type={"text"}
                onChange={this.inputEmail}
              />
              <TextInput
                label={"お問い合わせないよう(必須)"}
                multiLine={true}
                rows={5}
                value={this.state.discription}
                type={"text"}
                onChange={this.inputDiscription}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.props.handleClose} color="primary">
                キャンセル
              </Button>
              <Button onClick={this.submitForm} color="primary" autoFocus>
                送信する
              </Button>
            </DialogActions>
          </Dialog>
        )
    }
}