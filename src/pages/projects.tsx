/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { NextPage } from 'next'
import { Github, OpenLink2 } from '../components/Icons/Icons'

const About: NextPage = () => {
  return (
    <>
      <div className="text-black px-5">
        <p className="px-5 rounded py-1 bg-gray-300 block sm:hidden">Mobile</p>
        <p className="px-5 rounded py-1 bg-red-300 hidden sm:block md:hidden">Sm</p>
        <p className="px-5 rounded py-1 bg-green-300 hidden sm:hidden md:block lg:hidden">Md</p>
        <p className="px-5 rounded py-1 bg-blue-300 hidden sm:hidden md:hidden lg:block xl:hidden">Lg</p>
        <p className="px-5 rounded py-1 bg-yellow-300 hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">xl</p>
        <p className="px-5 rounded py-1 bg-purple-300 hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">2xl</p>
      </div>
      <section className="w-11/12 px-4 md:px-0 mt-16 md:mt-24 lg:mt-28 mx-auto md:w-3/4 lg:w-10/12 text-gray-300">
        <div>
          <div className=" space-y-2 md:space-y-5">
            <h1 className="mb-3 lg:mb-5 text-4xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              Projects
            </h1>
            <p className=" sm:w-9/12 md:w-10/12 lg:w-9/12 text-base md:text-lg font-normal ">
              {/* With each new project, my goal it to either learn something new, or increase the size and the scope of the
              technologies I have previosly used. */}
              {/* These are some of my personal projects. This is a way for me to chronicle my growth as a developer. */}
              My personal projects are a way for me to chronicle my growth as a developer.
            </p>
          </div>
          <div className="space-y-6 ">
            <div className="mt-6  flex w-full md:mx-auto lg:ml-0 lg:w-9/12 border border-gray-800 hover:border-gray-600 md:h-96 h-60 rounded-lg shadow-2xl relative">
              <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img
                  className=" absolute inset-0 h-full w-full object-cover rounded-lg"
                  src="/lift.png"
                  alt="lift workout app"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg md:bg-opacity-60 bg-gradient-to-r from-black  " />
              </a>

              <div className=" px-6 py-3 relative  md:w-8/12  my-auto text-gray-50 rounded-lg ">
                <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h1 className="mt-2 lg:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight  sm:leading-10 md:leading-14">
                    Lift Workout App
                  </h1>
                  <div className=" sm:w-9/12 md:w-full text-sm md:text-lg ">
                    <p className="mt-2 leading-snug md:text-base">
                      A simple, accessible workout app that allows a user to create, track, and update their daily
                      workout routines.
                    </p>
                    <ul className="flex text-xs mt-3 font-semibold lg:mt-4">
                      <li className=" mr-3">
                        <i>Next.js</i>
                      </li>
                      <li className=" mr-3">
                        <i>Firebase</i>
                      </li>
                      <li className=" mr-3">
                        <i>Tailwind CSS</i>
                      </li>
                    </ul>
                  </div>
                </a>
                <div className="pt-2 mt-1 lg:mt-2 flex">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/NEXT-Workout-App"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://lift-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex w-full md:mx-auto lg:mr-0 lg:w-9/12 border border-gray-800 hover:border-gray-600 md:h-96 h-60 rounded-lg shadow-2xl relative">
              <a href="https://covid19ca.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  src="/covid.png"
                  alt="covid-19 tracker"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg bg-gradient-to-r from-black  " />
              </a>
              <div className=" px-6 py-3 relative  md:w-8/12  my-auto text-gray-50 rounded-lg ">
                <a href="https://covid19ca.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <h1 className="mt-2 lg:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight sm:leading-10 md:leading-14">
                    COVID-19 Tracker
                  </h1>
                  <div className=" sm:w-9/12 md:w-full text-sm md:text-lg ">
                    <p className=" mt-2 md:mt-0  leading-snug md:text-base">
                      This dashboard provides up-to-date information about the COVID-19 outbreak and the vaccination
                      efforts in Canada.
                    </p>
                    <ul className="lg:mt-4 flex text-xs mt-3 font-semibold">
                      <li className=" mr-3">
                        <i>React</i>
                      </li>
                      <li className=" mr-3">
                        <i>Chart.js</i>
                      </li>
                      <li className=" mr-3">
                        <i>COVID-19 API</i>
                      </li>
                    </ul>
                  </div>
                </a>
                <div className="pt-2 mt-1 flex lg:mt-2">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/covid19canada"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://covid19ca.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex w-full md:mx-auto lg:ml-0 lg:w-9/12 border border-gray-800 hover:border-gray-600 md:h-96 h-60 rounded-lg shadow-2xl relative">
              <a href="https://reels.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  src="/reels2.png"
                  alt="reels movie db"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg md:bg-opacity-50 bg-gradient-to-r from-black  " />
              </a>
              <div className=" px-6 py-3 relative  md:w-8/12  my-auto text-gray-50 rounded-lg ">
                <a href="https://reels.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <h1 className="mt-2 lg:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight  sm:leading-10 md:leading-14">
                    Reels Movie Db
                  </h1>
                  <div className=" sm:w-9/12 md:w-full text-sm md:text-lg ">
                    <p className="mt-2 leading-snug md:text-base">
                      A simplified Netflix clone that helps you browse through 600,000 movies and find the details of
                      your favortie ones.
                    </p>
                    <ul className="flex text-xs mt-3 font-semibold lg:mt-4">
                      <li className=" mr-3">
                        <i>React</i>
                      </li>
                      <li className=" mr-3">
                        <i>SCSS</i>
                      </li>
                      <li className=" mr-3">
                        <i>TMDb API</i>
                      </li>
                    </ul>
                  </div>
                </a>
                <div className="pt-2 mt-1 flex lg:mt-2">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/Movie-Database"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://reels.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex w-full md:mx-auto lg:mr-0 lg:w-9/12 border border-gray-800 hover:border-gray-600 md:h-96 h-60 rounded-lg shadow-2xl relative">
              <a href="https://google-keep-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                <img
                  className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  src="/keep-dark.webp"
                  alt="keep clone"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 rounded-lg md:bg-opacity-60 md:bg-gradient-to-r from-black  " />
              </a>
              <div className=" px-6 py-3 relative  md:w-8/12  my-auto text-gray-50 rounded-lg ">
                <a href="https://google-keep-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <h1 className="mt-2 lg:mb-5 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug tracking-tight sm:leading-10 md:leading-14">
                    Keep Clone
                  </h1>
                  <div className=" sm:w-9/12 md:w-full text-sm md:text-lg ">
                    <p className=" mt-2 md:mt-0  leading-snug md:text-base">
                      A responsive Google Keep clone that allows users to create, delete and save their notes. Dark mode
                      enabled!
                    </p>
                    <ul className="lg:mt-4 flex text-xs mt-3 font-semibold">
                      <li className=" mr-3">
                        <i>Next.js</i>
                      </li>
                      <li className=" mr-3">
                        <i>Firebase</i>
                      </li>
                      <li className=" mr-3">
                        <i>Tailwind</i>
                      </li>
                    </ul>
                  </div>
                </a>
                <div className="pt-2 mt-1 flex lg:mt-2">
                  <a
                    className="mr-5"
                    href="https://github.com/prnvbirajdar/NEXT-Google-Keep"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                  <a href="https://google-keep-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <OpenLink2 />
                  </a>
                </div>
              </div>
            </div>

            {/* <div className=" space-y-2 md:space-y-5">
              <h1 className="mt-6 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight hover:text-gray-700  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Reels Movie Db
              </h1>
              <div className="sm:w-9/12 md:w-10/12 lg:w-9/12 text-sm md:text-lg font-normal ">
                <p>
                  A simplified Netflix clone with a personal twist. It helps you find your favortie movies and watch
                  trailers.
                </p>
                <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                  <li className="md:ml-3 mr-3">React</li>
                  <li className="md:ml-3 mr-3">React-Router</li>
                  <li className="md:ml-3 mr-3">TMDb API</li>
                </ul>
                <p>Features:</p>
                <ul>
                  <li>Search through 30,000 movies from the TMDb API.</li>
                  <li>Browse through the weekly updated trending and upcoming movies.</li>
                  <li>
                    Every movie includes details such the release year, genre, movie runtime, a short summary, and a
                    list of cast and crew involved.
                  </li>
                  <li>
                    The individual movie page also allows user to watch a Youtube trailer in a modal and browse through
                    a list of similar movies.
                  </li>
                </ul> 
              </div>
            </div> */}
            {/* 
            <div className=" space-y-2 md:space-y-5">
              <h1 className="mt-6 lg:mb-5 text-3xl font-extrabold leading-9 tracking-tight hover:text-gray-700  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Keep Clone
              </h1>
              <div className="sm:w-9/12 md:w-10/12 lg:w-9/12 text-sm md:text-lg font-normal ">
                <p>
                  A minimalistic Google Keep clone. My goal with this project was to learn Next.js, Tailwind CSS, and
                  Firebase and this glorified todo list helped me achieve exactly that.
                </p>
                <ul className="flex md:justify-end text-xs mt-3 font-semibold">
                  <li className="md:ml-3 mr-3">Next.js</li>
                  <li className="md:ml-3 mr-3">Firebase</li>
                  <li className="md:ml-3 mr-3">Tailwind</li>
                </ul>
                <p>Features:</p>
                <ul>
                  <li>Static website importing dynamic assests from Firebase.</li>
                  <li>
                    Users can create, update, and delete notes. All changes are immediately pushed to the database.
                  </li>
                  <li>Enable/disable dark mode. Saves your preference for next time.</li>
                  <li>Adapts to all screen sizes, from mobile screens upto 4k displays.</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
