import React from 'react';

export default function About() {
  return (
    <>

      <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="bg-fixed ..." src="/src/assets/Full-Stack-Developer.webp" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Samiye Ahsan Portfolio</h5>
          <p className="mb-3 font-normal ">
            Highly motivated and results-oriented Entry-Level Backend Engineer with a strong foundation in React. Eager to learn and contribute to a team environment. Possesses excellent problem-solving and analytical skills. Dedicated to building and maintaining reliable and user-friendly backend systems.
            .</p>
        </div>
      </a>


    </>
  );
}