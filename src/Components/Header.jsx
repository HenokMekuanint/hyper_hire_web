// Header.js
const Header = () => {
    return (
        <header className="bg-[#fff] p-4 border-[1px]  border-b-gray-300 fixed top-0 w-full z-10">
            <div className="container mx-auto flex justify-between border-b-black-500 ">
                <div className="text-white ml-14 flex items-center">
                  <div><img src={"https://www.testvalley.kr/logo/logo-new.svg"}/>
                </div>
                <div className="menu-icon cursor-pointer ml-4 mr-[4px]">
                <span className="block w-4 h-[2px] bg-green-400 mb-1"></span>
                <span className="block w-4 h-[2px] bg-green-400 mb-1"></span>
                <span className="block w-4 h-[2px] bg-green-400 "></span>
            </div>
            <div className="text-green-400">카테고리</div>
            </div>
                <div className=""> <form  className="flex items-center border border-gray-400 rounded-[6px] px-4 py-2 w-[300px]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 mr-2 text-gray-500"
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
                type="text"
                placeholder="살까말까 고민된다면 검색해보세요!"
                
                className="flex-1 focus:outline-none"
            />
        </form></div>
                <div className="flex items-center  mr-24">
                  <button>
                    <img src={"https://www.testvalley.kr/common/home-event.svg"} className="m-[4px]" alt=""/>
                  </button>
                  <img src="https://www.testvalley.kr/common/vertical-bar.svg" alt="" className="m-[4px]"/>
                  <button>로그인 / 회원가입</button></div>
            </div>
            
        </header>
    );
}

export default Header;
