import React from 'react';
import "./Calendar.css";


function Calendar(){

    return(
        <div
        id="CalendarRoot"
        className="bg-white flex flex-col pb-24 gap-12 w-full items-start rounded-[40px]"
        >
        <div className="flex flex-col gap-8 w-full items-start">
            <div className="border-solid border-[#bdbdbd] flex flex-row mb-px gap-[440px] w-full h-40 items-start pt-12 pl-16 pr-12 border-t-0 border-b border-x-0">
            <img
                src="https://file.rendit.io/n/SA8SAb2MAPIBaTZM7LAL.svg"
                alt="Group1"
                className="mt-3 w-3"
            />
            <div className="text-4xl font-sans font-bold text-[#828282] mt-px mr-2">
                December
            </div>
            <img
                src="https://file.rendit.io/n/hrbPdrJ51LRCySK0qD5G.svg"
                alt="Group"
                className="mt-3 w-3"
            />
            </div>
            <div className="flex flex-row justify-between ml-[237px] w-3/4 items-start">
            <div className="text-2xl font-sans text-[#bdbdbd]">SUN</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">MON</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">TUE</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">WED</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">THU</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">FRI</div>
            <div className="text-2xl font-sans text-[#bdbdbd]">SAT</div>
            </div>
            <div className="flex flex-row justify-between ml-[237px] w-3/4 items-start">
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                29
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                28
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                30
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                1
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                2
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                3
            </div>
            <div className="text-center text-2xl font-sans font-bold text-[#828282]">
                4
            </div>
            </div>
        </div>
        <div className="flex flex-row justify-between ml-16 w-4/5 items-start">
            <div className="flex flex-row mt-px gap-12 w-1/6 items-start">
            <div className="flex flex-col justify-between w-12 h-[786px] items-start">
                <div id="Element1" className="text-2xl font-sans text-[#828282]">
                08:00{" "}
                </div>
                <div id="Element2" className="text-2xl font-sans text-[#828282]">
                09:00{" "}
                </div>
                <div id="Element3" className="text-2xl font-sans text-[#828282]">
                10:00{" "}
                </div>
                <div id="Element4" className="text-2xl font-sans text-[#828282]">
                11:00{" "}
                </div>
                <div id="Element5" className="text-2xl font-sans text-[#828282]">
                12:00{" "}
                </div>
                <div id="Element6" className="text-2xl font-sans text-[#828282]">
                13:00{" "}
                </div>
                <div id="Element7" className="text-2xl font-sans text-[#828282]">
                14:00{" "}
                </div>
                <div id="Element8" className="text-2xl font-sans text-[#828282]">
                15:00{" "}
                </div>
                <div id="Element9" className="text-2xl font-sans text-[#828282]">
                16:00{" "}
                </div>
                <div id="Element10" className="text-2xl font-sans text-[#828282]">
                17:00{" "}
                </div>
                <div id="Element11" className="text-2xl font-sans text-[#828282]">
                18:00{" "}
                </div>
            </div>
            <div
                id="Line"
                className="border-solid border-[#e0e0e0] mt-px w-px h-[797px] border-r-2 border-l-0 border-y-0"
            />
            </div>
            <div className="flex flex-row mt-1 w-1/6 items-start">
            <div
                id="Line1"
                className="border-solid border-[#e0e0e0] mr-32 w-px h-[797px] border-r-2 border-l-0 border-y-0"
            />
            <div
                id="Line2"
                className="border-solid border-[#e0e0e0] mr-[-140px] w-px h-[797px] border-r-2 border-l-0 border-y-0"
            />
            <div className="bg-[#c9cba3] flex flex-row mt-[279px] w-full items-start rounded-lg">
                <div className="bg-[#c9cba3] flex flex-col gap-px w-full h-56 items-start pl-4 py-8 rounded-lg">
                <div className="text-3xl font-sans font-bold text-[#4f4f4f]">
                    Free
                </div>
                <div className="text-lg font-sans text-[#828282]">11:30 - 14:30</div>
                </div>
            </div>
            </div>
            <div className="flex flex-row justify-between w-1/3 items-start">
            <div className="flex flex-row mt-1 w-1/2 items-start">
                <div
                id="Line3"
                className="border-solid border-[#e0e0e0] w-px h-[797px] border-r-2 border-l-0 border-y-0"
                />
                <div className="bg-[#c9cba3] flex flex-col mt-[383px] gap-px w-full h-[313px] items-start pl-4 py-8 rounded-lg">
                <div className="text-3xl font-sans font-bold text-[#4f4f4f]">
                    Free
                </div>
                <div className="text-lg font-sans text-[#828282]">13:00 - 17:00</div>
                </div>
            </div>
            <div className="relative flex flex-row pl-px w-1/2 items-start">
                <div
                id="Line4"
                className="border-solid border-[#e0e0e0] w-px h-[797px] absolute top-1 left-0 border-r-2 border-l-0 border-y-0"
                />
                <div className="bg-[#c9cba3] relative flex flex-col mb-[577px] gap-px w-full h-56 items-start pl-4 py-8 rounded-lg">
                <div className="text-3xl font-sans font-bold text-[#4f4f4f]">
                    Free
                </div>
                <div className="text-lg font-sans text-[#828282]">08:00 - 11:00</div>
                </div>
            </div>
            <div
                id="Line5"
                className="border-solid border-[#e0e0e0] mt-1 w-px h-[797px] border-r-2 border-l-0 border-y-0"
            />
            </div>
            <div
            id="Line6"
            className="border-solid border-[#e0e0e0] mt-1 w-px h-[797px] border-r-2 border-l-0 border-y-0"
            />
        </div>
        </div>
    );
}
export default Calendar;
