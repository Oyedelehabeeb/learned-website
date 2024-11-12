import { useState } from "react";
import { useUpdateuser } from "../Authentication/useUpdateUser";
import { useUser } from "../Authentication/useUser";
import { IoMdSettings } from "react-icons/io";

function Settings() {
  const user = useUser();
  const currentFullName = user?.metadata?.fullname || "";
  const currentAvatar = user?.metadata?.avatar;

  const { updateUser } = useUpdateuser();

  const [fullname, setFullname] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullname) return;

    updateUser(
      { fullname, avatar },
      {
        onSuccess: () => {
          setAvatar(currentAvatar);
          setFullname(currentFullName);
        },
      }
    );
  };

  function handleReset() {
    setAvatar("");
    setFullname("");
  }

  // TO-D0: Users should be able to remove their avatar and set the PP to the default

  // function handleRemoveAvatar() {
  //   setAvatar("");
  // }

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <div className="max-w-3xl w-full mx-auto">
        <div className="text-3xl font-bold text-center flex items-center justify-center space-x-4 pb-6">
          <IoMdSettings /> <span>Settings</span>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

          {/* Avatar Upload */}
          <div className="mb-6">
            <label
              htmlFor="avatar-upload"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Change Avatar
            </label>
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="block w-full border border-gray-300 rounded-md p-2 cursor-pointer"
            />
          </div>

          {/* Full Name Input */}
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block text-sm text-gray-700 font-semibold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Enter your fullname"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:justify-between md:flex-row md:space-x-4">
            <div className="space-x-6">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-4 md:mb-0"
                type="submit"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
            {/* <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 mb-4 md:mb-0"
              type="button"
              onClick={handleRemoveAvatar}
            >
              Remove avatar
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
}

export default Settings;
