import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { capNhatKhachHangAction } from '../redux/khachHangAction';
import { connect } from 'react-redux';

function ChinhSuaModal(props) {
    let khachHang = props.khachHang;
    const [modal, setModal] = useState(false);

    // const [maKH, setMaKH] = useState(khachHang.maKH)
    // const [hoten, setHoTen] = useState(khachHang.hoTen);
    // const [sdt, setSDT] = useState(khachHang.sdt);
    // const [place, setPlace] = useState(khachHang.place)

    const [state, setState] = useState({
        khachHang: {
            maKH: khachHang.maKH,
            hoTen: khachHang.hoTen,
            sdt: khachHang.sdt,
            place: khachHang.place,
        },
        modal: false,
    })


    const handleChange = (event) => {
        let { value, name } = event.target;
        setState({
            khachHang: { ...state.khachHang, [name]: value }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.capNhatKhachHang(state.khachHang)
    }



    const toggle = () => setModal(!modal)
    return (
        <div>
            <Button className="ml-2" color="success" onClick={toggle}>Chỉnh sửa</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Cập Nhật Thông Tin</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" disabled className="form-control" name='maKH' value={state.khachHang.maKH} placeholder="Mã khách hàng" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name='hoTen' value={state.khachHang.hoTen} onChange={handleChange} placeholder="Tên khách hàng" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name='sdt' value={state.khachHang.sdt} onChange={handleChange} placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select name="place" value={state.khachHang.place} onChange={handleChange} className="form-control" >
                                <option selected>Nơi ở ...</option>
                                <option name="place">Quận 1</option>
                                <option name="place">Quận 2</option>
                                <option name="place">Quận 3</option>
                                <option name="place">Quận 4</option>
                                <option name="place">Quận 5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <Button color="primary" type="submit" onClick={toggle}>Cập Nhật</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        capNhatKhachHang: (khachHangCapNhat) => {
            dispatch(capNhatKhachHangAction(khachHangCapNhat))
        }
    }
}
export default connect(null, mapDispatchToProps)(ChinhSuaModal)