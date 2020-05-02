import { actionTypes } from "./khachHangConstant"
import Swal from "sweetalert2"

export const themKhachHangAction = (khachHang) => {
    return dispatch => {
        dispatch({
            type: actionTypes.THONG_TIN_KHACH_HANG,
            mangKhachHang: khachHang,
        })
        // Swal.fire("Thêm Thành Công")
    }
}
export const loadKhachHangAction = (khachHang) => {
    return dispatch => {
        dispatch({
            type: actionTypes.LOAD_KHACH_HANG,
            mangKhachHang: khachHang
        }
        )
    }
}

export const xoaKhachHangAction = (maKH) => {
    return dispatch => {
        dispatch({
            type: actionTypes.XOA_KHACH_HANG,
            maKH,
        })
        Swal.fire("Xóa Thành Công")
    }
}

export const capNhatKhachHangAction = (khachHang) => {
    return dispatch => {
        dispatch({
            type: actionTypes.CAP_NHAT_KHACH_HANG,
            khachHang
        })
        Swal.fire("Cập Nhật Thành Công")
    }
}