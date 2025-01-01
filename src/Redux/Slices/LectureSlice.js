import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import toast from 'react-hot-toast'
import axiosInstance from '../../Helpers/axiosInstance'
import { log } from 'console'
const initialState = {
    lectures:[]
}

export const getCourseLectures = createAsyncThunk("/course/lecture/get", async (cid) => {
    try {
    const response = axiosInstance.get(`/courses/${cid}`)
    toast.promise(response, {
        loading:"Fetching course lecture",
        success:"Lecture fetched successfully",
        error:"Fail to load the lectures"
    })
    return(await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

export const addCourseLectures = createAsyncThunk("/course/lecture/add", async (cid) => {
    try {
        const formData = new FormData();
        formData.append("lecture", data.lecture)
        formData.append("title", data.title)
        formData.append("description", data.description)

        const response = axiosInstance.post(`/courses/${data.id}`, formData)
        toast.promise(response, {
            loading:"adding course lecture",
            success:"Lecture added successfully",
            error:"Fail to add the lectures"
        })
        return(await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

export const deleteCourseLectures = createAsyncThunk("/course/lecture/delete", async (cid) => {
    try {
        

        const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`)
        toast.promise(response, {
            loading:"deleting course lecture",
            success:"Lecture deleted successfully",
            error:"Fail to delete the lectures"
        })
        return(await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message)
        
    }
})

const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getCourseLectures.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.lectures
        })
        .addCase(addCourseLectures.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.course?.lectures
        })
    }
})

export default lectureSlice.reducer;