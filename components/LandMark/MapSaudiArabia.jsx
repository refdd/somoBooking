import React from "react";
import { Button, Tooltip } from "@mui/material";
import saudiArabia from "../../public/assets/images/country.svg";
import { useStateContext } from "@/contexts/ContextProvider";

function MapSaudiArabia() {
  const { setDestination } = useStateContext();

  return (
    <div className="py-6 col-span-3 md:flex md:justify-center md:items-center">
      <div
        style={{ backgroundImage: `url(${saudiArabia.src})` }}
        className=" relative w-full md:w-[400px] py-[165px]   bg-no-repeat  bg-cover bg-top my-6 "
      >
        {/* Eastern Province */}
        <div className="absolute top-[65%] left-[65%]">
          <Tooltip title="Eastern Province" placement="top">
            <Button
              style={{
                fontSize: "13px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(4);
              }}
            >
              Eastern Province
            </Button>
          </Tooltip>
        </div>
        {/* Riyadh */}
        <div className="absolute top-[55%] left-[43%]">
          <Tooltip title="Riyadh" placement="top">
            <Button
              style={{
                fontSize: "13px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(1);
              }}
            >
              Riyadh
            </Button>
          </Tooltip>
        </div>
        {/* Al-Qassim */}
        <div className="absolute top-[36%] left-[33%]">
          <Tooltip title="Al-Qassim" placement="top">
            <Button
              style={{
                fontSize: "8px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(7);
              }}
            >
              Al-Qassim
            </Button>
          </Tooltip>
        </div>
        {/* northern borders */}
        <div className="absolute top-[16%] left-[27.4%]">
          <Tooltip title="Northern borders" placement="top">
            <Button
              style={{
                fontSize: "8px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(13);
              }}
            >
              northern borders
            </Button>
          </Tooltip>
        </div>
        {/* Al-jawf */}
        <div className="absolute top-[12%] left-[11.4%]">
          <Tooltip title="Al-jawf" placement="top">
            <Button
              style={{
                fontSize: "11px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(11);
              }}
            >
              Al-jawf
            </Button>
          </Tooltip>
        </div>
        {/* Ha'll */}
        <div className="absolute top-[26%] left-[26%]">
          <Tooltip title="Ha'll" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(9);
              }}
            >
              Ha'll
            </Button>
          </Tooltip>
        </div>
        {/* Tabuk */}
        <div className="absolute top-[22%] left-[2%]">
          <Tooltip title="Tabuk" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(8);
              }}
            >
              Tabuk
            </Button>
          </Tooltip>
        </div>
        {/* Medina */}
        <div className="absolute top-[44%] left-[15%]">
          <Tooltip title="Medina" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(3);
              }}
            >
              Medina
            </Button>
          </Tooltip>
        </div>
        {/* Mecca */}
        <div className="absolute top-[61%] left-[22%]">
          <Tooltip title="Mecca" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(2);
              }}
            >
              Mecca
            </Button>
          </Tooltip>
        </div>
        {/* Albahah */}
        <div className="absolute top-[72%] left-[24%] -rotate-45">
          <Tooltip title="Albahah" placement="top">
            <Button
              style={{
                fontSize: "6px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(12);
              }}
            >
              Al bahah
            </Button>
          </Tooltip>
        </div>
        {/* Asir */}
        <div className="absolute top-[76%] left-[32%] ">
          <Tooltip title="Asir" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(5);
              }}
            >
              Asir
            </Button>
          </Tooltip>
        </div>
        {/* Nayjran */}
        <div className="absolute top-[82%] left-[43%] ">
          <Tooltip title="Nayjran" placement="top">
            <Button
              style={{
                fontSize: "14px",
                textTransform: "capitalize ",
                color: "#445cdc",
                fontWeight: "bold",
              }}
              onClick={() => {
                setDestination(10);
              }}
            >
              Nayjran
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default MapSaudiArabia;
