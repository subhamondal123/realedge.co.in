'use client'

import { capitalizeEachWord } from "@/utils/CommonFunctions";
import { allowOnlyNumbers } from "./Function";
import { useEffect, useRef, useState } from "react";
import ImageConstraint from "@/utils/ImageConstraint";

export function DealerForm() {
    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneErr, setPhoneErr] = useState("");

    const [location, setLocation] = useState("");
    const [locationErr, setLocationErr] = useState("");

    const canvasRef = useRef(null);

    const [captchaText, setCaptchaText] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaErr, setCaptchaErr] = useState("");

    useEffect(() => {
        generateCaptchaCanvas();
    }, []);

    const generateCaptchaCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
        let text = "";
        for (let i = 0; i < 5; i++) {
            text += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setCaptchaText(text);
        setCaptchaInput("");
        setCaptchaErr("");

        // clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // background
        ctx.fillStyle = "#f3f4f6";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = "28px Arial";
        ctx.textBaseline = "middle";

        // draw characters
        for (let i = 0; i < text.length; i++) {
            const x = 20 + i * 25;
            const y = canvas.height / 2;
            const angle = (Math.random() - 0.5) * 0.5;

            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.fillStyle = "#111827";
            ctx.fillText(text[i], 0, 0);
            ctx.restore();
        }

        // noise lines
        for (let i = 0; i < 4; i++) {
            ctx.strokeStyle = `rgba(0,0,0,0.3)`;
            ctx.beginPath();
            ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
            ctx.stroke();
        }
    };

    const onChangeName = (e) => {
        const formattedName = capitalizeEachWord(e.target.value);
        setName(formattedName)
    }

    const onChangePhone = (e) => {
        setPhone(allowOnlyNumbers(e.target.value))
    }
    const onChangeLocation = (e) => {
        setLocation(e.target.value)
    }

     const onSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        // Name validation
        if (name.trim() === "" || name.length < 3) {
            setNameErr("Please write your full name!");
            isValid = false;
        } else {
            setNameErr("");
        }
        // Phone validation
        if (phone.length == 0) {
            setPhoneErr("Please enter yor phone number!");
            isValid = false;
        } else if (phone.length !== 10) {
            setPhoneErr("Phone number looks Invalid!");
            isValid = false;
        } else {
            setPhoneErr("");
        }
        //location validation
        if (location.length == 0) {
            setLocationErr("Please give your Location!");
            isValid = false;
        } else {
            setLocationErr("");
        }

        // CAPTCHA validation
        if (captchaInput.trim() === "") {
            setCaptchaErr("Please enter captcha");
            isValid = false;
        } else if (captchaInput !== captchaText) {
            generateCaptchaCanvas();
            setCaptchaErr("Invalid captcha!");
            
            isValid = false;
        } else {
            setCaptchaErr("");
        }

        if (!isValid) return;
        let reqData = {
            uName: name,
            uMail: email,
            uPhone: phone,
            uMessage: message
        }
        console.log("---reqData----", reqData)
    }

    return (
        <>
            <div className="grid grid-cols-1">
                <div className="mt-2">
                    <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${nameErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2 `}>
                        {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                        <input value={name} onChange={(e) => onChangeName(e)} id="username" type="text" name="username" placeholder="Type Name" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    </div>
                    <div className="h-6">
                        <span className="text-xs text-red-700 font-medium">{nameErr}</span>
                    </div>
                </div>
                <div className="">
                    <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${phoneErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2`}>
                        {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                        <input value={phone} onChange={(e) => onChangePhone(e)} maxLength={10} id="phone" type="text" name="phone" placeholder="Type Phone No." pattern="[0-9]{10}" className="no-spinner block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    </div>
                    <div className="h-6">
                        <span className="text-xs text-red-700 font-medium">{phoneErr}</span>
                    </div>
                </div>
                <div className="">
                    <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${locationErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2`}>
                        {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                        <input value={location} onChange={(e) => onChangeLocation(e)} maxLength={10} id="phone" type="text" name="phone" placeholder="Type Location" pattern="[0-9]{10}" className="no-spinner block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                    </div>
                    <div className="h-6">
                        <span className="text-xs text-red-700 font-medium">{locationErr}</span>
                    </div>
                </div>
                {/* captcha section */}
                <div className="">
                    <label className="block text-sm md:text-[14px] font-medium text-gray-900">
                        CAPTCHA
                    </label>
                    <div className="flex items-center gap-3 mt-2">
                        <canvas
                            ref={canvasRef}
                            width={120}
                            height={40}
                            className="rounded-md border border-gray-300 bg-gray-100"
                        />
                        <button
                            type="button"
                            onClick={generateCaptchaCanvas}
                            className="md:p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                        >
                            <img
                                src={ImageConstraint.QUALITY_CONTROL.REFRESH}
                                className="h-5 w-5 object-contain"
                            />
                        </button>
                        <input
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            placeholder="Enter captcha"
                            className={`block w-20 md:w-40 rounded-full px-4 py-2 outline-1 
                                        ${captchaErr ? "bg-red-200 outline-red-500" : "bg-white outline-gray-300"}
                                        focus:outline-2 focus:outline-amber-600`}
                        />
                    </div>

                    <div className="h-3 md:h-6">
                        <span className="text-xs text-red-700 font-medium">
                            {captchaErr}
                        </span>
                    </div>
                </div>
                <div className="">
                    <button onClick={(e) => onSubmit(e)} type="submit" className="rounded-full cursor-pointer bg-[#5B1629] px-4 py-2 md:px-7 md:py-3 text-sm md:text-lg font-medium text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Submit</button>
                </div>
            </div>
        </>
    )
}