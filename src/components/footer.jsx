import React from "react";
import GoogleMapReact from 'google-map-react';

const footer = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="bg-black">
      <div className="container">
        <div className="py-[134px]">
          <p className="text-[#F0F0F0] sm:text-4xl text-2xl  font-normal pb-8 text-center">
            Contact Us
          </p>
          <div className="flex lg:flex-nowrap gap-28  mx-3 sm:mx-0 flex-wrap ">
            <div className="bg-[#BCED22] sm:m-0 m-auto rounded-[15px] sm:py-6 sm:px-6 px-2 py-2  ">
              <p className="text-[#131313] sm:text-2xl text-lg font-normal text-center py-5 ">
                Lets Collaborate
              </p>
              <div className="flex flex-col">
                <input
                  className="p-3 rounded-[15px] w-[307px] outline-none-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Name"
                />
                <input
                  className="p-3 rounded-[15px] w-[307px] my-4 outline-none-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Telephone"
                />
                <input
                  className="p-3 rounded-[15px] w-[307px] outline-none-none "
                  type="text"
                  name=""
                  id=""
                  placeholder="Company"
                />
                <input
                  className="pt-3 pb-16 pl-3 rounded-[15px] w-[307px] my-4 outline-none "
                  type="text"
                  name=""
                  id=""
                  placeholder="Text here"
                />
                <p className="bg-black text-white text-center rounded-[15px] py-4">
                  Send
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#F0F0F0] text-xl sm:m-0 m-auto text-center font-normal pb-5">
                Baslerstrasse 30, 8048 Zürich, Schweiz{" "}
              </p>
              <div style={{ height: '350px', Width: '550px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

        
            </div>
            <div className="sm:m-0 m-auto">
              <p className="text-[#F0F0F0] text-xl sm:m-0 m-auto font-normal">info@om3.ch</p>
              <p className="py-6 text-[#F0F0F0] text-xl font-normal sm:m-0 m-auto">
                +41 44 512 91 00
              </p>

              <img src="/facebook.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
