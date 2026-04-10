
import type { Module } from "@/pages/component/tables/Module/mcolunm";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface InitialState {
    data: Module[]
    error: string | null,
    status: "idle" | "loading" | "failed" | "successded",
    limit: number,
    total: number,
    currentPage: number
}

const initialState: InitialState = {
    currentPage: 1,
    error: null,
    data: [],
    limit: 10,
    total: 0,
    status: "idle"
}

export const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setData: (state, actions: PayloadAction<{ title: string, faculty_count: number, session_count: number }>) => {
            state.status = "loading"
            state.total += 1

            const newData = {
                id: state.total,
                title: actions.payload.title,
                session_count: actions.payload.session_count,
                faculty_count: actions.payload.faculty_count
            }

            state.data.push(newData)
        },
          updateData: (state, action: PayloadAction<{
            id: number,
            title: string,
            faculty_count: number,
            session_count: number
        }>) => {
            const index = state.data.findIndex(item => item.id === action.payload.id)

            if (index !== -1) {
                state.data[index] = {
                    ...state.data[index],
                    ...action.payload
                }
            }
        },
         deleteData: (state, action: PayloadAction<number>) => {
            state.data = state.data.filter(item => item.id !== action.payload)
            state.total -= 1
        }
    }
})



export const { setData, updateData,deleteData } = modulesSlice.actions
export default modulesSlice.reducer