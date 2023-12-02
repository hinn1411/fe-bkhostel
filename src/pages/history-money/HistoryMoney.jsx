import LeftSideBar from "./components/LeftSideBar"

const HistoryMoney = () => {
    return (
        <div className="grid grid-cols-8 gap-3 mr-20 ">
            <LeftSideBar />
            <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6 ml-5">
                <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl">
                    NẠP TIỀN
                </div>
                <div className="px-3 py-4 mt-3 bg-gray-300 border-b border-gray rounded-md h-fit text-2xl">
                    <div>Số dư ví</div>
                    <div className="pt-10">0</div>
                </div>
                <div className="text-2xl py-3 mt-6">
                    Phương thức nạp tiền
                </div>
                <div className="px-3 py-3 bg-gray-300 border-b border-gray rounded-md h-40 text-2xl">
                </div>
                <div className="col-start-3 col-span-6 text-2xl py-3 mt-6">
                    Số tiền nạp
                </div>
                <div className="px-3 py-3 border border-gray rounded-md h-14 text-2xl">
                </div>
                <button className='justify-center items-center rounded-md px-3 py-3 mt-8 mb-16 bg-[#0000FF]'>
                    <p className='text-sm text-white text-3xl font-semibold'>Nạp Tiền</p>
                </button>
            </div>
        </div>
    )
}
export default HistoryMoney