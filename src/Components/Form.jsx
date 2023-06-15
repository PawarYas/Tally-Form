import React, { useState, useEffect, useRef, Fragment } from 'react';
import {
    Dialog,
    DialogHeader,
    DialogBody,
} from "@material-tailwind/react";
import { RiDeleteBinLine, RiArrowDownSLine, RiGridLine } from 'react-icons/ri'
import { AiOutlinePlus, AiOutlineMenu, AiOutlineStar } from 'react-icons/ai'
import { MdDragIndicator, MdAlternateEmail, MdOutlineDateRange, MdLinearScale } from 'react-icons/md'
import { HiOutlineMenuAlt4, HiOutlinePhone, HiOutlineUpload } from 'react-icons/hi'
import { IoMdCheckmarkCircleOutline, IoMdCheckboxOutline } from 'react-icons/io'
import { BsCheckAll } from 'react-icons/bs'
import { FiHash } from 'react-icons/fi'
import { BiLink, BiTimeFive, BiSearch } from 'react-icons/bi'
import { SlBadge } from 'react-icons/sl'
import { TbPencilMinus } from 'react-icons/tb'
import ReactStars from 'react-stars'


const Form = () => {
    const [openModal, SetOpenModal] = useState(false);
    const handleOpen = () => SetOpenModal(!openModal);
    const [block, SetBlock] = useState([{
        id: 0, items: []
    }]);
    const [selectedBlock, setSelectedBlock] = useState(null)
    const [showDropdown, setShowDropdown] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [showABlock, SetShowABlock] = useState("input");
    const [option, SetOption] = useState([])
    const [showTitle, setShowTitle] = useState(false);
    const [showLabel, setShowLabel] = useState(false);
    const dropdownRef = useRef(null);



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };
        if (showDropdown) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showDropdown]);




    // For Adding Block
    const AddBlock = () => {
        SetBlock([...block, {
            id: block.length + 1,
            items: []
        }])
        SetShowABlock("input")
    }


    // For Deleting Block
    const DeleteBlock = (id) => {
        const index = block.findIndex((elem) => elem.id === id);
        if (index < 0) {
            return;
        }
        const tempBlock = [...block];
        tempBlock.splice(index, 1);
        SetBlock(tempBlock);
    }

    // For Adding Block through Enter Press
    const handleKeyPress = (event, id) => {
        const index = block.findIndex((elem) => elem.id === id);
        if (index && event.key === 'Enter') {
            // console.log('Input value:', inputValue);
            setInputValue('');
            AddBlock()
        }
    };

    // For Open Dropdown through slash Key
    const handleKeyDown = (event, id) => {
        const index = block.findIndex((elem) => elem.id === id);
        if (index && event.key === '/') {
            setShowDropdown(index);
            setSelectedBlock(id)
            // alert("Fffffffffff")
        }
    };


    // For Adding Option 
    const AddOption = () => {
        SetOption([...option, {
            items: []
        }])
    }

    // const viewBlock = (id) => {
    //     let data = blockItem.map((elem) => {
    //         if (elem.id === id) {
    //             SetShowABlock(elem.show)
    //         }
    //     });
    //     return data;
    // }

    // const viewBlock = (view, id) => {
    //     let updatedBlockItem = blockItem.map((elem) => {
    //         if (elem.id === id) {
    //             return {
    //                 ...elem,
    //                 show: view,
    //             };
    //         } else {
    //             return elem;
    //         }
    //     });
    //     SetShowABlock(updatedBlockItem);
    //     return updatedBlockItem;
    // };

    // const viewBlock = (view, id) => {
    //     let render = blockItem.map((elem) => {
    //         if (elem.id === id) {
    //             SetShowABlock(elem.show)
    //         }
    //     })
    // };


    const blockItem = [
        {
            id: 1,
            icon: <HiOutlineMenuAlt4 />,
            item: "Short answer",
            show: "short-input"
        },
        {
            id: 2,
            icon: <AiOutlineMenu />,
            item: "Long answer",
            show: "textarea"
        },
        {
            id: 4,
            icon: <IoMdCheckmarkCircleOutline />,
            item: "Multiple choice",
            show: "choice"
        },
        {
            id: 5,
            icon: <IoMdCheckboxOutline />,
            item: "Checkboxes",
            show: "checkbox"
        },
        {
            id: 6,
            icon: <RiArrowDownSLine />,
            item: "Dropdowns",
            show: "dropdown"
        },
        {
            id: 7,
            icon: <BsCheckAll />,
            item: "Multi-select",
            show: "multi-select"
        },
        {
            id: 8,
            icon: <FiHash />,
            item: "Number",
            show: "number"
        },
        {
            id: 9,
            icon: <MdAlternateEmail />,
            item: "Email",
            show: "email"
        },
        {
            id: 10,
            icon: <HiOutlinePhone />,
            item: "Phone Number",
            show: "phone-number"
        },
        {
            id: 11,
            icon: <BiLink />,
            item: "Link",
            show: "link"
        },
        {
            id: 12,
            icon: <MdOutlineDateRange />,
            item: "Date",
            show: "date"
        },
        {
            id: 13,
            icon: <BiTimeFive />,
            item: "Time",
            show: "time"
        },
        {
            id: 14,
            icon: <HiOutlineUpload />,
            item: "File upload",
            show: "file"
        },
        {
            id: 16,
            icon: <AiOutlineStar />,
            item: "Rating",
            show: "rating"
        },
        {
            id: 17,
            icon: <SlBadge />,
            item: "Ranking",
            show: "ranking"
        },
        {
            id: 18,
            icon: <MdLinearScale />,
            item: "Linear scale",
            show: "linear-scale"
        },
        {
            id: 19,
            icon: <TbPencilMinus />,
            item: "Signature",
            show: "signature"
        },
        {
            id: 20,
            icon: <RiGridLine />,
            item: "Matrix",
            show: "matrix"
        },
    ]

    return (
        <>
            <div className='flex justify-center mt-20'>
                <div className=' w-full lg:w-2/3 md:w-full sm:w-full p-5'>
                    <input type='text' required placeholder='Form Title' className='w-full text-3xl  lg:text-4xl md:text-4xl px-6 py-5 font-bold focus:border-transparent focus:outline-none mb-6' />

                    {/* One */}
                    <div className='flex text-xl gap-2 mb-5 mt-1'>
                        <div>
                            <RiDeleteBinLine className='text-gray-500 hover:bg-slate-200 cursor-pointer ease-in-out duration-300' title='Delete this block' onClick={(id) => DeleteBlock(id)} />
                        </div>
                        <div>
                            <AiOutlinePlus className='text-gray-500 hover:bg-slate-400 cursor-pointer ease-in-out duration-300' title='Insert block below' />
                        </div>
                        <div>
                            <MdDragIndicator className='text-gray-500 hover:bg-slate-200 cursor-pointer ease-in-out duration-300' title='Drag to move' />
                        </div>



                        <div className='-mt-1' ref={dropdownRef}>
                            <input type='text' required className='w-full focus:border-transparent focus:outline-none'
                                placeholder="Type '/' to insert block" value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={(e) => {
                                    handleKeyPress(e)
                                    // handleKeyDown(e)
                                }} />
                            {/* Dropdown */}
                            {/* {showDropdown && (
                                <div className='bg-white w-[15rem] lg:w-[30rem] md:w-[20rem]  max-h-[15rem] overflow-x-auto  
                                 scroll-smooth shadow-xl cursor-pointer border-2 border-gray-300 rounded-md'>
                                    <h1 className='text-sm px-5 py-2 font-bold text-gray-700 uppercase mt-3'>input blocks</h1>
                                    {blockItem.map((list) => (
                                        <div className='flex gap-4 px-4 py-2 hover:bg-gray-300 ease-in-out duration-200' key={list.id}
                                            onClick={() => {
                                                SetShowABlock(list.show)
                                                setShowDropdown(list.id);
                                            }}>
                                            <h1 className='text-md text-gray-700 '>{list.icon}</h1>
                                            <h1 className='text-sm lg:text-lg md:text-lg -mt-1'>{list.item}</h1>
                                        </div>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </div>



                    <div>
                        {block && block.map((data) => (
                            <div className='flex text-xl gap-2 mb-5 mt-1' key={data.id}>
                                <div>
                                    <RiDeleteBinLine className='text-gray-500 hover:bg-slate-200 cursor-pointer ease-in-out duration-300' title='Delete this block' onClick={(id) => DeleteBlock(data.id)} />
                                </div>
                                <div>
                                    <AiOutlinePlus className='text-gray-500 hover:bg-slate-200 cursor-pointer ease-in-out duration-300' title='Insert block below' onClick={handleOpen} />
                                </div>
                                <div>
                                    <MdDragIndicator className='text-gray-500 hover:bg-slate-200 cursor-pointer ease-in-out duration-300' title='Drag to move' />
                                </div>



                                {/* Default Input  */}
                                {
                                    showABlock === "input"
                                    &&
                                    <div className='-mt-1' ref={dropdownRef}>
                                        <input type='text' required className='w-full focus:border-transparent focus:outline-none'
                                            placeholder="Type '/' to insert block" onKeyDown={(e) => {
                                                handleKeyPress(e, data.id)
                                                handleKeyDown(e, data.id)
                                            }} />

                                        {/* Main Dropdown */}
                                        {showDropdown && selectedBlock === data.id && (
                                            <div className='bg-white w-[15rem] lg:w-[30rem] md:w-[20rem]  max-h-[13rem] overflow-x-auto  
                                        scroll-smooth shadow-xl cursor-pointer border-2 border-gray-300 rounded-md'>
                                                <h1 className='text-sm px-5 py-2 font-bold text-gray-700 uppercase mt-3'>input blocks</h1>
                                                {blockItem.map((list) => (
                                                    <div className='flex gap-4 px-4 py-2 hover:bg-gray-300 ease-in-out duration-200' key={list.id}
                                                        onClick={() => {
                                                            SetShowABlock(list.show)
                                                            // viewBlock(list.id)
                                                            setShowDropdown(!showDropdown);
                                                        }}>
                                                        <h1 className='text-md text-gray-700 '>{list.icon}</h1>
                                                        <h1 className='text-sm lg:text-lg md:text-lg -mt-1'>{list.item}</h1>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                }

                                {/* Short Answer */}
                                {showABlock === "short-input" &&
                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }
                                            {showLabel === true &&
                                                <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>

                                            <input type='text' required placeholder='Type Short answer'
                                                className='  -mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 
                                            text-lg w-full bg-white focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <HiOutlineMenuAlt4 className='relative right-7 top-2 cursor-pointer' title='Short answer' />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out duration-200' title='Click Alt+T to Add Title' onClick={() => {
                                                setShowTitle(true)
                                                setShowLabel(false)
                                            }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Long Area */}
                                {showABlock === "textarea" &&
                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                                <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }

                                        </div>
                                        <div className='flex'>
                                            <textarea type='text' required placeholder='Type Long Answer'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full h-36 focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <AiOutlineMenu className='relative right-7 top-2 cursor-pointer' title='Long answer' />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out duration-200' title='Click Alt+T to Add Title' onClick={() => {
                                                setShowTitle(true)
                                                setShowLabel(false)
                                            }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }


                                {/* Number */}
                                {showABlock === "number" &&

                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                               <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='number' required placeholder='Type Numbers'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <FiHash className='relative right-7 top-2 cursor-pointer' title='Numbers' />
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out duration-200' title='Click Alt+T to Add Title' onClick={() => {
                                                setShowTitle(true)
                                                setShowLabel(false)
                                            }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Email */}
                                {showABlock === "email" &&
                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                                <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='email' required placeholder='Type Email Address'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <MdAlternateEmail className='relative right-7 top-2 cursor-pointer' title='Email' />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out duration-200' title='Click Alt+T to Add Title' onClick={() => {
                                                setShowTitle(true)
                                                setShowLabel(false)
                                            }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Phone Number */}
                                {showABlock === "phone-number" &&
                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                               <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='text' maxLength="20" required placeholder='Type Phone Number'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <HiOutlinePhone className='relative right-7 top-2 cursor-pointer' title='Phone number' />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out duration-200' title='Click Alt+T to Add Title' onClick={() => {
                                                setShowTitle(true)
                                                setShowLabel(false)
                                            }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }


                                {/* Date */}
                                {showABlock === "date" &&

                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                               <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='date' required placeholder='Type Date'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out
                                             duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                    setShowTitle(true)
                                                    setShowLabel(false)
                                                }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Time */}
                                {showABlock === "time" &&


                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }

                                            {showLabel === true &&
                                                <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='time' required placeholder='Type Time '
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />

                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                            duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                    setShowTitle(true)
                                                    setShowLabel(false)
                                                }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Link */}
                                {showABlock === "link" &&
                                    <div className='w-full'>
                                        <div className='flex flex-col'>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }
                                            {showLabel === true &&
                                                <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>

                                        <div className='flex'>
                                            <input type='url' required placeholder='Type Link here'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-lg bg-white w-full focus:border-transparent focus:outline-none' onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <BiLink className='relative right-7 top-2 cursor-pointer' title='Link' />
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                         duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                    setShowTitle(true)
                                                    setShowLabel(false)
                                                }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* File Upload */}
                                {showABlock === "file" &&

                                    <div className='w-full'>
                                        {showTitle === true &&
                                            <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                        }
                                        {showLabel === true &&
                                           <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                        }

                                        <div className='flex'>
                                            <input type='file' required placeholder='Upload a File'
                                                className='-mt-2 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-full 
                                        h-24 text-center focus:border-transparent focus:outline-none'
                                                onKeyDown={(e) => { handleKeyPress(e, data.id) }} />
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                      duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                    setShowTitle(true)
                                                    setShowLabel(false)
                                                }}>Add Title</label>
                                            <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                setShowLabel(true)
                                                setShowTitle(false)
                                            }}>Add Label</label>
                                        </div>
                                    </div>
                                }

                                {/* Multiple Choice */}
                                {showABlock === "choice" &&
                                    <div>
                                        {option && option.map((opt, i) => (
                                            <div key={i}>
                                                <div>
                                                    {showTitle === true &&
                                                        <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                                    }
                                                    {showLabel === true &&
                                                        <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                                    }
                                                </div>

                                                <input type='text' required placeholder={`${i} Option `}
                                                    className='-mt-2 mb-3 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-auto focus:border-transparent focus:outline-none' />

                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                      duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        ))}
                                        <button className='text-[15px] mt-3 shadow-lg bg-white px-3 py-1 rounded-lg border-2  border-gray-50'
                                            onClick={AddOption}>Add Options ▶️</button>
                                    </div>
                                }

                                {/* Checkbox */}
                                {showABlock === "checkbox" &&
                                    <div>
                                        {option && option.map((opt, i) => (
                                            <div key={i}>
                                                <div>
                                                    {showTitle === true &&
                                                        <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                                    }
                                                    {showLabel === true &&
                                                        <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                                    }
                                                </div>

                                                <input type='checkbox' required name={`${i} Option `} key={i}
                                                    className='-mt-2 mb-3 shadow-lg px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-auto focus:border-transparent focus:outline-none absolute' />
                                                <input type='text' required placeholder={`${i} Options`} name={`${i} Option`}
                                                    className='-mt-2 mb-3 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 text-lg bg-white w-36 focus:border-transparent focus:outline-none' />

                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                                       duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        ))}
                                        <button className='text-[15px] mt-3 shadow-lg bg-white px-3 py-1 rounded-lg border-2  border-gray-50'
                                            onClick={AddOption}>Add Options ▶️</button>
                                    </div>
                                }


                                {/* Dropdown */}
                                {showABlock === "dropdown" &&
                                    <div >
                                        {option && option.map((opt, i) => (
                                            <div key={i}>
                                                <div>
                                                    {showTitle === true &&
                                                        <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                                    }
                                                    {showLabel === true &&
                                                         <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                                    }
                                                </div>

                                                <input type='text' required placeholder={`${i} Option `}
                                                    className='-mt-2 mb-3 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-auto focus:border-transparent focus:outline-none' />

                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                                       duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        ))}
                                        <button className='text-[15px] mt-3 shadow-lg bg-white px-3 py-1 rounded-lg border-2  border-gray-50'
                                            onClick={AddOption}>Add Options ▶️</button>
                                    </div>
                                }


                                {/* Multi-Select */}
                                {showABlock === "multi-select" &&
                                    <div>
                                        {option && option.map((opt, i) => (
                                            <div key={i}>
                                                <div>
                                                    {showTitle === true &&
                                                        <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                                    }
                                                    {showLabel === true &&
                                                         <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                                    }
                                                </div>

                                                <input type='text' required placeholder={`${i} Option `}
                                                    className='-mt-2 mb-3 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-red-50 w-auto focus:border-transparent focus:outline-none ' />

                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                                 duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        ))}
                                        <button className='text-[15px] mt-3 shadow-lg bg-white px-3 py-1 rounded-lg border-2  border-gray-50'
                                            onClick={AddOption}>Add Options ▶️</button>
                                    </div>
                                }


                                {/* Ranking */}
                                {showABlock === "ranking" &&
                                    <div>
                                        {option && option.map((opt, i) => (
                                            <div key={i}>
                                                <div>
                                                    {showTitle === true &&
                                                        <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                                    }
                                                    {showLabel === true &&
                                                        <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                                    }
                                                </div>

                                                <input type='text' required placeholder={`${i} Option `}
                                                    className='-mt-2 mb-3 shadow-md  shadow-[#00000042] px-3 py-2 rounded-lg border-2 border-gray-50 text-sm bg-white w-auto focus:border-transparent focus:outline-none ' />

                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                                     duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        ))}
                                        <button className='text-[15px] mt-3 shadow-lg bg-white px-3 py-1 rounded-lg border-2  border-gray-50'
                                            onClick={AddOption}>Add Options ▶️</button>
                                    </div>
                                }


                                {/* Rating */}
                                {showABlock === "rating" &&
                                    <div className='flex flex-col'>
                                        <div>
                                            {showTitle === true &&
                                                <input className='-mt-1 inline-block bg-white focus:border-transparent focus:outline-none mb-3' placeholder='Type a question' />
                                            }
                                            {showLabel === true &&
                                                 <input className=' inline-block bg-white text-sm focus:border-transparent focus:outline-none mb-4' placeholder='Label' />
                                            }
                                        </div>
                                        <div className='flex flex-row'>
                                            <div className='-mt-2'>
                                                <ReactStars count={5} size={36} color2={'#ffe900'} />
                                            </div>
                                            <div className='-mt-2'>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ease-in-out 
                                                        duration-200 ml-2' title='Click Alt+T to Add Title' onClick={() => {
                                                        setShowTitle(true)
                                                        setShowLabel(false)
                                                    }}>Add Title</label>
                                                <label className='text-sm text-gray-600 hover:text-gray-800 cursor-pointer ml-4 ease-in-out duration-200' title='Click Alt+L to Add Label' onClick={() => {
                                                    setShowLabel(true)
                                                    setShowTitle(false)
                                                }}>Add Label</label>
                                            </div>
                                        </div>
                                    </div>

                                }


                                {/* Linear-Scale */}
                                {showABlock === "linear-scale" &&
                                    <div className='-mt-2 mb-5'>
                                        <div className=''>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>0</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>1</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>2</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>3</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>4</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>5</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>6</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>7</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>8</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>9</span>
                                            <span className='px-4 py-3 text-[15px] shadow-lg border-2 rounded-lg cursor-pointer hover:bg-gray-100 ease-in-out duration-200'>10</span>
                                        </div>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>


                    {/* Modal */}
                    <Fragment>
                        <Dialog open={openModal} size='lg' handler={handleOpen} animate={{
                            mount: { scale: 1, y: 0 },
                            unmount: { scale: 0.9, y: -100 }
                        }}>
                            <DialogHeader>
                                <BiSearch />
                                <input type='text' placeholder='Find questions, input fields and layout options...'
                                    className='w-full px-2 focus:border-transparent focus:outline-none' />
                            </DialogHeader>


                            <DialogBody divider>
                                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1">
                                    <div className="overflow-y-scroll w-full h-96 scroll-smooth">
                                        <h1 className='text-sm px-2 py-1 font-bold text-gray-700 uppercase'>input blocks</h1>
                                        {blockItem.map((list) => (
                                            <div className='flex gap-4 py-2 hover:bg-gray-300 ease-in-out duration-200 cursor-pointer'
                                                key={list.id}
                                                onClick={() => {
                                                    SetShowABlock(list.show)
                                                }}>
                                                <h1 className='text-md text-gray-700 '>{list.icon}</h1>
                                                <h1 className='text-lg -mt-1'>{list.item}</h1>
                                            </div>
                                        ))}
                                    </div>
                                    fffffffffffff
                                </div>
                            </DialogBody>
                        </Dialog>
                    </Fragment>
                </div>
            </div >
        </>
    )
}

export default Form