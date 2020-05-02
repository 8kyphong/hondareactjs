import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadKhachHangAction, xoaKhachHangAction } from '../redux/khachHangAction';
import ChinhSuaModal from './ChinhSuaModal';



class ListKhachHang extends Component {
    componentDidMount() {
        if (localStorage.getItem('mangKhachHang')) {
            let mangKhachHang = JSON.parse(localStorage.getItem('mangKhachHang'));
            console.log(mangKhachHang);
            this.props.loadKhachHang(mangKhachHang)
        }
    }
    renderKhachHang() {
        let mangKhachHang = this.props.mangKhachHang;
        return mangKhachHang.map((khachHang, index) => {
            return (
                <tr key={index} className="bg-dark text-light">
                    <td>{index + 1}</td>
                    <td>{khachHang.maKH}</td>
                    <td>{khachHang.hoTen}</td>
                    <td>{khachHang.sdt}</td>
                    <td>{khachHang.place}</td>
                    <td>
                        <ChinhSuaModal khachHang={khachHang} />
                        <button className="btn btn-danger ml-2"
                            onClick={() => { this.props.xoaKhachHang(khachHang.maKH) }}
                        >Xóa</button>
                    </td>
                </tr>
            )
        })
    }
    renderTable() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã Khách Hàng</th>
                        <th>Họ Tên</th>
                        <th>Số Điện Thoại</th>
                        <th>Nơi ở</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderKhachHang()}
                </tbody>
            </table>
        )
    }
    trangChu = () => {
        this.props.history.replace('/');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-center">Danh Sách Khách Hàng</h2>
                    </div>
                    <div className="col-lg-6 text-center">
                        <button className="btn btn-warning" onClick={this.trangChu}>Trang chủ</button>
                    </div>
                </div>
                {this.renderTable()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    mangKhachHang: state.khachHangReducer.mangKhachHang,
})
const mapDispatchToProps = dispatch => {
    return {
        loadKhachHang: (khachHang) => {
            dispatch(loadKhachHangAction(khachHang))
        },
        xoaKhachHang: (maKH) => {
            dispatch(xoaKhachHangAction(maKH))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListKhachHang)