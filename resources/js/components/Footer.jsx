import { Link, usePage, useForm } from '@inertiajs/inertia-react'
import React from 'react';
import { contactInfo } from "./Data";
import { categories, categoryDropdown, navigations } from "./NavData";
import { Form } from "./Shared";
// import { ReactComponent as Pin } from "/assets/images/icons/svg/pin.svg";
// import { ReactComponent as Tel } from "/assets/images/icons/svg/tel.svg";

const Footer = () => {
    const { errors, gphone, gemail, gaddress } = usePage().props;

    return (
        <div className="bg-custom-blue-900 py-10 sm:pb-20 text-white">
            <div className="wrapper ">
                <div className="xl:w-3/4 m-auto flex items-start justify-between flex-col lg:flex-row">
                    <div className="mb-10 lg:mb-0">
                        <div className="mb-8">
                            {navigations.map((nav, index) => {
                                return (
                                    <Link
                                        key={index}
                                        href={nav.link}
                                        className={` md:mr-8 xl:mr-10 mr-3 text-xs sm:text-sm md:text-lg xl:text-xl  inline-block ${navigations.length === index + 1 && "!mr-0"
                                            }`}
                                    >
                                        {nav.text}
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <div className="mr-10">
                                <div className="border-b border-white/[0.1] pb-1 mb-4">
                                    რკინეული
                                </div>
                                {categoryDropdown.map((item, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            className=" lowercase  block mb-3 w-full"
                                        >
                                            {item.text}
                                        </Link>
                                    );
                                })}
                            </div>
                            <div className="mt-7">
                                {categories.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.link}>
                                            <div className="relative block w-72 mb-1 text-center px-4 lg:py-5 py-3 whitespace-nowrap  hover:bg-custom-blue-500/[.1] border border-white/[0.1] ">
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                                                    {item.icon}
                                                </div>
                                                {item.text}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full lg:ml-8">
                        <div className=" lg:mr-8 mr-3  text-xs sm:text-sm md:text-lg xl:text-xl inline-block border-b border-white/[0.1] mb-12 pb-3 ">
                            გაქვთ კითხვები?
                        </div>
                        <Form dark />
                        <a href="#" className="block mt-6">
                            {/* <Pin fill="white" className="inline-block mr-2" /> */}
                            <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/pin.svg" />
                            {gaddress.value}
                        </a>
                        <a href={`tel:${contactInfo.tel}`} className="block mt-3">
                            {/* <Tel fill="white" className="inline-block mr-2" /> */}
                            <img className="inline-block align-middle mr-2" src="/assets/images/icons/svg/tel.svg" />
                            {gphone.value}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
