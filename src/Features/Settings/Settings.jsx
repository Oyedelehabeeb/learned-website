import { useState } from "react";
import { useUpdateuser } from "../Authentication/useUpdateUser";
import { useUser } from "../Authentication/useUser";
import {
  IoMdSettings,
  IoMdPerson,
  IoMdCamera,
  IoMdSave,
  IoMdClose,
} from "react-icons/io";
import { FaUser, FaUpload, FaCog, FaUserCircle, FaEdit } from "react-icons/fa";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-customGray via-darkGray to-customGray p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-darkGray to-customGray rounded-2xl mb-6 shadow-2xl">
            <FaCog className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-beige mb-4">
            Account Settings
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Manage your profile information and customize your learning
            experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Information Card */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border border-white border-opacity-20 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <FaUser className="text-white text-xl" />
              </div>
              <h2 className="text-2xl font-bold text-beige">
                Profile Information
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Avatar Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl mx-auto">
                      {currentAvatar ? (
                        <img
                          src={currentAvatar}
                          alt="Current Avatar"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center">
                          <FaUserCircle className="text-white text-6xl" />
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-xl flex items-center justify-center shadow-lg">
                      <IoMdCamera className="text-white text-lg" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="block">
                      <span className="text-beige font-semibold mb-2 block flex items-center gap-2">
                        <FaUpload className="text-yellow-400" />
                        Change Avatar
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setAvatar(e.target.files[0])}
                        className="block w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-darkGray file:to-customGray file:text-white hover:file:from-yellow-700 hover:file:to-yellow-800 file:cursor-pointer file:transition-all file:duration-300"
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-beige font-semibold mb-3 flex items-center gap-2">
                    <FaEdit className="text-yellow-400" />
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 rounded-xl px-4 py-4 text-beige placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    />
                    <IoMdPerson className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Additional Info Display */}
                <div className="bg-white bg-opacity-5 rounded-xl p-4 space-y-3">
                  <h3 className="text-beige font-semibold mb-3">
                    Account Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Account Status:</span>
                      <span className="text-green-400 font-medium">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Member Since:</span>
                      <span className="text-beige">January 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Courses Enrolled:</span>
                      <span className="text-beige">12</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <IoMdSave className="text-xl" />
              Save Changes
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex items-center justify-center gap-3 bg-red-600 text-white font-semibold py-4 px-8 rounded-xl hover:bg-red-300 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <IoMdClose className="text-xl" />
              Cancel
            </button>
          </div>

          {/* Help Section */}
          <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white border-opacity-10">
            <h3 className="text-beige font-semibold mb-2">Need Help?</h3>
            <p className="text-gray-400 text-sm mb-4">
              Contact our support team if you encounter any issues with your
              account settings.
            </p>
            <button
              type="button"
              className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors duration-300"
            >
              Contact Support →
            </button>
          </div>
        </form>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 bg-opacity-5 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default Settings;
