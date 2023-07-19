import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRecoilState, atom } from 'recoil';
import { logState } from './atoms';

const Navbar = () => {


    const [isLoggedIn, setIsLoggedIn] = useRecoilState(logState);


    return (
        <>
            <div className='flex justify-between items-center p-4 '>
                <div className='flex space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="209" height="41" viewBox="0 0 209 41" fill="none">
                        <path d="M13.5541 2.40105C17.8284 0.672937 22.6823 0.545602 27.0472 1.98267C29.13 2.67392 31.068 3.71079 32.8429 5.02052C31.4483 6.33025 30.2348 7.8037 29.1481 9.38629C26.9023 7.69455 24.1131 6.74864 21.2877 6.67587C18.2269 6.56673 15.1298 7.51265 12.6485 9.31353C9.9318 11.2781 7.95764 14.225 7.16073 17.463C6.38193 20.61 6.65361 24.0298 7.99386 26.9767C9.29789 29.8872 11.6162 32.3248 14.4597 33.78C16.941 35.0534 19.8026 35.5445 22.5737 35.2171C25.9605 34.8169 29.1844 33.1252 31.4483 30.5785C34.2918 27.4315 35.6683 22.9384 34.8895 18.7545C34.8171 18.227 34.6178 17.6994 34.7808 17.1901C35.4691 15.0254 36.7007 13.0426 38.3307 11.46C40.6128 15.7349 41.301 20.8646 40.1781 25.5942C38.9465 30.9787 35.3423 35.7628 30.5427 38.4369C27.1921 40.3469 23.28 41.22 19.4585 40.9472C15.5283 40.6743 11.7067 39.1827 8.60965 36.7269C5.16846 33.9983 2.63284 30.1237 1.58237 25.8489C0.405123 21.1557 1.02091 16.0441 3.24863 11.7511C5.44013 7.54903 9.153 4.16555 13.5541 2.40105ZM34.799 5.23881C38.5299 2.27372 43.3476 0.7457 48.0747 1.03675C52.9829 1.27323 57.7825 3.47431 61.1875 7.0215C64.8098 10.7324 66.8745 15.8986 66.8202 21.1011C66.8564 27.4497 63.6144 33.7073 58.4345 37.3272C53.2727 41.0563 46.2817 41.9841 40.2867 39.8557C38.3669 39.1827 36.5739 38.1822 34.9801 36.9452C36.3747 35.6537 37.6606 34.2348 38.6567 32.5976C40.9206 34.253 43.6555 35.2353 46.4447 35.3081C49.6323 35.4354 52.8743 34.4349 55.428 32.5249C57.9817 30.633 59.9016 27.8499 60.7166 24.7574C61.6221 21.374 61.2418 17.6813 59.6842 14.5525C58.3258 11.8238 56.0619 9.55001 53.3452 8.1857C50.8458 6.91235 47.9479 6.4212 45.1587 6.78502C42.116 7.16702 39.2363 8.62228 37.0629 10.787C34.6903 13.1336 33.187 16.317 32.8791 19.6459C32.7161 21.2284 32.8791 22.8292 33.0965 24.3936C32.6799 26.7948 31.231 28.9231 29.456 30.5421C27.5 26.9039 26.7031 22.6655 27.2283 18.5544C27.8984 13.3337 30.6695 8.44037 34.799 5.23881ZM72.145 2.54658C74.6625 2.54658 77.18 2.54658 79.7156 2.54658C79.7337 8.07656 79.6794 13.6247 79.7337 19.1547C80.1321 18.8455 80.44 18.4453 80.7479 18.0451C84.986 12.8789 89.2241 7.71274 93.4441 2.54658C96.2514 2.52839 99.0587 2.54658 101.884 2.54658C97.4287 7.89465 92.9913 13.2609 88.5359 18.609C93.2811 25.3395 98.0626 32.0519 102.808 38.7825C99.8013 38.7825 96.7767 38.7825 93.7701 38.7825C90.2022 33.7255 86.6342 28.6866 83.0662 23.6478C81.9433 24.9939 80.8385 26.3582 79.7156 27.6862C79.6975 31.3789 79.7156 35.0898 79.7156 38.7825C77.1981 38.7825 74.6806 38.7825 72.1631 38.7825C72.1268 26.722 72.145 14.6252 72.145 2.54658ZM104.927 2.54658C107.028 2.54658 109.147 2.54658 111.248 2.54658C115.54 8.56771 119.833 14.5706 124.125 20.5918C125.502 22.4836 126.806 24.4118 128.218 26.2673C128.327 25.4487 128.273 24.6301 128.273 23.8297C128.273 16.7353 128.273 9.64096 128.273 2.54658C130.681 2.54658 133.09 2.54658 135.499 2.54658C135.499 14.6252 135.499 26.7039 135.499 38.7825C133.416 38.7825 131.333 38.7825 129.251 38.7825C123.98 31.3789 118.71 23.9752 113.457 16.5716C113.041 16.0259 112.715 15.4074 112.19 14.9526C112.135 22.902 112.19 30.8513 112.171 38.8007C109.763 38.8007 107.336 38.8007 104.927 38.8007C104.927 26.722 104.927 14.6252 104.927 2.54658ZM140.48 2.54658C142.997 2.54658 145.515 2.54658 148.05 2.54658C148.05 8.09475 148.032 13.6247 148.069 19.1729C148.485 18.8455 148.811 18.4271 149.137 18.0087C153.357 12.8607 157.577 7.71274 161.815 2.56477C164.623 2.56477 167.43 2.56477 170.237 2.56477C165.782 7.91284 161.344 13.2791 156.889 18.6272C161.652 25.3577 166.416 32.0701 171.161 38.8007C168.154 38.8007 165.148 38.8007 162.141 38.8007C158.555 33.7619 155.005 28.7048 151.437 23.666C150.314 25.0121 149.21 26.3582 148.087 27.7043C148.069 31.3971 148.087 35.108 148.087 38.8007C145.569 38.8007 143.052 38.8007 140.534 38.8007C140.48 26.722 140.48 14.6252 140.48 2.54658ZM170.98 2.54658C173.733 2.54658 176.467 2.54658 179.22 2.54658C181.883 7.63998 184.545 12.7516 187.208 17.845C187.298 18.1906 187.57 17.8814 187.624 17.6994C190.268 12.6424 192.913 7.6036 195.557 2.54658C198.256 2.54658 200.972 2.54658 203.671 2.54658C200.103 8.9679 196.553 15.4074 192.985 21.8287C192.387 22.9748 191.681 24.0844 191.12 25.2668C191.047 29.7781 191.12 34.2894 191.083 38.7825C188.566 38.7825 186.048 38.7825 183.531 38.7825C183.513 34.2712 183.567 29.7781 183.495 25.285C181.828 22.1016 180.017 18.991 178.315 15.8258C175.87 11.4055 173.425 6.98512 170.98 2.54658ZM206.08 3.00135C207.185 2.49201 208.652 3.14687 208.923 4.36565C209.267 5.52986 208.344 6.8214 207.148 6.89416C206.062 7.03969 204.957 6.18472 204.884 5.07509C204.758 4.22013 205.283 3.32878 206.08 3.00135ZM206.46 3.38335C205.301 3.67441 204.975 5.36614 205.917 6.09377C206.786 6.87597 208.326 6.25749 208.434 5.09328C208.652 4.02003 207.493 3.01954 206.46 3.38335ZM206.134 3.8745C206.641 3.92908 207.311 3.6926 207.692 4.14736C207.927 4.49299 207.656 4.87499 207.402 5.09328C207.565 5.32976 207.71 5.54805 207.873 5.78453C207.728 5.78453 207.456 5.78453 207.33 5.78453C207.148 5.47529 206.931 5.16604 206.605 5.00233C206.587 5.257 206.569 5.52986 206.551 5.80272C206.442 5.80272 206.243 5.78453 206.134 5.78453C206.134 5.16604 206.134 4.51118 206.134 3.8745ZM206.569 4.22013C206.569 4.36565 206.569 4.6567 206.569 4.80223C206.895 4.74766 207.384 4.83861 207.311 4.34746C207.058 4.29289 206.822 4.25651 206.569 4.22013Z" fill="#131416" />
                    </svg>
                    <div class="flex items-center border border-gray-300 rounded-md p-2 space-x-2">
                        <AiOutlineSearch />
                        <input type="text" placeholder="Search" class="outline-none bg-transparent flex-grow" />
                    </div>

                </div>
                <div className='hidden md:flex'>

                    {
                        (!isLoggedIn) ? (
                            <div className='flex space-x-2'>
                                <button
                                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                                    className="flex items-center justify-center gap-2 w-36 px-4 py-2 rounded-md border border-black bg-white text-black-500 text-center font-semibold font-sans text-base leading-6">
                                    Sign In
                                </button>

                                <button className="flex items-center justify-center gap-2 w-36 px-4 py-2 rounded-md bg-[#AC1991] text-white">
                                    Join Us
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsLoggedIn(!isLoggedIn)}
                                className="flex items-center justify-center gap-2 w-36 px-4 py-2 rounded-md bg-[#AC1991] text-white"  >
                                Log Out
                            </button>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar