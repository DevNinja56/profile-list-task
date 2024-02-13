import React, { useEffect, useState } from "react";
import { generateProfile, useGenerateProfile } from "../../lib/profileUtils";
import { MDBDataTable } from "mdbreact";
import LoaderSpinner from "../../lib/components/Loader";
import { useUser } from "../../lib/context/userContext";
import DownloadButton from "../../lib/components/Buttons/DownloadButton";

const Home = () => {
  const [profiles, setProfiles] = useState();
  const { user, loading } = useUser();
  const { profileFormate } = useGenerateProfile();

  useEffect(() => {
    setProfiles(profileFormate(user));
  }, [user]);

  if (!profiles || loading)
    return (
      <div className="w-full h-full grid place-content-center">
        <LoaderSpinner />
      </div>
    );

  return (
    <div className="w-full p-5 max-h-screen overflow-y-auto capitalize pb-16">
      <div className="flex justify-end gap-2">
        <DownloadButton />
      </div>
      <div className="themeTable bg-white p-2 rounded-lg mt-5">
        <div className="py-3">
          <h1 className="font-bold text-xl">User Profiles DataTable</h1>
          <p className="">
            DataTables has most features enabled by default, so all you need to
            do to use it with your own tables is to call the construction
            function:
          </p>
        </div>
        {
          <MDBDataTable
            style={{ backgroundColor: "#fff" }}
            bordered
            small
            data={profiles}
            autoWidth
            noBottomColumns
            paging={true}
          />
        }
      </div>
    </div>
  );
};

export default Home;
