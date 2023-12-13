import React from 'react';

export default function About (){
  return(
    <>
      
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="bg-fixed ..." src="/src/assets/Full-Stack-Developer.webp" alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Samiye Ahsan Portfolio</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I am jonior fullstack developer that I would like to share some of my projects here..</p>
    </div>
</a>

      
    </>
  );
}