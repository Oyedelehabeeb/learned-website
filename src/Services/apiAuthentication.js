import supabase from "./supabase";

export async function signup({ email, fullname, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        avatar: "",
      },
    },
  });
  if (error) {
    throw new Error("Email already registered");
  }
  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error("Invalid credentials");
  }
  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error("Error fetching session:", error);
    throw new Error(error.message);
  }
  return data?.session;
}

export async function updateCurrentUser({ password, fullname, avatar }) {
  const updateData = {};

  if (password) {
    updateData.password = password;
  }

  if (fullname) {
    updateData.data = { ...updateData.data, fullname };
  }

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // Handle avatar upload
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // Get the public URL for the uploaded avatar
  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(fileName);

  // Update user with new avatar URL
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      avatar: publicUrlData.publicUrl,
    },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}

export async function loginWithProvider(provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
  });

  if (error) {
    throw new Error(`Error signing up: ${error.message}`);
  }
  return data;
}

export async function sendResetPasswordLink(email) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    // redirectTo: "http://localhost:5173/reset-password",
    redirectTo: " https://learned-two.vercel.app/reset-password",
  });
  if (error) throw new Error(error.message);
  return data;
}
