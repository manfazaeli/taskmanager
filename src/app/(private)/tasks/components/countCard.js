import Link from "next/link";

const CountCards = ({ title, count, path, queryParams }) => {
    const getRandomTextColor=()=>{
        const colors=[
           " text-red-600",
           "text-yellow-500",
           "text-green-400",
           "text-blue-300",
           "text-indigo-200",
           "text-purple-100",
        ];
        const randomIndex=Math.floor(Math.random()*colors.length);
        return colors[randomIndex]
    }
    return (

        <Link href={{pathname:path , query:queryParams}}>
            <div className=" flex flex-col gap-5 p-5 border border-gray-300 mt-5 items-center justify-center">
                <h1 className={`${getRandomTextColor()} font-semibold`}>
                    {title}
                </h1>
                <h1 className={`${getRandomTextColor()} text-3xl`}>
                    {count}
                </h1>
            </div>
        </Link>

    );
}

export default CountCards;