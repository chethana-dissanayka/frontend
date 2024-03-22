import { useMemo } from "react";
import { TextField, Button } from "@mui/material";

const Footer = ({
    propAlignSelf = "unset",
    propPosition = "absolute",
    propTop = "4450px",
    propLeft = "0px",
    propWidth = "100%"
}) => {
    const footerStyle = useMemo(() => {
        return {
            alignSelf: propAlignSelf,
            position: propPosition,
            top: propTop,
            left: propLeft,
            width: propWidth,

        };
    }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

    return (
        <footer className="bg-black text-white" style={footerStyle}>
            <div className="container mx-auto flex flex-wrap justify-center gap-x-40" style={{ marginTop: '100px', marginBottom: "100px" }}>
                <div className="relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-start gap-y-8 md:gap-y-0 md:gap-x-28 lg:gap-x-20" >
                    {/* Home */}
                    <div className="flex flex-col items-start justify-start gap-y-5">
                        <b className="text-base">Home</b>
                        <b className="text-sm">About us</b>
                        <b className="text-sm">Team</b>
                        <b className="text-sm">What we do</b>
                        <b className="text-sm">Contact</b>
                    </div>

                    {/* More */}
                    <div className="flex flex-col items-start justify-start gap-y-5">
                        <b className="text-base">More</b>
                        <b className="text-sm">Projects</b>
                        <b className="text-sm">Events</b>
                        <b className="text-sm">Donate</b>
                        <b className="text-sm">Blog</b>
                    </div>

                    {/* Connect */}
                    <div className="flex flex-col items-start justify-start gap-y-5">
                        <b className="text-base">Connect</b>
                        <b className="text-sm">Facebook</b>
                        <b className="text-sm">Instagram</b>
                        <b className="text-sm">Twitter</b>
                        <b className="text-sm">LinkedIn</b>
                    </div>
                </div>

                {/* Feedback */}
                <div className="flex flex-col items-start justify-start gap-y-0 md:gap-y-8 md:gap-x-4 lg:gap-x-8" style={{ marginTop: '24px' }}>
                    <h1 className="text-xl">PUT YOUR FEEDBACKS HERE</h1>
                    <div className="flex gap-x-4">
                        <div className="relative flex-1" style={{ width: '300px' }}>
                            <input
                                className="bg-transparent border border-gray-300 h-16 px-4 w-full rounded"
                                placeholder="Your email"
                            />
                        </div>
                        <Button
                            className="h-16 px-6 bg-white text-black rounded-md"
                            variant="contained"
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
            <img style={{ marginTop: '70px'}}
                className="absolute top-16 left-20  h-40 w-40"
                src="footerlogo.png"
                alt=""
            />
        </footer>
    );
};

export default Footer;
