import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

import toast from 'react-hot-toast'
import axiosInstance from '../../Helpers/axiosInstance'

const initialState = {
    lectures:[]
}

export const getCourseLectures = createAsyncThunk("/course/lecture/get", async (cid) => {
    try {
    const response = axiosInstance.get(`/courses/${cid}`)
    console.log("API Response:", response);
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

export const addCourseLecture = createAsyncThunk("/course/lecture/add", async (data) => {
    try {
        const formData = new FormData();
        formData.append("lecture", data.lecture)
        formData.append("title", data.title)
        formData.append("description", data.description)
        // console.log("title", data.title);
        

        const response = axiosInstance.post(`/courses/${data.id}`, formData)
        console.log("response", response);
        
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

export const deleteCourseLecture = createAsyncThunk("/course/lecture/delete", async (data) => {
    try {

        const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`);
        toast.promise(response, {
            loading: "deleting course lecture",
            success: "Lecture deleted successfully",
            error: "Failed to delete the lectures"
        });
        return (await response).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
});

const lectureSlice = createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(getCourseLectures.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.lectures;
            console.log("Redux Lectures State:", state.lectures);
        })
        .addCase(addCourseLecture.fulfilled, (state, action) => {
            console.log(action);
            state.lectures = action?.payload?.course?.lectures
        })
    }
})

export default lectureSlice.reducer;