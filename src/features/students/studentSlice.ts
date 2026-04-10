import type { Student } from "@/pages/component/tables/students/columns";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
    currentPage: number,
    status: "idle" | "failed" | "successded" | "loading",
    limit: number,
    total: number,
    data: Student[],
    error: string | null
}

const initialState: InitialState = {
    currentPage: 1,
    status: "idle",
    data: [],
    error: null,
    total: 0,
    limit: 10
}

export const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        setPage: (action, state) => {
            action.currentPage = state.payload.cu
        },
        setLimit: (action, state) => {
            action.limit = state.payload.limit
            action.currentPage = 1
        },
        setData: (action, state: PayloadAction<{ limit: number, total: number, users: Student[] }>) => {
            action.status = "loading"
            action.limit = state.payload.limit
            action.total = state.payload.total
        }
    }
})

export const { setData, setLimit, setPage } = studentsSlice.actions;
export default studentsSlice.reducer