import { useUser } from "../Authentication/useUser";

function UserDetails() {
  const { user } = useUser();
  const currentAvatar = user?.user_metadata?.avatar;
  const currentName = user?.user_metadata?.fullname;
  return (
    <div className=" hidden md:block  md:justify-center md:flex-row md:items-center mb-4 ">
      <div className="w-16 h-16 ml-20 md:ml-0 rounded-full border-2 border-yellow-400 overflow-hidden ">
        <img
          src={currentAvatar || "path/to/default-avatar.jpg"} // Use the user's avatar URL or a default
          alt={currentName}
          className="w-full h-full object-cover"
        />
      </div>
      <span className="ml-12  md:ml-2  text-lg text-white font-semibold">
        {currentName}
      </span>
    </div>
  );
}

export default UserDetails;
