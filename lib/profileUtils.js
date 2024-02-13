import { useRouter } from "next/router";
import { useUser } from "./context/userContext";

export const useGenerateProfile = () => {
  const { addUser } = useUser();
  const { push } = useRouter();

  const profileFormate = (profileResult) => {

    return {
      columns: [
        {
          label: "Image",
          field: "img",
        },
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Email",
          field: "email",
        },
        {
          label: "Phone",
          field: "phone",
        },
        {
          label: "Age",
          field: "age",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "City",
          field: "city",
        },
        {
          label: "Country",
          field: "country",
        },
      ],
      rows:
        profileResult?.map((data) => {
          const { name, gender, dob, location, email, picture, phone } = data;
          return {
            name: `${name.title} ${name.first} ${name.last}`,
            age: dob.age,
            gender,
            city: location.city,
            country: location.country,
            email,
            img: <img className="rounded-full" src={picture.thumbnail} alt="profile-pic" />,
            phone,
            clickEvent: () => {
              addUser(data);
              push("/profile/details-user");
            },
          };
        }) ?? [],
    };
  }
  return { profileFormate }
};
