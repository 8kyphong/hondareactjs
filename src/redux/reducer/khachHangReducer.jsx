import { actionTypes } from "../khachHangConstant"
import Swal from "sweetalert2";

const initialState = {
    mangKhachHang: [],
}

export const khachHangReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.THONG_TIN_KHACH_HANG:
            {
                let mangKhachHangAdd = [...state.mangKhachHang]
                let index = mangKhachHangAdd.findIndex(khachHang => khachHang.maKH === action.mangKhachHang.maKH);
                if (index !== -1) {
                    Swal.fire('Đã Trùng Mã Khách Hàng');
                    return { ...state }
                } else {
                    Swal.fire('Thêm khách hàng thành công')
                }
                state.mangKhachHang = [...state.mangKhachHang, action.mangKhachHang];

                localStorage.setItem('mangKhachHang', JSON.stringify(state.mangKhachHang))
                return { ...state }
            }
        case actionTypes.LOAD_KHACH_HANG:
            {
                state.mangKhachHang = action.mangKhachHang;
                return { ...state }
            }
        case actionTypes.XOA_KHACH_HANG:
            {
                let mangKhachHangCapNhat = [...state.mangKhachHang];
                let index = mangKhachHangCapNhat.findIndex(khachHang => khachHang.maKH === action.maKH);
                if (index !== -1) {
                    mangKhachHangCapNhat.splice(index, 1)
                }
                state.mangKhachHang = mangKhachHangCapNhat;
                localStorage.setItem('mangKhachHang', JSON.stringify(state.mangKhachHang))
                return { ...state }
            }
        case actionTypes.CAP_NHAT_KHACH_HANG:
            {
                let mangKhachHangCapNhat = [...state.mangKhachHang];
                let index = mangKhachHangCapNhat.findIndex(KH => KH.maKH === action.khachHang.maKH)
                if (index !== -1) {
                    mangKhachHangCapNhat[index] = action.khachHang
                }
                state.mangKhachHang = mangKhachHangCapNhat;
                localStorage.setItem('mangKhachHang', JSON.stringify(state.mangKhachHang))
                return { ...state }
            }
        default:
            return state
    }

}
