import React from 'react';


export default function Contact (){
  return(
   

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Information
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Links
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Email Address :
                </th>
                
                <td class="px-6 py-4">
                    <a href="mailto:samiye.ahsan16@gmail.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">samiye.ahsan16@gmail.com</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    GitHub : 
                </th>
               
                <td class="px-6 py-4">
                    <a href="https://github.com/samiyeahsan" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">https://github.com/samiyeahsan</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    phone number :
                </th>
              
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">612-###-####</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Linkedin
                </th>
                
                <td class="px-6 py-4">
                    <a href="https://www.linkedin.com/in/samiye-ahsan-b2291a2a3/"  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">www.linkedin.com/in/samiye-ahsan-b2291a2a3/</a>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

  )
}