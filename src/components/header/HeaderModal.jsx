import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { themKhachHangAction } from '../../redux/khachHangAction';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

class HeaderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            khachHang: {
                maKH: '',
                hoTen: '',
                sdt: '',
                place: '',
            },
            error: {
                maKH: '',
                hoTen: '',
                sdt: '',
                place: '',
            },
            valid: false,
            modal: false,
        };

    }
    handleError = event => {
        let { name, value } = event.target;
        let loi = value === "" ? "Vui lòng không để trống" : "";
        if (name === 'place') {
            loi = value === 'Nơi ở ...' ? "Vui lòng chọn nơi ở" : "";
        }
        if (name === 'maKH') {
            loi += (!(value.lenght === 4)) ? "Mã khách hàng chỉ gồm 4 ký tự" : '';
        }
        if (name === 'maKH') {
            let number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            loi += !(value.match(number)) ? "Mã khách hàng chỉ có chữ số" : '';
        }
        if (name === 'sdt') {
            let number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            loi += (value.match(number)) ? "Số điện thoại chỉ có chữ số" : '';
        }
        this.state.valid = loi === '' ? true : false;
        this.setState({
            error: { ...this.setState.error, [name]: loi }
        })
    }
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal,
        })
    }
    handleChange = (event) => {
        let { name, value } = event.target;
        this.setState({
            khachHang: { ...this.state.khachHang, [name]: value }
        }, () => {
            console.log(this.state.khachHang)
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.khachHang)
        this.props.themKhachHang(this.state.khachHang);
    }

    render() {
        return (
            <div>
                <Button className="ml-2" color="info" onClick={this.toggleModal}>Thêm Mới</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Thêm mới nhân viên</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name='maKH' placeholder="Mã khách hàng" onChange={this.handleChange} onKeyUp={this.handleError} onBlur={this.handleError} />
                                {this.state.error.maKH !== '' ? <div className="alert alert-danger">{this.state.error.maKH}</div> : ''}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name='hoTen' placeholder="Tên khách hàng" onChange={this.handleChange} onKeyUp={this.handleError} onBlur={this.handleError} />
                                {this.state.error.hoTen !== '' ? <div className="alert alert-danger">{this.state.error.hoTen}</div> : ''}
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name='sdt' placeholder="Số điện thoại" onChange={this.handleChange} onKeyUp={this.handleError} onBlur={this.handleError} />
                                {this.state.error.sdt !== '' ? <div className="alert alert-danger">{this.state.error.sdt}</div> : ''}
                            </div>
                            <div className="form-group">
                                <select className="form-control" name="place" onChange={this.handleChange} onKeyUp={this.handleError} onBlur={this.handleError}>
                                    <option selected>Nơi ở ...</option>
                                    <option name="place">Quận 1</option>
                                    <option name="place">Quận 2</option>
                                    <option name="place">Quận 3</option>
                                    <option name="place">Quận 4</option>
                                    <option name="place">Quận 5</option>
                                </select>
                                {this.state.error.place !== '' ? <div className="alert alert-danger">{this.state.error.place}</div> : ''}
                            </div>
                            <div className="form-group">
                                <Button color="primary" type="submit" disabled={!this.state.valid} onClick={this.toggleModal}>Thêm</Button>{' '}
                                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                            </div>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        themKhachHang: (khachHang) => {
            dispatch(themKhachHangAction(khachHang))
        }
    }

}
export default connect(null, mapDispatchToProps)(HeaderModal)