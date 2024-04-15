interface CardProps {
    title:string,
    avatar?:string,
    body:string
}

import { FaUser } from "react-icons/fa"

export const Card = ({title,avatar,body}:CardProps) => {
  return (
    <div className="w-[350px] py-4 px-2  rounded-lg  bg-white ">
      <div className="card-component flex flex-col items-center justify-center gap-y-2">
      <header className="card-header flex justify-around  w-full items-center">
        <h1 className="text-center font-bold capitalize text-3xl">
            {title}
        </h1>
        <div>
           <FaUser color="black" size={'24px'}/>
        </div>
       </header>
      </div>
      <div className="body">
        <h2 className="text-sm text-justify  font-semibold">
           {
            body
           }
        </h2>
      </div>
    </div>
  )
}