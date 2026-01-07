// for authentication purpuose
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance"

const initialState ={
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    // data : localStorage.getItem('data') !== null ? JSON.parse(localStorage.getItem('data')) : {}

    data: localStorage.getItem('data') != undefined ? JSON.parse(localStorage.getItem('data')) : {}

};
export const createAccount = createAsyncThunk("/auth/signup", async (data)=> {
    console.log("Request Payload:", data);
    
    try{
        const res =  axiosInstance.post("/user/register", data)
        console.log(res);
        
        
        toast.promise(res, {
            loading: "Wait ! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        })

        return res.data;

    } catch(error){
        console.error("API Error:", error);
        toast.error(error?.response?.data?.message)

    }
})

export const login = createAsyncThunk("/auth/login", async (data)=> {
    console.log("Request Payload:", data);
    
    try{
        const res =  axiosInstance.post("/user/login", data)
        console.log(res);
        
        
        toast.promise(res, {
            loading: "Wait ! authentication in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to login"
        })

        return (await res).data;

    } catch(error){
        console.error("API Error:", error);
        toast.error(error?.response?.data?.message)

    }
})

export const logout = createAsyncThunk("/auth/logout", async () => {
    try{
        const res =  axiosInstance.post("/user/logout")
        console.log(res);
        
        
        
        toast.promise(res, {
            loading: "Wait ! logout in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to logout"
        })

        return (await res).data;

    } catch(error){
        console.error("API Error:", error);
        toast.error(error?.response?.data?.message)

    }

})

export const updateProfile = createAsyncThunk("/user/update/profile", async (data) => {
    try {
        const res = axiosInstance.put(`user/update/${data[0]}`, data[1]);
        toast.promise(res, {
            loading: "Wait! profile update in progress...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to update profile"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})


export const getUserData = createAsyncThunk("/user/details", async () => {
    try {
        const res = axiosInstance.get("user/me");
        return (await res).data;
    } catch(error) {
        toast.error(error.message);
    }
})

// Add the changePassword async thunk
export const changePassword = createAsyncThunk("/user/change/password", async (data) => {
    try {
        const res =  axiosInstance.post("/user/change-password", {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        });

        toast.promise(res, {
            loading: "Wait! Changing your password...",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to change password",
        });

        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred while changing the password");
    }
});



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(login.fulfilled, (state, action)=>{
            localStorage.setItem("data", JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("role", action?.payload?.user?.role)
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role

        })
        .addCase(logout.fulfilled, (state)=>{
            console.log("Logout successful, clearing state...");
            localStorage.clear();
            state.data = {};
            state.isLoggedIn = false;
            state.role = "";

        })
        .addCase(getUserData.fulfilled, (state, action) => {
            if(!action?.payload?.user) return;
            localStorage.setItem("data", JSON.stringify(action?.payload?.user));
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("role", action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.data = action?.payload?.user;
            state.role = action?.payload?.user?.role
        })
        .addCase(changePassword.pending, (state) => {
            state.loading = true;
        })
        .addCase(changePassword.fulfilled, (state) => {
            state.loading = false;
        })
        .addCase(changePassword.rejected, (state, action) => {
            state.loading = false;
            console.error(action.error.message);
        })
    }
})

export default authSlice.reducer;