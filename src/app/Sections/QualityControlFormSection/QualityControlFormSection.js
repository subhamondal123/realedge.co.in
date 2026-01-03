'use client'

import Colors from "@/enums/Colors";
import { useEffect, useRef, useState } from "react"
import { allowOnlyNumbers, validateEmail, validateForm } from "./Function";
import { capitalizeEachWord, generateCaptcha, generateRandomNumber } from "@/utils/CommonFunctions";
import ImageConstraint from "@/utils/ImageConstraint";

export default function QualityControlFormSection() {

    const [name, setName] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneErr, setPhoneErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [message, setMessage] = useState("");
    const [messageErr, setMessageErr] = useState("");
    const [randomNumber, setRandomNumber] = useState("");

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

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value == "") {
            setEmailErr("")
        } else if (!validateEmail(e.target.value)) {
            setEmailErr("Enter valid email address!")
        } else {
            setEmailErr("")
        }
    }
    const onChangeName = (e) => {
        const formattedName = capitalizeEachWord(e.target.value);
        setName(formattedName)
    }

    const onChangePhone = (e) => {
        setPhone(allowOnlyNumbers(e.target.value))
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value)
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

        // Email validation
        // if (email.trim() === "") {
        //     setEmailErr("Please enter your email!");
        //     isValid = false;
        // } else if (!validateEmail(email)) {
        //     setEmailErr("Enter valid email address!");
        //     isValid = false;
        // } else {
        //     setEmailErr("");
        // }
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
        //message validation
        if (message.length == 0) {
            setMessageErr("Please give your message!");
            isValid = false;
        } else {
            setMessageErr("");
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
        <div>
            <main>
                <form action={onSubmit} id="submit-form">
                    <div className="mt-2 md:mt-10 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
                        {/* name field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="username" className="block text-sm md:text-[18px] font-medium text-gray-900">Name</label>
                            <div className="mt-2">
                                <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${nameErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2 `}>
                                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                                    <input value={name} onChange={(e) => onChangeName(e)} id="username" type="text" name="username" placeholder="Type Name" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="h-6">
                                <span className="text-xs text-red-700 font-medium">{nameErr}</span>
                            </div>
                        </div>
                        {/* email field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm md:text-[18px] font-medium text-gray-900">Email</label>
                            <div className="mt-2">
                                <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${emailErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2`}>
                                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                                    <input value={email} onChange={(e) => onChangeEmail(e)} id="email" type="email" name="email" placeholder="Type Email" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="h-6">
                                <span className="text-xs text-red-700 font-medium">{emailErr}</span>
                            </div>
                        </div>
                        {/* phone field */}
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm md:text-[18px] font-medium text-gray-900">Phone No</label>
                            <div className="mt-2">
                                <div className={`h-10 flex items-center rounded-full pl-3 pr-3 outline-1 -outline-offset-1 ${phoneErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2`}>
                                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                                    <input value={phone} onChange={(e) => onChangePhone(e)} maxLength={10} id="phone" type="text" name="phone" placeholder="Type Phone No." pattern="[0-9]{10}" className="no-spinner block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                            <div className="h-6">
                                <span className="text-xs text-red-700 font-medium">{phoneErr}</span>
                            </div>
                        </div>
                        {/* message field */}
                        <div className="sm:col-span-6">
                            <label htmlFor="message" className="block text-sm md:text-[18px] font-medium text-gray-900">Message</label>
                            <div className="mt-2">
                                <div className={`flex items-center rounded-lg  pl-3 pr-1 outline-1 -outline-offset-1 ${messageErr ? "bg-red-200 outline-red-500 focus-within:outline-red-600" : "bg-white outline-gray-300 focus-within:outline-amber-600"} focus-within:outline-2 focus-within:-outline-offset-2 `}>
                                    {/* <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div> */}
                                    <textarea value={message} onChange={(e) => onChangeMessage(e)} rows={5} id="text" inputMode="numeric" type="number" name="message" placeholder="Type Message   " pattern="[0-9]{10}" className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" />
                                </div>
                            </div>
                            <span className="text-red-700 font-medium text-xs">{messageErr}</span>
                        </div>
                    </div>
                    {/* captcha section */}
                    <div className="mt-6">
                        <label className="block text-sm md:text-[18px] font-medium text-gray-900">
                            CAPTCHA
                        </label>

                        <div className="flex items-center gap-3 mt-2">
                            <canvas
                                ref={canvasRef}
                                width={150}
                                height={50}
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
                    <div className="mt-2 md:mt-5">
                        <button onClick={(e) => onSubmit(e)} type="submit" className="rounded-full cursor-pointer bg-orange-600 px-4 py-2 md:px-7 md:py-3 text-sm md:text-lg font-medium text-white shadow-xs hover:bg-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400">Submit</button>
                    </div>
                </form>
            </main>
        </div>
    )
}