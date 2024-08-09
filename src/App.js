import React, { useEffect, useMemo, useState } from "react";
import SignUp from "./Components/Auth";
import { GlobalStyles } from "./Components/Global.styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OTP from "./Components/Auth/OTP";
import Password from "./Components/Auth/Password";
import { AuthProvider } from "./Components/Context/Context";
import SignUpForm from "./Components/Auth/SignUpForm";
import AdminLayout from "./Components/AdminLayout";
import MyProfile from "./Components/MyProfile";
import UpdatedProfile from "./Components/Auth/UpdatedProfile";
import ProfileLayout from "./Components/ProfileLayout";
import EditProfile from "./Components/EditProfile/EditProfile";
import About from "./Components/EditProfile/About";
import ProfileSkills from "./Components/EditProfile/ProfileSkills";
import Experience from "./Components/EditProfile/Experience";
import Education from "./Components/EditProfile/Education";
import Certificate from "./Components/EditProfile/Certificate";
import ChangePassword from "./Components/EditProfile/ChangePassword";
import ForgotPassword from "./Components/EditProfile/ChangePassword/ForgotPassword";
import SupportSec from "./Components/Support";
import Notification from "./Components/Notification";
import Financial from "./Components/Financial";
import Home from "./Components/Home";
import Session from "./Components/Session";
import ViewSession from "./Components/Session/VewSession";
import EditSession from "./Components/Session/CreateSession/EditSession";
import CreateSession from "./Components/Session/CreateSession";
import Calendar from "./Components/Calendar";
import { SessionProvider } from "./Components/Session/sessionContext";
import axios from "axios";
import { serverDomain } from "./Constant/serverDomain";
import ProtectedRoute from "./Components/Protected Route/ProtectedRoute";
const App = () => {
  const [user, setUser] = useState("");

  useMemo(() => user);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    avatar: "",
    cover: "",
    phone: "",
    email: "",
    bio: "",
    designation: "k",
    yearOfExperience: 7,
    city: "",
    state: "",
    primaryTrainingTopic: [],
    secondaryTrainingTopic: [],
    coachingExperience: [
      {
        title: "",
        yearsOfExperience: "",
        description: "",
      },
    ],
    educationDetails: [
      {
        school: "",
        degree: "",
        specialization: "",
        startDate: "",
        endDate: "",
        grade: "",
        description: "",
      },
    ],
    skills: [],
    certificates: [
      {
        title: "",
        description: "",
        image: "",
      },
    ],
  });

  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user || formData.id) {
        let avatarUrl, coverUrl, certificateImgUrl;

        if (formData.avatar && typeof formData.avatar !== "string") {
          const imageData = new FormData();
          imageData.append("file", formData.avatar);
          const avatarResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          avatarUrl = avatarResponse.data.fileUrl;
        }

        if (formData.cover && typeof formData.cover !== "string") {
          const imageData = new FormData();
          imageData.append("file", formData.cover);
          const coverResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          coverUrl = coverResponse.data.fileUrl;
        }

        if (
          formData.certificates[0].image &&
          typeof formData.certificates[0].image !== "string"
        ) {
          const imageData = new FormData();
          imageData.append("file", formData.certificates[0].image);
          const certificateImgResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          certificateImgUrl = certificateImgResponse.data.fileUrl;
        }

        const updatedFormData = {
          ...formData,
          ...(avatarUrl && { avatar: avatarUrl }),
          ...(coverUrl && { cover: coverUrl }),
          ...(certificateImgUrl && {
            certificates: [
              {
                ...formData.certificates[0],
                image: certificateImgUrl,
              },
            ],
          }),
        };

        console.log(avatarUrl);
        console.log(coverUrl);
        console.log(certificateImgUrl);

        const response = await axios.put(
          `${serverDomain}/coach/${user || formData?.id}`,
          updatedFormData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        setUser(response.data.id);
      } else {
        let avatarUrl, coverUrl, certificateImgUrl;

        if (formData.avatar) {
          const imageData = new FormData();
          imageData.append("file", formData.avatar);
          const avatarResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          avatarUrl = avatarResponse.data.fileUrl;
        }

        if (formData.cover) {
          const imageData = new FormData();
          imageData.append("file", formData.cover);
          const coverResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          coverUrl = coverResponse.data.fileUrl;
        }

        if (formData.certificates[0].image) {
          const imageData = new FormData();
          imageData.append("file", formData.certificates[0].image);
          const certificateImgResponse = await axios.post(
            `${serverDomain}/upload`,
            imageData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          certificateImgUrl = certificateImgResponse.data.fileUrl;
        }

        const updatedFormData = {
          ...formData,
          ...(avatarUrl && { avatar: avatarUrl }),
          ...(coverUrl && { cover: coverUrl }),
          ...(certificateImgUrl && {
            certificates: [
              {
                ...formData.certificates[0],
                image: certificateImgUrl,
              },
            ],
          }),
        };

        // console.log(avatarUrl);
        // console.log(coverUrl);
        // console.log(certificateImgUrl);

        const response = await axios.post(
          `${serverDomain}/coach`,
          updatedFormData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        setUser(response.data.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCoach = async () => {
      try {
        const response = await axios.get(
          `${serverDomain}/coach/${user || formData?.id}`
        );
        console.log(response);
        setFormData(response.data?.coach);
      } catch (e) {
        console.log(e);
      }
    };
    getCoach();
  }, [user]);

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyles />
          <SessionProvider>
            <Routes>
              <Route
                index
                element={<SignUp setUser={setUser} setFormData={setFormData} />}
                formData={formData}
              />
              {/* <Route path="/password" element={<Password />} /> */}
              <Route path="/otp" element={<OTP />} />
              {/* <Route path="/signupform" element={<SignUpForm />} /> */}
              {/* <Route path="/UpdatedProfile" element={<UpdatedProfile />} /> */}
              <Route
                path="/"
                element={<ProtectedRoute element={AdminLayout} />}
              >
                <Route
                  path="/dashboard"
                  element={<Home formData={formData} user={user} />}
                />
                <Route
                  path="/session"
                  element={<Session formData={formData} user={user} />}
                />
                <Route path="/viewsession" element={<ViewSession />} />
                <Route path="/editSession" element={<EditSession />} />
                <Route path="/createSession" element={<CreateSession />} />
                <Route path="/financialOverview" element={<Financial />} />
                <Route
                  path="/Support"
                  element={<SupportSec formData={formData} />}
                />
                <Route path="/Notification" element={<Notification />} />
                <Route
                  path="/Profile"
                  element={<MyProfile formData={formData} />}
                />
              </Route>
              <Route
                path="/"
                element={<ProtectedRoute element={ProfileLayout} />}
              >
                <Route path="/calendar" element={<Calendar />} />
                <Route
                  path="/editprofile"
                  element={
                    <EditProfile
                      formData={formData}
                      handleChange={handleChange}
                      setFormData={setFormData}
                      user={user}
                    />
                  }
                />
                <Route
                  path="/About"
                  element={
                    <About
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setFormData={setFormData}
                    />
                  }
                />
                <Route
                  path="/ProfileSkills"
                  element={
                    <ProfileSkills
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setFormData={setFormData}
                    />
                  }
                />
                <Route
                  path="/experience"
                  element={
                    <Experience
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setFormData={setFormData}
                    />
                  }
                />
                <Route
                  path="/education"
                  element={
                    <Education
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setFormData={setFormData}
                    />
                  }
                />
                <Route
                  path="/certificates"
                  element={
                    <Certificate
                      formData={formData}
                      handleChange={handleChange}
                      handleSubmit={handleSubmit}
                      setFormData={setFormData}
                      user={user}
                    />
                  }
                />
                <Route path="/setting" element={<ChangePassword />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>
            </Routes>
          </SessionProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
