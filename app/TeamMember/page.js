import React from "react";
import Image from "next/image";
import member from "@/image/Cook.svg";
import banner from "@/image/unsplash_OzBLe_Eg1mg.png";

function TeamMember() {
  const team = [
    { id: 1, name: "Mark Henry", role: "Owner", image: member },
    { id: 2, name: "Lucky Helen", role: "Chef", image: member },
    { id: 3, name: "Moon Henry", role: "Founder", image: member },
    { id: 4, name: "Tom Monrow", role: "Specialist", image: member },
  ];

  return (
    <div className="relative">
      {/* Top Banner with Gradient and Text */}
      <div className="relative h-72 w-full font-roboto">
        {/* Banner Image */}
        <Image
          src={banner}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        {/* Gradient Overlay on Banner */}
        <div className="absolute inset-0 bg-[#AD1519] opacity-85"></div>

        {/* Text over Banner */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h2 className="text-white text-5xl font-bold mb-2">Team Member</h2>
          <p className="text-white md:px-[450px] font-inter text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="absolute top-44 w-full flex font-roboto justify-center">
        <div className="container mx-auto py-10 px-4 lg:px-40">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {team.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-md rounded-lg overflow-hidden text-center"
              >
                {/* Team Member Image with Gradient and Text */}
                <div className="relative w-full h-64">
                  {/* Background Image */}
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>

                {/* Additional Team Member Info */}
                <div className="py-4">
                  <h3 className="text-xl  font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
