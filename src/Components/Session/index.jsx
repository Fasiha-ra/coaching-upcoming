import React, { useEffect, useState } from "react";
import { SessionWrapper } from "./Session.styles";
import RightSideBar from "../rightSideBar";
import SessionSearchbar from "./SessionSearchbar";
import SessionCard from "./SessionCard";
import ViewSession from "./VewSession";
import CreateSession from "./CreateSession";
import { serverDomain } from "../../Constant/serverDomain";
import axios from "axios";

const Session = ({formData,user}) => {
  const [sessions, setSessions] = useState([]);
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [view, setView] = useState(false);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await axios.get(
          `${serverDomain}/session/${formData?.id}/coach`
        );
        setSessions(response.data.sessions);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSessions();


    const upcomingGroupSessions = async () => {
      try {
        const response = await axios.get(
          `${serverDomain}/session/other/fetch/${formData?.id}`
        );
        setUpcomingSessions(response.data.groupSessions);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    upcomingGroupSessions();
  }, []);

  const viewHandler = () => {
    setView(true);
    setCreate(false);
  };

  const createHandler = () => {
    setCreate(true);
    setView(false);
  };

  const backToSessionsHandler = () => {
    setCreate(false);
    setView(false);
  };

  const handleSaveSession = (newSession) => {
    setSessions([...sessions, newSession]);
    backToSessionsHandler();
  };

  return (
    <SessionWrapper>
      {view ? (
        <div className="viewSession">
          <ViewSession />
        </div>
      ) : create ? (
        <div className="CreateSession">
          <CreateSession click={backToSessionsHandler} onSave={handleSaveSession} user={user} data={formData}/>
        </div>
      ) : (
        <div className="sessions">
          <div className="searchbar">
            <SessionSearchbar createHandle={createHandler} />
          </div>
          <div className="card">
            <SessionCard  sessions={sessions} clickHandle={viewHandler} />
          </div>
        </div>
      )}
      <div className="rightSideBar">
        <RightSideBar upcomingSessions={upcomingSessions} />
      </div>
    </SessionWrapper>
  );
};

export default Session;
