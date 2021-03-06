import React, { useState } from 'react';
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
})

export default withStyles(styles)(function CustomerAdd(props) {
    const { classes } = props;
    const [state, setState] = useState({
        file: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: '',
        open: false
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        addCustomer()
            .then((response) => {
                console.log(response.data);
                props.stateRefresh();
            });
        setState({
            ...state,
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    };

    const handleFileChange = (e) => {
        setState({
            ...state,
            file: e.target.files[0],
            fileName: e.target.value
        });
    };

    const handleValueChange = (e) => {
        let nextState = {...state};
        nextState[e.target.name] = e.target.value;
        setState(nextState);
    };

    const addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', state.file);
        formData.append('name', state.userName);
        formData.append('birthday', state.birthday);
        formData.append('gender', state.gender);
        formData.append('job', state.job);
        // 파일이 포함되어있는 데이터를 서버로 전송하고자 할 경우 웹 표준에 맞는 헤더를 추가해 준다
        const config = {
            headers: {
                'contnet-type': 'multipart/form-data'
            }
        };
        return post(url, formData, config);
    };

    // 함수의 바인딩 처리
    const handleClickOpen = () => {
        setState({
            ...state,
            open: true
        });
    };

    const handleClose = () => {
        setState({
            ...state,
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>고객 추가하기</Button>
            <Dialog open={state.open} onClose={handleClose}>
                <DialogTitle>고객 추가</DialogTitle>
                <DialogContent>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={state.file} value={state.fileName} onChange={handleFileChange}/><br/>
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {state.fileName === "" ? "프로필 이미지 선택" : state.fileName}
                        </Button>
                    </label><br/>
                    <TextField label="이름" type="text" name="userName" value={state.userName} onChange={handleValueChange}/><br/>
                    <TextField label="생년월일" type="text" name="birthday" value={state.birthday} onChange={handleValueChange}/><br/>
                    <TextField label="성별" type="text" name="gender" value={state.gender} onChange={handleValueChange}/><br/>
                    <TextField label="직업" type="text" name="job" value={state.job} onChange={handleValueChange}/><br/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>추가</Button>
                    <Button variant="outlined" color="primary" onClick={handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

/*
class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        // 파일이 포함되어있는 데이터를 서버로 전송하고자 할 경우 웹 표준에 맞는 헤더를 추가해 준다
        const config = {
            headers: {
                'contnet-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }

    // 함수의 바인딩 처리
    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>고객 추가하기</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                        <label htmlFor="raised-button-file">
                            <Button variant="contained" color="primary" component="span" name="file">
                                {this.state.fileName === "" ? "프로필 이미지 선택" : this.state.fileName}
                            </Button>
                        </label><br/>
                        <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange}/><br/>
                        <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
                        <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
                        <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);
*/