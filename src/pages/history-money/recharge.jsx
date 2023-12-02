import LeftSideBar from "./components/LeftSideBar";

const Recharge = () => {
    return (
        <div className="grid grid-cols-8 gap-3 mr-20 ">
            <LeftSideBar />
            <div className="flex flex-col row-start-1 row-span-7 col-start-3 col-span-6  ">
                <div className="px-3 py-4 mt-6 border-b border-gray rounded-md h-fit text-5xl mb-6">
                    LỊCH SỬ NẠP TIỀN
                </div>
                <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400 border-2">
                    <thead class="text-sm text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Ngày nạp tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Mã giao dịch
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Số tiền
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Phương thức
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                Trạng thái
                            </th>
                            <th scope="col" class="px-6 py-3 border-b-2 border-r-2">
                                #
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td class="px-6 py-4 grid-cols-6">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                            <td class="px-6 py-4">

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Recharge;