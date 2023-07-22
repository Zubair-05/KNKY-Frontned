import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const Chat = () => {
  return (
    <div className='flex flex-col bg-[#fff] rounded-md p-3'>
      <div className='flex justify-between flex-wrap'>
        <div className='w-full lg:w-auto'>
          <p className='font-semibold text-xl'>Chat</p>
        </div>
        <div className='flex w-full lg:w-auto lg:flex-grow lg:justify-end items-center space-y-2 lg:space-y-0 lg:space-x-2'>
          <div className='hidden lg:flex items-center bg-[#F5F5F6] py-1 px-2 rounded-md'>
            <AiOutlineSearch className='text-gray-500' />
            <input
              type='text'
              placeholder='Search'
              className='bg-[#F5F5F6] outline-none w-full ml-2'
            />
          </div>
          <BsThreeDots className='hidden lg:flex text-gray-500' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center py-36 px-2 '>
        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.166H10.5V47.364C10.5 48.1366 11.0066 48.8183 11.7469 49.0405C15.2635 50.0949 25.1527 53.062 27.4969 53.7655C27.825 53.8635 28.175 53.8635 28.5031 53.7655C30.8472 53.062 40.7365 50.0949 44.2531 49.0405C44.9934 48.8183 45.5 48.1366 45.5 47.364C45.5 43.3075 45.5 31.166 45.5 31.166Z" fill="url(#paint0_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.4993 31.166H27.9993C27.9993 31.166 27.8295 53.839 27.9993 53.839C28.169 53.839 28.3379 53.8145 28.5024 53.7655C30.8465 53.062 40.7358 50.0949 44.2524 49.0405C44.9926 48.8183 45.4993 48.1366 45.4993 47.364C45.4993 43.3075 45.4993 31.166 45.4993 31.166Z" fill="url(#paint1_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 36.8439L10.4997 31.166C10.4997 31.166 7.43111 35.716 6.05911 37.7495C5.90511 37.9779 5.86748 38.264 5.95673 38.5239C6.04686 38.7838 6.25248 38.9859 6.51411 39.0716C9.83823 40.1514 19.6785 43.3486 22.2597 44.1869C22.6299 44.3076 23.0359 44.1685 23.2546 43.8456C24.428 42.114 27.9997 36.8439 27.9997 36.8439Z" fill="url(#paint2_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.166L28 36.8439C28 36.8439 31.5718 42.114 32.7451 43.8456C32.9639 44.1685 33.3699 44.3076 33.74 44.1869C36.3213 43.3486 46.1615 40.1514 49.4856 39.0716C49.7472 38.9859 49.9529 38.7838 50.043 38.5239C50.1323 38.264 50.0946 37.9779 49.9406 37.7495C48.5686 35.716 45.5 31.166 45.5 31.166Z" fill="url(#paint3_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7634 19.2381C23.5446 18.917 23.1395 18.7778 22.7694 18.8986C20.1899 19.736 10.347 22.9341 7.0229 24.0147C6.76127 24.0996 6.55477 24.3017 6.46552 24.5616C6.37627 24.8215 6.4139 25.1085 6.5679 25.336C7.8314 27.2102 10.4993 31.1652 10.4993 31.1652L27.9993 25.4681C27.9993 25.4681 24.8563 20.8455 23.7634 19.2381Z" fill="url(#paint4_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.4314 25.336C49.5854 25.1085 49.623 24.8215 49.5338 24.5616C49.4445 24.3017 49.238 24.0996 48.9764 24.0147C45.6523 22.9341 35.8094 19.736 33.2299 18.8986C32.8598 18.7778 32.4546 18.917 32.2359 19.2381C31.143 20.8455 28 25.4681 28 25.4681L45.5 31.1652C45.5 31.1652 48.1679 27.2102 49.4314 25.336Z" fill="url(#paint5_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.1659L28 25.4688L10.5 31.1659L28 36.8437L45.5 31.1659Z" fill="url(#paint6_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28 36.8437V25.4688L10.5 31.1659L28 36.8437Z" fill="url(#paint7_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4831 27.9818C24.1191 27.7438 23.791 27.4891 23.4996 27.2223C23.1444 26.8959 22.5905 26.9195 22.2633 27.2756C21.9369 27.6309 21.9605 28.1848 22.3166 28.5111C22.6745 28.8401 23.0779 29.1534 23.5259 29.4465C23.9301 29.7108 24.4726 29.597 24.7369 29.1928C25.0011 28.7885 24.8874 28.246 24.4831 27.9818Z" fill="url(#paint8_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7573 25.2936C21.4975 24.941 21.2778 24.5866 21.0976 24.2322C20.8788 23.8017 20.3512 23.6302 19.9207 23.849C19.4902 24.0677 19.3187 24.5954 19.5375 25.0259C19.7597 25.4616 20.0292 25.8982 20.3486 26.3314C20.6347 26.7199 21.1825 26.803 21.5718 26.5169C21.9603 26.2299 22.0435 25.6821 21.7573 25.2936Z" fill="url(#paint9_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4778 21.7233C20.4865 21.3706 20.5382 21.0285 20.6327 20.7004C20.7657 20.2366 20.497 19.751 20.0324 19.618C19.5687 19.485 19.083 19.7536 18.95 20.2183C18.8162 20.6873 18.7409 21.1764 18.7278 21.6795C18.7164 22.1625 19.0979 22.5641 19.5809 22.5755C20.0639 22.5878 20.4655 22.2063 20.4778 21.7233Z" fill="url(#paint10_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8238 18.8013C22.0487 18.593 22.3007 18.4005 22.5763 18.2264C22.9849 17.9683 23.1074 17.4275 22.8502 17.0198C22.5921 16.6112 22.0513 16.4887 21.6427 16.7459C21.2726 16.9795 20.9366 17.2377 20.6347 17.5177C20.2803 17.8458 20.2593 18.3997 20.5874 18.754C20.9156 19.1084 21.4694 19.1294 21.8238 18.8013Z" fill="url(#paint11_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0772 17.2906C25.5173 17.2092 25.9837 17.1567 26.4755 17.1366C26.9585 17.1156 27.333 16.707 27.3128 16.2249C27.2927 15.7427 26.8841 15.3674 26.4011 15.3875C25.8236 15.412 25.2758 15.4741 24.7587 15.5695C24.2845 15.6579 23.9695 16.1146 24.0578 16.5889C24.1453 17.064 24.6021 17.3781 25.0772 17.2906Z" fill="url(#paint12_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M29.638 17.2388C30.3844 17.2476 31.0791 17.2213 31.724 17.1645C32.2053 17.1216 32.5614 16.6963 32.5185 16.2151C32.4756 15.7347 32.0504 15.3786 31.5691 15.4215C30.9785 15.4731 30.3424 15.4976 29.6581 15.4888C29.1751 15.4836 28.7788 15.8712 28.7735 16.3533C28.7674 16.8363 29.155 17.2336 29.638 17.2388Z" fill="url(#paint13_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6003 16.6287C35.4666 16.3636 36.1981 16.0241 36.8106 15.6347C37.2175 15.3748 37.3382 14.8341 37.0783 14.4263C36.8193 14.0195 36.2777 13.8987 35.87 14.1586C35.3773 14.4718 34.7867 14.7413 34.0885 14.9548C33.6273 15.0966 33.3666 15.5857 33.5084 16.0477C33.6492 16.5097 34.1392 16.7696 34.6003 16.6287Z" fill="url(#paint14_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0538 13.1862C39.4668 12.3322 39.6251 11.4292 39.5849 10.5586C39.5621 10.0756 39.1518 9.70285 38.6696 9.7256C38.1875 9.74835 37.8139 10.1578 37.8366 10.64C37.8646 11.2315 37.7579 11.8448 37.4779 12.425C37.2679 12.8598 37.4499 13.384 37.8848 13.594C38.3196 13.804 38.8438 13.6211 39.0538 13.1862Z" fill="url(#paint15_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M38.4966 7.46428C37.8588 6.6024 36.9934 6.00215 36.0501 5.80878C35.5767 5.71253 35.1139 6.01703 35.0167 6.4904C34.9205 6.96378 35.2259 7.42665 35.6984 7.52378C36.2426 7.6349 36.7221 8.00853 37.0905 8.5064C37.3784 8.89403 37.927 8.9754 38.3146 8.6884C38.7031 8.40053 38.7845 7.8519 38.4966 7.46428Z" fill="url(#paint16_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0664 5.97793C28.0132 0.616803 36.218 0.963303 31.4414 5.97793H27.0664Z" fill="url(#paint17_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0664 7.33594C28.0132 12.6962 36.218 12.3506 31.4414 7.33594H27.0664Z" fill="url(#paint18_linear_3620_28882)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9873 7.54102H32.8463C33.3293 7.54102 33.7213 7.14902 33.7213 6.66602C33.7213 6.18302 33.3293 5.79102 32.8463 5.79102H26.9873C26.5052 5.79102 26.1123 6.18302 26.1123 6.66602C26.1123 7.14902 26.5052 7.54102 26.9873 7.54102Z" fill="url(#paint19_linear_3620_28882)" />
          <defs>
            <linearGradient id="paint0_linear_3620_28882" x1="10.5" y1="42.5025" x2="45.5" y2="42.5025" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CADCF0" />
              <stop offset="1" stop-color="#A4BBDB" />
            </linearGradient>
            <linearGradient id="paint1_linear_3620_28882" x1="27.924" y1="42.5025" x2="45.4993" y2="42.5025" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A4BBDB" />
              <stop offset="1" stop-color="#8DA3BE" />
            </linearGradient>
            <linearGradient id="paint2_linear_3620_28882" x1="10.6161" y1="31.159" x2="13.0619" y2="47.3407" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint3_linear_3620_28882" x1="28.0709" y1="36.7844" x2="46.5191" y2="47.3946" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint4_linear_3620_28882" x1="8.20852" y1="27.7693" x2="10.8484" y2="15.3248" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint5_linear_3620_28882" x1="32.6848" y1="18.6877" x2="33.6287" y2="34.0481" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint6_linear_3620_28882" x1="10.5" y1="31.1562" x2="45.5" y2="31.1562" gradientUnits="userSpaceOnUse">
              <stop stop-color="#CADCF0" />
              <stop offset="1" stop-color="#A4BBDB" />
            </linearGradient>
            <linearGradient id="paint7_linear_3620_28882" x1="29.792" y1="25.2141" x2="30.1691" y2="39.348" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A4BBDB" />
              <stop offset="1" stop-color="#8DA3BE" />
            </linearGradient>
            <linearGradient id="paint8_linear_3620_28882" x1="18.366" y1="5.97813" x2="35.6245" y2="26.342" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint9_linear_3620_28882" x1="18.3667" y1="5.97798" x2="35.6252" y2="26.3418" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint10_linear_3620_28882" x1="18.3664" y1="5.97852" x2="35.6249" y2="26.3424" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint11_linear_3620_28882" x1="18.3667" y1="5.97904" x2="35.6252" y2="26.3429" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint12_linear_3620_28882" x1="18.366" y1="5.97774" x2="35.6245" y2="26.3416" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint13_linear_3620_28882" x1="18.3663" y1="5.9776" x2="35.6247" y2="26.3415" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint14_linear_3620_28882" x1="18.3665" y1="5.9782" x2="35.625" y2="26.3421" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint15_linear_3620_28882" x1="18.3661" y1="5.97885" x2="35.6246" y2="26.3427" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint16_linear_3620_28882" x1="18.3664" y1="5.97853" x2="35.6249" y2="26.3424" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
            <linearGradient id="paint17_linear_3620_28882" x1="27.0664" y1="4.03193" x2="32.9245" y2="4.03193" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint18_linear_3620_28882" x1="27.0664" y1="9.28194" x2="32.9245" y2="9.28194" gradientUnits="userSpaceOnUse">
              <stop stop-color="#E9F3FC" />
              <stop offset="1" stop-color="#CADCF0" />
            </linearGradient>
            <linearGradient id="paint19_linear_3620_28882" x1="18.3668" y1="5.97827" x2="35.6253" y2="26.3421" gradientUnits="userSpaceOnUse">
              <stop stop-color="#559AFF" />
              <stop offset="1" stop-color="#2E69EF" />
            </linearGradient>
          </defs>
        </svg>
        <p className='w-[90%] max-w-[218px] text-center font-semibold text-xl'>
          Subscribe to our Creators to chat with them
        </p>
      </div>
    </div>
  );
};

export default Chat;




//Search
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M6.98706 12.9735C8.31543 12.9732 9.60551 12.5285 10.6519 11.7103L13.4127 14.471C13.7049 14.7631 14.1787 14.7631 14.4709 14.471C14.7631 14.1787 14.7631 13.7049 14.4709 13.4127L11.7101 10.6521C12.5288 9.60569 12.9738 8.31538 12.9741 6.98674C12.9741 3.6858 10.2882 1 6.98706 1C3.68595 1 1 3.6858 1 6.98674C1 10.2877 3.68595 12.9735 6.98706 12.9735ZM6.98706 2.49669C9.46346 2.49669 11.4774 4.51048 11.4774 6.98674C11.4774 9.46301 9.46346 11.4768 6.98706 11.4768C4.51066 11.4768 2.49677 9.46301 2.49677 6.98674C2.49677 4.51048 4.51066 2.49669 6.98706 2.49669Z" fill="#808386" />
</svg> */}

