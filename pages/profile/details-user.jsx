import React, { useEffect } from "react";
import { useUser } from "../../lib/context/userContext";
import LoaderSpinner from "../../lib/components/Loader";
import { useRouter } from "next/router";
import InputBox from "../../lib/components/inputs/InputBox";
import { formateDate } from "../../lib/utils/formateDate";
import dynamic from "next/dynamic";
import Link from "next/link";
import BackButton from "../../lib/components/Buttons/BackButton";
const Map = dynamic(() => import("../../lib/components/Map"), { ssr: false });

const DetailsUser = () => {
  const { getUser } = useUser();
  const { push } = useRouter();

  console.log(getUser);

  useEffect(() => {
    const time = setTimeout(() => {
      if (!getUser) {
        push("/profile");
      }
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  if (!getUser) {
    return (
      <div className="w-full h-full grid place-content-center">
        <LoaderSpinner />
      </div>
    );
  }

  return (
    <div className="w-full p-5 max-h-screen overflow-y-auto capitalize pb-16">
      <div className="themeTable bg-white p-2 rounded-lg mt-5 relative">
        <BackButton className={"absolute top-2 left-3"} />
        <div className="text-center p-5 capitalize">
          <img
            src={getUser.picture.large}
            alt="profile-image"
            className="rounded-full mx-auto block"
          />
        </div>
        <div className="input-box">
          <div className="flex gap-4 px-4 my-3">
            <InputBox
              title={"Full Name"}
              value={`${getUser.name.title} ${getUser.name.first} ${getUser.name.last}`}
            />
            <InputBox title={"Email Address"} value={getUser.email} />
          </div>
          <div className="flex gap-4 px-4 my-3">
            <InputBox title={"Phone Number"} value={getUser.phone} />
            <InputBox
              title={"Gender"}
              value={
                getUser.gender.charAt(0).toUpperCase() + getUser.gender.slice(1)
              }
            />
          </div>
          <div className="flex gap-4 px-4 my-3">
            <InputBox
              title={"Date of Birth"}
              value={formateDate(getUser.dob.date)}
            />
            <InputBox
              title={"Registration No"}
              value={`${getUser.id.name}-${getUser.id.value}`}
            />
          </div>
          <div className="flex gap-4 px-4 my-3">
            <InputBox
              title={"Address"}
              value={`${getUser.location.street.number} ${getUser.location.street.name} ${getUser.location.city} , ${getUser.location.state} , ${getUser.location.country} , ${getUser.location.postcode}`}
            />
          </div>
        </div>
        <div className="map-box">
          <Map
            latitude={getUser.location.coordinates.latitude}
            longitude={getUser.location.coordinates.longitude}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsUser;
