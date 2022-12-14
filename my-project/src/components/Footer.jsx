import React from 'react'
import Logo from '../assets/Logo/LogoV3.png'
import pdf from '../assets/skills/PDF.png'

const Footer = () => {
  return (
        

<footer class="p-4 bg-white rounded-lg shadow md:px-8 md:py-4 dark:bg-gray-100">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#" class="flex items-center mb-4 sm:mb-0">
            <img src={Logo} class="h-12 mr-3" alt="Logo" />
        </a>
        <ul class="flex flex-wrap items-center mb-2 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li >
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Contact</a>
            </li>
            <li className='inline-flex'>
                <img src={pdf} width={17} className="  pr-0.5"/>
                <a href="#" class="hover:underline">Resume</a>
            </li>
        </ul>
    </div>
    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© <a href="https://Doniyori.com/" class="hover:underline">Doniyori.com</a>. All Rights Reserved.
    </span>
</footer>


  )
}

export default Footer