//Three dots
{/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M9.59967 16.0005C9.59967 17.1787 8.64455 18.1339 7.46634 18.1339C6.28813 18.1339 5.33301 17.1787 5.33301 16.0005C5.33301 14.8223 6.28813 13.8672 7.46634 13.8672C8.64455 13.8672 9.59967 14.8223 9.59967 16.0005Z" fill="#4D5053" />
            <path d="M18.133 16.0005C18.133 17.1787 17.1778 18.1339 15.9996 18.1339C14.8214 18.1339 13.8663 17.1787 13.8663 16.0005C13.8663 14.8223 14.8214 13.8672 15.9996 13.8672C17.1778 13.8672 18.133 14.8223 18.133 16.0005Z" fill="#4D5053" />
            <path d="M26.6663 16.0005C26.6663 17.1787 25.7111 18.1339 24.5329 18.1339C23.3547 18.1339 22.3996 17.1787 22.3996 16.0005C22.3996 14.8223 23.3547 13.8672 24.5329 13.8672C25.7111 13.8672 26.6663 14.8223 26.6663 16.0005Z" fill="#4D5053" />
</svg> */}

//Drop box
//  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.166H10.5V47.364C10.5 48.1366 11.0066 48.8183 11.7469 49.0405C15.2635 50.0949 25.1527 53.062 27.4969 53.7655C27.825 53.8635 28.175 53.8635 28.5031 53.7655C30.8472 53.062 40.7365 50.0949 44.2531 49.0405C44.9934 48.8183 45.5 48.1366 45.5 47.364C45.5 43.3075 45.5 31.166 45.5 31.166Z" fill="url(#paint0_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M45.4993 31.166H27.9993C27.9993 31.166 27.8295 53.839 27.9993 53.839C28.169 53.839 28.3379 53.8145 28.5024 53.7655C30.8465 53.062 40.7358 50.0949 44.2524 49.0405C44.9926 48.8183 45.4993 48.1366 45.4993 47.364C45.4993 43.3075 45.4993 31.166 45.4993 31.166Z" fill="url(#paint1_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9997 36.8439L10.4997 31.166C10.4997 31.166 7.43111 35.716 6.05911 37.7495C5.90511 37.9779 5.86748 38.264 5.95673 38.5239C6.04686 38.7838 6.25248 38.9859 6.51411 39.0716C9.83823 40.1514 19.6785 43.3486 22.2597 44.1869C22.6299 44.3076 23.0359 44.1685 23.2546 43.8456C24.428 42.114 27.9997 36.8439 27.9997 36.8439Z" fill="url(#paint2_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.166L28 36.8439C28 36.8439 31.5718 42.114 32.7451 43.8456C32.9639 44.1685 33.3699 44.3076 33.74 44.1869C36.3213 43.3486 46.1615 40.1514 49.4856 39.0716C49.7472 38.9859 49.9529 38.7838 50.043 38.5239C50.1323 38.264 50.0946 37.9779 49.9406 37.7495C48.5686 35.716 45.5 31.166 45.5 31.166Z" fill="url(#paint3_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M23.7634 19.2381C23.5446 18.917 23.1395 18.7778 22.7694 18.8986C20.1899 19.736 10.347 22.9341 7.0229 24.0147C6.76127 24.0996 6.55477 24.3017 6.46552 24.5616C6.37627 24.8215 6.4139 25.1085 6.5679 25.336C7.8314 27.2102 10.4993 31.1652 10.4993 31.1652L27.9993 25.4681C27.9993 25.4681 24.8563 20.8455 23.7634 19.2381Z" fill="url(#paint4_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M49.4314 25.336C49.5854 25.1085 49.623 24.8215 49.5338 24.5616C49.4445 24.3017 49.238 24.0996 48.9764 24.0147C45.6523 22.9341 35.8094 19.736 33.2299 18.8986C32.8598 18.7778 32.4546 18.917 32.2359 19.2381C31.143 20.8455 28 25.4681 28 25.4681L45.5 31.1652C45.5 31.1652 48.1679 27.2102 49.4314 25.336Z" fill="url(#paint5_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M45.5 31.1659L28 25.4688L10.5 31.1659L28 36.8437L45.5 31.1659Z" fill="url(#paint6_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M28 36.8437V25.4688L10.5 31.1659L28 36.8437Z" fill="url(#paint7_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M24.4831 27.9818C24.1191 27.7438 23.791 27.4891 23.4996 27.2223C23.1444 26.8959 22.5905 26.9195 22.2633 27.2756C21.9369 27.6309 21.9605 28.1848 22.3166 28.5111C22.6745 28.8401 23.0779 29.1534 23.5259 29.4465C23.9301 29.7108 24.4726 29.597 24.7369 29.1928C25.0011 28.7885 24.8874 28.246 24.4831 27.9818Z" fill="url(#paint8_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7573 25.2936C21.4975 24.941 21.2778 24.5866 21.0976 24.2322C20.8788 23.8017 20.3512 23.6302 19.9207 23.849C19.4902 24.0677 19.3187 24.5954 19.5375 25.0259C19.7597 25.4616 20.0292 25.8982 20.3486 26.3314C20.6347 26.7199 21.1825 26.803 21.5718 26.5169C21.9603 26.2299 22.0435 25.6821 21.7573 25.2936Z" fill="url(#paint9_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4778 21.7233C20.4865 21.3706 20.5382 21.0285 20.6327 20.7004C20.7657 20.2366 20.497 19.751 20.0324 19.618C19.5687 19.485 19.083 19.7536 18.95 20.2183C18.8162 20.6873 18.7409 21.1764 18.7278 21.6795C18.7164 22.1625 19.0979 22.5641 19.5809 22.5755C20.0639 22.5878 20.4655 22.2063 20.4778 21.7233Z" fill="url(#paint10_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8238 18.8013C22.0487 18.593 22.3007 18.4005 22.5763 18.2264C22.9849 17.9683 23.1074 17.4275 22.8502 17.0198C22.5921 16.6112 22.0513 16.4887 21.6427 16.7459C21.2726 16.9795 20.9366 17.2377 20.6347 17.5177C20.2803 17.8458 20.2593 18.3997 20.5874 18.754C20.9156 19.1084 21.4694 19.1294 21.8238 18.8013Z" fill="url(#paint11_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0772 17.2906C25.5173 17.2092 25.9837 17.1567 26.4755 17.1366C26.9585 17.1156 27.333 16.707 27.3128 16.2249C27.2927 15.7427 26.8841 15.3674 26.4011 15.3875C25.8236 15.412 25.2758 15.4741 24.7587 15.5695C24.2845 15.6579 23.9695 16.1146 24.0578 16.5889C24.1453 17.064 24.6021 17.3781 25.0772 17.2906Z" fill="url(#paint12_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M29.638 17.2388C30.3844 17.2476 31.0791 17.2213 31.724 17.1645C32.2053 17.1216 32.5614 16.6963 32.5185 16.2151C32.4756 15.7347 32.0504 15.3786 31.5691 15.4215C30.9785 15.4731 30.3424 15.4976 29.6581 15.4888C29.1751 15.4836 28.7788 15.8712 28.7735 16.3533C28.7674 16.8363 29.155 17.2336 29.638 17.2388Z" fill="url(#paint13_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M34.6003 16.6287C35.4666 16.3636 36.1981 16.0241 36.8106 15.6347C37.2175 15.3748 37.3382 14.8341 37.0783 14.4263C36.8193 14.0195 36.2777 13.8987 35.87 14.1586C35.3773 14.4718 34.7867 14.7413 34.0885 14.9548C33.6273 15.0966 33.3666 15.5857 33.5084 16.0477C33.6492 16.5097 34.1392 16.7696 34.6003 16.6287Z" fill="url(#paint14_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M39.0538 13.1862C39.4668 12.3322 39.6251 11.4292 39.5849 10.5586C39.5621 10.0756 39.1518 9.70285 38.6696 9.7256C38.1875 9.74835 37.8139 10.1578 37.8366 10.64C37.8646 11.2315 37.7579 11.8448 37.4779 12.425C37.2679 12.8598 37.4499 13.384 37.8848 13.594C38.3196 13.804 38.8438 13.6211 39.0538 13.1862Z" fill="url(#paint15_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M38.4966 7.46428C37.8588 6.6024 36.9934 6.00215 36.0501 5.80878C35.5767 5.71253 35.1139 6.01703 35.0167 6.4904C34.9205 6.96378 35.2259 7.42665 35.6984 7.52378C36.2426 7.6349 36.7221 8.00853 37.0905 8.5064C37.3784 8.89403 37.927 8.9754 38.3146 8.6884C38.7031 8.40053 38.7845 7.8519 38.4966 7.46428Z" fill="url(#paint16_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0664 5.97793C28.0132 0.616803 36.218 0.963303 31.4414 5.97793H27.0664Z" fill="url(#paint17_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M27.0664 7.33594C28.0132 12.6962 36.218 12.3506 31.4414 7.33594H27.0664Z" fill="url(#paint18_linear_3620_28882)" />
// <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9873 7.54102H32.8463C33.3293 7.54102 33.7213 7.14902 33.7213 6.66602C33.7213 6.18302 33.3293 5.79102 32.8463 5.79102H26.9873C26.5052 5.79102 26.1123 6.18302 26.1123 6.66602C26.1123 7.14902 26.5052 7.54102 26.9873 7.54102Z" fill="url(#paint19_linear_3620_28882)" />
// <defs>
//   <linearGradient id="paint0_linear_3620_28882" x1="10.5" y1="42.5025" x2="45.5" y2="42.5025" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#CADCF0" />
//     <stop offset="1" stop-color="#A4BBDB" />
//   </linearGradient>
//   <linearGradient id="paint1_linear_3620_28882" x1="27.924" y1="42.5025" x2="45.4993" y2="42.5025" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#A4BBDB" />
//     <stop offset="1" stop-color="#8DA3BE" />
//   </linearGradient>
//   <linearGradient id="paint2_linear_3620_28882" x1="10.6161" y1="31.159" x2="13.0619" y2="47.3407" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint3_linear_3620_28882" x1="28.0709" y1="36.7844" x2="46.5191" y2="47.3946" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint4_linear_3620_28882" x1="8.20852" y1="27.7693" x2="10.8484" y2="15.3248" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint5_linear_3620_28882" x1="32.6848" y1="18.6877" x2="33.6287" y2="34.0481" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint6_linear_3620_28882" x1="10.5" y1="31.1562" x2="45.5" y2="31.1562" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#CADCF0" />
//     <stop offset="1" stop-color="#A4BBDB" />
//   </linearGradient>
//   <linearGradient id="paint7_linear_3620_28882" x1="29.792" y1="25.2141" x2="30.1691" y2="39.348" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#A4BBDB" />
//     <stop offset="1" stop-color="#8DA3BE" />
//   </linearGradient>
//   <linearGradient id="paint8_linear_3620_28882" x1="18.366" y1="5.97813" x2="35.6245" y2="26.342" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint9_linear_3620_28882" x1="18.3667" y1="5.97798" x2="35.6252" y2="26.3418" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint10_linear_3620_28882" x1="18.3664" y1="5.97852" x2="35.6249" y2="26.3424" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint11_linear_3620_28882" x1="18.3667" y1="5.97904" x2="35.6252" y2="26.3429" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint12_linear_3620_28882" x1="18.366" y1="5.97774" x2="35.6245" y2="26.3416" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint13_linear_3620_28882" x1="18.3663" y1="5.9776" x2="35.6247" y2="26.3415" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint14_linear_3620_28882" x1="18.3665" y1="5.9782" x2="35.625" y2="26.3421" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint15_linear_3620_28882" x1="18.3661" y1="5.97885" x2="35.6246" y2="26.3427" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint16_linear_3620_28882" x1="18.3664" y1="5.97853" x2="35.6249" y2="26.3424" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
//   <linearGradient id="paint17_linear_3620_28882" x1="27.0664" y1="4.03193" x2="32.9245" y2="4.03193" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint18_linear_3620_28882" x1="27.0664" y1="9.28194" x2="32.9245" y2="9.28194" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#E9F3FC" />
//     <stop offset="1" stop-color="#CADCF0" />
//   </linearGradient>
//   <linearGradient id="paint19_linear_3620_28882" x1="18.3668" y1="5.97827" x2="35.6253" y2="26.3421" gradientUnits="userSpaceOnUse">
//     <stop stop-color="#559AFF" />
//     <stop offset="1" stop-color="#2E69EF" />
//   </linearGradient>
// </defs>
// </svg> 