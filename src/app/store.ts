import { modulesSlice } from "@/features/modules/modulesSlice"
import { studentsSlice } from "@/features/students/studentSlice"
import { configureStore } from "@reduxjs/toolkit"
 

export const store =  configureStore({
    reducer: {
        students: studentsSlice.reducer,
        modules: modulesSlice.reducer,
    },
})

export type AppStore =  typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
