import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai"



export default function Navbar() {


    function toggleCart() {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full');
            ref.current.classList.add('translate-x-0');
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0');
            ref.current.classList.add('translate-x-full');
        }
    }

    const ref = useRef();
    return (
        <div className=' flex flex-col md:flex-row md:justify-start  items-center '>

            <div>
                <Image src="/logo1.png" width={200} height={5} alt='/' />
            </div>

            <div>
                <ul className=' flex justify-center p-3 gap-2 items-center'>
                    <Link href={'/Tshirts'}> <li>T-Shirts</li>  </Link>
                    <Link href={"/"}>  <li>Hoddies</li>   </Link>
                    <Link href={"/"}>  <li>Stickers</li>   </Link>
                    <Link href={"/"}>  <li>Mugs</li>   </Link>
                </ul>
            </div>

            <button>
                <div onClick={toggleCart} className='cursor-pointer flex absolute top-0 right-0 p-5 '>
                    <FaCartPlus className='text-xl md:text-2xl lg:text-3xl' />
                </div>
            </button>

            <div ref={ref} className='w-72 h-full  sideCart absolute top-0 right-0 px-8 py-10 bg-slate-400  transform transition-transform translate-x-full rounded-sm overflow-auto'>
                <h2 className=' font-bold text-xl text-center'>Shopping Cart</h2>
                <span onClick={toggleCart} className='absolute top-3 right-3 cursor-pointer text-3xl '>
                    <AiFillCloseCircle />
                </span>
                <ol className=''>
                    <li>
                        <div className='flex justify-start m-1'>
                            <div className='w-2/3 '> T-shirts - Wear The Code </div>
                            <div className='w-1/3 '> 1</div>
                        </div>
                    </li>
                </ol>

                <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>


        </div>
    )
}
