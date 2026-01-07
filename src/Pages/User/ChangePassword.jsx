import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../../Redux/Slices/AuthSlice";
import HomeLayout from "../../Layouts/HomeLayout";

function ChangePassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        oldPassword: "",
        newPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();

        if (!data.oldPassword || !data.newPassword) {
            toast.error("Both fields are required");
            return;
        }

        try {
            const formData = {
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            };

            // Dispatch change password action
            const response = await dispatch(changePassword(formData));

            if (response?.payload?.success) {
                toast.success(response?.payload?.message);
                navigate("/user/profile"); // Check this route is defined in your app
            } else {
                toast.error(response?.payload?.message || "Error changing password");
                navigate("/login"); // Fallback to login if profile not found or unauthorized
            }
        } catch (error) {
            toast.error("Failed to change password");
            navigate("/login"); // Fallback in case of error
        }
    };

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form
                    onSubmit={handlePasswordChange}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]"
                >
                    <h1 className="text-center text-2xl font-semibold">Change Password</h1>
                    
                    {/* Old Password Input */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="oldPassword" className="text-lg font-semibold">Old Password</label>
                        <input
                            required
                            type="password"
                            name="oldPassword"
                            id="oldPassword"
                            placeholder="Enter your old password"
                            className="bg-transparent px-2 py-1 border"
                            value={data.oldPassword}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* New Password Input */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="newPassword" className="text-lg font-semibold">New Password</label>
                        <input
                            required
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter your new password"
                            className="bg-transparent px-2 py-1 border"
                            value={data.newPassword}
                            onChange={handleInputChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer">
                        Change Password
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default ChangePassword;
