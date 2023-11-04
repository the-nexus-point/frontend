"use client"
import Profile from "@/components/profile/Profile";
import { isUserAuthenticated } from "@/services/auth";


const User = () => {
  if (!isUserAuthenticated()) {
    window.location.href = "/signup";
  }
  return (
    <div>
      <Profile />
    </div>
  );
};

export default User;
